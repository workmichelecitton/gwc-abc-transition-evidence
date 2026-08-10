# Source URLs still missing

Round 1 of the URL backfill found 14 of 107. These are the rest, ordered by how much
evidence rests on them — the ones near the top matter most, because a reader who wants
to check a strong finding will land on them first.

Michele is checking these against the NotebookLM collection that holds the SDR sources.
Paste a URL into the `url` column of `data/sources.csv` and the Sources tab links it
automatically — no code change needed.

Several are internal or unpublished (joint mission notes, task force syntheses, country
strategies). Those have no URL to find, and that is a legitimate answer: leave the column
blank and the Sources tab simply shows the title without a link.

| Source | Records | Year | Organisation | Title |
|---|---|---|---|---|
| `S102` | 13 | 2026 | Global WASH Cluster | Secondary Data Review — Transition in Humanitarian Settings |
| `S101` | 11 | 2026 | Global WASH Cluster | Secondary Data Review — Area-Based Coordination (V17) |
| `S055` | 7 | 2026 | UNICEF | Humanitarian transition context — Joint EMOPS, CoE and Regional Office support mission to Cameroon |
| `S060` | 6 | 2020 | Federal Government of Somalia | National Durable Solutions Strategy 2020–2024 |
| `S052` | 5 | — | — | IASC. (2024.). 5_Annex E — Examples of cluster transition |
| `S061` | 4 | 2026 | WHO | Transition of the Health Cluster in Cameroon |
| `S013` | 3 | — | Flagship Initiative | Flagship Initiative Evolving Approach |
| `S020` | 3 | 2026 | UN Women | Leading in times of crisis |
| `S029` | 3 | 2025 | Coalition for Accountability and Integrity | Data Flow in Humanitarian Aid |
| `S065` | 3 | 2025 | Kalden & Rymarenko | Ukraine Education Cluster Transition Plan 2025–2026. NOTE: Replaces "Source 23, Ukraine" |
| `S073` | 3 | 2025 | Palacios & Tonea | Iraq Cash Forum. CALP Network |
| `S014` | 2 | 2023 | Food Security Cluster | Decentralised Coordination Models |
| `S018` | 2 | 2020 | CCCM Cluster | CCCM Paper on Area-based Approaches |
| `S030` | 2 | 2023 | OCHA | Humanitarian Response Plan Myanmar 2023 |
| `S036` | 2 | 2019 | Collinson & Schenkenberg | UNHCR Leadership and Coordination Role |
| `S054` | 2 | 2022 | CCCM Cluster Iraq | CCCM Cluster Iraq Transition Strategy. NOTE: Replaces "Source 36, Iraq" |
| `S063` | 2 | 2025 | UNICEF | Sustainable Water Access in Gambella |
| `S066` | 2 | 2026 | Task Force Transition | Transition synthesis — Cameroon. NOTE: Replaces "Source 24, Cameroon" |
| `S069` | 2 | 2013 | UNICEF Evaluation Office | Evaluation of UNICEF CLA Role. NOTE: Pre-2015; restored to active registry — provides systemic evidence on mission creep and government resistance to deactivation cited in Section 3.4 |
| `S072` | 2 | 2023 | OCHA | Humanitarian Transition Overview 2023 Iraq |
| `S074` | 2 | 2023 | Triangle Consulting | Evaluation of UNICEF Support to Water Establishments — Lebanon |
| `S077` | 2 | 2025 | UNDP | Area-Based Development Practice Note |
| `S078` | 2 | 2023 | Heylen et al | Effectiveness of coordination in humanitarian WASH. GWC/Tufts |
| `S079` | 2 | 2025 | ACF & GWC | Field Support Team Consortium Annual Report 2024 |
| `S080` | 2 | 2024 | GWN | WASH Resilience, Conflict Sensitivity and Peacebuilding |
| `S016` | 1 | 2024 | Refugees International | Ukraine Localization Survey 2024 |
| `S019` | 1 | 2026 | IASC HWG | Guidance: Cluster Simplification and Adapting Coordination |
| `S023` | 1 | 2022 | OCHA | Somalia: Drought Situation Report No. 7 |
| `S024` | 1 | 2025 | OCHA | Subnational HCTs and ICCGs |
| `S025` | 1 | 2022 | ADE | Evaluation of EU humanitarian interventions |
| `S026` | 1 | 2023 | DG ECHO | Promoting Equitable Partnerships with Local Responders |
| `S028` | 1 | 2023 | Stoddard et al | Humanitarian Access SCORE Report: Haiti |
| `S031` | 1 | 2024 | OCHA | Syria Cross-border Humanitarian Fund Strategy |
| `S032` | 1 | 2018 | Global Shelter Cluster | Urban Compendium |
| `S034` | 1 | 2025 | UNDP | Area-Based Development Practice Note |
| `S035` | 1 | 2026 | UNDP | Operationalizing the HDP Nexus |
| `S058` | 1 | 2026 | UNICEF GCCS | Linking Cluster Coordination Deactivation to ABC in Cameroon |
| `S062` | 1 | 2026 | GCCG — Localisation Working Group | Sustaining Coordination Beyond Cluster Deactivation |
| `S064` | 1 | 2023 | UNICEF | Sector Financing Review: WASH sector in Iraq |
| `S067` | 1 | 2022 | Termes, M | CWG Transition Strategy — Iraq |
| `S068` | 1 | 2023 | Termes, M | CWG deactivation in Iraq (full report) |
| `S070` | 1 | 2025 | Global Protection Cluster & NRC | Practice Note: Continuity of Protection in Transitions |
| `S071` | 1 | 2024 | OCHA | Humanitarian Transition Overview 2024 Iraq |
| `S075` | 1 | 2025 | UNDP Lebanon | From Crisis to Recovery — Rapid Impact Assessment |
| `S076` | 1 | 2025 | IEO/UNDP | Reflections: HDP Nexus Approaches |
| `S081` | 1 | 2025 | NRC | Accelerated Transitions: Key takeaways |
| `S082` | 1 | 2025 | NRC | Post-transition planning Part 2 |

## Found in round 1

S015 ACTED · S017 and S059 OCHA Pulse · S021 Flagship Initiative · S027 IAHE Somalia ·
S033 and S056 ICVA · S041 Derzsi-Horváth typology · S048 ICVA localisation ·
S053 and S057 IASC guidance · S087 IASC checklist · S088 Stoddard cluster evaluation ·
S118 Cameroon health transition.

## Duplicates the round exposed

Searching for URLs surfaced three cases of one document registered twice, each of which
had been inflating strength counts:

- **S015 and S117** — the same ACTED paper. S117 was created during the search run
  without checking the registry first, which is Step 1 of `prompts/03`. Deleted, records
  retargeted to S015.
- **S034 and S077** — both UNDP's Area-Based Development Practice Note. Pre-existing.
- **S033 and S056** — both the ICVA *Coordination in Transition* study. Pre-existing.
- **S053 and S057** — both the IASC transition and deactivation guidance. Pre-existing.

The last three are now in a shared `source_group` so they count once. `build.py` warns
on any two sources sharing a title, so this cannot recur silently.

## Also worth checking while you are in there

- **S061 and S118** are both the Cameroon health cluster transition. Grouped as one
  source on the assumption they are the same body of work — if they are genuinely
  separate documents, remove the `source_group` from both.
- **S089** is a placeholder: *[Removed during validation — number not reassigned]*.
  It carries no records and could be deleted outright.
- **S013, S052** have no year recorded.
