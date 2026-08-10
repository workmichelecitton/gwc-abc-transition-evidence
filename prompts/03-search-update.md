# 03 — Periodic search update

**Stream:** `search` · **Read `00-shared-rules.md` first.** Suggested cadence: quarterly.

**Last run: 2026-08-07.** Two sources added (S117, S118), 16 records. Next run due
around November 2026 — search from `date_added` 2026-08-07 forward.

## Task

Find material published since the last run that adds something the evidence base does not already have. Extract records for `data/evidence.csv`.

## Step 1 — Establish what you already have

Before searching, read `data/evidence.csv` and `data/sources.csv`. Note:

- the most recent `date_added` in `sources.csv` — that is your search floor
- which countries and tags are thin or absent
- which findings currently rest on a single source

You are searching to fill those gaps, not to reconfirm what is already well established. A search update that returns five more sources for the best-supported finding has added nothing.

## Step 2 — Search

Cover these lines, adapting the wording:

**Area-Based Coordination**
- area-based coordination humanitarian evaluation
- area-based approach humanitarian coordination [year]
- geographic coordination model humanitarian response
- decentralised humanitarian coordination local authorities

**Transition**
- humanitarian transition national systems handover WASH
- humanitarian development nexus WASH transition
- cluster deactivation transition coordination
- humanitarian exit strategy service delivery handover

**Sources worth prioritising:** ALNAP, IASC, OCHA, Global Clusters, UNICEF and WHO evaluation offices, ODI/HPG, IFRC, World Bank fragility work, sector journals, and national cluster documentation.

Run the searches in the working language of the region where relevant — French, Spanish and Arabic material on these topics is systematically under-represented in English-language reviews, and that gap is visible in the current evidence base.

## Step 3 — Filter hard

Include only material that is:

- published or updated since the last run
- about coordination *arrangements*, not WASH technical programming
- evidence-bearing — an evaluation, study, or documented case

Exclude: news coverage, press releases, project announcements, funding appeals, and anything that only restates existing guidance.

Most quarters this will yield very few records. That is the correct result and you should report it as such rather than lowering the bar to produce volume.

## What the first run found, and why it mattered

Two sources from roughly a dozen candidates. Everything else was guidance restating
guidance, event announcements or news.

- **An operational INGO position paper on ABC.** Valuable because it is written from
  outside the cluster system rather than by it — almost every other source in this
  base is written by or for cluster actors. It named the double-hatting conflict of
  interest, which the base had only as a workload problem.
- **A health cluster account of a country transition**, reporting a national NGO
  partner. Valuable because it is a *different sector* in a country already in the
  base, so it corroborates without the independence problem that a second WASH
  source from the same country would carry.

That is the pattern worth repeating: **search for sources that are independent of
the cluster system, or from another sector, rather than more of the same.** Twelve
existing findings gained a fourth stream from this run, several reaching four
independent source types. That is what the search stream is for — not volume.

## Step 4 — Extract

Apply prompt 02's method — most search results are documents, so the document-type weighting applies. Set `stream` to `search`.

## Output

1. The CSV block, or an explicit statement that nothing met the bar.
2. New `sources.csv` rows, with URLs.
3. **A gap note:** which countries, themes and findings remain thinly evidenced after this run. This is the most useful output of the exercise — it tells you where to direct the next country conversation.
4. Anything found that contradicts the existing evidence base.

Then remind the user to run prompt 04.
