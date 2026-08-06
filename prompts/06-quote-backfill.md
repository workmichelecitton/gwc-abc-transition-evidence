# 06 — Quote backfill

**Status: 4 of 14 transcripts done. 195 records still carry no quote.**

## Why this exists

A transcript record with no `quote` cannot be checked against its source by anyone
who was not on the call. That is how an inference becomes evidence.

Two records have already been caught this way, both by reading the recording back:

- **Haiti E0513** — the statement ended "…so the absence of the post shows up as a
  coordination failing rather than a resourcing one". The speaker never drew that
  conclusion; he said only that the cause was obvious. Now withheld, because one
  WASH coordinator covers Haiti and the audit referred to is live.
- **Sudan E0429** — asserted that a written explanation of the cluster's concerns
  with the pooled fund prioritisation did not change the approach. No supporting
  passage exists. Marked draft/low pending a check.
- **Colombia E0399** — said a partner agency challenged the methodology "as reflecting
  poverty rather than humanitarian need". The source records disagreement with the
  calculation, nothing about poverty. Clause removed, rest kept.
- **Colombia E0376** — asserted there has been no dedicated IM post this year, previously
  supported by the refugee coordination platform. The transcript discusses IM support
  being provided, not withdrawn. Marked draft/low.

Four in the first three transcripts, roughly one in twenty records. Assume the same
rate holds and budget for it: the pass is a correction exercise, not a clerical one.

Quotes are stripped from `site.json` at build time (`DROP` in `build.py`) — but
**that does not make them private.** `evidence.csv` is committed to a public
repository, so anyone can read the quote column on GitHub.

So anonymise as you write: replace personal names with the role in square
brackets — `[the IM officer]`, `[the focal point]`. Organisation names are fine
where they do not identify one individual. The build warns on obvious cases but
cannot catch a bare first name.

## Remaining

| Source | Country | Records | Drive file ID |
|---|---|---|---|
| S012 | Myanmar | 22 | (two sessions) |
| S110 | Mozambique | 22 | `11yJVtARQOv67hXRu7YXn9GqfMs3qBqGs` |
| S114 | South Sudan | 22 | `1LFb1UZynhadK2Zsv3aZiDMmEMmOqD5TE` |
| S108 | Bangladesh | 20 | `1bENcGRpkTMaltGifF_ggzUPO5PUck5tK` |
| S111 | Ethiopia | 20 | `1MWia7SNLNcqg9Czz3U0-je57Y4AKULsn` |
| S011 | Somalia | 18 | — |
| S105 | Nigeria | 18 | `1AKuA6X6-WgnXUPJAQ6J5CzJZWdRt6Hlw` |
| S112 | Burkina Faso | 18 | `15t1C5Y5MsldYX7dBqkzxgolOk7QDl2fx` |
| S113 | Mali | 17 | `1l6YjJeZC1bch00MLO8ls2BL7hEp7pTUs` |
| S106 | Niger | 16 | `1qX6mcFe04sXIrziYb1hduz6dAksPUzt-` |

Done: **S109 Haiti** (17), **S104 Sudan** (31), **S103 Colombia** (28), **S107 Lebanon** (23).

Lebanon produced no corrections — the first clean transcript.

## Method — one source per pass

Reading a 57KB transcript end to end burns effort on meeting noise. Work backwards
from the records instead.

1. List the source's records with no quote:
   `[r for r in evidence.csv if r.source_id == SID and not r.quote]`
2. Fetch the transcript. Strip speaker-timestamp lines and one-word turns
   ("Yeah", "Mhm", "Okay") — roughly half the file.
3. For each record, build a keyword pattern from its statement and search the
   cleaned text with one line of context either side. Most records resolve in one hit.
4. Read the surrounding passage properly before writing the quote. **Verbatim,
   including the disfluencies.** Trim with `…` rather than paraphrasing — a tidied
   quote is no longer a check on anything.
5. **Where no passage supports the record, do not invent one.** Set `status: draft`,
   `confidence: low`, and write what you looked for in `notes`. Report it. This step
   only has value if it is allowed to fail.
6. **Long turns defeat a line-based search.** Colombia's opening turn runs several
   hundred words, so every keyword matched the same block. Split turns into sentences
   first, carrying the speaker label forward; searching 341 segments works where
   searching 86 turns did not.
7. Watch for numbers that collide. Sudan's "65, 70 partners" sits close to "65
   million" in funding — a keyword search finds the wrong one.
8. Build, then commit per source so a bad pass can be reverted alone.

## When a record turns out to be identifying

Confidentiality is judged again here, because the quote makes it concrete. If the
country has one coordinator, the event is live, and the remarks are self-critical,
set `visibility: internal` and say why in `notes`. Check first whether the finding
keeps other records — if it does, nothing is lost.
