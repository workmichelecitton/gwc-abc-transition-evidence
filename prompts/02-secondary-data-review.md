# 02 — Document / secondary data review → evidence records

**Stream:** `sdr` · **Read `00-shared-rules.md` first.**

## Task

You are given a published document — evaluation, study, guidance, strategy or operational report. Extract evidence records for `data/evidence.csv`.

## Method

1. Identify what kind of document this is before extracting. It determines how much weight the evidence carries:

| Document type | What it can support |
|---|---|
| Evaluation with stated methodology | Claims about what happened and why |
| Research study | Claims about patterns across contexts |
| Guidance / framework | What is *recommended*. Not evidence that it works. |
| Strategy / plan | Intent. Not evidence of anything having happened. |
| Operational report | What one actor did in one place — `practice`, usually `subnational` |

**Guidance documents describe good intentions.** A statement in a framework that "area-based coordination should be led by local authorities" is a `recommendation`, not an `enabler`. Only an evaluation or a documented case can establish that it actually helps. This distinction is routinely collapsed in secondary reviews and it inflates the apparent evidence base.

2. Extract from findings and conclusions. Be sceptical of executive summaries — they generalise beyond what the body supports.
3. Where the document itself cites a source for a claim, the evidence belongs to the original source. Either register that source separately or note the chain in `notes`. Do not let one literature review masquerade as five independent sources — that would corrupt the strength calculation, which is the core measure this whole site rests on.
4. Attach countries only for claims genuinely grounded in that country's data. A global study listing case countries does not make every finding a finding about each of them.

## Specific to documents

- Prefer the document's own words for `quote`. Documents are already public, so anonymisation is normally not needed — but check whether the document itself quotes individuals.
- `date_collected` is the publication date.
- `level` is usually `global` for studies and guidance; `national` or `subnational` for evaluations of specific responses.
- Where the document reports an absence of evidence, that is itself a record — `type` = `context`, and worth capturing.

## Source registry

```
S0##,<full document title>,<publishing organisation>,<year>,<evaluation|study|guidance|report|strategy>,<url>,sdr,<today>,public,
```

**The URL is mandatory.** `build.py` rejects a newly added source without one. This is not tidiness: 92 of the 106 sources already registered have no link, which is why nine of them have sat unread for months — nobody can open them to check what they say.

## Gaps, classified

After extracting, say what this document did **not** settle. Use the SDR severity scale:

| Severity | Meaning |
|---|---|
| **Critical** | Blocks a claim from being usable — the document raises an issue but gives no evidence either way, and nothing else in the base covers it |
| **Important** | Materially reduces confidence — a claim is supported for one region or one period only |
| **Minor** | Worth noting, blocks nothing |

Then **stop**. Do not re-read the document hoping for more. One honest pass with a classified gap list is worth more than three passes over the same text — that is why the SDR method's mandatory repetition is not carried over here.

## Output

A CSV block ready to append, the new `sources.csv` row, the classified gap list, and the hand-back summary.

Flag explicitly where this document **contradicts** something already in `evidence.csv`. Contradictions are the most useful thing a secondary review produces and they are the first thing a summary loses.

Then remind the user to run prompt 04.
