# Remaining extraction batches

Working list for finishing the evidence base. Twelve country check-ins and one
workshop document remain. Do them **two at a time**, building and checking after
each pair — long unbroken runs are where extraction errors creep in.

## Procedure per batch

1. Read `prompts/00-shared-rules.md` and `prompts/01-transcript-extraction.md`.
2. Read the transcript from Google Drive (file IDs below).
3. Extract evidence records → append to `data/evidence.csv`; add the source row to `data/sources.csv`.
4. Extract commitments → append to `data/follow-ups.csv`.
5. Run `prompts/04-merge-and-dedupe.md` across the whole base, not just the new rows.
6. `python scripts/build.py` — must exit 0.
7. Write plain-language rows in `data/highlights.csv` for any finding that has newly reached high strength (the build warns you which).
8. Commit and push.

## Transcripts still to do

Folder: **Country Checkin June-July** (Drive ID `1VpBRYqtCujTXIzuoDoOQ2iioc-5AaMu1`)

| Batch | Country | ISO3 | Drive file ID | Note |
|---|---|---|---|---|
| 1 | Colombia | COL | `1lQ7CR5Kxh2AKyn7sL98IR-MxNidY3dx9` | **In Spanish.** Named in the Transition SDR as a live transition context. Statements must be written in English. |
| 1 | Sudan | SDN | `1aDO43D9LwNHXthe5yf464P13iPemm_W7` | Already appears in the ABC SDR via workshop evidence — see independence warning below |
| 2 | Nigeria | NGA | `1AKuA6X6-WgnXUPJAQ6J5CzJZWdRt6Hlw` | Named in the Transition SDR as a live transition context |
| 2 | Cameroon-adjacent: Niger | NER | `1qX6mcFe04sXIrziYb1hduz6dAksPUzt-` | Heavily cited in the Transition SDR (S33; S34) — check independence |
| 3 | Lebanon | LBN | `1VE8Q__LsIcJzAUojsJp41R5z2W-aQCyb` | Cited in Transition SDR on willingness constraints |
| 3 | Bangladesh | BGD | `1bENcGRpkTMaltGifF_ggzUPO5PUck5tK` | Cox's Bazar evidence already in the SDR via KIIs |
| 4 | Haiti | HTI | `1W95-_uIR8D2ZkU3sgeHRbuuMmp-a-s6Y` | |
| 4 | Mozambique | MOZ | `11yJVtARQOv67hXRu7YXn9GqfMs3qBqGs` | Cited in the SDR via KIIs |
| 5 | Ethiopia | ETH | `1MWia7SNLNcqg9Czz3U0-je57Y4AKULsn` | |
| 5 | Burkina Faso | BFA | `15t1C5Y5MsldYX7dBqkzxgolOk7QDl2fx` | Cited in the SDR via KIIs |
| 6 | Mali | MLI | `1l6YjJeZC1bch00MLO8ls2BL7hEp7pTUs` | |
| 6 | South Sudan | SSD | `1LFb1UZynhadK2Zsv3aZiDMmEMmOqD5TE` | |

Already extracted: Somalia (S011), Myanmar parts 1 and 2 (S012).

## Independence warning — read before merging

Several of these countries already appear in the evidence base through the 2026
consultation sources. Their coordinators took part in:

- **ABC workshop (S045)** — Afghanistan, Bangladesh, DRC, Kenya, Madagascar, Palestine, Sudan, Syria, Ukraine, Yemen
- **Transition clinic (S084)** — Iraq, Libya, Honduras, Haiti, Kenya, Niger, Cameroon, Lebanon, Ukraine
- **Transition KIIs (S085)** — Niger, Nigeria, Iraq, Bangladesh, Mozambique, Burkina Faso, CAR, Syria, Honduras

**A workshop claim attributed to country X is not independent of country X's own
check-in transcript.** It is one person speaking twice. Do not merge those into a
single finding — it manufactures corroboration and the build cannot detect it.

Somalia and Myanmar were safe because neither appears in those lists. Sudan,
Niger, Lebanon, Bangladesh, Haiti, Mozambique and Burkina Faso are **not** safe.
Check the list before every merge.

## Also outstanding

- **Workshop briefing note** — registered as S045 / S083 but never extracted as a document. Use `prompts/02`. Expect 20–30 records.
- **Deferred decisions** in README — remove the Matrix tab; prune `advocacy`, `inclusion`, `markets` if still unused once all transcripts are in.
- **Quarterly search** — `prompts/03`, first run due three months after the last source date.
