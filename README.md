# ABC & Transition Evidence Explorer

Interactive map of the evidence on **Area-Based Coordination** and **Transition** in humanitarian settings, for the Global WASH Cluster.

Beta successor to [gwc-sdr-explorer](https://github.com/Global-WASH-Cluster/gwc-sdr-explorer). The difference: v1 held its data inside `index.html`, so every update meant editing code. Here the data lives in CSV files that anyone can edit, and the site rebuilds itself.

## How it works

```
data/guidance.csv ────► Guidance tab (normative, never counted as evidence)

data/evidence.csv ─┐
data/sources.csv  ─┤
data/findings.csv ─┼─► scripts/build.py ─► data/site.json ─► index.html
data/taxonomy.json ┤      (GitHub Action)
data/highlights.csv┘

data/follow-ups.csv ──► validated, never published
```

**The three layers.** A *record* is one claim from one source. A *finding* is a claim plus every record supporting it — several countries reporting the same issue is one finding, not several. A *source* is where a record came from. Strength of evidence is computed from how many independent sources sit under a finding; it is never asserted by hand.

`findings.csv` holds the statement shown for a finding that groups several records, plus one illustrative country example. Record statements are never rewritten to merge them — the country-specific detail stays intact underneath and appears when a card is expanded.

**`theme` is multi-value, with three values.** `ABC`, `Transition`, `Fundamentals`, or a combination. There is no `Both`: as a single value it matched *neither* filter.

`Fundamentals` exists because ABC and Transition are *configurations*, and much of what coordinators raise is neither — staffing, funding, IM capacity, institutional memory, counterpart turnover. The test: **would this claim still be true in a country with no area-based structure and no transition under way?** If yes, it is a fundamentals finding. This departs from the SDR framing deliberately: filing a staffing constraint under Transition makes it look like a consequence of transition when it is a standing condition transition runs into.

Theme says what a finding is *about*; `tags` say what it *bears on*.

You edit the CSVs. A GitHub Action validates them, regenerates `site.json` and `site.js`, and the published site picks it up. **Nobody edits `index.html` to change what the site says.**

**If the Action emails you that it failed,** open the run and look at the last step. If it says *permission denied* or shows a 403, the workflow token is read-only: fix it at **Settings → Actions → General → Workflow permissions → "Read and write permissions"**. The build itself almost never fails — it refuses to write and exits with a clear message naming the bad row, which shows up as a failure on the *Validate and build* step instead.

If a CSV is malformed the build fails, nothing is written, and the live site keeps serving the last good version.

## Evidence and findings

The unit of data is an **evidence record** — one claim, from one source. Records that make the same point share a `finding_id`.

Strength of evidence is **computed**, never typed in:

| Band | Condition | Findings |
|---|---|---|
| **5 · Very strong** | 6+ independent sources, across 2+ streams, in 2+ countries | 23 |
| **4 · Strong** | 3+ independent sources across 2+ streams | 25 |
| **3 · Moderate** | 3+ independent sources, or 2 across 2 streams | 33 |
| **2 · Limited** | 2 independent sources | 22 |
| **1 · Single source** | 1 source — not corroborated, not therefore wrong | 34 |

Five bands, not three. The earlier three-band scale put 81 of 137 findings in `high`, which is a majority rather than a filter: a claim with three sources ranked identically to one with thirteen across four streams.

**Band 1 is not a failing grade.** Several of the most interesting things in this base are single-source — one coordinator saying something nobody else has said yet. The band records how much corroboration exists, not how much the claim is worth.

**Independence is enforced, not assumed.** Sources sharing a `source_group` in `sources.csv` count as **one**. Three sessions of the same workshop series, or two reports drawing on one dataset, are not three independent sources — counting them as such manufactures corroboration. Leave `source_group` blank for genuinely independent sources. Nothing above band 1 can rest on a single source group, and the build warns if one source group ever appears under two stream labels.

**Band 5 also requires two countries.** Three findings had six to eight sources concentrated in one country. That is depth in one place, not breadth, and it should not outrank a claim heard in eight.

So a finding gets stronger on its own as evidence accumulates. A barrier reported in a country conversation *and* documented in an evaluation counts for more than the same point made twice in interviews — which is the whole reason evidence and findings are kept apart.

## Four data streams

| Stream | Source | Prompt |
|---|---|---|
| `transcript` | Country conversations | `prompts/01` |
| `sdr` | Documents, evaluations, studies | `prompts/02` |
| `search` | Quarterly horizon scan | `prompts/03` |
| `workshop` | Workshops and validation sessions | `prompts/02` (adapt) |

All four produce the same CSV shape. `prompts/04` then groups new records into findings — run it every time.

## The map

`data/geo.js` holds simplified country outlines, generated once from Natural Earth 110m data and committed as data. No CDN, no map library, no network call — the map works offline and from a local file, and will still work in ten years.

Only countries that have evidence are drawn in colour; the rest form the grey silhouette. Shading shows **how much** evidence exists, not how strong it is.

You only need to regenerate it if you add a country to `taxonomy.json` that has no shape. The generator needs the ISO 3166 **numeric** code for the new country mapped to its ISO3 code; ask an assistant to regenerate `geo.js` from `world-atlas` 110m and it will take a few minutes. Everything else in the repo is untouched by this.

## Deferred decisions

All five original deferred decisions are now closed. Removed the Matrix tab,
pruned the unused `markets` tag, finished the consolidation and the quote
backfill, and grouped the Findings list.

**Still open, and each needs your judgement rather than mine:**

| Item | Why it is waiting |
|---|---|
| Three unverified records — Sudan `E0429`, Colombia `E0376`, Mozambique `E0537` | No supporting passage exists in the transcript. Marked `draft`/`low`. Either you remember it happening, or they should be deleted. |
| `F261` and `F270` | Reach band 2 on the 2026 consultation plus a check-in from the same country. Probably one person counted twice; the build warns on every run. |
| Syria session 2 | Attaches to `S115`. Coordination architecture is the gap in session 1. |
| 9 sources never read | Registered but carrying no evidence record: S046–S049, S091–S094, S096. Down from 23. Seven have no URL, which is why they stalled. Listed in `prompts/08-unmined-sources.md`. The build warns every run. |
| Source URLs | 14 of 106 sources have one. The rest are listed in `prompts/07-source-urls.md`, ordered by how much evidence rests on them. Paste into the `url` column and the Sources tab links it. |
| `status` is `draft` on every record | By the schema's own definition that means nobody has checked them, which is no longer true — most have been through a tone pass, quote verification and consolidation. Either promote them honestly or change the vocabulary. |
| Quarterly search | `prompts/03`, due three months after the last source date. |

| # | Decision | Trigger |
|---|---|---|
| 3 | ~~Finish the consolidation.~~ **Done.** All seven packages complete: `capacity`, `transition-handover`, `coordination-architecture`, `information-management` + `hpc`, `funding` + `pooled-funds`, `localisation`, `government-engagement`. Base went 483 → 208 findings, singletons 82% → 44%, high-strength 41 → 80. The granularity warning no longer fires. Re-run `prompts/04` whenever it starts warning again. | — |
| 4 | ~~Finish the quote backfill.~~ **Done.** 331 of 335 transcript records carry a verifiable quote. The four blanks are deliberate and flagged — see `prompts/06`. Nine records were corrected or withheld as a result. | — |

## Confidentiality: what is published and what is not

| Field | Published? |
|---|---|
| `statement` | Yes — neutral summary |
| `quote` | **Not on the site** — stripped at build time. But `evidence.csv` is committed to a public repository, so quotes are readable on GitHub. Treat them as public: anonymise personal names to a role in square brackets, exactly as for statements. |
| `notes` | **No.** Never leaves the CSV. |
| records marked `visibility: internal` | **No.** Dropped entirely. |
| `follow-ups.csv` | Validated, never published to the site |
| `findings.csv` | Yes — written at issue level, no country-identifying detail |

A verbatim quote plus a country plus a role is enough to identify one coordinator. To show quotes on the site, remove `"quote"` from `DROP` in `scripts/build.py`.

**Open question.** Quotes exist so a record can be checked against what was actually said — four records have already been corrected or withheld because of them. But `evidence.csv` lives in a public repo, so a fully verbatim quote cannot be kept private while staying portable. Two options, not yet decided: keep quotes in `evidence.csv` and anonymise them (portable, slightly less faithful), or move them to `data/quotes.csv` in `.gitignore` (fully faithful, but they do not travel with the repo to the next maintainer). Currently doing the first.

## Views

- **Guidance** — the normative documents, filterable by topic (coordination, transition, area-based) and by document type (guideline, checklist, FAQ, template). Entries carry every topic they cover, primary focus first. Held in `data/guidance.csv`, **not** `sources.csv`. Guidance states what should happen; the rest of the site records what did. A guidance entry can never contribute to a finding's strength, and `check.mjs` asserts that wall holds.
- **About** — what this is, where the evidence comes from, what strength means, and how to read it with care. Text lives in `data/about.json`.
- **Highlights** — high-strength findings only, in plain language, with a suggested action. Text lives in `data/highlights.csv`.
- **Findings** — every finding with its computed band, above an interactive map. Click countries to filter; select several to see evidence from any of them. Click a card to see the underlying evidence records.
- **Sources** — registry with reverse citations, so you can see which sources carry the weight and which are cited by nothing

Filters apply across all views except About and Guidance: theme, type, source stream, band, level, country (multi-select), thematic tag, actor, plus full-text search.

## Updating

See **[CONTRIBUTING.md](CONTRIBUTING.md)**. Short version: edit `data/evidence.csv`, commit, done.

## Running it locally

```bash
python scripts/build.py     # validate and rebuild site.json
python -m http.server 8000  # then open http://localhost:8000
```

Opening `index.html` by double-clicking will not work — browsers block local file reads. The page tells you this if it happens.

## Publishing

1. Push to a public repository.
2. **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)`.
3. **Settings → Actions → General** → Workflow permissions → *Read and write*, so the build can commit `site.json` back.

## Confidentiality

This repository is public and git history is permanent. Raw transcripts and restricted documents never go in it. Records marked `visibility: internal` are dropped at build time and never reach the published file. Anonymisation rules are in `prompts/00-shared-rules.md`.

---

Global WASH Cluster · beta
