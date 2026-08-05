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

MULTI = ("countries", "actors", "tags")     # semicolon-separated columns
# Never published. Verbatim quotes are kept in evidence.csv for internal
# analysis but stripped here: a quote plus a country plus a role is enough to
# identify a single coordinator. Remove "quote" from this tuple to publish them.
DROP = ("notes", "quote")
ID_RE = re.compile(r"^E\d{4}$")
FID_RE = re.compile(r"^F\d{3}$")
SID_RE = re.compile(r"^S\d{3}$")
DATE_RE = re.compile(r"^\d{4}-\d{2}-\d{2}$")

REQUIRED = ["id", "theme", "type", "statement", "level", "stream",
            "source_id", "confidence", "visibility", "status"]

# column -> taxonomy key, for single-value columns
ENUMS = {"theme": "theme", "type": "type", "level": "level", "stream": "stream",
         "confidence": "confidence", "visibility": "visibility", "status": "status"}
# column -> taxonomy key, for multi-value columns
LISTS = {"actors": "actors", "tags": "tags"}

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
            err(i, f"bad finding_id '{fid}' (expected F001)")
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

    findings = []
    for fid, rows in sorted(groups.items()):
        n_src = len({group_of.get(r["source_id"], r["source_id"]) for r in rows})
        n_str = len({r["stream"] for r in rows})
        strength = "high" if (n_src >= 3 or n_str >= 2) else "medium" if n_src == 2 else "low"
        primary = max(rows, key=lambda r: len(r.get("statement", "")))
        findings.append({
            "finding_id": fid,
            "statement": primary["statement"],
            "theme": primary["theme"],
            "type": primary["type"],
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
