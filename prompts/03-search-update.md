# 03 — Periodic search update

**Stream:** `search` · **Read `00-shared-rules.md` first.** Suggested cadence: quarterly.

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

## Step 4 — Extract

Apply prompt 02's method — most search results are documents, so the document-type weighting applies. Set `stream` to `search`.

## Output

1. The CSV block, or an explicit statement that nothing met the bar.
2. New `sources.csv` rows, with URLs.
3. **A gap note:** which countries, themes and findings remain thinly evidenced after this run. This is the most useful output of the exercise — it tells you where to direct the next country conversation.
4. Anything found that contradicts the existing evidence base.

Then remind the user to run prompt 04.
