#!/usr/bin/env python3
"""
Build data/site.json from the CSV masters.

Run:  python scripts/build.py
CI:   .github/workflows/build.yml runs this on every push touching data/

Rules enforced here, deliberately strict:
  - every controlled value must exist in taxonomy.json
  - every source_id must exist in sources.csv
  - ids must be unique and well formed
  - visibility=internal records are DROPPED, not hidden client-side
  - the 'notes' column is never published

Exit code 1 on any error. Nothing is written, so the site keeps serving
the last good build.
"""

import csv
import json
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "data"

# Semicolon-separated. `theme` is here rather than in ENUMS deliberately: a
# single-select with a third value 'Both' meant that filtering on ABC excluded
# every cross-cutting record, which is the evidence most worth finding. A
# record that speaks to both is now 'ABC;Transition' and matches either filter.
MULTI = ("countries", "actors", "tags", "theme")
# Kept out of site.json. NOTE: this does not make them private — evidence.csv is
# committed to a public repo, so the quote column is readable on GitHub. Quotes
# must be anonymised at source (roles in brackets, not names). Remove "quote"
# from this tuple to show them on the site as well.
DROP = ("notes", "quote")
ID_RE = re.compile(r"^E\d{4}$")
FID_RE = re.compile(r"^F\d{3,4}$")
SID_RE = re.compile(r"^S\d{3}$")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

REQUIRED = ["id", "theme", "type", "statement", "level", "stream",
            "source_id", "confidence", "visibility", "status"]

# column -> taxonomy key, for single-value columns
ENUMS = {"type": "type", "level": "level", "stream": "stream",
         "confidence": "confidence", "visibility": "visibility", "status": "status"}
# column -> taxonomy key, for multi-value columns
LISTS = {"actors": "actors", "tags": "tags", "theme": "theme"}

errors, warnings = [], []


def err(row, msg):
    errors.append(f"  evidence.csv row {row}: {msg}")


def warn(msg):
    warnings.append(f"  {msg}")


def read_csv(path):
    if not path.exists():
        errors.append(f"  missing file: {path.relative_to(ROOT)}")
        return []
    with path.open(encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))


def split(value):
    return [v.strip() for v in (value or "").split(";") if v.strip()]


def allowed(taxonomy, key):
    return {item["value"] for item in taxonomy[key]}


def main():
    tax_path = DATA / "taxonomy.json"
    if not tax_path.exists():
        print(f"FATAL: {tax_path} not found")
        return 1
    taxonomy = json.loads(tax_path.read_text(encoding="utf-8"))

    sources_rows = read_csv(DATA / "sources.csv")
    evidence_rows = read_csv(DATA / "evidence.csv")
    if errors:
        report()
        return 1

    # ---- sources -----------------------------------------------------------
    sources, source_ids = [], set()
    src_types = allowed(taxonomy, "source_type")
    for i, r in enumerate(sources_rows, start=2):
        sid = (r.get("source_id") or "").strip()
        if not SID_RE.match(sid):
            errors.append(f"  sources.csv row {i}: bad source_id '{sid}' (expected S001)")
            continue
        if sid in source_ids:
            errors.append(f"  sources.csv row {i}: duplicate source_id '{sid}'")
            continue
        source_ids.add(sid)
        stype = (r.get("type") or "").strip()
        if stype and stype not in src_types:
            errors.append(f"  sources.csv row {i}: type '{stype}' not in taxonomy.source_type")
        clean = {k: (v or "").strip() for k, v in r.items() if k not in DROP and k}
        sources.append(clean)

    # ---- evidence ----------------------------------------------------------
    records, seen_ids = [], set()
    countries_ref = taxonomy.get("countries", {})
    for i, r in enumerate(evidence_rows, start=2):
        rec = {k: (v or "").strip() for k, v in r.items() if k}

        for col in REQUIRED:
            if not rec.get(col):
                err(i, f"missing required field '{col}'")

        rid = rec.get("id", "")
        if rid and not ID_RE.match(rid):
            err(i, f"bad id '{rid}' (expected E0001)")
        if rid in seen_ids:
            err(i, f"duplicate id '{rid}'")
        seen_ids.add(rid)

        fid = rec.get("finding_id", "")
        if fid and not FID_RE.match(fid):
            err(i, f"bad finding_id '{fid}' (expected F001 or F1001)")
        if not fid:
            warn(f"evidence.csv row {i} ({rid}): no finding_id — record will not be grouped. Run prompts/04.")

        for col, key in ENUMS.items():
            val = rec.get(col, "")
            if val and val not in allowed(taxonomy, key):
                err(i, f"{col}='{val}' not in taxonomy.{key}")

        for col, key in LISTS.items():
            ok = allowed(taxonomy, key)
            for val in split(rec.get(col, "")):
                if val not in ok:
                    err(i, f"{col} value '{val}' not in taxonomy.{key}")

        sid = rec.get("source_id", "")
        if sid and sid not in source_ids:
            err(i, f"source_id '{sid}' does not exist in sources.csv")

        d = rec.get("date_collected", "")
        if d:
            if not DATE_RE.match(d):
                err(i, f"date_collected '{d}' must be YYYY-MM-DD")
            else:
                try:
                    parsed = date.fromisoformat(d)
                    if parsed > date.today():
                        warn(f"evidence.csv row {i}: date_collected '{d}' is in the future")
                except ValueError:
                    err(i, f"date_collected '{d}' is not a real date")

        for c in split(rec.get("countries", "")):
            if c not in countries_ref:
                warn(f"evidence.csv row {i}: country code '{c}' not named in taxonomy.countries")

        # A global-level recommendation or context note may legitimately carry the
        # countries the evidence came from. A global-level barrier or enabler
        # attached to specific countries is usually a mis-set level.
        if (rec.get("level") == "global" and split(rec.get("countries", ""))
                and rec.get("type") in ("barrier", "enabler", "practice")):
            warn(f"evidence.csv row {i} ({rid}): level=global but countries listed")

        for col in MULTI:
            rec[col] = split(rec.get(col, ""))
        for col in DROP:
            rec.pop(col, None)

        records.append(rec)

    if errors:
        report()
        return 1

    published = [r for r in records if r.get("visibility") == "public"]
    withheld = len(records) - len(published)
    for r in published:
        r.pop("visibility", None)

    # ---- findings: strength of evidence is COMPUTED, not asserted -----------
    groups = defaultdict(list)
    for r in published:
        groups[r.get("finding_id") or f"_solo_{r['id']}"].append(r)

    # Sources sharing a source_group count ONCE. Three sessions of the same
    # workshop series, or two reports drawing on one dataset, are not three
    # independent sources — treating them as such manufactures corroboration.
    group_of = {}
    for s in sources:
        group_of[s["source_id"]] = (s.get("source_group") or "").strip() or s["source_id"]

    # ---- curated finding-level statements ----------------------------------
    # data/findings.csv holds the statement shown for a finding that groups
    # several records. Without it the build falls back to the longest record
    # statement, which is wrong once a finding covers several countries: the
    # reader sees one country's wording standing in for all of them.
    #
    # The record statements in evidence.csv are never rewritten. A merge is
    # therefore two reversible edits — a finding_id reassignment, and a row
    # here — and the country-specific detail stays intact underneath.
    curated = {}
    f_path = DATA / "findings.csv"
    if f_path.exists():
        f_types = allowed(taxonomy, "type")
        f_themes = allowed(taxonomy, "theme")
        for i, r in enumerate(read_csv(f_path), start=2):
            fid = (r.get("finding_id") or "").strip()
            if not fid:
                continue
            if not FID_RE.match(fid):
                errors.append(f"  findings.csv row {i}: bad finding_id '{fid}'")
                continue
            if fid in curated:
                errors.append(f"  findings.csv row {i}: duplicate finding_id '{fid}'")
                continue
            st = (r.get("statement") or "").strip()
            if not st:
                errors.append(f"  findings.csv row {i} ({fid}): statement is empty")
            th, ty = split(r.get("theme", "")), (r.get("type") or "").strip()
            for v in th:
                if v not in f_themes:
                    errors.append(f"  findings.csv row {i} ({fid}): theme '{v}' not in taxonomy.theme")
            if ty and ty not in f_types:
                errors.append(f"  findings.csv row {i} ({fid}): type '{ty}' not in taxonomy.type")
            curated[fid] = {"statement": st, "theme": th, "type": ty,
                            "example": (r.get("example") or "").strip()}
        for fid in curated:
            if fid not in groups:
                warn(f"findings.csv: '{fid}' has no evidence records — orphan row, delete it")
        if errors:
            report()
            return 1

    findings = []
    for fid, rows in sorted(groups.items()):
        n_src = len({group_of.get(r["source_id"], r["source_id"]) for r in rows})
        n_str = len({r["stream"] for r in rows})
        # Two streams only corroborate if they are also two independent sources.
        # The 2026 consultation carries records tagged 'workshop' and records
        # tagged 'sdr'; both sit in one source_group, so a finding resting on it
        # alone spans two streams while resting on one voice. Requiring n_src>=2
        # closes that route — nothing can reach 'high' on a single source group.
        strength = ("high" if (n_src >= 3 or (n_src >= 2 and n_str >= 2))
                    else "medium" if n_src == 2 else "low")
        primary = max(rows, key=lambda r: len(r.get("statement", "")))
        cur = curated.get(fid, {})
        # A finding drawing on more than one country needs a curated statement,
        # otherwise one country's wording is presented as the general claim.
        if len(rows) > 1 and not cur.get("statement") and len(
                {c for r in rows for c in r["countries"]}) > 1:
            warn(f"{fid}: {len(rows)} records across several countries but no row in "
                 f"findings.csv — the site is showing one record's wording as the finding")
        findings.append({
            "finding_id": fid,
            "statement": cur.get("statement") or primary["statement"],
            # Union, not the primary record's value: a finding drawing on ABC
            # evidence and Transition evidence belongs in both filters.
            "theme": cur.get("theme") or sorted({t for r in rows for t in r["theme"]}),
            "example": cur.get("example", ""),
            "type": cur.get("type") or primary["type"],
            "strength": strength,
            "n_records": len(rows),
            "n_sources": n_src,
            "n_streams": n_str,
            "streams": sorted({r["stream"] for r in rows}),
            "countries": sorted({c for r in rows for c in r["countries"]}),
            "tags": sorted({t for r in rows for t in r["tags"]}),
            "actors": sorted({a for r in rows for a in r["actors"]}),
            "record_ids": [r["id"] for r in rows],
            "unmerged": fid.startswith("_solo_"),
        })

    # ---- follow-ups: validated, never published ----------------------------
    # Commitments made during country conversations. Tracked here so they are
    # not lost, but deliberately kept out of site.json — they are not evidence.
    fu_path = DATA / "follow-ups.csv"
    if fu_path.exists():
        fu_status = {"open", "in-progress", "done", "dropped"}
        fu_ids = set()
        for i, r in enumerate(read_csv(fu_path), start=2):
            fid = (r.get("id") or "").strip()
            if not re.match(r"^FU\d{3}$", fid):
                errors.append(f"  follow-ups.csv row {i}: bad id '{fid}' (expected FU001)")
            if fid in fu_ids:
                errors.append(f"  follow-ups.csv row {i}: duplicate id '{fid}'")
            fu_ids.add(fid)
            st = (r.get("status") or "").strip()
            if st not in fu_status:
                errors.append(f"  follow-ups.csv row {i}: status '{st}' must be one of {sorted(fu_status)}")
            sid = (r.get("source_id") or "").strip()
            if sid and sid not in source_ids:
                errors.append(f"  follow-ups.csv row {i}: source_id '{sid}' does not exist in sources.csv")
            for c in split(r.get("country", "")):
                if c not in countries_ref:
                    warn(f"follow-ups.csv row {i}: country code '{c}' not named in taxonomy.countries")
        open_n = sum(1 for r in read_csv(fu_path) if (r.get("status") or "").strip() == "open")
        if errors:
            report()
            return 1
        print(f"    follow-ups.csv: {len(fu_ids)} tracked, {open_n} open (not published)")

    # ---- plain-language highlights (optional, curated by hand) -------------
    # data/highlights.csv maps a finding_id to a short headline and one or two
    # sentences a non-specialist can read. Only used for the Highlights view.
    hl = {}
    hl_path = DATA / "highlights.csv"
    if hl_path.exists():
        known = {f["finding_id"] for f in findings}
        for i, r in enumerate(read_csv(hl_path), start=2):
            fid = (r.get("finding_id") or "").strip()
            if not fid:
                continue
            if fid not in known:
                warn(f"highlights.csv row {i}: finding_id '{fid}' is not a published finding")
                continue
            hl[fid] = {"headline": (r.get("headline") or "").strip(),
                       "plain": (r.get("plain") or "").strip(),
                       "so_what": (r.get("so_what") or "").strip()}
    for f in findings:
        if f["finding_id"] in hl:
            f["highlight"] = hl[f["finding_id"]]
    missing = [f["finding_id"] for f in findings
               if f["strength"] == "high" and f["finding_id"] not in hl]
    if missing:
        warn("high-strength findings with no plain-language highlight yet: " + ", ".join(missing))

    # ---- verifiability guard ------------------------------------------------
    # A transcript record with no quote cannot be checked against its source by
    # anyone who was not on the call. That is how an inference gets recorded as
    # evidence: one Haiti record asserted a conclusion the speaker never drew,
    # and it survived because there was nothing to check it against. Quotes are
    # stripped at build time (see DROP), so capturing them costs nothing public.
    # evidence.csv is committed to a public repository. DROP keeps quotes out of
    # site.json, but not out of git — anyone can read the CSV on GitHub. So the
    # anonymisation rule applies to the quote column exactly as it does to
    # statements: no personal names. Replace with the role in square brackets.
    NAMEY = re.compile(r"\b(?:Mr|Ms|Mrs|Dr)\.?\s+[A-Z][a-z]+", re.U)
    for i, r in enumerate(evidence_rows, start=2):
        q = (r.get("quote") or "").strip()
        if q and NAMEY.search(q):
            warn(f"evidence.csv row {i} ({r.get('id')}): quote appears to name a person. "
                 f"evidence.csv is public — use the role in brackets instead.")

    tr = [r for r in evidence_rows if (r.get("stream") or "").strip() == "transcript"]
    noq = [r for r in tr if not (r.get("quote") or "").strip()]
    if noq:
        by_src = defaultdict(int)
        for r in noq:
            by_src[(r.get("source_id") or "?").strip()] += 1
        worst = ", ".join(f"{k}:{v}" for k, v in sorted(by_src.items(), key=lambda x: -x[1])[:6])
        warn(f"verifiability: {len(noq)} of {len(tr)} transcript records carry no quote, so "
             f"nothing anchors them to what was actually said. Worst sources — {worst}")

    # ---- granularity guard --------------------------------------------------
    # A finding is a claim plus everything supporting it. If most findings hold
    # a single record, the finding layer has drifted down to record level: the
    # same issue reported by six countries reads as six 'low' findings instead
    # of one 'high' one, and the base looks weaker than the evidence warrants.
    # Extraction causes this quietly, because each batch merges only within
    # itself. Run prompts/04 across the whole base when this warns.
    solo = sum(1 for f in findings if f["n_records"] == 1)
    if findings and solo / len(findings) > 0.50:
        warn(f"granularity: {solo} of {len(findings)} findings ({solo/len(findings):.0%}) "
             f"hold one record. Consolidation is overdue — run prompts/04 across the "
             f"whole base, tag by tag, not just over the newest rows.")

    # ---- independence guard -------------------------------------------------
    # source_group already collapses the 2026 consultation into one source. What
    # it cannot see is that a workshop claim attributed to country X and country
    # X's own check-in are frequently the same person speaking twice. A finding
    # resting on exactly those two is 'medium' when it should be 'low'.
    consult = {s["source_id"] for s in sources
               if (s.get("source_group") or "").strip() == "gwc-consult-2026"}
    if consult:
        for f in findings:
            if f["n_sources"] != 2:
                continue
            sids = {r["source_id"] for r in published if r["id"] in set(f["record_ids"])}
            if not (sids & consult):
                continue
            others = sids - consult
            shared = {c for r in published if r["id"] in set(f["record_ids"])
                      and r["source_id"] in consult for c in r["countries"]}
            for r in published:
                if r["id"] in set(f["record_ids"]) and r["source_id"] in others:
                    if shared & set(r["countries"]):
                        warn(f"{f['finding_id']}: rated medium on the 2026 consultation plus "
                             f"a check-in from the same country — likely one voice twice, "
                             f"not two independent sources. Check before relying on it.")
                        break

    # ---- about text (editable without touching index.html) -----------------
    about_path = DATA / "about.json"
    about = json.loads(about_path.read_text(encoding="utf-8")) if about_path.exists() else None

    site = {
        "about": about,
        "generated": date.today().isoformat(),
        "taxonomy_version": taxonomy.get("version"),
        "stats": {
            "records": len(published),
            "findings": len(findings),
            "sources": len(sources),
            "countries": len({c for r in published for c in r["countries"]}),
            "withheld_internal": withheld,
        },
        "taxonomy": taxonomy,
        "findings": findings,
        "records": published,
        "sources": sources,
    }

    out = DATA / "site.json"
    payload = json.dumps(site, ensure_ascii=False, indent=1)
    out.write_text(payload, encoding="utf-8")

    # Same data as a plain script, so index.html also works when opened
    # directly from disk (browsers block fetch() on file:// but allow
    # <script src>). The published site uses site.json; this is the fallback.
    (DATA / "site.js").write_text("window.SITE_DATA = " + payload + ";\n", encoding="utf-8")

    report()
    s = site["stats"]
    print(f"OK  {s['records']} records -> {s['findings']} findings, "
          f"{s['sources']} sources, {s['countries']} countries"
          + (f", {withheld} withheld (internal)" if withheld else ""))
    print(f"    wrote {out.relative_to(ROOT)}")
    return 0


def report():
    if warnings:
        print(f"WARNINGS ({len(warnings)}):")
        print("\n".join(warnings))
    if errors:
        print(f"\nBUILD FAILED — {len(errors)} error(s):")
        print("\n".join(errors))
        print("\nNothing was written. Fix the rows above and commit again.")


if __name__ == "__main__":
    sys.exit(main())
