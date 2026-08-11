# Shared extraction rules

**Read this first. Prompts 01–03 all depend on it.**

You are extracting evidence on Area-Based Coordination (ABC) and Transition in humanitarian settings for the Global WASH Cluster. Your output is rows for `data/evidence.csv`. Assume familiarity with humanitarian coordination — do not explain basic concepts back to the user.

---

## What counts as one record

One record = **one claim, from one source**. Not one paragraph, not one topic.

Split when a passage makes two distinct claims. Merge nothing at this stage — grouping happens later, in prompt 04.

**Extract:** claims about what helps or hinders ABC or transition, what was actually done somewhere, and what someone recommends.

**Do not extract:** descriptions of the methodology, restatements of the research question, generic humanitarian truisms ("coordination is important"), or anything you would have written without reading the source.

If a document yields three records, extract three. Padding the count destroys the value of the strength-of-evidence calculation, because a fabricated corroboration looks identical to a real one.

---

## Register — this matters as much as accuracy

This evidence base has two purposes: informing WASH cluster coordinators, and supporting constructive advocacy. Neither is served by writing that reads as an attack on OCHA, on area-based structures, or on any other actor.

Write so that the person described could read the entry and recognise it as fair.

| Avoid | Prefer |
|---|---|
| "unaccountable by design" | "there is no agreed basis for assessing performance" |
| "the cluster was reduced to rubber-stamping" | "the consultation left little room to propose alternatives" |
| "bypassed cluster authority entirely" | "reached outside the cluster's technical channels" |
| "demand transparent criteria" | "publishing the criteria would give countries a predictable basis" |
| "OCHA failed to…" | "the review does not currently happen systematically" |

Describe the **mechanism and its consequence**, not the culprit. Where a barrier has an obvious remedy, the statement can point toward it — a reader should finish the entry knowing what would need to change, not who is at fault.

This is not softening the evidence. A finding that says "there is no agreed performance framework, so nobody can tell whether these structures are working" is *more* usable in an ICCG than the same point phrased as an accusation.

## Writing the statement

One sentence. Neutral. Specific enough to be disagreed with.

| Bad | Why | Good |
|---|---|---|
| "Funding is a challenge." | Topic label, not a claim | "Donor funding cycles are shorter than the time required to hand over services to national systems." |
| "Coordination should improve." | Not actionable, not falsifiable | "National clusters should agree area-level indicators at the start of a response rather than retrofitting them." |
| "The cluster did great work in the region." | Evaluative, unattributable | "A phased handover of water system O&M to the municipal utility completed over eighteen months." |

A useful test: could someone read this statement and say "no, that's not our experience"? If not, it is a topic, not a finding.

---

## Protecting people — non-negotiable

This repository is public and git history is permanent. A bad commit cannot be cleanly withdrawn.

The thing being protected is **people, not institutions**. Data protection law regulates information about an identified or identifiable natural person; an organisation is not one. Naming an agency is therefore not a data-protection question. Identifying the individual who spoke is.

**Never, in `statement` or `quote`:**

- A personal name, including third parties the speaker mentions.
- A role title tied to a place and time, because that combination usually names one person. "The WASH Cluster Coordinator in country X" is an identifier even with no name attached — there is only one.
- A detail that singles someone out by their situation: a specific secondment, a contract ending on a stated date, an individual's move between two named posts.

The test is not "did I remove the name" but **"could a colleague in that country work out who said this?"** Applied honestly, that rules out more than a name-stripping pass does.

If a quote cannot survive that test, drop the quote and keep the statement. Where any doubt remains, set `visibility` to `internal` — internal records are dropped at build time and never reach the published file.

## Naming organisations — allowed, with judgement

Organisations **may** be named in `statement` and `quote`. Withholding the name usually made the claim vaguer without protecting anybody: "a UN agency reduced its coordination post" tells a reader almost nothing, and anyone in the country knows which agency it was anyway.

Three conditions:

1. **The organisation must be large enough that naming it does not name people.** A UN agency, a cluster lead agency, a large international NGO, a donor government: name them. A single local NGO working in one municipality, a two-person consultancy, a named consortium of three partners: do not — at that size the organisation *is* the individuals, and the identification test above applies to it.

2. **The register rule still governs how you write it.** Naming an actor is not licence to assign blame. Describe the mechanism and its consequence: "the lead agency set a six-month handover deadline internally, tied to a funding cycle rather than to readiness" — not "the lead agency imposed an arbitrary deadline". A named organisation in a critical claim raises the standard of fairness, it does not lower it.

3. **Watch the narrowing effect.** A named organisation, in one country, in a critical claim, in a sector with one coordinator, can make the *speaker* identifiable even though the speaker is not named. This is the real risk that naming introduces, and it is a risk to a person rather than to the organisation. Where a claim is both critical and country-specific, consider whether the organisation needs naming for the claim to be usable. Often it does not.

The `actors` column remains structural metadata and is unaffected: it says who a finding concerns, using controlled values.

Raw transcripts and restricted documents **never** enter this repository, whatever is in them.

---

## Columns

Every value in a controlled column must already exist in `data/taxonomy.json`. Inventing a value fails the build. If a genuinely new concept appears, say so in your response and propose the addition — do not quietly pick the nearest existing value, and do not add it yourself.

| Column | Rule |
|---|---|
| `id` | `E####`, continuing from the highest existing id. Never reuse. |
| `finding_id` | **Leave blank.** Prompt 04 assigns these. |
| `theme` | `ABC`, `Transition`, `Fundamentals`, or a semicolon-separated combination. **Apply the test:** would this claim still be true in a country with no area-based structure and no transition under way? Yes → `Fundamentals` (staffing, funding, information management capacity, institutional memory, counterpart turnover — the standing conditions any arrangement depends on). Only where coordination is organised by area → `ABC`. Only where it is being handed over → `Transition`. There is no `Both`: as a single value it matched *neither* filter. Theme says what the claim is **about**; `tags` say what it **bears on**, so a fundamentals finding relevant to handover still carries `transition-handover` and is reachable that way. |
| `type` | `barrier` · `enabler` · `recommendation` · `practice` · `context` |
| `statement` | One sentence, per above. Wrap in double quotes. |
| `quote` | Verbatim, anonymised. Blank is fine and often correct. |
| `level` | `global` · `regional` · `national` · `subnational` |
| `countries` | ISO3, semicolon-separated. **Blank when `level` is global.** Only where the claim is actually about that country — not where the country was merely mentioned. |
| `actors` | Who the claim concerns. Semicolon-separated. Usually one or two. |
| `tags` | Two to four. More than five means the statement is not specific enough — rewrite it. |
| `stream` | Set by the prompt you are running. |
| `source_id` | Existing `S###`, or the next free one if you are adding a source. Add the row to `sources.csv` in the same pass. |
| `date_collected` | Date of the conversation or publication, `YYYY-MM-DD`. |
| `confidence` | Your judgement of this single record. The build validates it and then ignores it: a finding's band is computed from independent sources, streams and countries, so nothing you type here changes what a reader sees. Do not inflate it. |
| `visibility` | `public` unless anonymisation is uncertain. |
| `status` | `draft`. Only a human sets `validated`. |
| `notes` | Working notes. Never published. Use it to flag doubts. |

CSV mechanics: quote any field containing a comma. Use `;` inside multi-value fields, never `,`.

---

## Relationship to the GWC SDR method

The Global WASH Cluster runs Secondary Data Reviews under a separate master prompt (Steps A–E, mandatory iteration passes, lead-analyst and editorial checklists). That method produces a **narrative product under a locked scope, once**. This repository is a **cumulative database that counts rather than narrates**. They are complementary, not interchangeable, so parts of the SDR method are adopted here and parts are deliberately refused. Both decisions are recorded so nobody has to re-argue them.

**Adopted**

| SDR rule | Where it lives here |
|---|---|
| Gap loop: identify → classify → target search → update → reassess | `prompts/03`, and the extraction steps of `prompts/02` |
| Gap severity: Critical / Important / Minor | Same |
| Stop rule — stop after the last pass, then state what remains unresolved | Same. The build reports remaining gaps on every run for the same reason |
| Every source carries a working URL | Enforced by `build.py` for newly added sources |
| Source label `ORG dd/mm/yyyy` | Computed by `build.py`, shown on the Sources tab |
| Traceability from claim to document | Already the three-layer model: record → finding → source |
| Evidence lock — no new facts at the writing stage | `prompts/09`, and the viewer, which only ever displays what the CSVs contain |

**Deliberately not adopted**

| SDR rule | Why not |
|---|---|
| Five-point analyst-assigned confidence (Very high → Very low) | This base computes a band from independent sources, streams and countries and asserts nothing. An assigned confidence would quietly reintroduce judgement into the one number that is defensible precisely because no judgement went into it. A five-band scale **was** adopted — but it is counted, not assigned. |
| Population logic (`affected ≥ in need ≥ target`) | This base records coordination arrangements, not caseloads. The SDR prompt itself permits saying so rather than forcing an estimate. |
| Severity, Anticipate, Prescribe | These turn evidence into an argument. They belong in the product written *from* this base (`prompts/09`), not in the data. Keeping them out is what lets the same records serve a country coordinator and an advocacy note without being rewritten. |
| Three-to-four mandatory passes at every step | Re-reading one document three times adds nothing. The pass discipline is kept only where it earns its place: searching, where each pass can be aimed at a different gap. |
| Pillar / sub-pillar / sector / sub-sector hierarchy | The equivalent here is `theme` + `tags` + `level`, which is already in use and already filterable. |

**Still open.** The SDR's evidence hierarchy — **Direct > Proxy > Inferred** — is the strongest remaining candidate. The `confidence` column is validated and unused, and would hold it. It would have caught the Haiti record where a speaker's hypothetical was written up as a statement of fact. It needs a review pass over the records that carry no quote before it can be switched on, so it is noted here rather than half-implemented.

---

## Before you hand back

State plainly:

1. How many records you extracted, and roughly how many you rejected as non-findings.
2. Anything you could not classify within the existing taxonomy.
3. Anything you flagged `internal`, and why.
4. Where the source contradicts evidence already in `evidence.csv` — contradictions are findings in their own right and are more interesting than agreements.

Do not report success if you had to guess at a controlled value. Say what you guessed.
