# ABC & Transition Evidence Explorer

Interactive map of the evidence on **Area-Based Coordination** and **Transition** in humanitarian settings, for the Global WASH Cluster.

Beta successor to [gwc-sdr-explorer](https://github.com/Global-WASH-Cluster/gwc-sdr-explorer). The difference: v1 held its data inside `index.html`, so every update meant editing code. Here the data lives in CSV files that anyone can edit, and the site rebuilds itself.

## How it works

```
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

| Strength | Condition |
|---|---|
| high | 3+ independent sources, or 2+ different streams |
| medium | 2 independent sources |
| low | 1 source |

**Independence is enforced, not assumed.** Sources sharing a `source_group` in `sources.csv` count as **one**. Three sessions of the same workshop series, or two reports drawing on one dataset, are not three independent sources — counting them as such manufactures corroboration. Leave `source_group` blank for genuinely independent sources.

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

## Deferred decisions — revisit after the full run

Do not lose these. Both are deliberate "not yet", not oversights.

| # | Decision | Trigger |
|---|---|---|
| 1 | **Remove the Matrix tab.** It is useful now for spotting where evidence is thick and thin while the base is being built. It is not useful to a reader once the base is complete. | **Trigger met** — the SDR, workshop material and all sixteen transcripts are in |
| 2 | **Prune unused tags from `taxonomy.json`.** Only `markets` is now genuinely unused — `advocacy` and `inclusion` have picked up evidence since. One line to delete. | Ready now |
| 3 | **Finish the consolidation.** Done: `capacity` (122 → 41), `transition-handover` (146 → 72), `coordination-architecture` (128 → 82). Base is down from 483 findings to 301 and singletons from 82% to 69%. Remaining packages: `information-management`, `government-engagement`, `funding` + `pooled-funds`, `localisation`, `hpc` — all smaller, and each now overlaps heavily with work already done. Method is in `prompts/04`. | Ongoing — a tag at a time |
| 4 | ~~Finish the quote backfill.~~ **Done.** 331 of 335 transcript records carry a verifiable quote. The four blanks are deliberate and flagged — see `prompts/06`. Nine records were corrected or withheld as a result. | — |
| 5 | **Group the Findings tab by tag.** Even consolidated, the list is long enough to want a top level. The tags already work as one; adding a new field is probably unnecessary. | After consolidation |

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

- **About** — what this is, where the evidence comes from, what strength means, and how to read it with care. Text lives in `data/about.json`.
- **Highlights** — high-strength findings only, in plain language, with a suggested action. Text lives in `data/highlights.csv`.
- **Findings** — every finding with its computed strength, above an interactive map. Click countries to filter; select several to see evidence from any of them. Click a card to see the underlying evidence records.
- **Matrix** — theme × type, showing where the evidence is thick and where it is thin *(see deferred decisions)*
- **Sources** — registry with reverse citations, so you can see which sources carry the weight and which are cited by nothing

Filters apply across all views except About: theme, type, source stream, strength, level, country (multi-select), thematic tag, actor, plus full-text search.

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
