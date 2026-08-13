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
        rows = list(csv.DictReader(f))
    # A ragged row means an unquoted comma somewhere — csv.DictReader parks the
    # overflow under the key None. Left alone it is silent data loss, and any
    # script that rewrites the file with DictWriter crashes *after* truncating
    # it. One had been sitting in follow-ups.csv unnoticed.
    for i, r in enumerate(rows, start=2):
        if None in r:
            errors.append(f"  {path.name} row {i}: too many fields — a value contains "
                          f"an unquoted comma. Overflow: {r[None]}")
        if any(v is None for v in r.values()):
            errors.append(f"  {path.name} row {i}: too few fields — row is short")
    return rows


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
    # Sources registered before this date predate the rule and are warned about,
    # not rejected. Move it forward only when the backlog is actually cleared.
    URL_RULE_FROM = "2026-08-10"
    sources, source_ids, no_url = [], set(), []
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

        # Every source must be reachable. Adopted from the GWC SDR method, which
        # requires a working link on every entry in its source registry — for the
        # practical reason that an unlinkable source cannot be checked, and the
        # nine sources sitting unread in this base are unread precisely because
        # nobody can open them.
        #
        # Enforced for anything added from URL_RULE_FROM onward only. Making it
        # retroactive would fail the build on 92 legacy rows and help nobody; the
        # warning below keeps them visible instead of pretending they are fine.
        # Restricted material is exempt, and has to be. A country conversation is
        # confidential by design: the raw transcript never enters this repository
        # and there is no link to give. Requiring one would force the choice
        # between breaking the build and publishing something that must not be
        # published. What is required instead is a note saying where it is held,
        # so the record is still traceable to a human who can check it.
        added = clean.get("date_added", "")
        restricted = clean.get("access", "") == "restricted"
        if restricted:
            # Same shape as the URL rule, and for the same reason: a new rule that
            # fails the build on rows written before it existed helps nobody.
            if "outside this repository" not in (r.get("notes") or "").lower():
                msg = (f"sources.csv row {i} ({sid}): restricted source with no note saying "
                       f"where the raw material is held. Say 'outside this repository' — that "
                       f"is the phrase the next person will search for.")
                if added >= URL_RULE_FROM:
                    errors.append("  " + msg)
                else:
                    warn(msg)
        elif not clean.get("url", "").startswith("http"):
            if added >= URL_RULE_FROM:
                errors.append(
                    f"  sources.csv row {i} ({sid}): no URL. Every published source added from "
                    f"{URL_RULE_FROM} must have one — if it is not online, put the file in "
                    f"/raw/ and record the filename in notes, but do not register it linkless. "
                    f"If it is confidential, set access to 'restricted'.")
            else:
                no_url.append(sid)

        # ORG dd/mm/yyyy, the SDR source-label convention. Computed rather than
        # stored so it cannot drift from the organisation and year columns.
        org = clean.get("organisation") or clean.get("title", "")[:24]
        year = (clean.get("year") or "").strip()
        clean["label"] = f"{org} {year}".strip() if year else org
        sources.append(clean)

    if no_url:
        warn(f"{len(no_url)} sources registered before {URL_RULE_FROM} carry no URL, so nobody "
             f"can check what they say. Listed in prompts/07-source-urls.md, worst first.")

    # Two sources with the same title are almost always one document registered
    # twice, which quietly inflates every strength count that touches both. It
    # happened once: a search run added a paper that was already in the registry
    # because it did not check first. If they really are distinct, give them the
    # same source_group so they count once, and the warning stops mattering.
    by_title = defaultdict(list)
    for s in sources:
        t = (s.get("title") or "").strip().lower()
        if t:
            by_title[t].append(s)
    for t, group in by_title.items():
        if len(group) > 1 and len({g.get("source_group") or g["source_id"] for g in group}) > 1:
            warn(f"sources.csv: {', '.join(g['source_id'] for g in group)} share the title "
                 f"'{group[0]['title'][:60]}' but are counted as separate sources")

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
    group_of, source_year = {}, {}
    for s in sources:
        group_of[s["source_id"]] = (s.get("source_group") or "").strip() or s["source_id"]
        source_year[s["source_id"]] = (s.get("year") or "").strip()
    undated = sorted(sid for sid, y in source_year.items() if not y[:4].isdigit())
    if undated:
        warn(f"{len(undated)} sources carry no year, so any finding resting on them cannot show "
             f"when its evidence is from: {', '.join(undated)}")

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
                            "example": (r.get("example") or "").strip(),
                            "relations": (r.get("relations") or "").strip()}
        for fid in curated:
            if fid not in groups:
                warn(f"findings.csv: '{fid}' has no evidence records — orphan row, delete it")
        if errors:
            report()
            return 1

    # ---- when the evidence is from --------------------------------------
    # A finding can group a 2007 evaluation with a 2026 country conversation and
    # read, in the present tense, as though it were all current. 126 of 162
    # findings mix years and eight span 2007 to 2026. "This has been true for
    # nineteen years" and "this is happening now" are different claims.
    #
    # The source year is authoritative, not date_collected: 342 records carry a
    # bulk-import stamp of 2026-07-17 while their sources range from 2013 to
    # 2026. Month is shown only where date_collected really is the date the
    # evidence was produced — a country conversation or a search hit — and only
    # where it agrees with the source year.
    MONTHS = ("", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

    def rec_period(r):
        """(sort key, display string) or None when the source carries no year."""
        sy = (source_year.get(r["source_id"]) or "")[:4]
        if not sy.isdigit():
            return None
        dc = (r.get("date_collected") or "")
        trust_month = (r["stream"] in ("transcript", "search")
                       and dc[:4] == sy and dc[5:7].isdigit()
                       and 1 <= int(dc[5:7]) <= 12)
        if trust_month:
            m = int(dc[5:7])
            return (sy + f"{m:02d}", f"{MONTHS[m]} {sy}")
        return (sy + "00", sy)

    def period_of(rows):
        ps = sorted(p for p in (rec_period(r) for r in rows) if p)
        if not ps:
            return {"period": "", "period_from": "", "period_to": "", "period_span": 0}
        lo, hi = ps[0], ps[-1]
        span = int(hi[0][:4]) - int(lo[0][:4])
        return {"period": lo[1] if lo[1] == hi[1] else f"{lo[1]} – {hi[1]}",
                "period_from": lo[1], "period_to": hi[1], "period_span": span}

    # Year on every published record, so the filter bar can narrow by period.
    # Same basis as the finding period: the source year, never the import stamp.
    for r in published:
        p = rec_period(r)
        r["year"] = int(p[0][:4]) if p else None

    # ---- relations between findings ----------------------------------------
    # Grouping only ever brings agreeing records together, so the base is good at
    # showing corroboration and silent about disagreement. A band 5 finding then
    # reads as a universal rule when the honest reading is "true, under
    # conditions". Two relation types, declared once in findings.csv as
    # 'contradicts:F123' or 'qualifies:F456', and shown from both sides.
    REL_TYPES = ("contradicts", "qualifies")
    relations = defaultdict(list)
    for fid, cur in curated.items():
        for token in split(cur.get("relations", "")):
            kind, _, other = token.partition(":")
            kind, other = kind.strip().lower(), other.strip()
            if kind not in REL_TYPES:
                errors.append(f"  findings.csv ({fid}): relation '{token}' must start with "
                              f"{' or '.join(REL_TYPES)}")
                continue
            if other not in groups:
                errors.append(f"  findings.csv ({fid}): relation points at '{other}', "
                              f"which is not a finding")
                continue
            if other == fid:
                errors.append(f"  findings.csv ({fid}): a finding cannot relate to itself")
                continue
            relations[fid].append({"type": kind, "finding_id": other, "direction": "out"})
            relations[other].append({"type": kind, "finding_id": fid, "direction": "in"})
    if errors:
        report()
        return 1

    findings = []
    for fid, rows in sorted(groups.items()):
        n_src = len({group_of.get(r["source_id"], r["source_id"]) for r in rows})
        n_str = len({r["stream"] for r in rows})
        n_cty = len({c for r in rows for c in r["countries"]})
        # Five bands, counted — never assigned. The old three-band scale put 81
        # of 137 findings in 'high', which is not a filter, it is a majority: a
        # claim with three sources ranked identically to one with thirteen across
        # four streams.
        #
        # Two streams only corroborate if they are also two independent sources.
        # The 2026 consultation carries records tagged 'workshop' and records
        # tagged 'sdr'; both sit in one source_group, so a finding resting on it
        # alone spans two streams while resting on one voice. Every band above 1
        # therefore requires n_src >= 2 — nothing climbs on a single source group.
        #
        # Band 5 also requires two countries. Three findings had six to eight
        # sources all from one country; that is depth in one place, not breadth,
        # and it should not outrank a claim heard in eight countries.
        if n_src >= 6 and n_str >= 2 and n_cty >= 2:
            strength = 5
        elif n_src >= 3 and n_str >= 2:
            strength = 4
        elif n_src >= 3 or (n_src >= 2 and n_str >= 2):
            strength = 3
        elif n_src >= 2:
            strength = 2
        else:
            strength = 1

        # One source group appearing under two stream labels is not corroboration,
        # it is the same voice filed twice. The source_group rule exists to stop
        # exactly this, so when it still happens the registration is wrong.
        if n_src == 1 and n_str > 1:
            warn(f"{fid}: one independent source group but {n_str} streams "
                 f"({', '.join(sorted({r['stream'] for r in rows}))}) — the same origin is "
                 f"registered under two stream labels. Fix the registration, not the band.")
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
            # Documents behind the finding, before grouping. When this exceeds
            # n_sources the finding rests on several documents that share an
            # origin — a card reading "1 source" beside five country chips looks
            # like a contradiction until the page says why.
            "n_documents": len({r["source_id"] for r in rows}),
            "n_streams": n_str,
            "relations": relations.get(fid, []),
            **period_of(rows),
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
            rank = (r.get("rank") or "").strip()
            if rank and not rank.isdigit():
                errors.append(f"  highlights.csv row {i} ({fid}): rank '{rank}' must be a number")
            hl[fid] = {"headline": (r.get("headline") or "").strip(),
                       "plain": (r.get("plain") or "").strip(),
                       "so_what": (r.get("so_what") or "").strip(),
                       # Optional. Lower numbers surface first within a theme.
                       # Left blank, the Highlights tab falls back to ordering by
                       # weight of evidence.
                       "rank": int(rank) if rank else None}
    for f in findings:
        if f["finding_id"] in hl:
            f["highlight"] = hl[f["finding_id"]]
    missing = [f["finding_id"] for f in findings
               if f["strength"] >= 4 and f["finding_id"] not in hl]
    if missing:
        warn("band 4+ findings with no plain-language highlight yet: " + ", ".join(missing))

    # ---- unmined sources ----------------------------------------------------
    # A source in the registry with no evidence record against it has been
    # listed but never read. That is a silent gap: the Sources tab makes the
    # base look broader than the evidence actually is. S086-S100 sat like this
    # for months — a contiguous block imported with the registry and never
    # extracted from, including several substantive evaluations.
    # A source marked in `notes` as deliberately not extracted is a decision, not
    # a gap — it stays in the registry as a record of what was considered and
    # ruled out. Only genuinely unread sources should warn, or the signal
    # becomes noise and stops being looked at.
    DECIDED = ("deliberately not extracted", "out of scope")
    used = {r.get("source_id") for r in evidence_rows}
    decided = {r["source_id"] for r in sources_rows
               if any(d in (r.get("notes") or "").lower() for d in DECIDED)}
    unmined = [s for s in sources
               if s["source_id"] not in used and s["source_id"] not in decided]
    if unmined:
        warn(f"{len(unmined)} sources registered but never read — neither extracted from nor "
             f"marked as a deliberate decision in notes: "
             f"{', '.join(s['source_id'] for s in unmined)}")

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
    # A record's stream must match the stream its source is registered under.
    # 163 records once said 'sdr' while their source said 'workshop', which made
    # a single workshop look like two streams and lifted findings a band they had
    # not earned. The source registration is authoritative: a workshop is a
    # workshop whatever document came out of it.
    stream_of_source = {s["source_id"]: s.get("stream", "") for s in sources}
    for i, r in enumerate(evidence_rows, start=2):
        sid, rs = (r.get("source_id") or "").strip(), (r.get("stream") or "").strip()
        ss = stream_of_source.get(sid)
        if ss and rs and rs != ss:
            errors.append(f"  evidence.csv row {i} ({r.get('id')}): stream '{rs}' but {sid} is "
                          f"registered as '{ss}'. Change one of them — a record cannot be in a "
                          f"different stream from the source it came from.")

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
    # same issue reported by six countries reads as six band-1 findings instead
    # of one band-5 finding, and the base looks weaker than the evidence warrants.
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
    # resting on exactly those two sits in band 2 when it belongs in band 1.
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
                        warn(f"{f['finding_id']}: reaches band {f['strength']} on the 2026 "
                             f"consultation plus a check-in from the same country — likely one "
                             f"voice twice, not two independent sources. Check before relying on it.")
                        break

    # ---- guidance: what the rules say, kept apart from what the evidence says
    # Deliberately NOT in sources.csv. Guidance is normative — it states what
    # should happen. This base records what did. Mixing them is what made seven
    # normative documents awkward in the source registry, where they sat with no
    # records against them looking like gaps. They are not sources of evidence
    # and must never touch a strength count.
    guidance = []
    g_path = DATA / "guidance.csv"
    if g_path.exists():
        known_f = {f["finding_id"] for f in findings}
        # Topics are multi-valued and the first one is the primary focus, which
        # is what the list sorts on. A document is rarely about only one of
        # these: the cluster simplification note is coordination, area-based and
        # transition all at once. Forcing it into one column meant listing it
        # twice, which is how the duplicate G01/G22 pair happened.
        g_topics = {"coordination", "transition", "abc"}
        g_types = {"guideline", "checklist", "faq", "template"}
        g_ids = set()
        for i, r in enumerate(read_csv(g_path), start=2):
            gid = (r.get("id") or "").strip()
            if not gid:
                continue
            if gid in g_ids:
                errors.append(f"  guidance.csv row {i}: id '{gid}' is used twice")
            g_ids.add(gid)
            topics = split(r.get("topics", ""))
            if not topics:
                errors.append(f"  guidance.csv row {i} ({gid}): topics is empty")
            for t in topics:
                if t not in g_topics:
                    errors.append(f"  guidance.csv row {i} ({gid}): topic '{t}' must be one of "
                                  f"{sorted(g_topics)}")
            doctype = (r.get("doctype") or "").strip()
            if doctype not in g_types:
                errors.append(f"  guidance.csv row {i} ({gid}): doctype '{doctype}' must be one of "
                              f"{sorted(g_types)}")
            if not (r.get("title") or "").strip():
                errors.append(f"  guidance.csv row {i} ({gid}): title is empty")
            # Every entry must be reachable. An unlinkable normative document is
            # worse than no entry: the reader cannot check it, and cannot tell
            # whether the summary is fair.
            url = (r.get("url") or "").strip()
            if not url.startswith("http"):
                errors.append(f"  guidance.csv row {i} ({gid}): url is missing. Every guidance "
                              f"entry must be findable online — drop the row instead.")
            ev = [f for f in split(r.get("evidence", "")) ]
            for f in ev:
                if f not in known_f:
                    warn(f"guidance.csv row {i} ({gid}): evidence '{f}' is not a published finding")
            guidance.append({"id": gid, "topics": topics, "doctype": doctype,
                             "title": (r.get("title") or "").strip(),
                             "organisation": (r.get("organisation") or "").strip(),
                             "year": (r.get("year") or "").strip(),
                             "url": url,
                             "summary": (r.get("summary") or "").strip(),
                             "evidence": [f for f in ev if f in known_f]})
        if errors:
            report()
            return 1
        by_topic = defaultdict(int)
        by_type = defaultdict(int)
        for g in guidance:
            for t in g["topics"]:
                by_topic[t] += 1
            by_type[g["doctype"]] += 1
        print(f"    guidance.csv: {len(guidance)} entries "
              f"({', '.join(f'{t} {by_topic[t]}' for t in sorted(g_topics))}"
              f" | {', '.join(f'{d} {by_type[d]}' for d in sorted(g_types) if by_type[d])})")
        # Say plainly where a doctype has nothing behind it rather than padding
        # the shelf with something that only half fits.
        for t in sorted(g_topics):
            for d in ("guideline", "checklist", "faq"):
                if not any(d == g["doctype"] and t in g["topics"] for g in guidance):
                    print(f"      note: no {d} found for '{t}' — a real gap, not an omission.")

    # ---- about text (editable without touching index.html) -----------------
    about_path = DATA / "about.json"
    about = json.loads(about_path.read_text(encoding="utf-8")) if about_path.exists() else None

    # Shape version, read by index.html. Bump it whenever a field the page reads
    # is renamed or removed — guidance "column" became "topics" in v2. A reader
    # holding a cached older page then sees a warning instead of empty sections.
    SCHEMA = 3

    site = {
        "about": about,
        "schema": SCHEMA,
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
        "guidance": guidance,
        "findings": findings,
        "records": published,
        "sources": sources,
    }

    out = DATA / "site.json"

    # `generated` is the one field that changes without the data changing. Left
    # alone, a rebuild on any later day produces a different file, so the CI job
    # commits and pushes on every run — and every one of those pushes was being
    # rejected, which is what filled the inbox with failure mail. Keep the old
    # date when nothing else moved, so the build is idempotent and CI has
    # genuinely nothing to commit.
    if out.exists():
        try:
            previous = json.loads(out.read_text(encoding="utf-8"))
            a = {k: v for k, v in previous.items() if k != "generated"}
            b = {k: v for k, v in site.items() if k != "generated"}
            if json.dumps(a, sort_keys=True) == json.dumps(b, sort_keys=True):
                site["generated"] = previous.get("generated", site["generated"])
        except (ValueError, OSError):
            pass  # unreadable previous build — just write the new one

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
