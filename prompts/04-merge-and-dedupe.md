# 04 — Assign finding IDs (merge and dedupe)

**Run this after every extraction, before committing.** This is the step that turns a list into an evidence base.

## Why this matters

The site does not display the `confidence` column. It computes strength of evidence per `finding_id`:

- **high** — three or more independent sources, **or** two or more different streams
- **medium** — two independent sources
- **low** — one source

So `finding_id` is not an organising convenience. It is the measurement. Group two records that do not really say the same thing and you manufacture corroboration that does not exist. Fail to group two that do, and real corroboration is invisible.

Both errors are silent. Nothing in the build will catch them. This step is where the integrity of the whole site lives.

## Task

Read `data/evidence.csv`. Assign a `finding_id` to every record that has none.

## Method

1. Take each unassigned record.
2. Compare it against existing findings — the statements already carrying an `F###`.
3. Assign the existing `finding_id` **only if the two records make the same claim**. Otherwise create the next free `F###`.

## The test for "same claim"

Two records belong together when a reader would say *"yes, these are two sources for the same point."*

They do **not** belong together merely because they share a topic.

| Record A | Record B | Same finding? |
|---|---|---|
| "Donor funding cycles are shorter than the time needed to hand over to national systems." | "Transition planning begins only once funding is already falling." | **No.** Both about funding and transition, but one is about cycle length, the other about timing of planning. Two findings. |
| "Area teams' outputs never fed into national planning." | "Sector-based coordination structures do not map onto area-based working, creating duplicate reporting lines." | **Yes.** Both describe area-based work sitting outside the formal architecture. |
| "Local government planning mandates make ABC easier." | "Pre-existing decentralised planning structures predict ABC taking hold." | **Yes.** Same claim, different phrasing. |

When genuinely unsure, **keep them separate**. An under-merged base understates strength, which is a conservative and recoverable error. An over-merged base overstates it, which is the failure that discredits the product.

## Independence check

Before treating grouped records as corroboration, verify the sources are actually independent.

- Two documents by the same organisation drawing on the same underlying data are **one** source, not two.
- A literature review citing a study is not independent of that study.
- Two interviews with people from the same country office describing the same event are **one** observation.
- **A workshop attended by country coordinators is not independent of those coordinators' own country conversations.** If a workshop-sourced claim is attributed to country X, and country X also has a check-in transcript, that is one person speaking twice. Do not merge them. This is the easiest independence error to make here, because both records look like separate sources in the registry.

Where sources genuinely are one, record it in the `source_group` column of `sources.csv`. The build then counts them once, automatically and permanently — which is safer than relying on this step catching it every time.

Where sources are not independent, keep the records separate and explain in `notes`. Say so in your hand-back — the strength figure will be wrong otherwise, and nobody downstream will know.

## Also check on each run

- Any record whose statement duplicates another **from the same source**. That is a genuine duplicate — delete one.
- Findings where every record has `status` = `draft`. Flag them; they have never been checked by a person.
- Findings that have grown past six or seven records. Usually a sign the statement has drifted into a topic and should be split.

## Output

1. The updated `finding_id` column, as a record-id → finding-id list.
2. New findings created, with their statements.
3. Merge decisions you were unsure about — with your reasoning, so a human can overrule you.
4. Any independence problems found.
5. What the strength distribution looks like after the merge, and whether anything jumped to `high` on the basis of a merge you were not confident about.

Do not report a clean run if you made judgement calls. List them.
