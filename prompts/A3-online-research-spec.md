# A3 — Online research and extraction

**Adapted from the GWC Secondary Data Review master prompt, Steps A–C.**

Written to be read by someone who has not seen the repository. For discussion on whether this should run as an agent.

---

## Where this sits in the SDR method

The GWC SDR prompt runs A → B → C → D → E. This adaptation covers **A, B and C only**, and the reason matters:

| SDR step | Here |
|---|---|
| **A** Design and planning | **Kept.** The gap table is Step A. |
| **B** Data collection and storage | **Kept.** Source registry with Document IDs, tiers and URLs. |
| **C** Data exploration and preparation | **Kept.** Extraction table with Extract IDs and full traceability. |
| **D** Analysis and sense-making | **Replaced by computation.** Findings and confidence are calculated from the extraction table, not written by an analyst. See §4. |
| **E** Communication | **A separate prompt.** Report drafting happens in `prompts/09`, under an evidence lock. |

The locked rules from Section 0 of the master prompt carry over unchanged unless stated: step validation, the evidence rule, the evidence hierarchy, scope discipline, gap classification, the stop rule, the consolidated step-output rule, and the source and hyperlink rule.

**Two are deliberately not carried over,** and both are permitted omissions under the master prompt's own terms:

- **Population logic (0.6).** This base records coordination arrangements, not caseloads. The master prompt allows stating this explicitly rather than forcing an estimate. Stated.
- **Assigned confidence (0.5).** Replaced by a computed band on the same five-point scale. See §4 — this is the one substantive departure and it is argued, not assumed.

---

## 0. Locked execution rules

**0.1 Step validation.** At the end of each step: **STOP.** Ask the user to validate, revise or add data. Do not proceed automatically.

**0.2 Evidence rule.** Every record traces to extracted material, or is labelled Inference. No hidden assumptions. In this base an inference is not admissible as a record at all — it goes in `notes`.

**0.3 Evidence hierarchy.** Direct > Proxy > Inferred. Recorded per record, and it does real work here:

| | Meaning in online research |
|---|---|
| **Direct** | An evaluation or study reporting what its authors observed or measured |
| **Proxy** | A document reporting what others found, or a case description written by the actor concerned |
| **Inferred** | The claim is a reasonable reading of the document but not something it states |

A guidance document saying an arrangement *should* work is **not** direct evidence that it does. This distinction is routinely collapsed in secondary reviews and it inflates the apparent evidence base.

**0.4 Scope.** Only coordination *arrangements* for Area-Based Coordination and Transition. External factors admitted only where directly causal and labelled `External driver (out-of-scope but analytically necessary)`.

**0.7 Mandatory passes.** Three in Step A, three in Step B, two in Step C. Step C takes two rather than three: a third reading of the same document returns the same extracts, whereas a third search aimed at a different gap does not. Each pass has a stated purpose — Pass 1 initial output, Pass 2 targeted strengthening of weak areas, Pass 3 refinement of specificity, prioritisation and sourcing quality.

**0.8 Gap-to-search improvement loop.** Every pass in B and C runs: identify gaps → classify by severity → aim additional search or refinement → update the output → reassess what remains. The loop must be explicit in the response.

**0.9 Gap classification.** Critical (blocks robust analysis) · Important (materially reduces confidence) · Minor (does not block, note it).

**0.10 Stop rule.** After the final mandatory pass, stop even if gaps remain. State which were resolved, which remain, and how the remainder affects interpretation.

**0.11 Consolidated step output.** At the end of each step's passes, reproduce the **full final output of that step** in one consolidated version — not a summary of what improved. It replaces weaker earlier formulations, integrates resolved gaps, and retains explicit mention of what is still open.

**0.12 Source and hyperlink rule.** Every source in Step B carries a clickable URL. Every extract in Step C retains its Document ID and is therefore traceable to that URL. Source label format `ORG dd/mm/yyyy`, hyperlinked. **A source without a working link is rejected by the build** — an unlinkable source cannot be checked, and 71 legacy sources in this base are unread precisely because nobody can open them.

---

## STEP A — Design and planning

### A1. Context definition — ask one at a time

- Which themes are in scope this run: `ABC`, `Transition`, `Fundamentals`, or a combination
- Which countries, and in which working languages
- Timeframe — the search floor is the most recent `date_added` in the source registry
- Which findings the run is trying to strengthen
- Sources to prioritise, and sources to exclude

If the user says to reuse parameters already agreed, do so without asking again.

### A2. Scope summary

| Theme | Tag | Countries | Languages | Problem area |
|---|---|---|---|---|

Then state: **these parameters define strict analytical boundaries.**

### A3. Gap table — this is the analysis plan

The SDR's A3 asks for Describe / Explain / Interpret / Anticipate / Prescribe per problem area. Here that is replaced by the gap table, because this step is not producing analysis — it is deciding where to look.

| Gap | Severity | Why it blocks | What would close it | Where to look |
|---|---|---|---|---|

**The standing critical gap, at the last run:** 102 of 168 findings rest entirely on the GWC's own consultation — country conversations and GWC workshops. A finding corroborated only by the people who raised it is not corroborated. The countries where this is worst are the targets: Venezuela 26, Sudan 14, Lebanon 14, Somalia 11, Colombia 11, Syria 11.

### A4. Information ecosystem

Data-rich areas, data gaps, biases, blind spots — specifically:

- Which themes have external evidence and which do not
- Which languages are under-represented. French, Spanish, Portuguese and Arabic material is systematically thinner in English-language reviews, and that gap is visible in this base
- Which document types dominate, and what that biases toward. Evaluations report problems more readily than routine practice that works, and the base currently runs 74 barriers to 27 enablers

### A5. Methodology

Inclusion criteria, exclusion criteria, recency rule, triangulation logic, evidence classification per 0.3.

**Exclude:** news, press releases, project announcements, funding appeals, and anything that only restates existing guidance.

### Passes

- **Pass 1** — produce A2, A3, A4, A5
- **Pass 2** — expand the gap table: distinguish gaps closable by search from gaps closable only by a country conversation. State what improved and what remains uncertain at design stage
- **Pass 3** — prioritise. Which gaps are worth a pass, which are worth noting only. Sharpen the search lines against the specific findings they are meant to strengthen

**Consolidated Step A output**, then: *"STEP A completed after three passes. Do you validate or want to revise before STEP B?"*

---

## STEP B — Data collection and storage

### B1. Establish what is already held

Read the existing source registry **before searching**. Note the search floor, and the full list of existing titles — this is the duplicate check.

**Do not skip this.** The first run of this prompt did, and registered a paper already in the base, which then had to be deleted and its records reassigned.

### B2. Source registry

| Document ID | Title | Organisation | Date | Type | Geo | Theme | Tier | Strength | Limitation | URL |

- Document IDs are sequential and reused consistently in Step C
- **Tier** follows 0.3: what kind of claim this document can support
- Sources sharing an origin — three sessions of one workshop series, two reports on one dataset — must be flagged as one source group. They count once

### B3. Structured gap analysis

For each theme and country in scope: missing evidence, missing geographic coverage, missing recent data, weak evidence, contradictory evidence. Each classified Critical / Important / Minor.

### Passes

- **Pass 1** — initial registry and gap analysis
- **Pass 2** — critical gaps only. Targeted additional search. State which resolved, which remain
- **Pass 3** — remaining critical gaps first, then important. Improve source diversity and independence

**Prioritise sources independent of the cluster system**, or from another sector. A second WASH source written by cluster actors adds less than one evaluation written from outside.

**Consolidated Step B output**, then: *"STEP B completed after three passes. Validate sources before STEP C?"*

---

## STEP C — Data exploration and preparation

### C1. Extraction table

| Extract ID | Document ID | Theme | Type | Statement | Quote | Evidence type | Level | Countries | Actors | Tags | Source label | URL |

**Rules**

- One extract = one claim, from one document. Not one paragraph, not one topic
- **A verbatim quote is mandatory in this stream.** It is what makes the record checkable by the next person
- **Never extract from a search-result summary.** If the document cannot be opened it is a fetch failure, not a source — list it for a human to supply
- `Statement`: one sentence, neutral, specific enough that someone could disagree with it. Not a topic label
- `Evidence type`: Direct / Proxy / Inferred, per 0.3
- `Countries`: only where the claim is genuinely about that country. **Blank for global-level claims**
- Controlled vocabularies are enforced by the build. Inventing a value fails it. Propose additions rather than picking the nearest existing value

### C2. Selection rules

Keep only what is relevant, recent, decision-useful and non-duplicative. If a document yields three claims, extract three. **Padding destroys the value of the strength calculation, because a fabricated corroboration looks identical to a real one.**

### C3. Data quality assessment

Reliability, triangulation, consistency, recency, directness.

### C4. Gap and bias analysis

Missing evidence, weak causal support, bias risks, over-reliance on proxy evidence. Each classified Critical / Important / Minor.

### Passes

- **Pass 1** — extraction table, quality assessment, gap analysis
- **Pass 2** — refine for analytical usefulness. Sharpen the distinction between direct evidence, proxy evidence and inferred absence. State what improved and what remains weak

**Consolidated Step C output**, then: *"STEP C completed. Validate before the base is rebuilt?"*

---

## 4. Step D is computed, not written

This is the substantive departure from the master prompt, and the reason for it.

The SDR asks an analyst to assign confidence on a five-point scale from Very high to Very low. Here the scale is the same five points but the value is **calculated** from the extraction table:

| Band | Rule |
|---|---|
| **5 Very strong** | 6+ independent sources, across 2+ streams, in 2+ countries |
| **4 Strong** | 3+ independent sources across 2+ streams |
| **3 Moderate** | 3+ independent sources, or 2 across 2 streams |
| **2 Limited** | 2 independent sources |
| **1 Single source** | 1 source — not corroborated, not therefore wrong |

Two counting rules prevent the number being gamed:

- **Sources sharing an origin count once.**
- **Records with identical wording and no distinguishing quote count once.** This exists because the first version of this base was built by AI synthesis over a corpus — a three-pass NotebookLM analysis, integrated and summarised — which attributed claims **collectively** to every document in the corpus. Import then split each collective attribution into one record per source and manufactured corroboration that never existed. Two documents that genuinely say the same thing produce *different* quotes.

**Why this replaces assigned confidence.** The base's defence is that nobody's judgement sets the strength. An assigned confidence would put judgement back into the one number that is defensible precisely because none went into it. Severity, anticipation and prescription are likewise not recorded: they turn evidence into argument, and belong in the product written *from* this base rather than in the data.

---

## 5. Output

1. The extraction table, or an explicit statement that nothing met the bar
2. New source rows, each with a working URL
3. **The gap table, before and after**, each gap marked resolved or open at its severity
4. **Fetch failures**, with URLs, for a human to supply
5. Anything found that **contradicts** the base. Contradictions are worth more than agreements and are currently under-represented

### Register — this matters as much as accuracy

This base informs coordinators and supports constructive advocacy. Neither is served by writing that reads as an attack on any actor. Describe **the mechanism and its consequence**, not the culprit.

> "there is no agreed basis for assessing performance" — not "unaccountable by design"

Organisations may be named. Individuals may not, and a role title tied to a place and time usually names one person.

---

## 6. The constraint that decides whether an agent is worth building

**Search finds this literature easily. Fetching it usually fails.**

| Returns nothing to an automated fetch | Readable |
|---|---|
| `unocha.org` · `reliefweb.int` · `interagencystandingcommittee.org` · `unicefintercluster.net` · `washcluster.net` · `icvanetwork.org` | `globalprotectioncluster.org` · `nutritioncluster.net` · `healthcluster.who.int` · `emergency.unhcr.org` · `cccmcluster.org` · `undp.org` · `cgdev.org` · `refugeesinternational.org` |

The left column is where most humanitarian coordination literature lives. The two highest-value outstanding documents in the whole base are both behind it:

- **OCHA, *Pulse of Humanitarian Coordination 2024*** — reports area-based models falling from 71% of operations in 2023 to 52% in 2024. Would be the first hard evidence that ABC is contracting rather than spreading
- **OCHA/GCCG, *Area-based coordination and area-based programming: typology, lessons and implications*** — the reference study; four ABC cases and eight ABP cases across six countries

**The method is not the constraint.** The last two runs produced 11 quoted records and lifted four findings a band, including the first independent quantified evidence in the base — national NGOs at 43% of cluster participation and 7% of HCT membership; area-based pooled fund allocation doubling the national share to 40%.

An agent needs, in order:

1. **A fetch path that works on the blocked domains** — a headless browser rather than a plain HTTP fetch, or a human-in-the-loop download step
2. Read access to the existing base, to run Step A and B1 honestly
3. The controlled vocabularies, so it fails loudly rather than inventing values
4. **No write access to published data.** It proposes rows; a human validates at each step stop and commits

Without (1) an agent reproduces the current outcome: finds the right documents, cannot open them, correctly reports a fetch failure. Honest, but not throughput.

---

## 7. How to test it

**Seeded run.** Five documents: three that meet the bar, two that do not — a press release and something that only restates guidance. Check it admits three and rejects two. This tests judgement, which is the part that matters.

**Hold-out recall.** Re-extract a document already in the base, blind, and compare. Done informally on a country transcript, the second pass found six legitimate records the first had missed — roughly a 27% miss rate. That is the baseline to beat.

**Measure three things:** recall against the first pass; precision, meaning did it invent anything; and **false corroboration** — did it produce a near-duplicate that would inflate a band. The third is the one that damages the base, because it is invisible once committed and it is exactly what went wrong the first time.
