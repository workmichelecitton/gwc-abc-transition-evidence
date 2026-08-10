# 09 — Write a report section from the evidence base

**Reads from the base. Writes nothing back to it.** · **Read `00-shared-rules.md` first.**

This is the bridge between this repository and a written product. It ports Step E of the GWC SDR master prompt — the section structure, the evidence lock and both checklists — but the evidence comes from `data/site.json` instead of from a fresh review.

Everything the SDR method does in Steps A–D has already happened here: scope is fixed by `theme` and `tags`, sources are registered, extracts are the evidence records, and the analysis is the findings layer with a computed band. So this prompt starts where Step E starts.

---

## Evidence lock — the rule that makes this worth doing

**No new facts.** Every claim in the output must trace to a published finding in `data/site.json`. You may not:

- add a fact you know to be true but which is not in the base
- soften or strengthen a finding beyond what its band supports
- infer a causal link the records do not state
- fill a gap with a plausible sentence

Where the base has nothing, **say so in one line and move on.** A short subsection that admits an evidence gap is worth more than a long one that papers over it — and it tells the reader where the next country conversation should go.

If you catch yourself wanting to write something the base does not support, that is a finding about the base. List it under *What this section could not say* at the end.

---

## Step 1 — Ask what the section is for

Ask these one at a time. Do not assume.

1. **Audience** — ICCG, HCT, donor, global cluster, country coordinators?
2. **Purpose** — informing a decision, supporting an ask, or briefing?
3. **Scope** — which themes (`ABC`, `Transition`, `Fundamentals`), which tags, which countries, global or country-specific?
4. **Length** — a paragraph, a page, a chapter?
5. **Minimum band** — band 4+ is the usual advocacy set. Band 3+ if the section is exploratory. Say which, and hold to it.

If the user says to reuse parameters already agreed in this conversation, do so without asking again.

---

## Step 2 — Select, do not search

Filter `data/site.json` to the agreed scope and minimum band. Then group the selected findings by what they are *about*, not by their tag — several tags usually collapse into one argument.

Report the selection before writing: how many findings, at which bands, from how many countries and streams. If a theme in scope has nothing above the minimum band, name it now rather than discovering it mid-draft.

---

## Step 3 — Write, in this structure

The structure is locked. It is the SDR's, and it works because the opening paragraph carries the whole argument for a reader who stops there.

```
[Section title]. Opening synthesis paragraph… (grouped sources).

[Problem area]. Analytical paragraph… (grouped sources). Confidence: [band]. Confidence and limitations sentence.
```

**Opening synthesis paragraph**, attached directly to the title. It must synthesise the subsections that follow and cover: the priority issues, where they bite hardest, who is most affected, and what would need to change. It is not an introduction — it is the section in miniature.

**Problem-area blocks.** One continuous block each: label attached to the paragraph, grouped sources at the end of the paragraph, then the confidence sentence with no line break. Each paragraph covers situation, drivers, significance, who and where, forward risk, and what it implies operationally.

**The confidence sentence** combines the band, a short justification, and the real limitation. One sentence.

> Confidence: Strong — four independent sources across country conversations and two evaluations, though all four are from protracted conflict settings, so it may not hold in sudden-onset responses.

Not this:

> Confidence: Strong. This finding is well evidenced. Further research would be beneficial.

Generic limitations are worse than none. If the limitation is not specific enough to change how a reader uses the claim, cut it.

**Sources.** Use the label the build computes (`ORG dd/mm/yyyy`), hyperlinked where the source has a URL. Group them at the end of the analytical paragraph, once. Do not repeat them in the confidence sentence unless it introduces new evidence.

Where a source has no URL — 92 of them currently do not — give the label without a link rather than omitting the source. A visible unlinked source is honest; a hidden one is not.

---

## Step 4 — Two review passes

Both are from the SDR method and both earn their place, because they check different things.

### Pass A — lead analyst

Read as the person who has to defend this in a meeting.

- Is every key message supported by a finding, at a band that justifies how firmly it is put?
- Is the strength of the claim proportionate to its band? A band 2 finding must not be written as settled.
- Is any causal link asserted that the records only imply?
- Are the sources visible, and do the labels match `sources.csv`?
- Does the opening paragraph actually follow from the blocks beneath it?
- Are the limitations specific enough to matter?
- **Register:** would the actor described recognise this as fair? Apply the table in `00-shared-rules.md`. A section that reads as an attack on OCHA fails here even if every fact is right.

End with one of: **Approved as decision-ready** · **Approved with important caveats** · **Not yet decision-ready** — and why.

### Pass B — editor

Read as the person inserting this into the report tomorrow.

- Does it read as final prose, not analyst notes?
- Is process language gone? No "this pass identified", no "the evidence base shows".
- Are weak subsections shorter than strong ones? They should be.
- Is uncertainty stated once per block, not three times?
- Are only the useful figures kept?
- Is source formatting identical throughout?

End with one of: **Ready for direct insertion** · **Ready with minor edits** · **Not yet ready** — and why.

---

## Output

1. The section, in the locked format, ready to paste.
2. The two review verdicts, each with its reason.
3. **What this section could not say** — claims the argument wanted and the base could not support, with the gap severity (Critical / Important / Minor). This is the feedback loop: it becomes the input to the next run of `prompts/03`.

---

## What this prompt deliberately does not do

- **No severity ratings, no people-in-need estimates, no prescriptions beyond what the records contain.** Those belong to an HNO, not to an evidence base about coordination arrangements. If the user needs them, they come from elsewhere and must be labelled as such.
- **No new confidence judgement.** The band is computed and is not yours to adjust. If a band looks wrong, the fix is in the evidence, not in the prose.
- **No writing back to the CSVs.** This prompt reads only. Anything it discovers goes in the gap list for a human to act on.
