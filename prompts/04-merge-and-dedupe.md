# 04 — Assign finding IDs (merge and dedupe)

**Run this after every extraction, before committing.** This is the step that turns a list into an evidence base.

## Why this matters

The site does not display the `confidence` column. It computes strength of evidence per `finding_id`:

- **high** — three or more independent sources, **or** two or more streams *from at least two independent sources*
- **medium** — two independent sources
- **low** — one source

The qualification on streams matters. The 2026 consultation carries records tagged `workshop` and records tagged `sdr`, all inside one `source_group`. Without it, a finding resting on that single event alone spanned two streams and rated **high**. Nothing can now reach high on one source group.

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

## The consolidation pass — run this periodically, not just per batch

The rule above is right within a batch and wrong as a permanent posture. Fourteen extraction passes, each merging only against what it could see, produced 483 findings over 635 records: 82% held a single record, and a term-overlap scan of the whole base returned **two** near-duplicate pairs. Nothing was duplicated. The finding layer had simply drifted down to record level — each country's instance of a shared phenomenon became its own finding, because each was worded in that country's terms.

The cost is not untidiness. It is that the strength metric **understates** the evidence. Four countries independently describing subnational coordinators who double-hat read as four `low` findings when they are one `high` one.

So: every few batches, and whenever the build warns on granularity, work across the whole base **tag by tag**.

1. Pull every finding carrying one tag — `capacity`, `information-management`, `government-engagement` and so on. That is the work package.
2. Within it, group by **issue**, not by wording. The test is whether the same remedy applies. If two records point at different remedies, they are different findings however similar the topic.
3. Merge `barrier` with `context`, and `enabler` with `practice`, where they are the same issue in different registers. Keep `recommendation` separate — a recommendation is a different kind of statement from an observation.
4. Write the general statement in `data/findings.csv`. **Do not rewrite the record statements.** The country-specific detail is the reason anyone believes the base; it stays in the records and surfaces when a card is expanded.
5. Run the independence check below on every merge before accepting the new strength.

A merge is therefore two reversible edits — a `finding_id` reassignment and a row in `findings.csv`. Nothing is deleted, and the previous state is recoverable from git.

## `data/findings.csv`

Columns: `finding_id,theme,type,statement`.

Without a row here, the site displays the **longest record statement** as the finding. That is acceptable for a single-record finding and wrong for anything covering several countries — one country's wording gets presented as the general claim. The build warns whenever a multi-country finding has no row.

Write the statement at the level of the issue, name the mechanism and its consequence, and let it carry the range of the evidence beneath it without naming every country.

The one-sentence rule in `prompts/00-shared-rules.md` governs **record** statements. A finding statement standing over twenty records from eleven countries needs a short paragraph — three or four sentences. The register rules still apply in full.

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
- Findings where the records no longer point at one remedy. Size alone is not the signal — a finding can legitimately hold twenty records from a dozen countries. Split when a reader would give two different answers to "so what should change?"

## Output

1. The updated `finding_id` column, as a record-id → finding-id list.
2. New findings created, with their statements.
3. Merge decisions you were unsure about — with your reasoning, so a human can overrule you.
4. Any independence problems found.
5. What the strength distribution looks like after the merge, and whether anything jumped to `high` on the basis of a merge you were not confident about.

Do not report a clean run if you made judgement calls. List them.
