# Sources in the registry that have never been read

**Status 2026-08-07: resolved from 23 down to 9.**

- 1 deleted (S089, a placeholder carrying nothing)
- 12 marked deliberately unused with a reason — 7 normative documents (guidance,
  templates, checklists, strategy) and 5 out of scope (situation reports, appeals,
  programme case studies that are not about coordination arrangements)
- 1 extracted from: **S088**, the 2007 cluster approach evaluation, 10 records
- **9 still to read** — listed at the bottom

The build warning now ignores sources marked as a deliberate decision, so it
counts only genuinely unread ones. That keeps the signal worth looking at.

## Why S088 was worth the effort

Its value is age. Several claims this base records from 2026 country conversations
appear almost verbatim in an evaluation written in 2007:

- Local and national organisations seeing no real increase in participation or
  funding through the cluster system — 2007 and 2026, independently.
- Joint needs assessments increasing in number while quality and tool
  harmonisation stay unresolved — 2007 and 2026.
- The provider-of-last-resort commitment not being seen as practically relevant —
  2007, and again in a 2025 INGO paper.

That changes what those findings mean. A problem reported by country teams this
year reads as a current difficulty. The same problem in a 2007 evaluation reads as
structural. For advocacy that is a much stronger position, and it is only visible
because both sources are in the base.

---

**Original note.** 23 of 107 sources carried no evidence record. They are listed in the
Sources tab, which makes the base look broader than the evidence actually is.
The build now warns on every run.

Most of these are one contiguous block, S086 to S100. That block was imported
with the source registry and extraction simply never reached it — records exist
for S013 through S085 and then stop. It is not a judgement that these sources
had nothing to offer; nobody opened them.

Several are substantive: the 2007 cluster approach evaluation, the ODI work on
WASH in protracted crises in South Sudan, two Itad studies on UNICEF WASH in
protracted crises including a Cameroon case study, the Early Recovery cluster
evaluation, and the Protection Cluster transition chapter.

## What to do with each

Three legitimate outcomes. Pick one per source rather than leaving it ambiguous:

1. **Extract from it** — run `prompts/02-secondary-data-review.md`.
2. **Mark it deliberately unused** — put the reason in `notes` (superseded, out of
   scope, duplicate of another source). It stays in the registry as a record of
   what was considered.
3. **Delete the row** — for placeholders like S089 that carry nothing at all.

| Source | Year | Organisation | Title |
|---|---|---|---|
| `S046` | 2021 | HERE-Geneva | The Future of Humanitarian Coordination |
| `S047` | 2025 | OCHA | AAP Evaluation |
| `S048` | 2024 | ICVA | Localisation in Humanitarian Leadership — Venezuela |
| `S049` | 2018 | Global Shelter Cluster | ABC in Urban Areas |
| `S050` | 2024 | UNICEF | Bangladesh Humanitarian Situation Report No. 70 |
| `S051` | 2024 | IOM | IOM Afghanistan Summary Appeal 2024 |
| `S053` | 2024 | IASC | 6_Summary Guidance on Cluster Transition and Deactivation |
| `S057` | 2024 | IASC | IASC Guidance on Cluster Transition and Deactivation |
| `S086` | 2024 | IASC | 2_Annex B — Example template for a Transition Strategy |
| `S087` | 2024 | IASC | HC-HCT Transition and Deactivation Checklist |
| `S088` | 2007 | Stoddard et al | Cluster Approach Evaluation Final Draft. HPG/ODI |
| `S089` | — | — | [Removed during validation — number not reassigned] |
| `S090` | 2019 | UNICEF | Investment case for sustainable water systems in Somalia |
| `S091` | 2021 | WASH Cluster Iraq & Mercy Corps | COVID-19 Lessons Learned |
| `S092` | 2018 | Murray et al | Evaluation of the Global Cluster for Early Recovery. UNDP |
| `S093` | 2020 | Itad | UNICEF WASH in Protracted Crisis (Annexes) |
| `S094` | 2020 | Itad | UNICEF WASH in Protracted Crises: Cameroon Case Study |
| `S095` | 2025 | Global Protection Cluster | Protection Toolkit — Ch. 8: Cluster Transition |
| `S096` | 2016 | Mosello et al | WASH service delivery in protracted crises: South Sudan. ODI |
| `S097` | 2016 | UN-Habitat & WSSCC | Reviving Sanitation Campaign after 2015 Earthquake |
| `S098` | 2024 | UNICEF | CO Guide on CLA Accountabilities |
| `S099` | 2019 | Global Shelter Cluster | Shelter Projects: Nepal Housing Recovery |
| `S100` | 2022 | GWC | Strategic Plan 2022–2025 |

## Why this went unnoticed

The Sources tab listed every registered source and the 'Cited in' column showed
a red *not cited* against the unused ones — the signal was there. But the tab
was never filterable, so nobody scrolled it, and 23 red flags sat in a table of
107 rows. The filter now works, and the build warns, so the count is visible
without anyone having to look for it.
