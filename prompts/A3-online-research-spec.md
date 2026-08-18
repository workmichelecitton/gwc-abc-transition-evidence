# A3 — Online research and extraction

**A standalone specification.** Written to be readable by someone who has not seen the repository, for discussion on whether this should run as an agent.

---

## 1. What this does, and why it is separate

The Global WASH Cluster maintains an evidence base on Area-Based Coordination and Transition. It has three intake streams:

| Stream | What it is | Volume |
|---|---|---|
| `transcript` | Country conversations with national coordination platforms | 381 records |
| `workshop` | GWC workshops, clinics, key informant interviews | 188 records |
| `sdr` | Documents already held or supplied | 158 records |
| **`search`** | **Published literature found online** | **20 records** |

**The search stream exists to solve one problem: 102 of 168 findings currently rest entirely on the GWC's own consultation.** A finding corroborated only by the people who raised it is not corroborated. Everything below is aimed at that.

This is not a literature review. It is a targeted search for evidence that **confirms, challenges or dates** claims the base already holds.

---

## 2. The unit of data

One **record** = one claim, from one source, with a verbatim quote.

Records that make the same point are grouped into a **finding**. A finding's strength is *computed* from how many independent sources sit under it — never asserted. Bands run 1 to 5; band 5 needs six independent sources across two streams in two countries.

Two rules make this work, and an agent must respect both:

- **Sources that share an origin count once.** Three sessions of one workshop series are one source. Two reports drawing on one dataset are one source.
- **Records with identical wording and no distinguishing quote count once.** This exists because the base's first version was built by AI synthesis over a corpus, which attributed claims collectively to every document in it; import then split each collective attribution into separate records and manufactured corroboration that did not exist. Two documents that genuinely say the same thing produce *different* quotes.

---

## 3. The method

### Step 1 — Establish the gap before searching

Read the existing base. Produce a gap table **before** running any search, classifying each gap:

| Severity | Meaning | Action |
|---|---|---|
| **Critical** | Blocks a claim from being usable — a weight-bearing finding with no independent source, or a theme with no external evidence at all | Pass 1 aims here, and only here |
| **Important** | Materially reduces confidence — thin geography, one stream carrying a theme | Pass 2 |
| **Minor** | Worth noting, blocks nothing | Record, do not search |

The current standing critical gap is the one named above: findings resting only on GWC consultation. The countries where that is worst are the search targets — currently Venezuela (26 findings), Sudan (14), Lebanon (14), Somalia (11), Colombia (11), Syria (11).

**Do not skip this step.** The first run of this prompt did, and registered a paper that was already in the base — which then had to be deleted and its records reassigned.

### Step 2 — Search, country by country and in the working language

Search lines, adapted to context:

- area-based coordination humanitarian evaluation
- geographic / decentralised coordination model, local authorities
- humanitarian transition, handover to national systems
- cluster deactivation, exit strategy, service delivery handover

**In the language of the response, not only English.** Spanish for Venezuela and Colombia, French for Niger, Burkina Faso and Haiti, Arabic for Syria, Portuguese for Mozambique. Material in these languages is systematically under-represented in English-language reviews and that gap is visible in the base.

**Prioritise sources independent of the cluster system**, or from another sector. A second WASH source written by cluster actors adds less than one evaluation written from outside.

### Step 3 — Filter hard

Include only material that is published or updated since the last run, is about coordination *arrangements* rather than technical programming, and is evidence-bearing — an evaluation, study or documented case.

Exclude news, press releases, project announcements, funding appeals, and anything that only restates existing guidance.

**Most runs will yield very few records. That is the correct result and should be reported as such rather than met by lowering the bar.**

### Step 4 — Extract

One record per claim. Every record needs a **verbatim quote** — that is what makes it checkable by the next person, and the absence of quotes is precisely what made the first version of this base unverifiable.

**Never record a claim from a search-result summary.** If the document cannot be opened, it is a fetch failure, not a source. List it for a human to supply.

### Step 5 — Pass 2, then stop

Reassess the gap table, aim a second pass at what remains, then **stop even if gaps remain**. State which gaps closed, which remain and at what severity, and how the remainder affects what can be claimed.

Do not run a third pass hoping something appears. A run that closes one critical gap and says so is worth more than one that reports activity.

---

## 4. Output

1. Records, in the fixed schema below.
2. New source rows, each with a **working URL** — the build rejects a source without one.
3. **The gap table, before and after**, each gap marked resolved or open at its severity.
4. **Fetch failures**, listed with URLs, for a human to supply.
5. Anything found that **contradicts** the base. Contradictions are worth more than agreements and are currently under-represented.

### Record schema

| Field | Rule |
|---|---|
| `statement` | One sentence. Neutral. Specific enough that someone could disagree with it. Not a topic label. |
| `quote` | Verbatim from the source. Mandatory for this stream. |
| `theme` | `ABC`, `Transition`, `Fundamentals`, or a combination. Test: would this still be true in a country with no area-based structure and no transition under way? If yes → `Fundamentals`. |
| `type` | `barrier` · `enabler` · `recommendation` · `practice` · `context` |
| `level` | `global` · `regional` · `national` · `subnational` |
| `countries` | ISO3, only where the claim is genuinely about that country. **Blank for global-level claims** — which is why a country filter shows nothing for them. |
| `tags` | Two to four from a controlled list. More than five means the statement is not specific enough. |
| `source_id` | Points at a registered source with a URL. |

**Controlled vocabularies are enforced.** Inventing a value fails the build. If a genuinely new concept appears, propose it rather than picking the nearest existing value.

### Register

This base informs coordinators and supports constructive advocacy. Neither is served by writing that reads as an attack on any actor. Describe **the mechanism and its consequence**, not the culprit.

> "there is no agreed basis for assessing performance" — not "unaccountable by design"

Organisations may be named. Individuals may not, and a role title tied to a place and time usually names one person.

---

## 5. The constraint that decides whether an agent is worth building

**Search finds this literature easily. Fetching it usually fails.**

Tested, repeatedly:

| Returns nothing to an automated fetch | Readable |
|---|---|
| `unocha.org` · `reliefweb.int` · `interagencystandingcommittee.org` · `unicefintercluster.net` · `washcluster.net` · `icvanetwork.org` | `globalprotectioncluster.org` · `nutritioncluster.net` · `healthcluster.who.int` · `emergency.unhcr.org` · `cccmcluster.org` · `undp.org` · `cgdev.org` · `refugeesinternational.org` |

The left column is where most humanitarian coordination literature lives. Two documents currently blocked are the highest-value outstanding items in the whole base:

- **OCHA, *Pulse of Humanitarian Coordination 2024*** — reports area-based models falling from 71% of operations in 2023 to 52% in 2024. This would be the first hard evidence that ABC is contracting rather than spreading.
- **OCHA/GCCG, *Area-based coordination and area-based programming: typology, lessons and implications*** — the reference study, four ABC cases and eight ABP cases across six countries.

**This is the design question for Patrice.** The method above is proven — the last two runs produced 11 records with quotes, lifting four findings a band, including the first independent quantified evidence in the base. The bottleneck is not the method or the judgement. It is document access.

An agent for this needs, in order of importance:

1. **A fetch path that works on the blocked domains** — a headless browser rather than a plain HTTP fetch, or a human-in-the-loop step that downloads and drops files into a folder.
2. Read access to the existing base, to run Step 1 honestly.
3. The controlled vocabularies, so it fails loudly instead of inventing values.
4. No write access to the published data. It proposes rows; a human commits them.

Without (1), an agent will do what the current process does: find the right documents, be unable to read them, and correctly report a fetch failure. That is honest but it is not throughput.

---

## 6. How to test it

Extraction quality is testable, and should be tested before this runs unattended.

**Seeded run.** Put five documents in front of it: three that meet the bar, two that do not — a press release and something that only restates existing guidance. Check it admits the right three and rejects the right two. This tests judgement, which is the part that matters.

**Hold-out recall.** Re-extract a document already in the base, blind, and compare. When this was done informally on a country transcript, the second pass found six legitimate records the first had missed — roughly a 27% miss rate. That is the baseline to beat.

**What to measure:** recall against the first pass; precision, meaning did it invent anything; and false corroboration, meaning did it produce a near-duplicate that would inflate a finding's band. The third is the one that damages the base, because it is invisible once committed.
