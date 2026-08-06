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

**`theme` is multi-value.** `ABC`, `Transition`, or `ABC;Transition`. There is no `Both`: as a single third value it matched *neither* filter, so the cross-cutting evidence was unreachable from either side. 79 findings now appear under both.

You edit the CSVs. A GitHub Action validates them, regenerates `site.json`, and the published site picks it up. **Nobody edits `index.html` to change what the site says.**

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
| 1 | **Remove the Matrix tab.** It is useful now for spotting where evidence is thick and thin while the base is being built. It is not useful to a reader once the base is complete. | After the SDR, workshop material and all country transcripts are in |
| 2 | **Prune unused themes from `taxonomy.json`.** Tags that no evidence ever lands on are clutter in every filter. Currently unused: `advocacy`, `inclusion`, `markets`. | Same point — judge once, on the full base |
| 3 | **Finish the consolidation.** `capacity` is done (122 findings → 41). The build warns while more than half of findings hold a single record. Remaining work packages, largest first: `transition-handover`, `coordination-architecture`, `information-management`, `government-engagement`, `funding` + `pooled-funds`, `localisation`, `hpc`. Method is in `prompts/04`. | Ongoing — a tag at a time |
| 4 | **Group the Findings tab by tag.** Even consolidated, the list is long enough to want a top level. The tags already work as one; adding a new field is probably unnecessary. | After consolidation |

## Confidentiality: what is published and what is not

| Field | Published? |
|---|---|
| `statement` | Yes — neutral summary |
| `quote` | **No.** Stripped at build time. Held in `evidence.csv` for internal analysis only. |
| `notes` | **No.** Never leaves the CSV. |
| records marked `visibility: internal` | **No.** Dropped entirely. |
| `follow-ups.csv` | Validated, never published to the site |
| `findings.csv` | Yes — written at issue level, no country-identifying detail |

A verbatim quote plus a country plus a role is enough to identify one coordinator. To publish quotes anyway, remove `"quote"` from `DROP` in `scripts/build.py`.

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
