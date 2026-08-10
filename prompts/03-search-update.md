# 03 — Periodic search update

**Stream:** `search` · **Read `00-shared-rules.md` first.** Suggested cadence: quarterly.

**Last run: 2026-08-07.** Net result: **one source, nine records.** Two were added
(S117, S118) but S117 turned out to duplicate S015 — the run had skipped Step 1 —
and was deleted. Next run due around November 2026 — search from `date_added`
2026-08-07 forward.

**Known constraint, and the reason this stream is thin.** Web search returns these
documents readily; fetching them often fails. Domains that return nothing to an
automated fetch include `interagencystandingcommittee.org`, `reliefweb.int`,
`unicefintercluster.net`, `washcluster.net` and `icvanetwork.org`. Domains that
work include `globalprotectioncluster.org`, `nutritioncluster.net`,
`healthcluster.who.int`, `emergency.unhcr.org`, `cccmcluster.org` and `undp.org`.
Never record a claim from a search result summary — only from the document itself.
Where a document cannot be opened, list it as a fetch failure for the user to
supply, rather than extracting from its abstract.

## Task

Find material published since the last run that adds something the evidence base does not already have. Extract records for `data/evidence.csv`.

## The loop

This step runs the gap loop from the GWC SDR method — the one part of it that transfers here without adaptation:

> **identify gaps → classify them by severity → aim the search at the critical ones → update → reassess what remains**

Two passes, not the SDR's three. A third pass over the same gaps returns the same nothing; the discipline that matters is aiming, not repetition.

**Do not start searching before Step 1.** The first run of this prompt skipped it and registered a paper that was already in the base as S015, which then had to be deleted and its records retargeted.

## Step 1 — Establish what you already have, and classify the gaps

Read `data/evidence.csv`, `data/sources.csv` and `data/site.json`. Note:

- the most recent `date_added` in `sources.csv` — that is your search floor
- the full list of existing source titles — this is the duplicate check
- which countries and tags are thin or absent
- which findings sit in band 1 or 2 (one or two independent sources)
- which streams are thin. At the last count: transcript 333 records, sdr 321, workshop 19, **search 9**

Then produce a gap table before you search, classifying each gap:

| Severity | Meaning | What to do |
|---|---|---|
| **Critical** | Blocks a claim from being usable — a band 1 finding that carries real weight, or a theme with no independent evidence at all | Aim pass 1 here, and only here |
| **Important** | Materially reduces confidence — thin geographic spread, one stream carrying a whole theme | Aim pass 2 here |
| **Minor** | Worth noting, does not block anything | Record it, do not search for it |

You are searching to close classified gaps, not to reconfirm what is already at band 4. A run that returns five more sources for a band 5 finding has added nothing.

## Step 2 — Search, pass 1 at critical gaps

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

**Never record a claim from a search-result summary.** If the document cannot be opened, it is a fetch failure, not a source. List it for the user to supply.

## Step 3b — Pass 2, and the stop rule

Reassess the gap table. Which critical gaps closed? Aim a second pass at what is left, then at the important ones.

**Then stop, even if gaps remain.** State plainly:

- which gaps were resolved, and by what
- which remain, at what severity
- how the remaining gaps affect what can be claimed from this base

Do not run a third pass hoping something turns up. A run that closes one critical gap and says so is worth more than one that reports activity.

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
2. New `sources.csv` rows. **A URL is mandatory** — the build rejects a new source without one.
3. **The gap table, before and after**, with each gap marked resolved or still open at its severity. This is the most useful output of the exercise: it tells you where to direct the next country conversation.
4. **Fetch failures** — documents found but not readable, listed with their URLs so the user can supply the file.
5. Anything found that contradicts the existing evidence base. Contradictions are worth more than agreements.

Then remind the user to run prompt 04.
