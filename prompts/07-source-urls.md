# 07 — Backfilling a source URL

**The list lives in the build, not here.** `python scripts/build.py` names every
source registered before the URL rule took effect that still has no link:

```
9 sources registered before 2026-08-10 carry no URL, so nobody can check what
they say: S038, S039, S040, S049, S050, S051, S055, S058, S066.
```

This file used to carry that list and drifted badly — it named sixteen sources
when nine were left, and the build pointed readers at it. A worklist that
overstates the backlog sends the next session looking for documents that are
already linked. Recompute, never read a snapshot.

---

## Why it matters

A source with no URL cannot be checked by anyone, including you in a year. It is
the same failure as a record with no quote: the claim survives and the means of
testing it does not. The rule applies from **2026-08-10** — every source
registered since then carries a working URL, enforced by `build.py`.

## Procedure

1. Run the build and take the IDs from the warning.
2. Work in order of how much evidence rests on each one. Records per source:

   ```python
   import csv, collections
   E = csv.DictReader(open("data/evidence.csv", encoding="utf-8"))
   S = list(csv.DictReader(open("data/sources.csv", encoding="utf-8")))
   n = collections.Counter(e["source_id"] for e in E)
   for s in sorted(S, key=lambda r: -n[r["source_id"]]):
       if not (s.get("url") or "").strip():
           print(n[s["source_id"]], s["source_id"], s["title"][:60])
   ```

   A source with no link carrying thirty records matters more than one carrying
   one, because a reader checking a strong finding lands on it first.
3. Search for the document by its exact title plus the organisation. Prefer the
   publisher's own page over an aggregator — the aggregator copy moves.
4. Paste the URL into the `url` column of `data/sources.csv`. The Sources tab
   links it automatically and `build.py` computes the citation; no code change.
5. **Check the registry before adding anything.** Searching for URLs is how
   duplicate sources surface: the round that produced this file found four
   documents registered twice, each inflating a strength count until they were
   grouped. If the document is already in `sources.csv` under another ID, give
   both rows the same `source_group` rather than adding a third.

## When blank is the right answer

Country consultations, workshop notes, internal reflections and unpublished
mission syntheses have no URL to find. Leave the column empty — the Sources tab
shows the title without a link and the citation is marked as unpublished. This is
why the warning is scoped to sources registered before the rule: the 26 later
ones with no URL are transcripts, and they are not a backlog.

Do not invent a URL, and do not link a different document that covers the same
ground. An unlinked source is an honest gap; a wrong link is a false trail.
