# 01 — Country conversation → evidence records

**Stream:** `transcript` · **Read `00-shared-rules.md` first.**

## Task

You are given a transcript or notes from a conversation with a national WASH Cluster, a coordination team or a partner. Extract evidence records for `data/evidence.csv`.

## Method

1. **Read the whole transcript before extracting anything.** People circle back; the clearest statement of a point is often not the first one.
2. Identify what this person actually knows first-hand. A coordinator describing their own coordination structure is strong evidence. The same person speculating about global donor behaviour is weak — extract it only if it is their observation, and mark `confidence` low.
3. Extract claims, not topics. Apply the statement test in the shared rules.
4. Attach countries only where the speaker is talking about that country's experience.
5. Set `level` by what the claim is about, not who said it. A national coordinator describing one district is `subnational`.

## Specific to transcripts

**Distinguish the three things people mix together in interviews:**

| They say | Type |
|---|---|
| "It didn't work because…" | `barrier` |
| "It worked because…" | `enabler` |
| "What we did was…" | `practice` — descriptive, no judgement |
| "What should happen is…" | `recommendation` |

A single sentence often contains a barrier and a recommendation. Split it into two records with the same source.

**Frustration is not evidence of magnitude.** Something said with force is not better corroborated than something said calmly. Set `confidence` on the basis of whether the speaker is describing something they witnessed — not on how strongly they said it.

**Silence matters.** If a topic that is prominent elsewhere in the evidence base does not come up at all, note it in your hand-back. Do not create a record for it.

## Anonymisation

Interviews are where this repository is most likely to leak something. The speaker was candid because the conversation was not public.

- Strip every name, including third parties they mention.
- "The donor" not "USAID". "A UN agency" not the agency.
- Quotes are the highest-risk field. A quote that identifies a speaker by their situation is not anonymous just because the name is removed.
- If in any doubt: `visibility` = `internal`, and say so.

## Source registry

Add one row to `sources.csv` per conversation:

```
S0##,Country consultation — <region or theme, not the person>,Global WASH Cluster,<year>,interview,,transcript,<date>,restricted,Anonymised. Raw transcript held outside this repository.
```

Never put the interviewee's name or organisation in the title.

## Follow-ups are not evidence

Country conversations produce two different things, and only one belongs in `evidence.csv`.

| In the transcript | Goes to |
|---|---|
| "Donor cycles are shorter than handover needs" | `evidence.csv` — a claim about the world |
| "Can you share transition examples from other countries?" | `follow-ups.csv` — a commitment someone made |

Extract both, separately. A request for support is not evidence of anything, but it is the reason the country agreed to the call, and losing it wastes their time.

`follow-ups.csv` columns: `id` (`FU###`), `country`, `date_raised`, `request`, `area`, `owner_role`, `status` (`open` · `in-progress` · `done` · `dropped`), `source_id`, `notes`.

Use **roles, not names**, in `owner_role` — this file sits in the same public repository.

## Output

1. A CSV block ready to append to `data/evidence.csv`.
2. Any new `sources.csv` row.
3. A `follow-ups.csv` block for commitments made during the call.
4. The hand-back summary from the shared rules.

Then remind the user to run prompt 04 before committing, so the new records are grouped into findings.
