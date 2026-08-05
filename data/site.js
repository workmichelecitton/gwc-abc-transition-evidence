window.SITE_DATA = {
 "about": {
  "_comment": "Edit this file to change the About tab. Never edit index.html for content.",
  "title": "What this is",
  "intro": "A live map of the evidence on Area-Based Coordination and Transition in humanitarian WASH coordination. It brings together what national clusters are telling us, what the published literature says, and what comes out of workshops — and shows where those sources agree, where they disagree, and where we simply do not know yet.",
  "sections": [
   {
    "heading": "What it is for",
    "body": [
     "Two things. First, to inform WASH cluster coordinators — country teams keep asking the same questions, and the answers exist, scattered across conversations and reports. Second, to give coordinators an evidence base they can use when negotiating coordination arrangements with OCHA, humanitarian country teams and their own agencies.",
     "It is not a guidance document. It is the evidence a guidance document would have to be built on."
    ]
   },
   {
    "heading": "How it is written",
    "body": [
     "Entries describe what happened and what followed from it, not who is at fault. Where a barrier has an obvious remedy, the entry points toward it.",
     "This is deliberate. Area-based coordination is still being designed, in most countries by people who are also trying to make it work. Evidence framed as a shared problem is more useful in a coordination meeting than the same evidence framed as an accusation — and the underlying finding is unchanged either way."
    ]
   },
   {
    "heading": "Where the evidence comes from",
    "list": [
     "Country conversations — check-ins with national clusters and coordination teams",
     "Secondary data reviews — published evaluations, studies and guidance",
     "Workshops — validation sessions and regional meetings",
     "Search updates — a periodic scan for new published material"
    ]
   },
   {
    "heading": "How it is organised",
    "body": [
     "The unit of data is an evidence record: one claim, from one source. Records that make the same point are grouped into a finding.",
     "So a finding is not one person's opinion. It is a claim, plus everything that supports it, plus a count of how many independent sources it rests on."
    ]
   }
  ],
  "strength_intro": "Strength is calculated, not asserted. Nobody types it in. It reflects only how many independent sources support a finding — not how confident anyone feels about it, and not how serious the problem is.",
  "strength": [
   {
    "level": "high",
    "rule": "Three or more independent sources, or two or more different types of source",
    "meaning": "Seen in several places. Safe to act on."
   },
   {
    "level": "medium",
    "rule": "Two independent sources",
    "meaning": "More than one country or document says this. Worth testing further."
   },
   {
    "level": "low",
    "rule": "One source",
    "meaning": "Reported once. Not wrong — just not yet corroborated. Most new evidence starts here."
   }
  ],
  "strength_note": "Two sources of different kinds — a country conversation and an evaluation, say — count for more than the same point made twice in two interviews. Independence is what matters, not volume.",
  "caveats": [
   "Most findings are currently low strength. That is expected while the evidence base is being built, and it is shown honestly rather than hidden.",
   "Coverage is uneven. Countries that have had a recent check-in are heavily represented; others are absent. Absence of evidence here is not evidence of absence.",
   "Barriers outnumber enablers. People raise problems more readily than things that are working, so read the balance with care.",
   "Verbatim quotes are held internally and are not published. Statements are neutral summaries, not the words anyone used.",
   "There is no single model of area-based coordination. Arrangements differ sharply between countries, so a finding from one context may not transfer."
  ],
  "footer_note": "Findings are traceable to a source ID in the Sources tab. If something looks wrong, it probably is — say so and it will be corrected."
 },
 "generated": "2026-08-05",
 "taxonomy_version": "0.4.0",
 "stats": {
  "records": 456,
  "findings": 355,
  "sources": 96,
  "countries": 25,
  "withheld_internal": 1
 },
 "taxonomy": {
  "_comment": "Controlled vocabularies. The build script rejects any value in evidence.csv that is not listed here. To add a value, add it here first, then use it. Keep this list short — every addition is a permanent filter option.",
  "version": "0.4.0",
  "updated": "2026-08-05",
  "theme": [
   {
    "value": "ABC",
    "label": "Area-Based Coordination"
   },
   {
    "value": "Transition",
    "label": "Transition"
   },
   {
    "value": "Both",
    "label": "ABC & Transition"
   }
  ],
  "type": [
   {
    "value": "barrier",
    "label": "Barrier",
    "definition": "Something that prevents, slows or undermines."
   },
   {
    "value": "enabler",
    "label": "Enabler",
    "definition": "Something that makes it work or makes it easier."
   },
   {
    "value": "recommendation",
    "label": "Recommendation",
    "definition": "A proposed action. Must be actionable by someone identifiable."
   },
   {
    "value": "practice",
    "label": "Practice",
    "definition": "Something actually done in a specific place. Descriptive, not evaluative."
   },
   {
    "value": "context",
    "label": "Context",
    "definition": "Background condition or trend. Use sparingly."
   }
  ],
  "level": [
   {
    "value": "global",
    "label": "Global"
   },
   {
    "value": "regional",
    "label": "Regional"
   },
   {
    "value": "national",
    "label": "National"
   },
   {
    "value": "subnational",
    "label": "Subnational"
   }
  ],
  "stream": [
   {
    "value": "transcript",
    "label": "Country conversation",
    "definition": "Interview or consultation with a national cluster or partner."
   },
   {
    "value": "sdr",
    "label": "Secondary data review",
    "definition": "Published document, report or evaluation."
   },
   {
    "value": "search",
    "label": "Search update",
    "definition": "Periodic horizon scan, per prompts/03."
   },
   {
    "value": "workshop",
    "label": "Workshop",
    "definition": "Group discussion, validation session, regional meeting."
   }
  ],
  "confidence": [
   {
    "value": "high",
    "label": "High",
    "definition": "Three or more independent sources, or two independent streams."
   },
   {
    "value": "medium",
    "label": "Medium",
    "definition": "Two independent sources."
   },
   {
    "value": "low",
    "label": "Low",
    "definition": "Single source. Not wrong — just not yet corroborated."
   }
  ],
  "visibility": [
   {
    "value": "public",
    "label": "Public",
    "definition": "Published to the site."
   },
   {
    "value": "internal",
    "label": "Internal",
    "definition": "Excluded at build time. Never reaches the published JSON."
   }
  ],
  "status": [
   {
    "value": "draft",
    "label": "Draft",
    "definition": "Extracted but not reviewed by a human."
   },
   {
    "value": "validated",
    "label": "Validated",
    "definition": "Checked against the source by a person."
   }
  ],
  "actors": [
   {
    "value": "cluster",
    "label": "Cluster / sector coordination"
   },
   {
    "value": "gov-national",
    "label": "National government"
   },
   {
    "value": "gov-local",
    "label": "Local government / authorities"
   },
   {
    "value": "donor",
    "label": "Donor"
   },
   {
    "value": "un-agency",
    "label": "UN agency"
   },
   {
    "value": "ingo",
    "label": "INGO"
   },
   {
    "value": "local-ngo",
    "label": "National / local NGO"
   },
   {
    "value": "community",
    "label": "Community / affected people"
   },
   {
    "value": "private-sector",
    "label": "Private sector / service provider"
   },
   {
    "value": "development",
    "label": "Development actor / IFI"
   },
   {
    "value": "ocha",
    "label": "OCHA / ICCG"
   },
   {
    "value": "operational-cell",
    "label": "Operational cell / intermediary body",
    "definition": "A coordination body sitting between area-based structures and the HC, distinct from clusters and from OCHA."
   }
  ],
  "tags": [
   {
    "value": "funding",
    "label": "Funding & financing"
   },
   {
    "value": "localisation",
    "label": "Localisation"
   },
   {
    "value": "government-engagement",
    "label": "Government engagement"
   },
   {
    "value": "coordination-architecture",
    "label": "Coordination architecture"
   },
   {
    "value": "information-management",
    "label": "Information management & data"
   },
   {
    "value": "capacity",
    "label": "Capacity & staffing"
   },
   {
    "value": "partnerships",
    "label": "Partnerships"
   },
   {
    "value": "aap",
    "label": "Accountability to affected people"
   },
   {
    "value": "nexus",
    "label": "Nexus & development linkages"
   },
   {
    "value": "sustainability",
    "label": "Service sustainability"
   },
   {
    "value": "advocacy",
    "label": "Advocacy"
   },
   {
    "value": "hpc",
    "label": "HPC & planning processes"
   },
   {
    "value": "performance",
    "label": "Performance monitoring"
   },
   {
    "value": "inclusion",
    "label": "Inclusion & vulnerable groups"
   },
   {
    "value": "markets",
    "label": "Markets & private sector"
   },
   {
    "value": "transition-handover",
    "label": "Transition & handover to government",
    "definition": "Handing coordination or services to national or local systems."
   },
   {
    "value": "staff-turnover",
    "label": "Staff turnover & continuity",
    "definition": "Loss of institutional memory when posts change hands. Not transition to government."
   },
   {
    "value": "geographic-targeting",
    "label": "Geographic targeting"
   },
   {
    "value": "multisector",
    "label": "Multi-sector / intersectoral"
   },
   {
    "value": "pooled-funds",
    "label": "Pooled funds & allocation",
    "definition": "CBPF/country-based pooled fund processes: prioritisation, allocation, cluster role."
   },
   {
    "value": "peer-learning",
    "label": "Peer learning & country exchange",
    "definition": "Country-to-country exchange, lesson visits, structured peer support."
   },
   {
    "value": "data-protection",
    "label": "Data protection & information sensitivity",
    "definition": "Classification of products, sensitive data exposure, dual-use risk, constraints on sharing or processing data."
   },
   {
    "value": "guidance",
    "label": "Guidance clarity & interpretation",
    "definition": "Availability, version control and contested interpretation of coordination guidance."
   }
  ],
  "_countries_comment": "ISO3. Unlisted codes produce a build warning, not an error — add them here to name them properly in the interface.",
  "countries": {
   "AFG": "Afghanistan",
   "BFA": "Burkina Faso",
   "BDI": "Burundi",
   "CMR": "Cameroon",
   "CAF": "Central African Republic",
   "TCD": "Chad",
   "COL": "Colombia",
   "COD": "Democratic Republic of the Congo",
   "SLV": "El Salvador",
   "ETH": "Ethiopia",
   "GTM": "Guatemala",
   "HTI": "Haiti",
   "HND": "Honduras",
   "IRQ": "Iraq",
   "JOR": "Jordan",
   "KEN": "Kenya",
   "LBN": "Lebanon",
   "LBY": "Libya",
   "MLI": "Mali",
   "MOZ": "Mozambique",
   "MMR": "Myanmar",
   "NER": "Niger",
   "NGA": "Nigeria",
   "PSE": "occupied Palestinian territory",
   "PAK": "Pakistan",
   "PHL": "Philippines",
   "SOM": "Somalia",
   "SSD": "South Sudan",
   "SDN": "Sudan",
   "SYR": "Syrian Arab Republic",
   "TUR": "Türkiye",
   "UKR": "Ukraine",
   "VEN": "Venezuela",
   "YEM": "Yemen",
   "ZWE": "Zimbabwe",
   "BGD": "Bangladesh",
   "AGO": "Angola",
   "MDG": "Madagascar",
   "MWI": "Malawi",
   "ECU": "Ecuador",
   "PER": "Peru",
   "AFR": "Africa (regional)",
   "MENA": "Middle East (regional)",
   "LAC": "Latin America & Caribbean (regional)",
   "ASIA": "Asia (regional)",
   "IDN": "Indonesia"
  },
  "source_type": [
   {
    "value": "evaluation",
    "label": "Evaluation"
   },
   {
    "value": "guidance",
    "label": "Guidance / framework"
   },
   {
    "value": "study",
    "label": "Study / research"
   },
   {
    "value": "report",
    "label": "Operational report"
   },
   {
    "value": "interview",
    "label": "Interview / consultation"
   },
   {
    "value": "workshop-notes",
    "label": "Workshop notes"
   },
   {
    "value": "strategy",
    "label": "Strategy / plan"
   },
   {
    "value": "article",
    "label": "Article / blog"
   }
  ]
 },
 "findings": [
  {
   "finding_id": "F001",
   "statement": "Where area-based structures report upward through a separate operational cell rather than to the cluster, the same needs information travels up and back down again, looping between two parallel structures.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "high",
   "n_records": 4,
   "n_sources": 4,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "SDN",
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ingo",
    "ocha",
    "operational-cell",
    "un-agency"
   ],
   "record_ids": [
    "E0013",
    "E0112",
    "E0113",
    "E0115"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Area structures and clusters often end up doing the same work twice",
    "plain": "Area-based structures and clusters frequently run in parallel rather than together. The same information gets collected twice, reported twice, or takes a long route before reaching anyone who can act on it. Partners carry the extra load.",
    "so_what": "Agree in writing who sends what to whom, and who decides what, before the structure starts work."
   }
  },
  {
   "finding_id": "F010",
   "statement": "Subnational cluster coordinators may attend area-based coordination meetings only if invited, leaving the cluster with no standing presence at district level.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "operational-cell",
    "un-agency"
   ],
   "record_ids": [
    "E0014",
    "E0015"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F011",
   "statement": "Area-based structures were established in roughly fifteen of twenty-one prioritised districts, leaving part of the prioritised caseload outside the new architecture.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "geographic-targeting"
   ],
   "actors": [
    "cluster",
    "ingo",
    "operational-cell"
   ],
   "record_ids": [
    "E0016"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F012",
   "statement": "Area-based coordination facilitators double-hat and are incentivised by their host organisations, so the structure runs on borrowed capacity rather than dedicated posts.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "sustainability"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0017"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F013",
   "statement": "Area-based coordination was introduced to counterbalance a coordination architecture perceived as UN-centred and out of touch with international and national NGOs and with communities at district level.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "aap",
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "cluster",
    "community",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0018"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F014",
   "statement": "For the 2027 planning cycle strategic objectives, severity and PIN analysis and budgeting were retained nationally, while needs contextualisation, response design and prioritisation moved to area-based forums.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "geographic-targeting",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0019"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F015",
   "statement": "Clusters had limited involvement in the first pooled fund allocation, and the indicator list issued to partners diverged from the indicators agreed in the sector operational framework.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL",
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "funding",
    "hpc",
    "performance",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0020",
    "E0377"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F016",
   "statement": "Clusters were asked to select priority districts from a pre-approved list, which left little room to propose alternatives based on access or observed need.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "funding",
    "hpc",
    "performance",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0021"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F017",
   "statement": "Subnational cluster coordinators were approached directly for allocation input without the national coordinator included, which made it harder for the cluster to present a single position.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "funding",
    "information-management",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0022",
    "E0023"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F018",
   "statement": "Withdrawal of a major bilateral donor triggered a reprioritisation cutting prioritised districts from sixty-five to twenty-one, which then set the geographic scope of area-based coordination.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "funding",
    "geographic-targeting"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0024"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F019",
   "statement": "Subnational coordination posts funded through lead agency partnership agreements are not being renewed, putting dedicated subnational capacity at risk just as the architecture is being redesigned.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 4,
   "n_sources": 3,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "BGD",
    "SDN",
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "funding",
    "staff-turnover",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor",
    "un-agency"
   ],
   "record_ids": [
    "E0025",
    "E0254",
    "E0259",
    "E0405"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Coordination posts are the first budget casualty",
    "plain": "Coordinator and information management posts are consistently cut before programme staff. Roughly half of WASH coordination and IM capacity globally has been affected, and subnational posts funded through partnership agreements are quietly not renewed.",
    "so_what": "Name coordination capacity as a protected line in agency budget discussions, before the review rather than during it."
   }
  },
  {
   "finding_id": "F020",
   "statement": "The cluster lead agency signalled an eventual handover of coordination to the line ministry without setting a timeline, prompting early informal engagement rather than a planned process.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0026"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F021",
   "statement": "Joint agenda setting with the line ministry and inviting ministry representatives to chair national coordination meetings moved government participation beyond opening and closing formalities.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0027"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F022",
   "statement": "A development-oriented WASH coordination platform carried a standing humanitarian agenda item, allowing humanitarian briefing to continue inside a development structure.",
   "theme": "Transition",
   "type": "practice",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "LBY",
    "SOM"
   ],
   "tags": [
    "government-engagement",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0028",
    "E0314"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "A humanitarian agenda item inside a development platform keeps the conversation alive",
    "plain": "Rather than building a new structure, coordination has been carried forward by attaching a standing humanitarian item to an existing development platform — keeping humanitarian issues visible in a body that will outlast the cluster.",
    "so_what": "Look for an existing development forum to attach to before proposing a new successor structure."
   }
  },
  {
   "finding_id": "F023",
   "statement": "Ministry counterparts were initially hesitant about taking on coordination responsibility because they expected an imminent transfer; framing transition as a phased process rather than a handover date reduced that hesitancy.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0029"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F024",
   "statement": "The coordination link at local government level is not yet in place: departments and the state water agency need mentoring and coaching before they can carry coordination, even though national arrangements are agreed.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "MOZ",
    "NGA",
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "government-engagement",
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0030",
    "E0297",
    "E0438"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Government engagement is uneven below the capital",
    "plain": "National-level counterparts may be fully engaged while district and state authorities take part without ever initiating anything. Readiness for handover is rarely uniform inside one country.",
    "so_what": "Assess transition readiness separately at each administrative level rather than reading national engagement as a proxy."
   }
  },
  {
   "finding_id": "F025",
   "statement": "A ministry focal point who had previously attended cluster coordination training understood cluster functions well, which made early transition discussions substantially easier.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0031"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F026",
   "statement": "Cluster coordinators asked for structured exchange with counterparts in other countries running area-based structures, to understand how the cluster-ABC relationship works elsewhere before redesigning their own.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "high",
   "n_records": 4,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR",
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "government-engagement",
    "peer-learning",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0032",
    "E0039",
    "E0070",
    "E0440"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Coordinators want to hear from each other, not just from guidance",
    "plain": "The same request comes up across very different contexts: put us in touch with countries facing what we are facing. Governments ask to visit places where transition has already happened; coordinators ask how the cluster–area relationship works elsewhere; neighbouring countries in one outbreak ask for a shared space.",
    "so_what": "Convene the exchange. It is cheap, it is repeatedly requested, and no guidance product substitutes for it."
   }
  },
  {
   "finding_id": "F027",
   "statement": "When coordination had to restart after a major flood, no record of prior technical decisions existed and technical working group discussions on sanitation options had to be repeated from the beginning.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "LBY",
    "SOM"
   ],
   "tags": [
    "capacity",
    "funding",
    "information-management",
    "staff-turnover",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0033",
    "E0241",
    "E0243"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "When people leave, the institutional memory goes with them",
    "plain": "Coordinators arrive with no handover note and reconstruct the picture from shared drives. Where coordination has stopped and restarted, records of past technical decisions have been lost entirely and the same discussions had to be held again from scratch.",
    "so_what": "Archive decisions, not just documents — and keep a copy somewhere a country-level closure cannot reach."
   }
  },
  {
   "finding_id": "F028",
   "statement": "The cluster has had no dedicated information management post this year, having previously been supported both by the refugee coordination platform and directly by the lead agency, and now relies on intermittent consortium and consultancy support.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "COL",
    "SOM"
   ],
   "tags": [
    "capacity",
    "funding",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0034",
    "E0240",
    "E0376"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Information management is cut first, and it is what you need most",
    "plain": "When budgets tighten, IM posts go before anything else — downgraded, left vacant, or replaced with volunteers. By the time a handover is actually being planned, the systems and the memory needed to plan it have already gone.",
    "so_what": "Protect IM capacity through the transition, and build the receiving side in parallel. Plan the IM handover before the cuts, not after."
   }
  },
  {
   "finding_id": "F029",
   "statement": "Public cluster dashboards and contact details went unupdated for months while partner reporting continued to arrive, indicating the constraint is analytical capacity rather than data availability.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0035"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F030",
   "statement": "Partners continued to report response data through the cluster 4W only, with area-based structures collecting assessment and prioritisation information but not response reporting, so the parallel structures did not create double reporting.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "record_ids": [
    "E0036"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F031",
   "statement": "A co-coordinating partner was selected through a published terms of reference, but a compliance concern paused the process, and the cluster is deciding whether to re-advertise or return to the original applicant list.",
   "theme": "Both",
   "type": "practice",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR",
    "NGA",
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "localisation",
    "partnerships",
    "staff-turnover"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0037",
    "E0069",
    "E0436"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Reopening co-coordination takes longer than anyone plans for",
    "plain": "Several clusters are competitively selecting or rotating a co-coordinating partner, often timed to a change in the coordination architecture. The process routinely stalls — on incumbency, on compliance checks, on a thin applicant pool.",
    "so_what": "Start the selection well before you need the post filled, and agree in advance what happens if the process pauses."
   }
  },
  {
   "finding_id": "F032",
   "statement": "Resistance to area-based coordination reflects how it was introduced rather than the concept itself, since community consultation and needs prioritisation were already standard practice among partners.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "aap",
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "cluster",
    "community",
    "ingo"
   ],
   "record_ids": [
    "E0038"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F033",
   "statement": "Subnational clusters were redefined as technical advisers to area structures and barred from holding routine standing meetings, restricting them to ad hoc topic-specific gatherings.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0040"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F034",
   "statement": "A zonal coordination layer chaired by the humanitarian coordination office replaced the subnational intersectoral tier, with clusters positioned as technical advisers to it.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0041"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F035",
   "statement": "All eleven area-based structures are chaired by local actors, placing national organisations formally at the head of district-level coordination.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "record_ids": [
    "E0042"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F036",
   "statement": "Paid area coordinator posts were created alongside the elected chairs and co-chairs, with job descriptions drafted centrally, which leaves the role of the elected leadership unclear.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "local-ngo",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0043"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F037",
   "statement": "Every area coordinator post across all eleven structures was awarded to one national NGO that is the nationalised affiliate of an international confederation, which raises a question about how localisation is defined in practice.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "localisation",
    "partnerships",
    "pooled-funds"
   ],
   "actors": [
    "ingo",
    "local-ngo",
    "ocha"
   ],
   "record_ids": [
    "E0044"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F038",
   "statement": "The area coordinator arrangement was not set out in published guidance, and the cluster learned of it informally before seeking confirmation.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0045"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F039",
   "statement": "With operational gap analysis moved off subnational platforms, no forum currently holds it during sudden emergencies, when partners need to know who is working where rather than which technical standard applies.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0046"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F040",
   "statement": "Information flow between area structures, subnational clusters and the intersectoral group is not yet defined, so the same information is requested in both directions and roles remain unsettled.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "guidance",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0047",
    "E0048"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F041",
   "statement": "Ambiguity about the new structure caused a double-hatting subnational focal point to stop convening partners altogether, including during an emergency, until the cluster clarified that he still could.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0049"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F042",
   "statement": "Partners in one area formally demanded that the previous subnational cluster arrangement be retained, and it was kept in place pending a decision.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0050"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F043",
   "statement": "Final versions of the national area-coordination guidance were not held by the cluster lead agency, and the cluster had to assemble a comparison against global guidance itself to establish what applied.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha",
    "un-agency"
   ],
   "record_ids": [
    "E0051"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F044",
   "statement": "A simple partner presence and gap analysis tool built by the cluster for area structures was well received, indicating demand for cluster technical support rather than rejection of the cluster role.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0052"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F045",
   "statement": "The cluster terms of reference were revised to cover current issues and a new thematic working group, but not area-based coordination, because the cluster was not approached about it.",
   "theme": "ABC",
   "type": "context",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR",
    "NER"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0053",
    "E0457"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F046",
   "statement": "Area structures take part in two rounds of consultation on severity scoring and may override the calculated score with local expert judgement, giving them real influence over the analysis.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "aap",
    "coordination-architecture",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0054"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F047",
   "statement": "Severity scores are computed centrally across clusters and returned to area level only for validation, with the cluster not involved in designing the indicators that feed them.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0055"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F048",
   "statement": "WASH was not prioritised in a pooled fund localisation allocation, obliging the cluster to lobby partners to embed WASH activities inside other sectors proposals.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "funding",
    "multisector",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "local-ngo",
    "ocha"
   ],
   "record_ids": [
    "E0056"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F049",
   "statement": "Local NGOs were added to a proposal review committee that had been composed only of international organisations, at the cluster's insistence.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "localisation",
    "partnerships",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0057"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F051",
   "statement": "The response plan scope excludes the recurrent hazard the cluster is actually responding to, on the grounds that it is seasonal and long-standing, leaving live operations outside the planning framework.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "geographic-targeting",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0059"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F052",
   "statement": "National and global guidance were interpreted differently on whether sectors may choose their own severity methodology, leaving the cluster unable to confirm what was permitted.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "guidance",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0060"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F053",
   "statement": "Vulnerability analysis presented previously was not taken up by partners: the framework was not widely understood, and what it prioritised did not always match what partners observed in the field.",
   "theme": "Both",
   "type": "barrier",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0061",
    "E0407"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F054",
   "statement": "Almost no partner assessments were shared with the cluster despite repeated requests, leaving very little material for a secondary data review.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "information-management",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0062"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F055",
   "statement": "Partner assessments cannot be processed with AI tools without anonymisation first, because of data confidentiality obligations the cluster is unwilling to breach.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0063"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F056",
   "statement": "An information sharing protocol required clusters to classify their products by sensitivity, and the exercise found sensitive material openly accessible on a shared drive.",
   "theme": "Both",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0064"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F057",
   "statement": "Sensitivity classification is harder for WASH than for other sectors because infrastructure locations and chemical stocks carry dual-use risk in a conflict setting.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0065"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F058",
   "statement": "Sub-national level data on violations is published openly on an external platform outside any cluster control, and cross-border information about the country cannot be governed by the in-country protocol at all.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0066"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F059",
   "statement": "A partner capacity building programme committed the cluster to fund, facilitate and deliver every requested training, scheduled across the planning peak, until the coordinator intervened to postpone it.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "capacity",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0067"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F100",
   "statement": "Set roles and accountability at core function level — Map the 6+1 cluster core functions one by one — which must remain with the cluster, which can be shared with ABC, and which can be delegated — and record who is accountable for each",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0071"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F101",
   "statement": "Reinforce the WASH analytical framework as a strategic resource — WIA, severity analysis, and AQA are not only technical tools — they are the evidence base that grounds cluster leadership, supports collective decision-making, and makes the case for WASH prioritization in HCT and inter-cluster…",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0072"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F102",
   "statement": "Propose a minimum terms of reference and performance framework for area structures — A standard requiring a designated WASH focal point with defined technical escalation rights, and a performance framework equivalent to cluster coordination performance monitoring, would give both sides a shared reference.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0073",
    "E0074"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F103",
   "statement": "Support the annual review of coordination structure needs — Raise this jointly with other cluster coordinators in the ICCG, so decisions on activating, scaling or deactivating area structures rest on operational assessment rather than inertia.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0075"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F104",
   "statement": "Position the cluster as the analytical framework owner — The cluster provides the framework;",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0076"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F105",
   "statement": "Clarify roles, mandates, and escalation pathways at country level — Advocate within the HCT and ICCG for a structured mapping of who does what at each coordination level, with clear escalation pathways for technical and strategic issues",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0077"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F106",
   "statement": "Engage UNICEF as Cluster Lead Agency from the first HCT meeting on ABC — UNICEF’s formal HCT responsibilities include shaping how ABC is configured and resourced",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0078"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F107",
   "statement": "Maintain direct engagement with line ministries — Sustaining a direct relationship with government counterparts — independent of ABC structures — is necessary to protect the cluster’s standing in higher-level coordination discussions and to reaffirm the technical leadership of the WASH Cluster",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0079"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F108",
   "statement": "Work with OCHA on transparent deactivation criteria — Coordination structures are formally reviewed each year; making that review systematic, and publishing the criteria behind deactivation decisions, would give countries a predictable basis for planning.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0080"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F109",
   "statement": "Defend coordination capacity within the Cluster Lead Agency — Coordinator and IM posts are consistently the first cut in budget reductions, and deactivation has been used as a budget instrument",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0081"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F110",
   "statement": "Build the global preparedness and re-activation architecture — Embed coordination checkpoints in EPP guidance and the digital EPP platform;",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0082",
    "E0083"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F111",
   "statement": "Issue guidance on deactivation thresholds and successor scoping — Coordinators asked for practical guidance on when government-led coordination is realistic — including partner-count and complexity thresholds (a government can coordinate six partners;",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 3,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0084",
    "E0085",
    "E0086"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F112",
   "statement": "Lead the transition conversation — do not wait for it — Develop a costed transition plan with agreed readiness indicators and benchmarks early, through a transition working group with key actors",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0087"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F113",
   "statement": "Run the stakeholder and willingness analysis before drafting the strategy — Map who could receive coordination functions — ministries as they actually divide WASH, civil protection, development platforms, national institutions with durable funding — and assess capacity, financing, neutrality,…",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0088",
    "E0089"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F114",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "high",
   "n_records": 7,
   "n_sources": 5,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "nexus",
    "partnerships",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0090",
    "E0091",
    "E0092",
    "E0093",
    "E0094",
    "E0095",
    "E0096"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Find out early who could take the work on",
    "plain": "Handover needs a receiver. Development programmes, national water utilities and development banks work on much longer funding horizons than humanitarian actors, but they have to be identified and brought in well before the humanitarian response starts winding down.",
    "so_what": "Map potential successors at the start of the response, not at the point of exit."
   }
  },
  {
   "finding_id": "F115",
   "statement": "Secure a senior political directive — Ministry-by-ministry engagement fails without instruction from the top: work through the ICCG, OCHA and the HC/RC to obtain senior government direction for the transition, and engage the UNICEF Representative early on the CLA's continuing accountabilities (S33)",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national",
    "ocha"
   ],
   "record_ids": [
    "E0097"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F116",
   "statement": "Categorize and align IM assets from response onset — Distinguish what aligns with government systems from the start (master facility lists, asset inventories), what transfers quickly (3W/4W in receiving-friendly formats), what requires long capacity building, and what should not transfer",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 3,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0098",
    "E0099",
    "E0100"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F117",
   "statement": "Put dedicated transition capacity in place — Request a twelve-month transition advisor working with the chief of WASH and the coordinator;",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0101",
    "E0102"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F118",
   "statement": "Protect WASH integrity in the successor governance — Where sub-sector mandates are split across ministries, negotiate explicit custody for hygiene and water quality, and promote one-WASH programme approaches — joint plans, budgets and pooled funds across water, sanitation and hygiene — as the…",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "sustainability",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0103",
    "E0104"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F119",
   "statement": "Plan re-activation before deactivation — Embed coordination in the country EPP, run annual preparedness refreshers with the successor structure, keep contact lists and surge awareness alive, and agree in writing who convenes — and who calls for help — when the next emergency hits (S32;",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0105",
    "E0106"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F200",
   "statement": "Even where integrated area-based approaches are formally adopted, coordination stays constrained at implementation level because actors, sectors and delivery mechanisms are not aligned.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0107"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F201",
   "statement": "The need to create dedicated structures such as a drought strategic working group and community resource centres shows that existing coordination systems could not support integrated multi-sectoral assistance.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "AFG"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0108"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F202",
   "statement": "Drought response revealed uneven sectoral delivery, with actors operating in the same areas without harmonised planning frameworks.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "record_ids": [
    "E0109"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F203",
   "statement": "Parallel coordination and implementation channels persist despite the formal presence of coordination structures.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "YEM"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0110"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F204",
   "statement": "Transition processes exposed subnational coordination gaps where national-level frameworks did not translate into effective operational coordination on the ground.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IDN"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0111"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F206",
   "statement": "Area-based units were activated across the country with no standard mandate, and those structures then approached clusters to ask what they were supposed to do.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0114"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F208",
   "statement": "Introducing area-based coordination added complexity in countries that already had a humanitarian country team, and where parallel processes emerged, accountability for the response became harder to maintain.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0116"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F209",
   "statement": "Area-based coordination remained functionally complementary to cluster coordination in those cases where roles and linkages between the two were formalised.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0117"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F210",
   "statement": "Because each humanitarian coordinator may configure coordination independently, a different version of area-based coordination is negotiated in every context; the resulting governance gaps are a design consequence, not an implementation failure.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0118"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F211",
   "statement": "The absence of shared data systems and harmonised assessment frameworks limits joint analysis and prioritisation across actors.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0119"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F212",
   "statement": "Fragmented data flows and parallel information systems prevent effective information sharing, producing duplication and inefficiency in response planning.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0120"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F213",
   "statement": "Insufficient information management capacity within coordination systems is a key constraint on overall coordination effectiveness.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0121"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F214",
   "statement": "The cluster 5W sits on a platform built in-country and shared with other sectors; with a new central module also asking partners to report, it is unresolved whether partners should continue filling the cluster system, both, or neither.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "high",
   "n_records": 4,
   "n_sources": 4,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "NER",
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ingo",
    "ocha"
   ],
   "record_ids": [
    "E0122",
    "E0123",
    "E0408",
    "E0456"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Two reporting systems means partners report everything twice",
    "plain": "Where a central platform is introduced alongside a cluster reporting system, partners end up entering the same activity in both. Reporting is the first thing partners drop when overloaded, so the data quality falls in both systems rather than one.",
    "so_what": "Before adopting a second system, agree an interface between them — and keep the sector calculation with the people who understand how it is built."
   }
  },
  {
   "finding_id": "F215",
   "statement": "Area-based structures develop divergent needs assessment approaches — different survey methodologies, indicator selection and analytical thresholds — which reduces data comparability and limits aggregated analysis.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 3,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0124",
    "E0125",
    "E0126"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F216",
   "statement": "Common technical validation mechanisms are absent, including consistent application of severity thresholds and area-level assessment criteria.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 3,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0127",
    "E0128",
    "E0129"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F217",
   "statement": "Parallel data architectures can emerge outside cluster frameworks and gain traction, which shifts the cluster's position as analytical reference point before any formal coordination change has taken place.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0130"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F218",
   "statement": "If area-based structures collect field data and the cluster has no real-time access to it, the cluster loses its ability to analyse and to advocate — two functions area-based structures cannot replicate.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0131"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F219",
   "statement": "Inconsistencies between national strategies and subnational implementation frameworks limit coherence and inclusiveness.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0132",
    "E0133",
    "E0134"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "National strategies and local frameworks do not always line up",
    "plain": "Strategies written nationally and the frameworks used to implement them locally often do not match, so coordination that looks coherent on paper works less well in practice.",
    "so_what": "Test whether a national strategy can be delivered by the structures that actually exist locally before it is signed off."
   }
  },
  {
   "finding_id": "F220",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "high",
   "n_records": 5,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0135",
    "E0136",
    "E0137",
    "E0138",
    "E0139"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Technical decisions need a technical home",
    "plain": "Choices that need sector expertise — which indicators to use, how to assess, which standard applies — are increasingly taken in area structures that do not have technical staff. This matters more for WASH than for most sectors, because errors in water quality or cholera response cause harm quickly.",
    "so_what": "Agree which technical decisions stay with the cluster and set out a route for escalating a technical question. Neither side benefits from leaving this unwritten."
   }
  },
  {
   "finding_id": "F221",
   "statement": "Local actors participated in coordination structures but had limited influence over decisions and resources.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "UKR"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0140"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F222",
   "statement": "Implementation of area-based pilots depended heavily on external facilitation rather than local capacity.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "ingo",
    "operational-cell"
   ],
   "record_ids": [
    "E0141"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F223",
   "statement": "Subnational coordination gaps constrained nexus-based planning.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "coordination-architecture",
    "nexus"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0142"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F224",
   "statement": "Local actors have limited access to funding, to decision-making spaces and to long-term institutional support, which persistently undermines equitable partnership.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "localisation",
    "partnerships"
   ],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "record_ids": [
    "E0143",
    "E0144"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F225",
   "statement": "All eighteen state cluster coordinator posts are filled by double-hatting staff, in several cases alongside an NGO co-coordinator, so subnational coordination runs entirely on borrowed capacity.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 5,
   "n_sources": 4,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "MMR",
    "NGA",
    "SDN"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ingo",
    "un-agency"
   ],
   "record_ids": [
    "E0058",
    "E0145",
    "E0146",
    "E0404",
    "E0441"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Coordination below national level runs on borrowed time",
    "plain": "Almost nowhere has dedicated staff for coordination below national level. The work is added to people who already have full-time operational jobs, and where posts do exist they are among the first affected when budgets tighten.",
    "so_what": "Budget subnational coordination as a post rather than an extra duty, and plan for what happens when double-hatting reaches its limit."
   }
  },
  {
   "finding_id": "F226",
   "statement": "A cluster coordinator was expected to attend meetings across three concurrent area-based structures, with the platforms absorbing coordination time without commensurate operational gain.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0147"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F227",
   "statement": "Area-based structures frequently operate without agreed rules on who participates, who decides and how priorities are set. In the absence of those rules, influence tends to follow voice and resources rather than mandate.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "ingo",
    "operational-cell"
   ],
   "record_ids": [
    "E0148",
    "E0149"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F229",
   "statement": "Terms of reference contain no requirement for area-based focal points to hold technical capacity matching response priorities.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "guidance"
   ],
   "actors": [
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0150"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F230",
   "statement": "There is no performance framework for area-based structures equivalent to cluster coordination performance monitoring, so there is currently no agreed basis for assessing how well they are working.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0151"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F231",
   "statement": "There is no agreed inter-agency definition or guidance for area-based coordination, and without structured learning across operations, country teams repeat work already done elsewhere.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "ocha"
   ],
   "record_ids": [
    "E0152"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F232",
   "statement": "An area-based structure secured a technically correct standard that the cluster had been unable to advance through advocacy — the right outcome, reached outside the cluster's technical channels, which shows both the potential and the missing escalation route.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "UKR"
   ],
   "tags": [
    "advocacy",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0153"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F233",
   "statement": "Funding allocation strategies show the difficulty of aligning financial flows with area-based targeting and priorities.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SYR"
   ],
   "tags": [
    "funding",
    "geographic-targeting",
    "pooled-funds"
   ],
   "actors": [
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0154"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F234",
   "statement": "Funding remains largely centralised, limiting the ability of local actors to engage meaningfully in coordination and implementation.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "localisation"
   ],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "record_ids": [
    "E0155"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F235",
   "statement": "The need to establish dedicated coordination platforms reflects the absence of embedded funding mechanisms to support integrated coordination approaches.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "AFG"
   ],
   "tags": [
    "coordination-architecture",
    "funding"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0156"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F236",
   "statement": "There is a lack of dedicated resources for coordination functions themselves, as distinct from programme delivery.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "funding"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0157"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F237",
   "statement": "Funding mechanisms linked to area-based structures may sit outside established coordination structures, which can affect collective prioritisation and overall coherence.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "funding",
    "pooled-funds"
   ],
   "actors": [
    "donor",
    "operational-cell"
   ],
   "record_ids": [
    "E0158"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F238",
   "statement": "Uneven funding across sectors creates disparities in coordination capacity, with some clusters maintaining dedicated field coordinators while others rely on partial or seconded staffing.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "funding"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0159",
    "E0160"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F239",
   "statement": "Under current resource constraints, advocating for area-based coordination resourcing and advocating for sector response funding have become competing rather than complementary asks on the same diminished pool.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "YEM"
   ],
   "tags": [
    "advocacy",
    "funding"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0161"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F240",
   "statement": "Partners engage with coordination platforms because pooled fund allocations sit behind them; as area-based structures take on prioritisation, partner engagement migrates to wherever allocation power resides.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "funding",
    "pooled-funds"
   ],
   "actors": [
    "ingo",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0162"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F241",
   "statement": "International organisations tasked with building local area-based capacity operate on very short-term and volatile funding envelopes, which undercuts the sustained engagement capacity development requires.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "funding",
    "localisation"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0163"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F242",
   "statement": "Material costs are a structural barrier limiting national and local NGO participation and leadership in area-based coordination, rather than an incidental detail.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "localisation"
   ],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "record_ids": [
    "E0164"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F243",
   "statement": "The terms of reference and the accompanying guidance differ on who is responsible for resourcing area-based structures, which leaves country coordinators without a clear basis for funding conversations.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0165"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F244",
   "statement": "In some contexts, decisions requiring sector expertise — indicator selection, assessment methodology, response modality — are taken in structures that do not have technical staff.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0166",
    "E0167"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F245",
   "statement": "Indicators and assessment methods not suited to specialised responses, including cholera and public health, have been applied in area-based settings.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0168",
    "E0169"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F246",
   "statement": "Quality assurance within area-based structures is weak or absent — limited technical review of assessment tools, inconsistent adherence to sector minimum standards, and no mechanism for technical escalation to cluster leadership.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 3,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0170",
    "E0171",
    "E0172"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F247",
   "statement": "Coordinators across several contexts are asking what needs to be in place before handing functions to area-based structures so that WASH capacity is retained, and the question does not yet have a settled answer.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0173"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F248",
   "statement": "Area-based programming generally adhered to cluster technical guidance, and where subnational cluster coordination was weak or absent, area-based coordination provided feedback on the suitability of technical standards.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0174"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F249",
   "statement": "A drought strategic working group and community resource centres supported multi-sector coordination and improved alignment of interventions at local level.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "AFG"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0175"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F250",
   "statement": "Decentralised, operationally focused subnational platforms improve responsiveness and the ability to adapt to local needs.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0176"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F251",
   "statement": "Deploying dedicated coordination leadership at subnational level improves actor alignment, strengthens engagement with local authorities and enables bottom-up planning.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0177"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F252",
   "statement": "Area-based development approaches show how decentralised systems can integrate planning across sectors and improve responsiveness to local priorities.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MOZ"
   ],
   "tags": [
    "multisector",
    "nexus"
   ],
   "actors": [
    "development",
    "gov-local"
   ],
   "record_ids": [
    "E0178"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F253",
   "statement": "Shifting decision-making authority to local level, where supported by inclusive structures, generates more context-appropriate solutions.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation"
   ],
   "actors": [
    "gov-local",
    "local-ngo"
   ],
   "record_ids": [
    "E0179"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F254",
   "statement": "Localisation of coordination raises uneven technical capacity at subnational level, inconsistent quality assurance across areas, and exposure of coordination priorities to local political dynamics.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation",
    "performance"
   ],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "record_ids": [
    "E0180",
    "E0181"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F255",
   "statement": "A major drought scale-up was anchored by five operational coordination hubs with dedicated subnational cluster capacity and district-level area coordination groups, positioning coordination where delivery happened.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0182"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F256",
   "statement": "Area-based coordination enabled agencies with strong local presence to lead joint access negotiations with armed groups and community members, a function only locally anchored coordination can perform.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "HTI"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "actors": [
    "community",
    "local-ngo"
   ],
   "record_ids": [
    "E0183"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F257",
   "statement": "Recruiting and training subnational cluster coordinators working in the national language proved highly constructive for local coordination quality.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MMR"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0184"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F258",
   "statement": "Area-based models facilitated participation by subnational authorities, local and national NGOs and affected people, but participation alone rarely increased their ability to influence the response.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "aap",
    "localisation"
   ],
   "actors": [
    "community",
    "local-ngo"
   ],
   "record_ids": [
    "E0185"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F259",
   "statement": "Local ownership was achieved only where international actors supported local decision-making processes rather than running their own.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0186"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F260",
   "statement": "Where local actors have formal presence without decision-making power, the platform adds reporting workload without giving them influence over priorities or resources.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "record_ids": [
    "E0187"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F261",
   "statement": "Conducting coordination in the local language transformed the quality of participation, allowing local actors to raise issues and flag priorities in ways national-level platforms in other languages did not permit.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MMR",
    "PSE"
   ],
   "tags": [
    "aap",
    "localisation"
   ],
   "actors": [
    "community",
    "local-ngo"
   ],
   "record_ids": [
    "E0188",
    "E0189"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F262",
   "statement": "Improved data sharing is associated with better coordination and more coherent prioritisation of needs.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0190"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F263",
   "statement": "Harmonised assessment frameworks and shared data systems are critical to enabling joint analysis and coordinated decision-making.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0191"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F264",
   "statement": "A working division of labour has the cluster providing the analytical framework, area-based structures collecting data within it, and the cluster analysing and feeding results back into joint planning — already operational in one context and validated as replicable.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0192"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F265",
   "statement": "A well-configured area-based structure, with the cluster retaining the analytical function, can close the loop between needs assessment, planning, delivery and monitoring back to what people actually preferred.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "aap",
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "community"
   ],
   "record_ids": [
    "E0193"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F266",
   "statement": "Integrated programming across sectors was achieved where coordination mechanisms were operationally strong enough to support joint planning and delivery.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0194"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F267",
   "statement": "Area-based coordination can serve as a platform for cross-sector collaboration and nexus integration where coordination mechanisms are clearly defined and operationally supported.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "multisector",
    "nexus"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0195",
    "E0196"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F268",
   "statement": "Area-based approaches achieved strong multisectoral linkages because they are multisectoral by design, with dedicated funding enabling sequenced and controlled responses.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "multisector"
   ],
   "actors": [
    "donor",
    "operational-cell"
   ],
   "record_ids": [
    "E0197"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F269",
   "statement": "Adapting camp coordination to area-based approaches outside camp settings positions coordination to support not only first response but the transition toward durable solutions.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "multisector",
    "transition-handover"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "record_ids": [
    "E0198"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F270",
   "statement": "Area-based platforms enabled real-time tracking of delivery against population needs and preferences.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "aap",
    "information-management"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "record_ids": [
    "E0199",
    "E0200"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F271",
   "statement": "Skilled mobile outreach teams with diverse skill sets, working closely with all communities and population groups, provide a concrete delivery mechanism for community feedback.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "aap",
    "inclusion"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "record_ids": [
    "E0201"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F272",
   "statement": "Affected people could influence planning decisions where the coordination modality was explicitly designed for it, and had limited influence otherwise — design rather than structure determines accountability.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "aap"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "record_ids": [
    "E0202"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F273",
   "statement": "Feedback mechanisms should reach the local actors implementing at area level, not only those coordinating at national level.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "aap",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0203"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F274",
   "statement": "Where area-based structures are not absorbed by active response, they can anchor local risk monitoring and preparedness between crisis peaks, building the relationships and situational awareness coordination needs before an emergency.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "gov-local",
    "operational-cell"
   ],
   "record_ids": [
    "E0204"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F275",
   "statement": "Area-based structures addressed contingency planning among their inter-agency functions, and in one context supported government-led flood preparedness with structured capacity building for local authorities.",
   "theme": "ABC",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SSD"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "actors": [
    "gov-local",
    "operational-cell"
   ],
   "record_ids": [
    "E0205"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F276",
   "statement": "Where area-based structures already lack basic coordination capacity, adding a preparedness function is unrealistic and should not be pursued at the expense of core coordination.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0206"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F280",
   "statement": "Coordination often remains procedural rather than operational, which limits its ability to support integrated service delivery.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0207"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F281",
   "statement": "Effectiveness depends less on whether an area-based structure exists than on how it is configured: where mandates are clear, the information architecture is sound and technical accountability for WASH is preserved, it works.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0208"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F282",
   "statement": "Role clarity across national, subnational and sectoral tiers is often insufficient, which limits how well the tiers work together.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0209",
    "E0210",
    "E0211"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Who does what across the three levels is often unclear",
    "plain": "National, subnational and area structures frequently lack a shared statement of who leads what, with what mandate. The gaps and overlaps only become visible once something needs deciding quickly.",
    "so_what": "Map roles and escalation routes across the levels early — it is far easier to agree before a structure is under pressure."
   }
  },
  {
   "finding_id": "F283",
   "statement": "Shifts from internationally led to nationally anchored systems can create governance gaps in which coordination functions are duplicated or lost.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0212",
    "E0213",
    "E0214"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Handover creates gaps unless functions are tracked",
    "plain": "When coordination shifts from internationally led to nationally anchored systems, some functions get duplicated and others quietly disappear because nobody has listed what was being done in the first place.",
    "so_what": "List coordination functions and name who holds each one, before the shift rather than during it."
   }
  },
  {
   "finding_id": "F284",
   "statement": "Financial flows remain largely centralised, sector-specific or project-based, which limits their ability to support cross-sector coordination, subnational planning and sustained local engagement.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "funding"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0215"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F285",
   "statement": "Integration across sectors does not follow automatically from the presence of coordination structures; it requires deliberate alignment of sectoral priorities, joint planning processes and operational collaboration.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0216"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F286",
   "statement": "Three cluster functions cannot be replicated by area-based structures: technical leadership, data analysis, and sector-level advocacy. These are the starting point for deciding what to share and what to retain.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "advocacy",
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0217"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F287",
   "statement": "Improve interoperability between coordination mechanisms, information systems and implementation pathways so that joint planning and delivery become possible.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0218"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F288",
   "statement": "Invest in technical, institutional and operational capacity at local level through realistic staffing models, reducing reliance on double-hatting and temporary arrangements.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0219"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F289",
   "statement": "Treat information management as core coordination infrastructure: harmonise data systems, improve interoperability, establish common technical validation, and enable joint analysis.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0220"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F290",
   "statement": "Simplify and clarify terms of reference and governance frameworks so that roles, accountability and alignment between national, subnational and area levels are explicit.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "record_ids": [
    "E0221"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F291",
   "statement": "Preserve residual technical governance functions within sectors even under area-based models, with clear escalation pathways.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0222"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F292",
   "statement": "Establish minimum sectoral standards, technical review mechanisms and quality assurance processes within area-based coordination frameworks.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "guidance",
    "performance"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0223"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F293",
   "statement": "Align funding mechanisms with area-based approaches: support integrated programming, ensure resources reach subnational actors, and fund both operational and technical coordination functions.",
   "theme": "ABC",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0224"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F300",
   "statement": "Transitions weaken coordination where successor structures are not defined and the links between local, national and sectoral platforms are not established before responsibilities move.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0225"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F301",
   "statement": "Redistributing coordination functions across several successor arrangements creates a fragmentation risk unless roles and linkages between them are explicitly managed.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0226"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F302",
   "statement": "Newly established area-based structures covered only part of the displaced population after transition, leaving coverage gaps that were discovered after the handover.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "geographic-targeting",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0227"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F303",
   "statement": "Several coordination layers operating at once produced duplication and made operational accountability harder to locate.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0228"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F304",
   "statement": "Humanitarian coordination ran separately from government systems rather than integrating into them, which stalled the move to national leadership.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IDN"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0229"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F305",
   "statement": "Declining information management staffing and weak inter-cluster coordination reduce the quality of coordination architecture during handovers.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0230"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F306",
   "statement": "Service delivery continuity suffers in protracted transitions where coordination arrangements change without a defined successor.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "sustainability",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0231"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F307",
   "statement": "Government structures rarely mirror the WASH sector: water may sit with a water resources ministry, sanitation with health, and hygiene promotion with neither, so there is no single counterpart to receive the handover.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0232",
    "E0233"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Government rarely has a WASH-shaped hole to hand over to",
    "plain": "Governments seldom organise themselves the way the sector does. Water may sit with one ministry, sanitation with another, hygiene with neither. There is often no single counterpart able to receive a WASH handover, and hygiene is what tends to fall through the gap.",
    "so_what": "Map the government architecture as it actually is before planning a handover, and negotiate explicit custody for hygiene and water quality."
   }
  },
  {
   "finding_id": "F308",
   "statement": "A transition handed water and sanitation to the water authority and hygiene and water quality to the health ministry, a split the successor coordination never fully bridged.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "HTI"
   ],
   "tags": [
    "government-engagement",
    "sustainability",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0234"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F309",
   "statement": "Where government does not recognise WASH as a single sector, there is no obvious successor platform, and without a well-named one, several parallel platforms tend to develop.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "coordination-architecture",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0235"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F310",
   "statement": "Formal deactivation was never discussed, but the architecture was reduced from a two-level platform to a single subnational hub while the response target was halved — transition by attrition, without a transition framework.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MOZ"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0236"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F311",
   "statement": "The shift toward new coordination structures generated immediate risks of fragmented and parallel reporting systems.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0237"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F312",
   "statement": "Maintaining an accurate evidence base proved difficult as transition dynamics evolved.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0238"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F313",
   "statement": "Sustaining information flows proved difficult as coordination mechanisms restructured.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0239"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F316",
   "statement": "An information management post was requested inside the line ministry so that government holds its own capacity, co-leads the function and helps define what the role covers ahead of the handover.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0242",
    "E0437"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Build the receiving side while you still have your own",
    "plain": "A handover needs someone on the other side who can actually run the function. Where an information management post is requested inside the ministry early, government ends up holding its own capacity rather than inheriting products it cannot maintain.",
    "so_what": "Ask for a counterpart post while cluster capacity still exists to mentor it. Two people through the handover, not one after it."
   }
  },
  {
   "finding_id": "F318",
   "statement": "The government co-lead has no information management function at all, and coordinators identified an embedded IM post plus capacity building as the minimum precondition for any transition.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0244",
    "E0245"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F319",
   "statement": "Where the response plan is not the language of government, data often is: information management support that adds value to the government own reporting gains traction where coordination advocacy does not.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "advocacy",
    "government-engagement",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0246",
    "E0455"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Data is the language government actually speaks",
    "plain": "Response plans and coordination arguments often do not travel well into government. Data does. Where the cluster produces information that is useful to a ministry, government comes looking for it — and that conversation opens doors that coordination advocacy on its own does not.",
    "so_what": "Lead with something the ministry needs: a facility map, an asset inventory, a dataset it can use. Build the relationship on that rather than on the coordination architecture."
   }
  },
  {
   "finding_id": "F320",
   "statement": "Information management assets can be sorted deliberately: those to align with government systems from the start, such as master facility lists and asset inventories; those that transfer quickly, such as partner activity data in a receiving-friendly format; and those too complex or not relevant to transfer.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0247",
    "E0378"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Sort your data before you have to hand it over",
    "plain": "Not everything transfers. Some products should be built jointly with government from the start, some can move quickly if reformatted, and some are too complex or simply not relevant to the receiver. Sorting them early turns a scramble into a handover.",
    "so_what": "Inventory what the cluster holds and mark each item: align now, transfer later, or retire. Do it while there is still IM capacity to do it."
   }
  },
  {
   "finding_id": "F321",
   "statement": "Governments work bilaterally and will not adopt cluster tools, so the minimum practical action is to understand and map the government information management system even without participating in it.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0248",
    "E0249"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F322",
   "statement": "Without predictable resources, local authorities often lack both the interest and the financial capacity to absorb coordination and service delivery costs.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "donor",
    "gov-local"
   ],
   "record_ids": [
    "E0250"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F323",
   "statement": "Structural public finance constraints compromised the long-term sustainability of essential WASH services after transition.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "sustainability"
   ],
   "actors": [
    "donor",
    "gov-national"
   ],
   "record_ids": [
    "E0251"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F324",
   "statement": "Transition planning secured sustained development financing for transition support structures, reducing the risk of a funding-driven closure.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "UKR"
   ],
   "tags": [
    "funding",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0252"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F325",
   "statement": "Abrupt withdrawal of coordination financing was identified as a specific risk to successor viability.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0253"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F327",
   "statement": "Coordinator positions were abolished as the mechanism for meeting a budget reduction of fifteen to twenty per cent.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SYR"
   ],
   "tags": [
    "capacity",
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0255"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F328",
   "statement": "A coordination review was framed from the outset around the absence of funding rather than around operational need, which set its conclusion in advance.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0256"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F329",
   "statement": "The stated basis for deactivation is needs and capacity, but funding now acts as a third and undeclared factor, with coordination posts among the first reduced inside the cluster lead agency.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "ocha",
    "un-agency"
   ],
   "record_ids": [
    "E0257",
    "E0258"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F331",
   "statement": "Coordinators expect deactivation to be read by donors as confirmation of disengagement from an already under-funded emergency.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "advocacy",
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0260"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F332",
   "statement": "International humanitarian funding fell from around 1.8 billion to 265 million US dollars, which forced an accelerated transition.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "donor"
   ],
   "record_ids": [
    "E0261"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F333",
   "statement": "Deactivation was triggered by funding shortage rather than by the operational readiness of national systems.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0262"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F334",
   "statement": "Large donor reductions, including the termination of a substantial majority of one major donor grant portfolio, pushed the sector into accelerated and involuntary transitions.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "donor",
    "ingo"
   ],
   "record_ids": [
    "E0263"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F335",
   "statement": "Funding-driven transition sits upstream of the other barriers: it drives weak planning, broken sequencing and fragmentation at the same time.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0264"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Money, not readiness, is setting the timetable",
    "plain": "Deactivation decisions are increasingly driven by funding shortfalls rather than by whether national systems are ready to take over. This sits upstream of most other problems: it compresses planning, breaks sequencing and fragments the architecture all at once.",
    "so_what": "Separate the deactivation decision from the budget cycle, and say plainly in HCT and EDG discussions when a timetable is funding-driven rather than readiness-driven."
   }
  },
  {
   "finding_id": "F336",
   "statement": "Transition plans were developed before actors had agreed transition criteria, which produced misaligned planning and premature deactivation commitments.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0265"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F337",
   "statement": "Rapid transition processes systematically weaken inclusive planning.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0266"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F338",
   "statement": "Transition planning proposed a six-month post-handover mentoring phase with quarterly reviews.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0267"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F339",
   "statement": "Planning sequencing was explicitly linked to financing continuity rather than treated as a separate exercise.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "UKR"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0268"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F340",
   "statement": "Transitions launched without sufficient planning time, agreed criteria or post-handover support systematically underperform.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0269",
    "E0270"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F341",
   "statement": "Transition discussions began years before the decision, but the deactivation decision itself came only months before the end, by which point opportunities to prepare had been lost.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0271"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F342",
   "statement": "Government formation delays, protests and cancelled meetings meant the transition timeline never held, and securing genuine government engagement took over a year.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0272"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F343",
   "statement": "A three-month support window forced the transition strategy to be drafted before the stakeholder capacity analysis was done, and it emerged mid-process that it was unclear to the designated successor institution why it should lead WASH coordination at all.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "HND"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0273",
    "E0274"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F344",
   "statement": "The expectation that every cluster develops a transition plan within three months of activation has in practice not been implemented.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0275"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F345",
   "statement": "Clusters are frequently kept active well beyond the emergency phase to fill long-term sectoral gaps, which complicates defining an endpoint, and governments may resist deactivation because clusters also function as resource mobilisation channels.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0276"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F346",
   "statement": "A costed transfer plan was prepared with a risk analysis and an inventory of information resources, to be validated by the humanitarian coordinator, and deliberately framed as a transition rather than a deactivation.",
   "theme": "Transition",
   "type": "practice",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "advocacy",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0277",
    "E0379"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "A transition plan is also your best defence",
    "plain": "A costed plan with agreed readiness indicators does two jobs. Where conditions are met it enables an orderly handover. Where they are not, it lets you show concretely why not — which is the strongest argument against a closure driven by budget rather than readiness.",
    "so_what": "Write the plan early, even if deactivation is not on the table. Frame it as transition, not closure, and get the criteria agreed before the plan is drafted."
   }
  },
  {
   "finding_id": "F347",
   "statement": "Coordination structures invite local actors to meetings without giving them real decision-making power.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0278"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F348",
   "statement": "Local organisations remain marginal in the design of transition itself, as distinct from its implementation.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0279"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F349",
   "statement": "Community involvement in transition planning and implementation was limited.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "aap",
    "localisation"
   ],
   "actors": [
    "cluster",
    "community"
   ],
   "record_ids": [
    "E0280"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F350",
   "statement": "Localisation commitments are not consistently translated into operational authority for local actors.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0281",
    "E0282",
    "E0283"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Localisation commitments have not become real authority",
    "plain": "Local actors are consistently present in coordination but consistently without decision-making power, direct funding access, or influence over how transitions are designed. This shows up the same way across very different contexts.",
    "so_what": "Make localisation measurable in transition criteria — a seat, a budget line, and a named decision it can actually take."
   }
  },
  {
   "finding_id": "F351",
   "statement": "The closure of the NGO coordination committee significantly weakened collective NGO coordination.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0284"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F352",
   "statement": "Cost differentials make localisation an attractive framing for a response whose funding is falling, while the pooled funding that national NGOs would need remains a small share of the response and largely inaccessible to them.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "BGD"
   ],
   "tags": [
    "funding",
    "localisation",
    "pooled-funds"
   ],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "record_ids": [
    "E0285"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F353",
   "statement": "Abolished national staff positions are re-emerging as newly created local NGOs, which raises the question of whether localisation is moving faster than capacity and safeguards can follow.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "local-ngo",
    "un-agency"
   ],
   "record_ids": [
    "E0286"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F354",
   "statement": "Capacity building for local successor actors should cover technical skills including emergency preparedness, logistics and supply, finance and human resources, community approaches, operational capacity such as transport, and fundraising.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CAF"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0287"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F355",
   "statement": "Structural power imbalances and language barriers, including the absence of translated materials, prevent local actors from participating in or leading coordination.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "inclusion",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0288"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F356",
   "statement": "Successor reporting systems should be lean, digital and mobile-first rather than replicas of cluster tools, because local actors will not sustain cluster-format reporting.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0289"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F357",
   "statement": "National actors lacked clear information about the roles and mandates they were expected to take on.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0290"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F358",
   "statement": "Key government officials lacked practical experience with formal humanitarian coordination.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IDN"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "actors": [
    "gov-national"
   ],
   "record_ids": [
    "E0291"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F359",
   "statement": "There was no operational coordination mandate at subnational level for the successor arrangement to rest on.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "UKR"
   ],
   "tags": [
    "coordination-architecture",
    "government-engagement"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0292"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F360",
   "statement": "Weak local implementation capacity translated directly into uneven service delivery.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "capacity",
    "sustainability"
   ],
   "actors": [
    "gov-local",
    "local-ngo"
   ],
   "record_ids": [
    "E0293"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F361",
   "statement": "The co-leading ministry has effectively one trained focal point who understands what a cluster is, no information management function, and no ministry of humanitarian action, so deactivation this year would leave no coordination in place.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0294",
    "E0295"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F362",
   "statement": "Years of advocacy produced a government emergency WASH cell with a small technical secretariat shadowing the cluster team, but it has no access to the intersectoral group, partners are hesitant to engage it directly, and its focus defaults to coordinating government activities and direct implementation.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "BFA"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0296"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F364",
   "statement": "Key informants for the needs analysis were departmental water and sanitation directors, but almost all had just been rotated into new posts when the questionnaire went out, so responses were difficult to use and the gap had to be filled by a cluster workshop.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 3,
   "n_sources": 3,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "COL",
    "KEN",
    "NER"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "hpc",
    "staff-turnover",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-local",
    "gov-national"
   ],
   "record_ids": [
    "E0298",
    "E0375",
    "E0454"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "One reshuffle can undo a year of transition work",
    "plain": "Government engagement is usually built with particular people. When a ministry reorganises or an election moves the whole team, the relationship goes with them and the case for coordination has to be made again from the beginning, often to officials who do not yet see the point.",
    "so_what": "Anchor the relationship in something institutional — a signed terms of reference, a named unit, a documented process — not in the individuals you happen to know."
   }
  },
  {
   "finding_id": "F365",
   "statement": "Capacity is not a stock that transition builds once but a flow that staff rotation continuously drains, which is why institutional anchoring matters more than training individuals.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "government-engagement",
    "staff-turnover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0299"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F366",
   "statement": "Government is not willing to take over the response for certain population groups. Coordinators distinguished this from capacity, and transition planning currently offers no answer to it.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "LBN"
   ],
   "tags": [
    "government-engagement",
    "inclusion",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0300"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F367",
   "statement": "Transition to a ministry led to allocation decisions following political alignment and reduced transparency toward donors, and the sector had to be re-established around two years after handover.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "donor",
    "gov-national"
   ],
   "record_ids": [
    "E0301"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F368",
   "statement": "Where government is a party to the conflict, handing coordination to it would create access and acceptance problems with non-state armed actors that the current arrangement avoids.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0302"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F369",
   "statement": "An eventual government lead is structurally difficult for inter-agency coordination to accommodate, including access to the intersectoral group and constraints on information sharing.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SYR"
   ],
   "tags": [
    "data-protection",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "gov-national",
    "ocha"
   ],
   "record_ids": [
    "E0303"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F370",
   "statement": "Ministries declined to engage in transition until a directive came from the head of government, secured through engagement at humanitarian coordinator level.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "advocacy",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "gov-national",
    "ocha"
   ],
   "record_ids": [
    "E0304"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F371",
   "statement": "Transferring services directly to state authorities can expose groups with perceived political or ethnic affiliations.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "inclusion",
    "transition-handover"
   ],
   "actors": [
    "community",
    "gov-national"
   ],
   "record_ids": [
    "E0305"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F372",
   "statement": "Government directives on camp closure forced premature returns, and state documentation and assistance frameworks excluded families with perceived affiliations.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "government-engagement",
    "inclusion"
   ],
   "actors": [
    "community",
    "gov-national"
   ],
   "record_ids": [
    "E0306",
    "E0307"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F373",
   "statement": "The transition endpoint cannot be assumed to be government. Depending on context it may be a national institution with durable funding and a formal civil protection role, a development coordination pathway, continued sectoral leadership by the lead agency — or an honest conclusion that no transition is currently viable.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "government-engagement",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "development",
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0308"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F374",
   "statement": "A transition that proceeds without a viable, neutral and willing counterpart does not transfer coordination but dissolves it, and the system pays a second time when reactivation becomes necessary.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0309"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F375",
   "statement": "The transition was anchored by a formal durable solutions coordination structure.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0310"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F376",
   "statement": "The coordination mandate was embedded in government through a dedicated durable solutions secretariat.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "gov-national"
   ],
   "record_ids": [
    "E0311"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F377",
   "statement": "The subnational architecture was adapted through a multisectoral area-based arrangement.",
   "theme": "Both",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "multisector",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0312"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F378",
   "statement": "The successor working group had a written terms of reference, clearly identified participants including the line ministry and development banks, and alignment with the development cooperation framework — basics coordinators credit for its survival.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "LBY"
   ],
   "tags": [
    "coordination-architecture",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0313"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F380",
   "statement": "The successor working group was paired with leadership continuity: the NGO co-lead maintained a full-time national co-coordinator after the international coordinator departed.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "capacity",
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0315"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F381",
   "statement": "Avoid creating additional structures — integrate the early recovery agenda within existing sectoral coordination.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SYR"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0316"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F382",
   "statement": "Transition is better understood as building a partnership than as closing a structure, which includes naming and scoping the successor platform around what government actually wants to coordinate.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0317"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F383",
   "statement": "International organisations shifted to supporting existing local leadership rather than maintaining parallel systems.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IDN"
   ],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0318"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F384",
   "statement": "Locally anchored coordination arrangements were explored as part of the transition design.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0319"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F385",
   "statement": "Where local coordination forums are lost during transition, rebuilding those networks is slow and incomplete.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0320"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F386",
   "statement": "A national co-coordinator drawn from a Sudanese NGO supports the team, and a second is planned, both to ease workload and to give local NGOs a national counterpart they can approach directly.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "IRQ",
    "SDN"
   ],
   "tags": [
    "capacity",
    "localisation",
    "partnerships",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0321",
    "E0406"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "A national co-coordinator is what carries the process through",
    "plain": "Where a national co-coordinator is in place, anchored in a local organisation, coordination survives the departure of international staff and local partners have someone they can approach directly. It is the single most reliable continuity mechanism in the evidence.",
    "so_what": "Establish a national co-coordination post early and fund it beyond the international coordinator’s contract."
   }
  },
  {
   "finding_id": "F387",
   "statement": "Embedding coordination capacity directly in the ministry worked because the request came from government: the responsible cabinet secretary asked for an embedded coordination support position, recruited through third-party contracting.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "KEN"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "localisation"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0322"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F388",
   "statement": "Formally appointing local NGOs as co-chairs of coordination forums measurably increases wider local participation.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "localisation",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0323"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F389",
   "statement": "Embedding international staff within regional and local government structures builds capacity while avoiding costly parallel sub-offices.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "government-engagement",
    "localisation"
   ],
   "actors": [
    "gov-local",
    "ingo"
   ],
   "record_ids": [
    "E0324"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F390",
   "statement": "Government-funded coordination positions were established as a precondition, which exposed the harder problem of holding embedded staff accountable to coordination terms of reference inside a government hierarchy.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "KEN"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "performance"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0325"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F391",
   "statement": "Institutional memory was preserved by archiving cluster files and maintaining continuous online access to them.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0326",
    "E0327"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F392",
   "statement": "A centralised, government-owned aid information management system was established.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "SOM"
   ],
   "tags": [
    "government-engagement",
    "information-management"
   ],
   "actors": [
    "gov-national"
   ],
   "record_ids": [
    "E0328"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F393",
   "statement": "Integrating information management functions into national systems was prioritised in the transition plan.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "government-engagement",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0329"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F394",
   "statement": "Master lists of WASH facilities and infrastructure asset inventories, built jointly so they remain useful to government after transition, are best started at the beginning of a response rather than at its end.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "PSE"
   ],
   "tags": [
    "government-engagement",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0330"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F395",
   "statement": "Cluster products should be backup-archived at global level, beyond the reach of a country-level deactivation, so technical decisions do not have to be reconstructed if coordination restarts.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "LBY"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0331",
    "E0332"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F396",
   "statement": "Continued technical accompaniment provides a necessary safety net for newly established successor mechanisms.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0333"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F397",
   "statement": "Transition planning mandated retention of residual functions — quality assurance, technical standards and risk analysis — alongside a proposed six-month post-handover mentoring phase.",
   "theme": "Transition",
   "type": "practice",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "CMR"
   ],
   "tags": [
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0334",
    "E0335"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F398",
   "statement": "A twelve-month advisory position was opened to help all sectors work through transition, and transition advisers are being considered for deployment to selected settings.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "ETH"
   ],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0336"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F399",
   "statement": "A two-year seconded position was financed through development programme funds to accompany the successor structure.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "IRQ"
   ],
   "tags": [
    "funding",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0337"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F400",
   "statement": "A support package for transitioning countries includes a transition chapter in the coordination toolkit, training for coordination teams, customisable in-country training for the authorities who will coordinate after deactivation, a helpdesk with in-country support, and standby partner deployments.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "peer-learning",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0338"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F401",
   "statement": "Dedicated external surge teams managing complex handovers to government entities, and direct mentoring of national cluster co-facilitators, are documented enablers of sustainable handover.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0339"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F402",
   "statement": "A community of practice connecting coordinators currently in transition would carry learning between countries, given how similar the questions are.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "peer-learning",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0340"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F403",
   "statement": "Coordination platforms cycle rather than end: one has moved between government leadership, national society leadership and reactivation through a flash appeal; another restarted two years after deactivation for a major flood; a third was re-established after collapse.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "KEN",
    "LBY",
    "PSE"
   ],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0341",
    "E0342"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F404",
   "statement": "Embed coordination explicitly in emergency preparedness plans, including digital preparedness platforms, so that preparedness reviews automatically ask who convenes and who does information management in the next emergency.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0343"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F405",
   "statement": "Run annual preparedness refreshers with transitioned countries — contact lists, and awareness of global surge options — so the system stays reactivatable.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "peer-learning",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0344"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F406",
   "statement": "Use quarterly horizon scans as the trigger for proactive outreach to transitioned countries at risk of a new emergency.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0345"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F407",
   "statement": "Preparedness capacity building is well received by governments and works as an entry point for sustaining engagement with successor structures.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0346"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F408",
   "statement": "Localised contingency planning, physical stockpiling and regular training enable faster and more effective emergency response.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "localisation"
   ],
   "actors": [
    "gov-local",
    "local-ngo"
   ],
   "record_ids": [
    "E0347"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F409",
   "statement": "A government emergency response committee structure, well defined nationally for floods, cyclones and cholera, is replicable at district level and can carry WASH coordination readiness inside government systems.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "MOZ"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "actors": [
    "gov-local",
    "gov-national"
   ],
   "record_ids": [
    "E0348"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F410",
   "statement": "Post-transition preparedness obligations sit with the cluster lead agency as much as with government: sectoral emergency readiness accountability remains even where no cluster exists.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "transition-handover"
   ],
   "actors": [
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0349"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F411",
   "statement": "Transition creates WASH-specific risks distinct from general coordination fragmentation: maintaining water systems where technical capacity sits with cluster-supported partners, supply chain continuity for treatment and hygiene items, and the provider of last resort function for cholera response.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "sustainability",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0350"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F412",
   "statement": "Replacing emergency water trucking with solarised piped systems cut water supply costs from 11.38 to 0.93 US dollars per cubic metre — the kind of investment that makes service continuity financially viable after transition.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "ETH"
   ],
   "tags": [
    "funding",
    "sustainability",
    "transition-handover"
   ],
   "actors": [
    "development",
    "gov-local"
   ],
   "record_ids": [
    "E0351"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F413",
   "statement": "Currency collapse left water establishments unable to fund basic operations even after internationally financed repairs, showing that continuity depends on the counterpart financial viability and not only on infrastructure.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "LBN"
   ],
   "tags": [
    "funding",
    "sustainability"
   ],
   "actors": [
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0352"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F414",
   "statement": "Area-based coordination is a coordination configuration rather than a transition endpoint; transferring cluster functions to area structures without preserved technical custody reproduces the risks documented in both reviews.",
   "theme": "Both",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0353"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F415",
   "statement": "Humanitarian actors remain within short-term funding cycles while development actors hold the long-term funding, which is the structural mismatch behind most failed handovers.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "development",
    "donor"
   ],
   "record_ids": [
    "E0354"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F416",
   "statement": "Recovery financing can remain blocked for years where political deadlock stalls reform agendas.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "LBN"
   ],
   "tags": [
    "funding",
    "nexus"
   ],
   "actors": [
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0355"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F417",
   "statement": "Use leverage at capital level for development bank financing, and treat host-community programming as the bridge portfolio between humanitarian and development funding.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 2,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [
    "BGD"
   ],
   "tags": [
    "funding",
    "nexus"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "record_ids": [
    "E0356",
    "E0357"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F418",
   "statement": "Six functions should be explicitly assigned and resourced after deactivation: technical standards custody, analysis and prioritisation, information management, partner mapping, risk analysis and preparedness, and provider of last resort.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "medium",
   "n_records": 3,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0358",
    "E0359",
    "E0360"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F419",
   "statement": "Area-based coordination can increase operational fragmentation when functional links to national systems and sectoral coordination remain weak.",
   "theme": "Both",
   "type": "barrier",
   "strength": "high",
   "n_records": 4,
   "n_sources": 4,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "record_ids": [
    "E0361",
    "E0362",
    "E0363",
    "E0364"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Area-based coordination is a configuration, not a destination",
    "plain": "Area structures can strengthen local engagement and multi-sector work, but they are not somewhere a cluster can hand its functions to and stop. Where the links back to national systems and sector coordination are weak, moving functions across increases fragmentation rather than resolving it.",
    "so_what": "If functions move to an area structure, name who keeps technical custody and how it connects upward — treat it as a configuration change, not a transition endpoint."
   }
  },
  {
   "finding_id": "F420",
   "statement": "Deactivating clusters while response plan objectives remain active creates operational gaps unless funding, partner presence and successor arrangements are adjusted at the same time.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "hpc",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0365"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F421",
   "statement": "Design successor architectures with written mandates, named participants and formalised links to national and development frameworks before deactivation.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0366"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F422",
   "statement": "Begin transition planning at response onset, with criteria agreed before plans are drafted and timelines that assume slippage.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0367"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F423",
   "statement": "Decouple deactivation decisions from funding exhaustion and secure development financing for coordination continuity.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "nexus",
    "transition-handover"
   ],
   "actors": [
    "development",
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0368"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F424",
   "statement": "Treat information management as core infrastructure with its own transition strategy, named custodians and archives.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0369"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F425",
   "statement": "Convert localisation commitments into authority, funding access and usable tools for local actors.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "funding",
    "localisation"
   ],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "record_ids": [
    "E0370"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F426",
   "statement": "Rather than assuming what ministry capacity gaps are, the cluster commissioned a capacity gap analysis first, on the basis that describing capacity as weak says nothing about what support would actually help.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "high",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 2,
   "streams": [
    "sdr",
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-local",
    "gov-national"
   ],
   "record_ids": [
    "E0371",
    "E0439"
   ],
   "unmerged": false,
   "highlight": {
    "headline": "Find out what \"weak capacity\" actually means before designing support",
    "plain": "Ministry capacity is routinely described as weak without anyone specifying weak at what. A capacity gap analysis done before the support package is designed avoids training people in things they can already do while missing what they cannot.",
    "so_what": "Run the gap analysis first. Let it define the support, rather than fitting the assessment around a package you have already chosen."
   }
  },
  {
   "finding_id": "F427",
   "statement": "Retain technical standards custody, analysis, partner mapping, risk analysis and provider of last resort in explicit successor arrangements.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0372"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F428",
   "statement": "The gap between the pace of formal deactivation and the pace of operational readiness is the core driver of transition difficulty across contexts.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0373"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F429",
   "statement": "Successful WASH transition cases remain far less documented than failures, which biases the available evidence base toward what goes wrong.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "sdr"
   ],
   "countries": [],
   "tags": [
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0374"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F500",
   "statement": "Transition preparation began with a documentation exercise reconstructing how the cluster was formed and how earlier transitions went, combined with a partner survey on expectations and recommendations.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0380"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F501",
   "statement": "When the regulatory water ministry proved not to be operational during emergencies, the cluster shifted its transition counterpart to the health ministry, which works directly with municipalities on water quality, vector control, sanitation and hygiene.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0381"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F502",
   "statement": "The proposed successor is a specialised technical roundtable inside an existing inter-institutional environmental health commission, which already brings together the water ministry, the health ministry and national research institutes, serving as both an operational and an advisory body.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "coordination-architecture",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0382"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F503",
   "statement": "A change of national government froze transition dialogues, with the incoming administration signalling a reduction in the number of government entities and its position on humanitarian cooperation not yet known.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0383"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F504",
   "statement": "The cluster set three explicit conditions for its position that it should transition rather than deactivate: humanitarian needs have worsened rather than improved, government capacity that is strong nationally is not matched at territorial level where recurrent emergencies overwhelm resources, and needs persist.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "government-engagement",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0384"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F505",
   "statement": "The separate refugee and migrant response plan is being discontinued and merged into a single response plan, with refugees and migrants included only where they intend to remain, and no regional refugee plan will follow.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "coordination-architecture",
    "hpc"
   ],
   "actors": [
    "cluster",
    "ocha",
    "un-agency"
   ],
   "record_ids": [
    "E0385"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F506",
   "statement": "A short implementation window of four to six months led almost all partners to prioritise distribution of critical supplies over rehabilitation or system improvement, because longer works were not feasible in the time available.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "funding",
    "pooled-funds",
    "sustainability"
   ],
   "actors": [
    "donor",
    "ingo",
    "un-agency"
   ],
   "record_ids": [
    "E0386"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F507",
   "statement": "A twelve-month implementation window in the next funding round is expected to allow more integrated work and sustained presence rather than rapid distribution.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "funding",
    "sustainability"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0387"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F508",
   "statement": "Clusters were consulted in the second allocation round, asked to submit a matrix recommending municipalities together with substantive observations, after having raised the omission from the first round.",
   "theme": "ABC",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "advocacy",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0388"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F509",
   "statement": "Life-saving criteria should extend beyond supply distribution to include contributions to protective environments — water and sanitation in schools, shelters and temporary accommodation — so that funded actions are intersectoral rather than dispersed.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "advocacy",
    "multisector",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0389"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F510",
   "statement": "The cluster recommended including municipalities at the second-highest severity level where armed conflict had recently intensified or where gaps in child health and preventable mortality persisted, rather than restricting allocations to the highest severity band alone.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "geographic-targeting",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0390"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F511",
   "statement": "Rapid entries into and exits from communities, driven by the need to reach the highest-severity municipalities within a short window, carry a risk of unintended harm — a point the cluster raised with the donor.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "aap",
    "pooled-funds"
   ],
   "actors": [
    "community",
    "donor",
    "ingo"
   ],
   "record_ids": [
    "E0391"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F512",
   "statement": "Partners reported instances of infant formula being distributed without complementary water and sanitation activities, which reduces the benefit of the nutrition intervention and can introduce health risk.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "aap",
    "multisector"
   ],
   "actors": [
    "ingo",
    "un-agency"
   ],
   "record_ids": [
    "E0392"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F513",
   "statement": "Armed group control of territory confines communities and restricts movement, cutting access to rivers and water sources and forcing reliance on unsafe storage, with documented increases in infectious disease; indigenous and Afro-descendant communities in the Pacific region are the most affected.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "geographic-targeting",
    "inclusion"
   ],
   "actors": [
    "community",
    "local-ngo"
   ],
   "record_ids": [
    "E0393"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F514",
   "statement": "The main humanitarian donor for the sector prioritises protection, health and education, funding very little WASH directly and concentrating instead on intersectoral coordination and information.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "funding"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "record_ids": [
    "E0394"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F515",
   "statement": "Multi-sector needs assessment has not been run for around three years because the country has substantial official data, and the sector calculation does not rely on it.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0395"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F516",
   "statement": "The cluster must now produce the refugee and migrant disaggregation itself, a function previously carried by the separate refugee coordination platform, without additional capacity.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "capacity",
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0396"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F517",
   "statement": "Data needed to estimate refugee and migrant needs sits in a national government social registry that the cluster has found difficult to obtain access to.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "government-engagement",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0397"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F518",
   "statement": "The cluster documents its severity and needs methodology and publishes it openly alongside the results, so the basis of the calculation is available to anyone who questions it.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "hpc",
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0398"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F519",
   "statement": "A partner agency challenged the sector needs methodology across several clusters as reflecting poverty rather than humanitarian need; the cluster defended it on the basis that it combines conflict exposure, disaster incidence and public health indicators alongside service coverage.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "hpc",
    "performance"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0399"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F520",
   "statement": "Strong working relationships with the protection and shelter clusters allow WASH to be positioned as an enabling sector for others, which matters where the crisis is characterised primarily as a protection crisis.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "multisector",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "record_ids": [
    "E0400"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F521",
   "statement": "Temporary accommodation is set up quickly under national disaster arrangements, and gender and child-specific considerations, along with shelter and WASH standards, are not always applied consistently.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "government-engagement",
    "inclusion"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0401"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F522",
   "statement": "Gender and sexual and reproductive health areas of responsibility have been heavily defunded, and education was excluded from both allocation rounds on the grounds that its activities are not life-saving.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "funding",
    "inclusion",
    "multisector"
   ],
   "actors": [
    "donor",
    "ocha"
   ],
   "record_ids": [
    "E0402"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F523",
   "statement": "Where a technical study would document vulnerability publicly, its timing should be agreed with the incoming government first, since publishing during a change of administration can undermine the transition relationship it is meant to support.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "COL"
   ],
   "tags": [
    "advocacy",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0403"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F600",
   "statement": "State-level expert judgement is built into the severity and needs analysis alongside the survey results, because data quality and the pace of change make survey data alone unreliable and the eighteen state coordination platforms hold genuine field knowledge.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "hpc",
    "information-management",
    "localisation"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0409"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F601",
   "statement": "Running the expert judgement exercise as a single process covering needs figures, vulnerability analysis and planning together engages state coordinators in the analysis rather than presenting them with a finished product.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0410"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F602",
   "statement": "An assessment of more than sixteen hundred water points, heading toward twenty-two hundred, was presented to a government-development water task force with an accompanying dashboard.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "government-engagement",
    "information-management",
    "nexus"
   ],
   "actors": [
    "cluster",
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0411"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F603",
   "statement": "Facility and asset mapping is among the most effective bridges to development actors, because it produces something they need and creates a shared table where sector coordination otherwise has none.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "government-engagement",
    "information-management",
    "nexus"
   ],
   "actors": [
    "cluster",
    "development",
    "gov-national"
   ],
   "record_ids": [
    "E0412"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F604",
   "statement": "Recruiting state-level information management support has stalled, with previous surge deployments and overall coordination staffing levels both weighing on the decision.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "capacity",
    "information-management"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0413"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F605",
   "statement": "The profile needed for state-level information management is hard to fill because the work is not a short emergency deployment: it connects to systems transitioning and to how the cluster will function in future, so it needs someone embedded, in-country and speaking the national language.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "capacity",
    "localisation",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0414"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F606",
   "statement": "A central reporting platform launched mid-year asks partners to upload projects retroactively from the start of the year, which is difficult alongside the reporting systems already in use.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ingo",
    "ocha"
   ],
   "record_ids": [
    "E0415"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F607",
   "statement": "Replacing cluster reporting with a central system changes beneficiary counting, indicators and data flow at once, and raises a question about where responsibility for defining how sector results are measured should sit..",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0416"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F608",
   "statement": "WASH beneficiary calculation is context-specific — a water yard serves a set number of people in one country and a different number elsewhere, and source types differ between contexts — so a single standardised reporting model risks misrepresenting what the sector delivered.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0417"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F609",
   "statement": "Where a cluster has a functioning reporting system, an interface bridging it to the central platform would avoid partners reporting twice while keeping the sector calculation with the people who understand it.",
   "theme": "Both",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0418"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F610",
   "statement": "Having a cluster coordinator in every one of the eighteen states, which no other cluster has, gives the sector enough technical standing to push back when fragmented parallel structures are proposed.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0419"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F611",
   "statement": "Some states moved to create a separate outbreak coordination platform with its own information management, which the cluster raised concerns about, given how many coordination structures are already in place.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0420"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F612",
   "statement": "Between sixty-five and seventy partners are registered nationally but more operate in practice, and state platforms carry their own partners who are not always connected to the national platform.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "coordination-architecture",
    "information-management",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "record_ids": [
    "E0421"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F613",
   "statement": "The most recent census predates the current crisis by close to a decade, so there is no reliable baseline against which needs can be measured.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0422"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F614",
   "statement": "Outbreak coordination cannot be run nationally because epidemiological information is too fragmented to arrive in time, so it has to be organised state by state — in practice coordinating eighteen separate outbreaks with their own data, partners and supply chains.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0423"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F615",
   "statement": "A weekly outbreak coordination training for state coordinators is being delivered alongside development of the guidance and tools it teaches, tailored to the context but potentially reusable elsewhere.",
   "theme": "Both",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "capacity",
    "peer-learning"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0424"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F616",
   "statement": "Rules on collecting location data differ between states, with coordinates permitted in some and prohibited in others, which constrains outbreak response planning.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0425"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F617",
   "statement": "Water systems are repeatedly targeted in areas of active conflict, so service continuity is interrupted by attack as well as by funding or capacity.",
   "theme": "Both",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "sustainability"
   ],
   "actors": [
    "cluster",
    "community"
   ],
   "record_ids": [
    "E0426"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F618",
   "statement": "The pooled fund prioritisation exercise required localities to be selected within forty-eight hours using a model the cluster had reservations about, on the understanding it could be refined later; in practice the initial selection has held for the year.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "geographic-targeting",
    "hpc",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0427"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F619",
   "statement": "Applying geographic prioritisation to emergency supplies works against the objective where needs are dispersed: prepositioned stock needs to reach any pocket of need, and outbreaks are now occurring in localities that were not prioritised and cannot be supplied.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "geographic-targeting",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0428"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F620",
   "statement": "A written explanation of the cluster's concerns with the prioritisation methodology did not change the approach for that allocation; an after-action review is now underway, which offers a route to revisit it.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "advocacy",
    "performance",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0429"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F621",
   "statement": "A single strategic outcome set at humanitarian coordinator level gives the allocation coherence, while leaving sector gaps that sit outside its scope still needing a funding route.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "funding",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0430"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F622",
   "statement": "The pooled fund grant management system offers outputs and indicators structured only around water, sanitation and hygiene, with no public health framing, which makes it difficult to frame an outbreak response within the reporting structure, and can direct otherwise appropriate activities to the wrong locations.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [],
   "tags": [
    "information-management",
    "performance",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0431"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F623",
   "statement": "Adding public health outcomes and indicators to pooled fund reporting structures would let outbreak response be planned and measured as transmission reduction rather than as separate water, sanitation and hygiene outputs.",
   "theme": "Both",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [],
   "tags": [
    "performance",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0432"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F624",
   "statement": "Development and reconstruction finance from development banks is channelled through UN agencies because it cannot be given directly to government, creating a parallel and much larger funding stream alongside the humanitarian one.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "funding",
    "nexus"
   ],
   "actors": [
    "development",
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0433"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F625",
   "statement": "After a survey exposed water supply gaps, a bilateral donor funded six semi-decentralised systems designed to exit water trucking, with a joint cluster concept note, a steering committee overseeing installation, and explicit decisions on operating costs and whether management would be community-based or utility-run.",
   "theme": "Transition",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "funding",
    "nexus",
    "partnerships",
    "sustainability"
   ],
   "actors": [
    "cluster",
    "community",
    "donor",
    "un-agency"
   ],
   "record_ids": [
    "E0434"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F626",
   "statement": "A six-month cluster report brings together response progress, coordination progress, financial status, the core supply pipeline, a facility assessment and partner case studies in a single product.",
   "theme": "Both",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "SDN"
   ],
   "tags": [
    "information-management",
    "performance"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0435"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F700",
   "statement": "Transition to government-led coordination began at the start of the year, with the line ministry taking the lead supported by an NGO co-coordinator, on a timetable running to the end of the following year.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "coordination-architecture",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national",
    "ingo"
   ],
   "record_ids": [
    "E0442"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F701",
   "statement": "Training of trainers for state facilitators and co-coordinators had to be delivered remotely rather than in person because of funding constraints, before a five-day session with state representatives.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "funding"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0443"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F702",
   "statement": "Ministry staff nominated to lead coordination do not yet hold the skill sets the role needs, and a five-month deployment was arranged to build them.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "gov-national",
    "un-agency"
   ],
   "record_ids": [
    "E0444"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F703",
   "statement": "A state advisory group is to endorse the transition plan and provide continuing oversight, so that the arrangement is formalised within the ministry rather than resting on individual relationships.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "government-engagement",
    "performance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0445"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F704",
   "statement": "Ministry staff taking on coordination need training on emergency preparedness and response planning, contingency planning and aligned monitoring tools, not only on coordination mechanics.",
   "theme": "Transition",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "record_ids": [
    "E0446"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F705",
   "statement": "The multi-sector needs assessment is led by a national NGO, which has run the country assessment programme for several years in place of an international assessment partner.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "hpc",
    "information-management",
    "localisation"
   ],
   "actors": [
    "local-ngo",
    "ocha"
   ],
   "record_ids": [
    "E0447"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F706",
   "statement": "No wider multi-sector needs assessment was conducted last year, so the response plan rested on secondary data analysis alone.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0448"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F707",
   "statement": "A large cholera outbreak is running concurrently with the transition, with cases declining in one urban area while rising in others, and the household-level response approach is not sufficient in the worst-affected locations.",
   "theme": "Both",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "record_ids": [
    "E0449"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F708",
   "statement": "Gastroenteritis cases have been notified near the border with a neighbouring country where a large cholera outbreak is under way, and emergency preparations are being made with the zone offices.",
   "theme": "Both",
   "type": "context",
   "strength": "medium",
   "n_records": 2,
   "n_sources": 2,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "peer-learning"
   ],
   "actors": [
    "cluster",
    "gov-local",
    "gov-national"
   ],
   "record_ids": [
    "E0450",
    "E0458"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F709",
   "statement": "The technical working group leading the outbreak response is chaired by an international NGO rather than the lead agency, with the sector spanning all partner agencies and the ministry.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "coordination-architecture",
    "localisation",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "gov-national",
    "ingo"
   ],
   "record_ids": [
    "E0451"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F710",
   "statement": "Technical support to an outbreak should be pitched at the whole sector rather than routed through the lead agency alone, so that all partners work from the same guidance, tools and training.",
   "theme": "Both",
   "type": "recommendation",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [],
   "tags": [
    "capacity",
    "coordination-architecture",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "un-agency"
   ],
   "record_ids": [
    "E0452"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F711",
   "statement": "Coordination capacity during the transition is being provided through a standby partner deployment at no cost to the country office, which fills the gap but does not establish a funded post.",
   "theme": "Transition",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NGA"
   ],
   "tags": [
    "capacity",
    "funding",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "record_ids": [
    "E0453"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F800",
   "statement": "Measured against a definition of area-based coordination operating at the smallest administrative unit, the country does not have it: a pilot covering four of two hundred and sixty-six communes was tried and did not continue beyond the pilot.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "coordination-architecture",
    "geographic-targeting"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0459"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F801",
   "statement": "Treated instead as regional structures, five functional coordination groups meet monthly and work for practically all sectors — so whether the country has area-based coordination depends entirely on which administrative level the definition refers to.",
   "theme": "ABC",
   "type": "context",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "record_ids": [
    "E0460"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F802",
   "statement": "An advocacy committee bringing together the cluster thematic sub-groups and members with advocacy expertise was recommended two years ago and has still not been established, because each year emergencies require the workplan to be reprioritised.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "advocacy",
    "capacity",
    "performance"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0461"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F803",
   "statement": "A change to the pooled fund project review process arrived with a day’s notice and required the committee to meet across the week and nominate members for an in-person session, displacing the cluster meeting and other planned work.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "pooled-funds"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0462"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F804",
   "statement": "A donor delegation met the cluster to discuss strategic priorities and advised that proposals emphasise environmental impact assessment and the donor four environmental priority areas, which the cluster is now building into partner capacity building and its advocacy strategy.",
   "theme": "Transition",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "advocacy",
    "funding",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "donor",
    "ingo"
   ],
   "record_ids": [
    "E0463"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F805",
   "statement": "A database that takes data pasted from the cluster reporting platform and returns results by indicator has made routine information products quick to produce, and the cluster considers information management its strongest area.",
   "theme": "Both",
   "type": "enabler",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0464"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F806",
   "statement": "A discrepancy between the reporting platform and the dashboard affects the total people-reached figure, and reconciling the two requires support the cluster does not hold in-house.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "capacity",
    "information-management"
   ],
   "actors": [
    "cluster"
   ],
   "record_ids": [
    "E0465"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F807",
   "statement": "The response to questions about which reporting system applies has been that the central module is a pilot and no answer is available yet, so partners have not begun reporting into it and the cluster continues extracting from its own platform alongside an interim spreadsheet.",
   "theme": "ABC",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "guidance",
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "record_ids": [
    "E0466"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F808",
   "statement": "A transition plan was raised once at an intersectoral meeting as something every cluster should have; the cluster asked how it should be done, received no answer, and has not been contacted since, so ordinary coordination continues with neither government nor partners raising it.",
   "theme": "Transition",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "government-engagement",
    "guidance",
    "transition-handover"
   ],
   "actors": [
    "cluster",
    "gov-national",
    "ocha"
   ],
   "record_ids": [
    "E0467"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F809",
   "statement": "The cluster contributed indicators and questionnaire content to the planned multi-sector assessment and asked to take part in enumerator training, was told it would be included, and then heard nothing; collection was due to start in July and had not begun by mid-month.",
   "theme": "Both",
   "type": "barrier",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "hpc",
    "information-management",
    "partnerships"
   ],
   "actors": [
    "cluster",
    "ingo",
    "ocha"
   ],
   "record_ids": [
    "E0468"
   ],
   "unmerged": false
  },
  {
   "finding_id": "F810",
   "statement": "With no multi-sector assessment last year, the cluster updated the previous one through key informants and agreed severity levels collectively at a cluster workshop.",
   "theme": "Both",
   "type": "practice",
   "strength": "low",
   "n_records": 1,
   "n_sources": 1,
   "n_streams": 1,
   "streams": [
    "transcript"
   ],
   "countries": [
    "NER"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "record_ids": [
    "E0469"
   ],
   "unmerged": false
  }
 ],
 "records": [
  {
   "id": "E0013",
   "finding_id": "F001",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where area-based structures report upward through a separate operational cell rather than to the cluster, the same needs information travels up and back down again, looping between two parallel structures.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "un-agency",
    "ingo",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0014",
   "finding_id": "F010",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Cluster coordinators are not permitted to engage directly with area-based structures and must route all contact through an intermediary operational cell.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "un-agency",
    "ingo",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0015",
   "finding_id": "F010",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational cluster coordinators may attend area-based coordination meetings only if invited, leaving the cluster with no standing presence at district level.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0016",
   "finding_id": "F011",
   "theme": "ABC",
   "type": "practice",
   "statement": "Area-based structures were established in roughly fifteen of twenty-one prioritised districts, leaving part of the prioritised caseload outside the new architecture.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0017",
   "finding_id": "F012",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based coordination facilitators double-hat and are incentivised by their host organisations, so the structure runs on borrowed capacity rather than dedicated posts.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "coordination-architecture",
    "sustainability"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0018",
   "finding_id": "F013",
   "theme": "ABC",
   "type": "context",
   "statement": "Area-based coordination was introduced to counterbalance a coordination architecture perceived as UN-centred and out of touch with international and national NGOs and with communities at district level.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo",
    "community"
   ],
   "tags": [
    "coordination-architecture",
    "localisation",
    "aap"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0019",
   "finding_id": "F014",
   "theme": "ABC",
   "type": "practice",
   "statement": "For the 2027 planning cycle strategic objectives, severity and PIN analysis and budgeting were retained nationally, while needs contextualisation, response design and prioritisation moved to area-based forums.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "hpc",
    "coordination-architecture",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0020",
   "finding_id": "F015",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Pooled fund prioritisation moved to area-based structures, with the cluster's contribution concentrated at technical review of proposals.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "funding",
    "hpc",
    "coordination-architecture",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0021",
   "finding_id": "F016",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Clusters were asked to select priority districts from a pre-approved list, which left little room to propose alternatives based on access or observed need.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "funding",
    "hpc",
    "performance",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0022",
   "finding_id": "F017",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The cluster first saw the pooled fund allocation strategy when a partner forwarded it, rather than receiving it through the coordination channels.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "funding",
    "information-management",
    "coordination-architecture",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0023",
   "finding_id": "F017",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational cluster coordinators were approached directly for allocation input without the national coordinator included, which made it harder for the cluster to present a single position.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "funding",
    "coordination-architecture",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0024",
   "finding_id": "F018",
   "theme": "ABC",
   "type": "context",
   "statement": "Withdrawal of a major bilateral donor triggered a reprioritisation cutting prioritised districts from sixty-five to twenty-one, which then set the geographic scope of area-based coordination.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0025",
   "finding_id": "F019",
   "theme": "Both",
   "type": "barrier",
   "statement": "Subnational coordination posts funded through lead agency partnership agreements are not being renewed, putting dedicated subnational capacity at risk just as the architecture is being redesigned.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "un-agency",
    "donor"
   ],
   "tags": [
    "funding",
    "capacity",
    "coordination-architecture",
    "staff-turnover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0026",
   "finding_id": "F020",
   "theme": "Transition",
   "type": "context",
   "statement": "The cluster lead agency signalled an eventual handover of coordination to the line ministry without setting a timeline, prompting early informal engagement rather than a planned process.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "un-agency",
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0027",
   "finding_id": "F021",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Joint agenda setting with the line ministry and inviting ministry representatives to chair national coordination meetings moved government participation beyond opening and closing formalities.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0028",
   "finding_id": "F022",
   "theme": "Transition",
   "type": "practice",
   "statement": "The cluster began channelling humanitarian WASH information into the line ministry's development coordination platform to build a nexus link ahead of transition.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national",
    "cluster",
    "development"
   ],
   "tags": [
    "nexus",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0029",
   "finding_id": "F023",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Ministry counterparts were initially hesitant about taking on coordination responsibility because they expected an imminent transfer; framing transition as a phased process rather than a handover date reduced that hesitancy.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0030",
   "finding_id": "F024",
   "theme": "Transition",
   "type": "context",
   "statement": "State-level ministry engagement varies widely within one country, with some convening and documenting coordination meetings and others not, so transition readiness is uneven below national level.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0031",
   "finding_id": "F025",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A ministry focal point who had previously attended cluster coordination training understood cluster functions well, which made early transition discussions substantially easier.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0032",
   "finding_id": "F026",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Government counterparts asked to learn directly from countries where coordination has already transitioned to government, rather than receiving guidance material alone.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement",
    "capacity",
    "peer-learning"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0033",
   "finding_id": "F027",
   "theme": "Both",
   "type": "barrier",
   "statement": "An incoming cluster coordinator received no handover report and had to reconstruct institutional knowledge unaided from shared drives, losing time to work already done.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "information-management",
    "staff-turnover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0034",
   "finding_id": "F028",
   "theme": "Both",
   "type": "barrier",
   "statement": "Information management recruitment was cancelled and the post downgraded to a volunteer position on cost grounds, leaving the cluster without dedicated information management capacity.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "information-management",
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0035",
   "finding_id": "F029",
   "theme": "Both",
   "type": "barrier",
   "statement": "Public cluster dashboards and contact details went unupdated for months while partner reporting continued to arrive, indicating the constraint is analytical capacity rather than data availability.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0036",
   "finding_id": "F030",
   "theme": "ABC",
   "type": "practice",
   "statement": "Partners continued to report response data through the cluster 4W only, with area-based structures collecting assessment and prioritisation information but not response reporting, so the parallel structures did not create double reporting.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0037",
   "finding_id": "F031",
   "theme": "Both",
   "type": "practice",
   "statement": "After eight years with the same co-coordinating agency the cluster opened a competitive expression of interest to rotate the role, while considering retaining the outgoing agency in a roving support function.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "partnerships",
    "coordination-architecture",
    "capacity",
    "staff-turnover"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0038",
   "finding_id": "F032",
   "theme": "ABC",
   "type": "context",
   "statement": "Resistance to area-based coordination reflects how it was introduced rather than the concept itself, since community consultation and needs prioritisation were already standard practice among partners.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo",
    "community"
   ],
   "tags": [
    "coordination-architecture",
    "aap",
    "localisation"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0039",
   "finding_id": "F026",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Cluster coordinators asked for structured exchange with counterparts in other countries running area-based structures, to understand how the cluster-ABC relationship works elsewhere before redesigning their own.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "peer-learning",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S011",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0040",
   "finding_id": "F033",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational clusters were redefined as technical advisers to area structures and barred from holding routine standing meetings, restricting them to ad hoc topic-specific gatherings.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0041",
   "finding_id": "F034",
   "theme": "ABC",
   "type": "context",
   "statement": "A zonal coordination layer chaired by the humanitarian coordination office replaced the subnational intersectoral tier, with clusters positioned as technical advisers to it.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0042",
   "finding_id": "F035",
   "theme": "ABC",
   "type": "enabler",
   "statement": "All eleven area-based structures are chaired by local actors, placing national organisations formally at the head of district-level coordination.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "tags": [
    "localisation",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0043",
   "finding_id": "F036",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Paid area coordinator posts were created alongside the elected chairs and co-chairs, with job descriptions drafted centrally, which leaves the role of the elected leadership unclear.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ocha",
    "local-ngo",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0044",
   "finding_id": "F037",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Every area coordinator post across all eleven structures was awarded to one national NGO that is the nationalised affiliate of an international confederation, which raises a question about how localisation is defined in practice.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "local-ngo",
    "ingo",
    "ocha"
   ],
   "tags": [
    "localisation",
    "partnerships",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0045",
   "finding_id": "F038",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The area coordinator arrangement was not set out in published guidance, and the cluster learned of it informally before seeking confirmation.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "guidance",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0046",
   "finding_id": "F039",
   "theme": "ABC",
   "type": "barrier",
   "statement": "With operational gap analysis moved off subnational platforms, no forum currently holds it during sudden emergencies, when partners need to know who is working where rather than which technical standard applies.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0047",
   "finding_id": "F040",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Information flow between area structures, subnational clusters and the intersectoral group is not yet defined, so the same information is requested in both directions and roles remain unsettled.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0048",
   "finding_id": "F040",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Escalation pathways between area, subnational and national levels are not described in the terms of reference of the new structures.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0049",
   "finding_id": "F041",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Ambiguity about the new structure caused a double-hatting subnational focal point to stop convening partners altogether, including during an emergency, until the cluster clarified that he still could.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0050",
   "finding_id": "F042",
   "theme": "ABC",
   "type": "context",
   "statement": "Partners in one area formally demanded that the previous subnational cluster arrangement be retained, and it was kept in place pending a decision.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ingo",
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0051",
   "finding_id": "F043",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Final versions of the national area-coordination guidance were not held by the cluster lead agency, and the cluster had to assemble a comparison against global guidance itself to establish what applied.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha",
    "un-agency"
   ],
   "tags": [
    "guidance",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0052",
   "finding_id": "F044",
   "theme": "ABC",
   "type": "enabler",
   "statement": "A simple partner presence and gap analysis tool built by the cluster for area structures was well received, indicating demand for cluster technical support rather than rejection of the cluster role.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0053",
   "finding_id": "F045",
   "theme": "ABC",
   "type": "context",
   "statement": "The area-based architecture is presented as a permanent replacement rather than a transitional arrangement, which changes what is at stake in getting the design right.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0054",
   "finding_id": "F046",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area structures take part in two rounds of consultation on severity scoring and may override the calculated score with local expert judgement, giving them real influence over the analysis.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "operational-cell",
    "cluster",
    "ocha"
   ],
   "tags": [
    "hpc",
    "aap",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0055",
   "finding_id": "F047",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Severity scores are computed centrally across clusters and returned to area level only for validation, with the cluster not involved in designing the indicators that feed them.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0056",
   "finding_id": "F048",
   "theme": "ABC",
   "type": "barrier",
   "statement": "WASH was not prioritised in a pooled fund localisation allocation, obliging the cluster to lobby partners to embed WASH activities inside other sectors proposals.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha",
    "local-ngo"
   ],
   "tags": [
    "pooled-funds",
    "funding",
    "multisector"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0057",
   "finding_id": "F049",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Local NGOs were added to a proposal review committee that had been composed only of international organisations, at the cluster's insistence.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "local-ngo",
    "ingo"
   ],
   "tags": [
    "localisation",
    "pooled-funds",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0058",
   "finding_id": "F225",
   "theme": "Both",
   "type": "context",
   "statement": "Subnational coordination capacity was retained through double-hatting arrangements in all but two areas, so the structure survived without dedicated posts.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0059",
   "finding_id": "F051",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The response plan scope excludes the recurrent hazard the cluster is actually responding to, on the grounds that it is seasonal and long-standing, leaving live operations outside the planning framework.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "hpc",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0060",
   "finding_id": "F052",
   "theme": "ABC",
   "type": "barrier",
   "statement": "National and global guidance were interpreted differently on whether sectors may choose their own severity methodology, leaving the cluster unable to confirm what was permitted.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "guidance",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0061",
   "finding_id": "F053",
   "theme": "Both",
   "type": "barrier",
   "statement": "The teams producing vulnerability and exposure analysis do not work on response planning, so their products are not designed for the planning process they are being asked to feed.",
   "level": "global",
   "countries": [],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0062",
   "finding_id": "F054",
   "theme": "Both",
   "type": "barrier",
   "statement": "Almost no partner assessments were shared with the cluster despite repeated requests, leaving very little material for a secondary data review.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "information-management",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0063",
   "finding_id": "F055",
   "theme": "Both",
   "type": "barrier",
   "statement": "Partner assessments cannot be processed with AI tools without anonymisation first, because of data confidentiality obligations the cluster is unwilling to breach.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-08-04",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0064",
   "finding_id": "F056",
   "theme": "Both",
   "type": "practice",
   "statement": "An information sharing protocol required clusters to classify their products by sensitivity, and the exercise found sensitive material openly accessible on a shared drive.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0065",
   "finding_id": "F057",
   "theme": "Both",
   "type": "barrier",
   "statement": "Sensitivity classification is harder for WASH than for other sectors because infrastructure locations and chemical stocks carry dual-use risk in a conflict setting.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0066",
   "finding_id": "F058",
   "theme": "Both",
   "type": "barrier",
   "statement": "Sub-national level data on violations is published openly on an external platform outside any cluster control, and cross-border information about the country cannot be governed by the in-country protocol at all.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0067",
   "finding_id": "F059",
   "theme": "Both",
   "type": "barrier",
   "statement": "A partner capacity building programme committed the cluster to fund, facilitate and deliver every requested training, scheduled across the planning peak, until the coordinator intervened to postpone it.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0069",
   "finding_id": "F031",
   "theme": "Both",
   "type": "practice",
   "statement": "The cluster moved to reactivate its strategic advisory group and open a co-coordinator process, timing it to the roll-out of area-based structures so that new actors could take up roles.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "partnerships",
    "coordination-architecture",
    "localisation"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0070",
   "finding_id": "F026",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Coordinators want structured comparison with other countries on subnational terms of reference and escalation pathways; an informal request on a coordinator messaging group went unanswered.",
   "level": "national",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "peer-learning",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S012",
   "date_collected": "2026-07-28",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0071",
   "finding_id": "F100",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Set roles and accountability at core function level — Map the 6+1 cluster core functions one by one — which must remain with the cluster, which can be shared with ABC, and which can be delegated — and record who is accountable for each",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0072",
   "finding_id": "F101",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Reinforce the WASH analytical framework as a strategic resource — WIA, severity analysis, and AQA are not only technical tools — they are the evidence base that grounds cluster leadership, supports collective decision-making, and makes the case for WASH prioritization in HCT and inter-cluster…",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0073",
   "finding_id": "F102",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Propose a minimum terms of reference and performance framework for area structures — A standard requiring a designated WASH focal point with defined technical escalation rights, and a performance framework equivalent to cluster coordination performance monitoring, would give both sides a shared reference.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "performance",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0074",
   "finding_id": "F102",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Propose a minimum terms of reference and performance framework for area structures — A standard requiring a designated WASH focal point with defined technical escalation rights, and a performance framework equivalent to cluster coordination performance monitoring, would give both sides a shared reference.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "performance",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0075",
   "finding_id": "F103",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Support the annual review of coordination structure needs — Raise this jointly with other cluster coordinators in the ICCG, so decisions on activating, scaling or deactivating area structures rest on operational assessment rather than inertia.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0076",
   "finding_id": "F104",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Position the cluster as the analytical framework owner — The cluster provides the framework;",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0077",
   "finding_id": "F105",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Clarify roles, mandates, and escalation pathways at country level — Advocate within the HCT and ICCG for a structured mapping of who does what at each coordination level, with clear escalation pathways for technical and strategic issues",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0078",
   "finding_id": "F106",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Engage UNICEF as Cluster Lead Agency from the first HCT meeting on ABC — UNICEF’s formal HCT responsibilities include shaping how ABC is configured and resourced",
   "level": "national",
   "countries": [],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0079",
   "finding_id": "F107",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Maintain direct engagement with line ministries — Sustaining a direct relationship with government counterparts — independent of ABC structures — is necessary to protect the cluster’s standing in higher-level coordination discussions and to reaffirm the technical leadership of the WASH Cluster",
   "level": "national",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0080",
   "finding_id": "F108",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Work with OCHA on transparent deactivation criteria — Coordination structures are formally reviewed each year; making that review systematic, and publishing the criteria behind deactivation decisions, would give countries a predictable basis for planning.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0081",
   "finding_id": "F109",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Defend coordination capacity within the Cluster Lead Agency — Coordinator and IM posts are consistently the first cut in budget reductions, and deactivation has been used as a budget instrument",
   "level": "global",
   "countries": [],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "capacity",
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0082",
   "finding_id": "F110",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Build the global preparedness and re-activation architecture — Embed coordination checkpoints in EPP guidance and the digital EPP platform;",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0083",
   "finding_id": "F110",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Build the global preparedness and re-activation architecture — Embed coordination checkpoints in EPP guidance and the digital EPP platform;",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0084",
   "finding_id": "F111",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Issue guidance on deactivation thresholds and successor scoping — Coordinators asked for practical guidance on when government-led coordination is realistic — including partner-count and complexity thresholds (a government can coordinate six partners;",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0085",
   "finding_id": "F111",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Issue guidance on deactivation thresholds and successor scoping — Coordinators asked for practical guidance on when government-led coordination is realistic — including partner-count and complexity thresholds (a government can coordinate six partners;",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0086",
   "finding_id": "F111",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Issue guidance on deactivation thresholds and successor scoping — Coordinators asked for practical guidance on when government-led coordination is realistic — including partner-count and complexity thresholds (a government can coordinate six partners;",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0087",
   "finding_id": "F112",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Lead the transition conversation — do not wait for it — Develop a costed transition plan with agreed readiness indicators and benchmarks early, through a transition working group with key actors",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0088",
   "finding_id": "F113",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Run the stakeholder and willingness analysis before drafting the strategy — Map who could receive coordination functions — ministries as they actually divide WASH, civil protection, development platforms, national institutions with durable funding — and assess capacity, financing, neutrality,…",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0089",
   "finding_id": "F113",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Run the stakeholder and willingness analysis before drafting the strategy — Map who could receive coordination functions — ministries as they actually divide WASH, civil protection, development platforms, national institutions with durable funding — and assess capacity, financing, neutrality,…",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0090",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0091",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0092",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S074",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0093",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0094",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S080",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0095",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S077",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0096",
   "finding_id": "F114",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Map development actors as transition counterparts — Identify actors in the broader WASH sector — development programmes, national utilities, development banks and international financial institutions — with the technical skillset, funding horizon and field presence to absorb part of what the…",
   "level": "national",
   "countries": [],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S063",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0097",
   "finding_id": "F115",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Secure a senior political directive — Ministry-by-ministry engagement fails without instruction from the top: work through the ICCG, OCHA and the HC/RC to obtain senior government direction for the transition, and engage the UNICEF Representative early on the CLA's continuing accountabilities (S33)",
   "level": "national",
   "countries": [],
   "actors": [
    "gov-national",
    "ocha",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "advocacy",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0098",
   "finding_id": "F116",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Categorize and align IM assets from response onset — Distinguish what aligns with government systems from the start (master facility lists, asset inventories), what transfers quickly (3W/4W in receiving-friendly formats), what requires long capacity building, and what should not transfer",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0099",
   "finding_id": "F116",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Categorize and align IM assets from response onset — Distinguish what aligns with government systems from the start (master facility lists, asset inventories), what transfers quickly (3W/4W in receiving-friendly formats), what requires long capacity building, and what should not transfer",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0100",
   "finding_id": "F116",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Categorize and align IM assets from response onset — Distinguish what aligns with government systems from the start (master facility lists, asset inventories), what transfers quickly (3W/4W in receiving-friendly formats), what requires long capacity building, and what should not transfer",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0101",
   "finding_id": "F117",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Put dedicated transition capacity in place — Request a twelve-month transition advisor working with the chief of WASH and the coordinator;",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "transition-handover",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0102",
   "finding_id": "F117",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Put dedicated transition capacity in place — Request a twelve-month transition advisor working with the chief of WASH and the coordinator;",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "transition-handover",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0103",
   "finding_id": "F118",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Protect WASH integrity in the successor governance — Where sub-sector mandates are split across ministries, negotiate explicit custody for hygiene and water quality, and promote one-WASH programme approaches — joint plans, budgets and pooled funds across water, sanitation and hygiene — as the…",
   "level": "national",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "sustainability",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0104",
   "finding_id": "F118",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Protect WASH integrity in the successor governance — Where sub-sector mandates are split across ministries, negotiate explicit custody for hygiene and water quality, and promote one-WASH programme approaches — joint plans, budgets and pooled funds across water, sanitation and hygiene — as the…",
   "level": "national",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "sustainability",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0105",
   "finding_id": "F119",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Plan re-activation before deactivation — Embed coordination in the country EPP, run annual preparedness refreshers with the successor structure, keep contact lists and surge awareness alive, and agree in writing who convenes — and who calls for help — when the next emergency hits (S32;",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0106",
   "finding_id": "F119",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Plan re-activation before deactivation — Embed coordination in the country EPP, run annual preparedness refreshers with the successor structure, keep contact lists and surge awareness alive, and agree in writing who convenes — and who calls for help — when the next emergency hits (S32;",
   "level": "national",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0107",
   "finding_id": "F200",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Even where integrated area-based approaches are formally adopted, coordination stays constrained at implementation level because actors, sectors and delivery mechanisms are not aligned.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S015",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0108",
   "finding_id": "F201",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The need to create dedicated structures such as a drought strategic working group and community resource centres shows that existing coordination systems could not support integrated multi-sectoral assistance.",
   "level": "national",
   "countries": [
    "AFG"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "stream": "sdr",
   "source_id": "S013",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0109",
   "finding_id": "F202",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Drought response revealed uneven sectoral delivery, with actors operating in the same areas without harmonised planning frameworks.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "stream": "sdr",
   "source_id": "S023",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0110",
   "finding_id": "F203",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Parallel coordination and implementation channels persist despite the formal presence of coordination structures.",
   "level": "national",
   "countries": [
    "YEM"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S025",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0111",
   "finding_id": "F204",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Transition processes exposed subnational coordination gaps where national-level frameworks did not translate into effective operational coordination on the ground.",
   "level": "subnational",
   "countries": [
    "IDN"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S033",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0112",
   "finding_id": "F001",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Poorly integrated area-based models create parallel coordination structures that duplicate cluster functions, increase reporting burdens and fragment operational planning.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S039",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0113",
   "finding_id": "F001",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Poorly integrated area-based models create parallel coordination structures that duplicate cluster functions, increase reporting burdens and fragment operational planning.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S040",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0114",
   "finding_id": "F206",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based units were activated across the country with no standard mandate, and those structures then approached clusters to ask what they were supposed to do.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "ocha",
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0115",
   "finding_id": "F001",
   "theme": "ABC",
   "type": "barrier",
   "statement": "In one area three bodies coordinate the same displaced population in different ways — an area-based structure, camp coordination and the WASH cluster — with no shared coordination architecture.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "operational-cell",
    "ocha"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0116",
   "finding_id": "F208",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Introducing area-based coordination added complexity in countries that already had a humanitarian country team, and where parallel processes emerged, accountability for the response became harder to maintain.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0117",
   "finding_id": "F209",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based coordination remained functionally complementary to cluster coordination in those cases where roles and linkages between the two were formalised.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0118",
   "finding_id": "F210",
   "theme": "ABC",
   "type": "context",
   "statement": "Because each humanitarian coordinator may configure coordination independently, a different version of area-based coordination is negotiated in every context; the resulting governance gaps are a design consequence, not an implementation failure.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0119",
   "finding_id": "F211",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The absence of shared data systems and harmonised assessment frameworks limits joint analysis and prioritisation across actors.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S014",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0120",
   "finding_id": "F212",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Fragmented data flows and parallel information systems prevent effective information sharing, producing duplication and inefficiency in response planning.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S029",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0121",
   "finding_id": "F213",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Insufficient information management capacity within coordination systems is a key constraint on overall coordination effectiveness.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "information-management",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S017",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0122",
   "finding_id": "F214",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Unclear reporting lines and parallel information requirements between area-based structures and clusters duplicate reporting and increase the operational burden on partners.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S039",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0123",
   "finding_id": "F214",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Unclear reporting lines and parallel information requirements between area-based structures and clusters duplicate reporting and increase the operational burden on partners.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S040",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0124",
   "finding_id": "F215",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based structures develop divergent needs assessment approaches — different survey methodologies, indicator selection and analytical thresholds — which reduces data comparability and limits aggregated analysis.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0125",
   "finding_id": "F215",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based structures develop divergent needs assessment approaches — different survey methodologies, indicator selection and analytical thresholds — which reduces data comparability and limits aggregated analysis.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0126",
   "finding_id": "F215",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based structures develop divergent needs assessment approaches — different survey methodologies, indicator selection and analytical thresholds — which reduces data comparability and limits aggregated analysis.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S044",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0127",
   "finding_id": "F216",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Common technical validation mechanisms are absent, including consistent application of severity thresholds and area-level assessment criteria.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0128",
   "finding_id": "F216",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Common technical validation mechanisms are absent, including consistent application of severity thresholds and area-level assessment criteria.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0129",
   "finding_id": "F216",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Common technical validation mechanisms are absent, including consistent application of severity thresholds and area-level assessment criteria.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S044",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0130",
   "finding_id": "F217",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Parallel data architectures can emerge outside cluster frameworks and gain traction, which shifts the cluster's position as analytical reference point before any formal coordination change has taken place.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0131",
   "finding_id": "F218",
   "theme": "ABC",
   "type": "barrier",
   "statement": "If area-based structures collect field data and the cluster has no real-time access to it, the cluster loses its ability to analyse and to advocate — two functions area-based structures cannot replicate.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0132",
   "finding_id": "F219",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Inconsistencies between national strategies and subnational implementation frameworks limit coherence and inclusiveness.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S020",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0133",
   "finding_id": "F219",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Inconsistencies between national strategies and subnational implementation frameworks limit coherence and inclusiveness.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S033",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0134",
   "finding_id": "F219",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Inconsistencies between national strategies and subnational implementation frameworks limit coherence and inclusiveness.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S036",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0135",
   "finding_id": "F220",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S037",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0136",
   "finding_id": "F220",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S039",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0137",
   "finding_id": "F220",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0138",
   "finding_id": "F220",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0139",
   "finding_id": "F220",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where technical prioritisation functions such as standards, indicators and public health guidance migrate to area-based structures without matching mandate or capacity, the risk to sectoral quality assurance rises, particularly for WASH.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S044",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0140",
   "finding_id": "F221",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Local actors participated in coordination structures but had limited influence over decisions and resources.",
   "level": "subnational",
   "countries": [
    "UKR"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S016",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0141",
   "finding_id": "F222",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Implementation of area-based pilots depended heavily on external facilitation rather than local capacity.",
   "level": "global",
   "countries": [],
   "actors": [
    "ingo",
    "operational-cell"
   ],
   "tags": [
    "localisation",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S021",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0142",
   "finding_id": "F223",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational coordination gaps constrained nexus-based planning.",
   "level": "subnational",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "tags": [
    "nexus",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S035",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0143",
   "finding_id": "F224",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Local actors have limited access to funding, to decision-making spaces and to long-term institutional support, which persistently undermines equitable partnership.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "donor"
   ],
   "tags": [
    "localisation",
    "funding",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S026",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0144",
   "finding_id": "F224",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Local actors have limited access to funding, to decision-making spaces and to long-term institutional support, which persistently undermines equitable partnership.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "donor"
   ],
   "tags": [
    "localisation",
    "funding",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S037",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0145",
   "finding_id": "F225",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational coordination is structurally under-resourced and depends on double-hatting, with coordination duties added to staff already carrying operational roles.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0146",
   "finding_id": "F225",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Subnational coordination is structurally under-resourced and depends on double-hatting, with coordination duties added to staff already carrying operational roles.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0147",
   "finding_id": "F226",
   "theme": "ABC",
   "type": "barrier",
   "statement": "A cluster coordinator was expected to attend meetings across three concurrent area-based structures, with the platforms absorbing coordination time without commensurate operational gain.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0148",
   "finding_id": "F227",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based structures frequently operate without agreed rules on who participates, who decides and how priorities are set. In the absence of those rules, influence tends to follow voice and resources rather than mandate.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "ingo"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0149",
   "finding_id": "F227",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Decision-making in area-based meetings tends to follow who speaks most rather than an agreed basis of authority.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "operational-cell",
    "ingo"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0150",
   "finding_id": "F229",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Terms of reference contain no requirement for area-based focal points to hold technical capacity matching response priorities.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "ocha"
   ],
   "tags": [
    "guidance",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0151",
   "finding_id": "F230",
   "theme": "ABC",
   "type": "barrier",
   "statement": "There is no performance framework for area-based structures equivalent to cluster coordination performance monitoring, so there is currently no agreed basis for assessing how well they are working.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "operational-cell"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0152",
   "finding_id": "F231",
   "theme": "ABC",
   "type": "barrier",
   "statement": "There is no agreed inter-agency definition or guidance for area-based coordination, and without structured learning across operations, country teams repeat work already done elsewhere.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha"
   ],
   "tags": [
    "guidance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0153",
   "finding_id": "F232",
   "theme": "ABC",
   "type": "context",
   "statement": "An area-based structure secured a technically correct standard that the cluster had been unable to advance through advocacy — the right outcome, reached outside the cluster's technical channels, which shows both the potential and the missing escalation route.",
   "level": "subnational",
   "countries": [
    "UKR"
   ],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0154",
   "finding_id": "F233",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Funding allocation strategies show the difficulty of aligning financial flows with area-based targeting and priorities.",
   "level": "subnational",
   "countries": [
    "SYR"
   ],
   "actors": [
    "donor",
    "ocha"
   ],
   "tags": [
    "funding",
    "pooled-funds",
    "geographic-targeting"
   ],
   "stream": "sdr",
   "source_id": "S031",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0155",
   "finding_id": "F234",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Funding remains largely centralised, limiting the ability of local actors to engage meaningfully in coordination and implementation.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "local-ngo"
   ],
   "tags": [
    "funding",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S021",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0156",
   "finding_id": "F235",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The need to establish dedicated coordination platforms reflects the absence of embedded funding mechanisms to support integrated coordination approaches.",
   "level": "national",
   "countries": [
    "AFG"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S013",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0157",
   "finding_id": "F236",
   "theme": "ABC",
   "type": "barrier",
   "statement": "There is a lack of dedicated resources for coordination functions themselves, as distinct from programme delivery.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "donor"
   ],
   "tags": [
    "funding",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S022",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0158",
   "finding_id": "F237",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Funding mechanisms linked to area-based structures may sit outside established coordination structures, which can affect collective prioritisation and overall coherence.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "operational-cell"
   ],
   "tags": [
    "funding",
    "pooled-funds",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S040",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0159",
   "finding_id": "F238",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Uneven funding across sectors creates disparities in coordination capacity, with some clusters maintaining dedicated field coordinators while others rely on partial or seconded staffing.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "funding",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0160",
   "finding_id": "F238",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Uneven funding across sectors creates disparities in coordination capacity, with some clusters maintaining dedicated field coordinators while others rely on partial or seconded staffing.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "funding",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0161",
   "finding_id": "F239",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Under current resource constraints, advocating for area-based coordination resourcing and advocating for sector response funding have become competing rather than complementary asks on the same diminished pool.",
   "level": "national",
   "countries": [
    "YEM"
   ],
   "actors": [
    "cluster",
    "donor"
   ],
   "tags": [
    "funding",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0162",
   "finding_id": "F240",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Partners engage with coordination platforms because pooled fund allocations sit behind them; as area-based structures take on prioritisation, partner engagement migrates to wherever allocation power resides.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ingo",
    "ocha",
    "operational-cell"
   ],
   "tags": [
    "funding",
    "pooled-funds",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0163",
   "finding_id": "F241",
   "theme": "ABC",
   "type": "barrier",
   "statement": "International organisations tasked with building local area-based capacity operate on very short-term and volatile funding envelopes, which undercuts the sustained engagement capacity development requires.",
   "level": "global",
   "countries": [],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "funding",
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0164",
   "finding_id": "F242",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Material costs are a structural barrier limiting national and local NGO participation and leadership in area-based coordination, rather than an incidental detail.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "donor"
   ],
   "tags": [
    "funding",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0165",
   "finding_id": "F243",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The terms of reference and the accompanying guidance differ on who is responsible for resourcing area-based structures, which leaves country coordinators without a clear basis for funding conversations.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "guidance",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0166",
   "finding_id": "F244",
   "theme": "ABC",
   "type": "barrier",
   "statement": "In some contexts, decisions requiring sector expertise — indicator selection, assessment methodology, response modality — are taken in structures that do not have technical staff.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0167",
   "finding_id": "F244",
   "theme": "ABC",
   "type": "barrier",
   "statement": "In some contexts, decisions requiring sector expertise — indicator selection, assessment methodology, response modality — are taken in structures that do not have technical staff.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0168",
   "finding_id": "F245",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Indicators and assessment methods not suited to specialised responses, including cholera and public health, have been applied in area-based settings.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0169",
   "finding_id": "F245",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Indicators and assessment methods not suited to specialised responses, including cholera and public health, have been applied in area-based settings.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0170",
   "finding_id": "F246",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Quality assurance within area-based structures is weak or absent — limited technical review of assessment tools, inconsistent adherence to sector minimum standards, and no mechanism for technical escalation to cluster leadership.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0171",
   "finding_id": "F246",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Quality assurance within area-based structures is weak or absent — limited technical review of assessment tools, inconsistent adherence to sector minimum standards, and no mechanism for technical escalation to cluster leadership.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0172",
   "finding_id": "F246",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Quality assurance within area-based structures is weak or absent — limited technical review of assessment tools, inconsistent adherence to sector minimum standards, and no mechanism for technical escalation to cluster leadership.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S044",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0173",
   "finding_id": "F247",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Coordinators across several contexts are asking what needs to be in place before handing functions to area-based structures so that WASH capacity is retained, and the question does not yet have a settled answer.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0174",
   "finding_id": "F248",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based programming generally adhered to cluster technical guidance, and where subnational cluster coordination was weak or absent, area-based coordination provided feedback on the suitability of technical standards.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "performance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0175",
   "finding_id": "F249",
   "theme": "ABC",
   "type": "enabler",
   "statement": "A drought strategic working group and community resource centres supported multi-sector coordination and improved alignment of interventions at local level.",
   "level": "subnational",
   "countries": [
    "AFG"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "multisector"
   ],
   "stream": "sdr",
   "source_id": "S013",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0176",
   "finding_id": "F250",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Decentralised, operationally focused subnational platforms improve responsiveness and the ability to adapt to local needs.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S024",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0177",
   "finding_id": "F251",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Deploying dedicated coordination leadership at subnational level improves actor alignment, strengthens engagement with local authorities and enables bottom-up planning.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S037",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0178",
   "finding_id": "F252",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based development approaches show how decentralised systems can integrate planning across sectors and improve responsiveness to local priorities.",
   "level": "subnational",
   "countries": [
    "MOZ"
   ],
   "actors": [
    "gov-local",
    "development"
   ],
   "tags": [
    "multisector",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S034",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0179",
   "finding_id": "F253",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Shifting decision-making authority to local level, where supported by inclusive structures, generates more context-appropriate solutions.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "gov-local"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S037",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0180",
   "finding_id": "F254",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Localisation of coordination raises uneven technical capacity at subnational level, inconsistent quality assurance across areas, and exposure of coordination priorities to local political dynamics.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "tags": [
    "localisation",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S042",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0181",
   "finding_id": "F254",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Localisation of coordination raises uneven technical capacity at subnational level, inconsistent quality assurance across areas, and exposure of coordination priorities to local political dynamics.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "tags": [
    "localisation",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S043",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0182",
   "finding_id": "F255",
   "theme": "ABC",
   "type": "practice",
   "statement": "A major drought scale-up was anchored by five operational coordination hubs with dedicated subnational cluster capacity and district-level area coordination groups, positioning coordination where delivery happened.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S027",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0183",
   "finding_id": "F256",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based coordination enabled agencies with strong local presence to lead joint access negotiations with armed groups and community members, a function only locally anchored coordination can perform.",
   "level": "subnational",
   "countries": [
    "HTI"
   ],
   "actors": [
    "local-ngo",
    "community"
   ],
   "tags": [
    "coordination-architecture",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S028",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0184",
   "finding_id": "F257",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Recruiting and training subnational cluster coordinators working in the national language proved highly constructive for local coordination quality.",
   "level": "subnational",
   "countries": [
    "MMR"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S030",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0185",
   "finding_id": "F258",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Area-based models facilitated participation by subnational authorities, local and national NGOs and affected people, but participation alone rarely increased their ability to influence the response.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "community"
   ],
   "tags": [
    "localisation",
    "aap"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0186",
   "finding_id": "F259",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Local ownership was achieved only where international actors supported local decision-making processes rather than running their own.",
   "level": "global",
   "countries": [],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0187",
   "finding_id": "F260",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Where local actors have formal presence without decision-making power, the platform adds reporting workload without giving them influence over priorities or resources.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "operational-cell"
   ],
   "tags": [
    "localisation",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0188",
   "finding_id": "F261",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Conducting coordination in the local language transformed the quality of participation, allowing local actors to raise issues and flag priorities in ways national-level platforms in other languages did not permit.",
   "level": "subnational",
   "countries": [
    "PSE",
    "MMR"
   ],
   "actors": [
    "local-ngo",
    "community"
   ],
   "tags": [
    "localisation",
    "aap"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0189",
   "finding_id": "F261",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Conducting coordination in the local language transformed the quality of participation, allowing local actors to raise issues and flag priorities in ways national-level platforms in other languages did not permit.",
   "level": "subnational",
   "countries": [
    "PSE",
    "MMR"
   ],
   "actors": [
    "local-ngo",
    "community"
   ],
   "tags": [
    "localisation",
    "aap"
   ],
   "stream": "sdr",
   "source_id": "S030",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0190",
   "finding_id": "F262",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Improved data sharing is associated with better coordination and more coherent prioritisation of needs.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S029",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0191",
   "finding_id": "F263",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Harmonised assessment frameworks and shared data systems are critical to enabling joint analysis and coordinated decision-making.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S014",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0192",
   "finding_id": "F264",
   "theme": "ABC",
   "type": "practice",
   "statement": "A working division of labour has the cluster providing the analytical framework, area-based structures collecting data within it, and the cluster analysing and feeding results back into joint planning — already operational in one context and validated as replicable.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0193",
   "finding_id": "F265",
   "theme": "ABC",
   "type": "enabler",
   "statement": "A well-configured area-based structure, with the cluster retaining the analytical function, can close the loop between needs assessment, planning, delivery and monitoring back to what people actually preferred.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "community"
   ],
   "tags": [
    "information-management",
    "aap",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0194",
   "finding_id": "F266",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Integrated programming across sectors was achieved where coordination mechanisms were operationally strong enough to support joint planning and delivery.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "multisector",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S021",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0195",
   "finding_id": "F267",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based coordination can serve as a platform for cross-sector collaboration and nexus integration where coordination mechanisms are clearly defined and operationally supported.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "multisector",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S038",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0196",
   "finding_id": "F267",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based coordination can serve as a platform for cross-sector collaboration and nexus integration where coordination mechanisms are clearly defined and operationally supported.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "multisector",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S040",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0197",
   "finding_id": "F268",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based approaches achieved strong multisectoral linkages because they are multisectoral by design, with dedicated funding enabling sequenced and controlled responses.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "donor"
   ],
   "tags": [
    "multisector",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0198",
   "finding_id": "F269",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Adapting camp coordination to area-based approaches outside camp settings positions coordination to support not only first response but the transition toward durable solutions.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "community"
   ],
   "tags": [
    "multisector",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S018",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0199",
   "finding_id": "F270",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based platforms enabled real-time tracking of delivery against population needs and preferences.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "tags": [
    "aap",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S029",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0200",
   "finding_id": "F270",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Area-based platforms enabled real-time tracking of delivery against population needs and preferences.",
   "level": "subnational",
   "countries": [
    "PSE"
   ],
   "actors": [
    "community",
    "operational-cell"
   ],
   "tags": [
    "aap",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0201",
   "finding_id": "F271",
   "theme": "ABC",
   "type": "practice",
   "statement": "Skilled mobile outreach teams with diverse skill sets, working closely with all communities and population groups, provide a concrete delivery mechanism for community feedback.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "community"
   ],
   "tags": [
    "aap",
    "inclusion"
   ],
   "stream": "sdr",
   "source_id": "S018",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0202",
   "finding_id": "F272",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Affected people could influence planning decisions where the coordination modality was explicitly designed for it, and had limited influence otherwise — design rather than structure determines accountability.",
   "level": "global",
   "countries": [],
   "actors": [
    "community",
    "operational-cell"
   ],
   "tags": [
    "aap"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0203",
   "finding_id": "F273",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Feedback mechanisms should reach the local actors implementing at area level, not only those coordinating at national level.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "aap",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0204",
   "finding_id": "F274",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Where area-based structures are not absorbed by active response, they can anchor local risk monitoring and preparedness between crisis peaks, building the relationships and situational awareness coordination needs before an emergency.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0205",
   "finding_id": "F275",
   "theme": "ABC",
   "type": "practice",
   "statement": "Area-based structures addressed contingency planning among their inter-agency functions, and in one context supported government-led flood preparedness with structured capacity building for local authorities.",
   "level": "subnational",
   "countries": [
    "SSD"
   ],
   "actors": [
    "gov-local",
    "operational-cell"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S041",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0206",
   "finding_id": "F276",
   "theme": "ABC",
   "type": "context",
   "statement": "Where area-based structures already lack basic coordination capacity, adding a preparedness function is unrealistic and should not be pursued at the expense of core coordination.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0207",
   "finding_id": "F280",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Coordination often remains procedural rather than operational, which limits its ability to support integrated service delivery.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0208",
   "finding_id": "F281",
   "theme": "ABC",
   "type": "context",
   "statement": "Effectiveness depends less on whether an area-based structure exists than on how it is configured: where mandates are clear, the information architecture is sound and technical accountability for WASH is preserved, it works.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0209",
   "finding_id": "F282",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Role clarity across national, subnational and sectoral tiers is often insufficient, which limits how well the tiers work together.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S019",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0210",
   "finding_id": "F282",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Role clarity across national, subnational and sectoral tiers is often insufficient, which limits how well the tiers work together.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S032",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0211",
   "finding_id": "F282",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Role clarity across national, subnational and sectoral tiers is often insufficient, which limits how well the tiers work together.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S020",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0212",
   "finding_id": "F283",
   "theme": "Both",
   "type": "barrier",
   "statement": "Shifts from internationally led to nationally anchored systems can create governance gaps in which coordination functions are duplicated or lost.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S020",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0213",
   "finding_id": "F283",
   "theme": "Both",
   "type": "barrier",
   "statement": "Shifts from internationally led to nationally anchored systems can create governance gaps in which coordination functions are duplicated or lost.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S033",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0214",
   "finding_id": "F283",
   "theme": "Both",
   "type": "barrier",
   "statement": "Shifts from internationally led to nationally anchored systems can create governance gaps in which coordination functions are duplicated or lost.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S036",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0215",
   "finding_id": "F284",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Financial flows remain largely centralised, sector-specific or project-based, which limits their ability to support cross-sector coordination, subnational planning and sustained local engagement.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0216",
   "finding_id": "F285",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Integration across sectors does not follow automatically from the presence of coordination structures; it requires deliberate alignment of sectoral priorities, joint planning processes and operational collaboration.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "multisector",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0217",
   "finding_id": "F286",
   "theme": "ABC",
   "type": "context",
   "statement": "Three cluster functions cannot be replicated by area-based structures: technical leadership, data analysis, and sector-level advocacy. These are the starting point for deciding what to share and what to retain.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "advocacy",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S045",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0218",
   "finding_id": "F287",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Improve interoperability between coordination mechanisms, information systems and implementation pathways so that joint planning and delivery become possible.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0219",
   "finding_id": "F288",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Invest in technical, institutional and operational capacity at local level through realistic staffing models, reducing reliance on double-hatting and temporary arrangements.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0220",
   "finding_id": "F289",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Treat information management as core coordination infrastructure: harmonise data systems, improve interoperability, establish common technical validation, and enable joint analysis.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0221",
   "finding_id": "F290",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Simplify and clarify terms of reference and governance frameworks so that roles, accountability and alignment between national, subnational and area levels are explicit.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha",
    "operational-cell"
   ],
   "tags": [
    "guidance",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0222",
   "finding_id": "F291",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Preserve residual technical governance functions within sectors even under area-based models, with clear escalation pathways.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0223",
   "finding_id": "F292",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Establish minimum sectoral standards, technical review mechanisms and quality assurance processes within area-based coordination frameworks.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "operational-cell"
   ],
   "tags": [
    "performance",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0224",
   "finding_id": "F293",
   "theme": "ABC",
   "type": "recommendation",
   "statement": "Align funding mechanisms with area-based approaches: support integrated programming, ensure resources reach subnational actors, and fund both operational and technical coordination functions.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "ocha",
    "cluster"
   ],
   "tags": [
    "funding",
    "pooled-funds"
   ],
   "stream": "sdr",
   "source_id": "S101",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0225",
   "finding_id": "F300",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transitions weaken coordination where successor structures are not defined and the links between local, national and sectoral platforms are not established before responsibilities move.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0226",
   "finding_id": "F301",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Redistributing coordination functions across several successor arrangements creates a fragmentation risk unless roles and linkages between them are explicitly managed.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S054",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0227",
   "finding_id": "F302",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Newly established area-based structures covered only part of the displaced population after transition, leaving coverage gaps that were discovered after the handover.",
   "level": "subnational",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "geographic-targeting"
   ],
   "stream": "sdr",
   "source_id": "S052",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0228",
   "finding_id": "F303",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Several coordination layers operating at once produced duplication and made operational accountability harder to locate.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0229",
   "finding_id": "F304",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Humanitarian coordination ran separately from government systems rather than integrating into them, which stalled the move to national leadership.",
   "level": "national",
   "countries": [
    "IDN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0230",
   "finding_id": "F305",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Declining information management staffing and weak inter-cluster coordination reduce the quality of coordination architecture during handovers.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "information-management",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S059",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0231",
   "finding_id": "F306",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Service delivery continuity suffers in protracted transitions where coordination arrangements change without a defined successor.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "sustainability"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0232",
   "finding_id": "F307",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government structures rarely mirror the WASH sector: water may sit with a water resources ministry, sanitation with health, and hygiene promotion with neither, so there is no single counterpart to receive the handover.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0233",
   "finding_id": "F307",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government structures rarely mirror the WASH sector: water may sit with a water resources ministry, sanitation with health, and hygiene promotion with neither, so there is no single counterpart to receive the handover.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0234",
   "finding_id": "F308",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A transition handed water and sanitation to the water authority and hygiene and water quality to the health ministry, a split the successor coordination never fully bridged.",
   "level": "national",
   "countries": [
    "HTI"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover",
    "sustainability"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0235",
   "finding_id": "F309",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Where government does not recognise WASH as a single sector, there is no obvious successor platform, and without a well-named one, several parallel platforms tend to develop.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0236",
   "finding_id": "F310",
   "theme": "Transition",
   "type": "context",
   "statement": "Formal deactivation was never discussed, but the architecture was reduced from a two-level platform to a single subnational hub while the response target was halved — transition by attrition, without a transition framework.",
   "level": "national",
   "countries": [
    "MOZ"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0237",
   "finding_id": "F311",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The shift toward new coordination structures generated immediate risks of fragmented and parallel reporting systems.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0238",
   "finding_id": "F312",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Maintaining an accurate evidence base proved difficult as transition dynamics evolved.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0239",
   "finding_id": "F313",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Sustaining information flows proved difficult as coordination mechanisms restructured.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S067",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0240",
   "finding_id": "F028",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Information management is typically the first capacity reduced, so by the time transition planning formally begins, institutional memory, systems and analytical capacity have often already shrunk to a contact list and basic reporting.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0241",
   "finding_id": "F027",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Reliance on short-term contracts and inadequate funding drives high turnover among information management staff, which erases the institutional memory clusters depend on.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "staff-turnover",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S078",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0242",
   "finding_id": "F316",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Information management continuity needs dual capacity: someone running cluster IM through the transition, and someone building the counterpart function that will receive it.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0243",
   "finding_id": "F027",
   "theme": "Transition",
   "type": "barrier",
   "statement": "When coordination had to restart after a major flood, no record of prior technical decisions existed and technical working group discussions on sanitation options had to be repeated from the beginning.",
   "level": "national",
   "countries": [
    "LBY"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "transition-handover",
    "staff-turnover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0244",
   "finding_id": "F318",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The government co-lead has no information management function at all, and coordinators identified an embedded IM post plus capacity building as the minimum precondition for any transition.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0245",
   "finding_id": "F318",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The government co-lead has no information management function at all, and coordinators identified an embedded IM post plus capacity building as the minimum precondition for any transition.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0246",
   "finding_id": "F319",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Where the response plan is not the language of government, data often is: information management support that adds value to the government own reporting gains traction where coordination advocacy does not.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0247",
   "finding_id": "F320",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Information management assets can be sorted deliberately: those to align with government systems from the start, such as master facility lists and asset inventories; those that transfer quickly, such as partner activity data in a receiving-friendly format; and those too complex or not relevant to transfer.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0248",
   "finding_id": "F321",
   "theme": "Transition",
   "type": "context",
   "statement": "Governments work bilaterally and will not adopt cluster tools, so the minimum practical action is to understand and map the government information management system even without participating in it.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0249",
   "finding_id": "F321",
   "theme": "Transition",
   "type": "context",
   "statement": "Governments work bilaterally and will not adopt cluster tools, so the minimum practical action is to understand and map the government information management system even without participating in it.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0250",
   "finding_id": "F322",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Without predictable resources, local authorities often lack both the interest and the financial capacity to absorb coordination and service delivery costs.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-local",
    "donor"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0251",
   "finding_id": "F323",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Structural public finance constraints compromised the long-term sustainability of essential WASH services after transition.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "donor"
   ],
   "tags": [
    "funding",
    "sustainability"
   ],
   "stream": "sdr",
   "source_id": "S064",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0252",
   "finding_id": "F324",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Transition planning secured sustained development financing for transition support structures, reducing the risk of a funding-driven closure.",
   "level": "national",
   "countries": [
    "UKR"
   ],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "funding",
    "nexus",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S065",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0253",
   "finding_id": "F325",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Abrupt withdrawal of coordination financing was identified as a specific risk to successor viability.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S068",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0254",
   "finding_id": "F019",
   "theme": "Transition",
   "type": "context",
   "statement": "Roughly half of WASH coordinator and information management positions globally were affected by funding reductions.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "funding",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0255",
   "finding_id": "F327",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Coordinator positions were abolished as the mechanism for meeting a budget reduction of fifteen to twenty per cent.",
   "level": "national",
   "countries": [
    "SYR"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "funding",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0256",
   "finding_id": "F328",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A coordination review was framed from the outset around the absence of funding rather than around operational need, which set its conclusion in advance.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "funding",
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0257",
   "finding_id": "F329",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The stated basis for deactivation is needs and capacity, but funding now acts as a third and undeclared factor, with coordination posts among the first reduced inside the cluster lead agency.",
   "level": "global",
   "countries": [],
   "actors": [
    "un-agency",
    "ocha"
   ],
   "tags": [
    "funding",
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0258",
   "finding_id": "F329",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The stated basis for deactivation is needs and capacity, but funding now acts as a third and undeclared factor, with coordination posts among the first reduced inside the cluster lead agency.",
   "level": "global",
   "countries": [],
   "actors": [
    "un-agency",
    "ocha"
   ],
   "tags": [
    "funding",
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0259",
   "finding_id": "F019",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Sector funding is falling by around eighteen per cent a year while the coordination structure is being reduced in parallel.",
   "level": "subnational",
   "countries": [
    "BGD"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0260",
   "finding_id": "F331",
   "theme": "Transition",
   "type": "context",
   "statement": "Coordinators expect deactivation to be read by donors as confirmation of disengagement from an already under-funded emergency.",
   "level": "subnational",
   "countries": [
    "CMR"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "advocacy",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0261",
   "finding_id": "F332",
   "theme": "Transition",
   "type": "context",
   "statement": "International humanitarian funding fell from around 1.8 billion to 265 million US dollars, which forced an accelerated transition.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "donor"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S072",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0262",
   "finding_id": "F333",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Deactivation was triggered by funding shortage rather than by the operational readiness of national systems.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S073",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0263",
   "finding_id": "F334",
   "theme": "Transition",
   "type": "context",
   "statement": "Large donor reductions, including the termination of a substantial majority of one major donor grant portfolio, pushed the sector into accelerated and involuntary transitions.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "ingo"
   ],
   "tags": [
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S079",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0264",
   "finding_id": "F335",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Funding-driven transition sits upstream of the other barriers: it drives weak planning, broken sequencing and fragmentation at the same time.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "cluster",
    "ocha"
   ],
   "tags": [
    "funding",
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0265",
   "finding_id": "F336",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transition plans were developed before actors had agreed transition criteria, which produced misaligned planning and premature deactivation commitments.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0266",
   "finding_id": "F337",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Rapid transition processes systematically weaken inclusive planning.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "transition-handover",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0267",
   "finding_id": "F338",
   "theme": "Transition",
   "type": "practice",
   "statement": "Transition planning proposed a six-month post-handover mentoring phase with quarterly reviews.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S066",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0268",
   "finding_id": "F339",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Planning sequencing was explicitly linked to financing continuity rather than treated as a separate exercise.",
   "level": "national",
   "countries": [
    "UKR"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "tags": [
    "transition-handover",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S065",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0269",
   "finding_id": "F340",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transitions launched without sufficient planning time, agreed criteria or post-handover support systematically underperform.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S059",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0270",
   "finding_id": "F340",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transitions launched without sufficient planning time, agreed criteria or post-handover support systematically underperform.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S069",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0271",
   "finding_id": "F341",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transition discussions began years before the decision, but the deactivation decision itself came only months before the end, by which point opportunities to prepare had been lost.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0272",
   "finding_id": "F342",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government formation delays, protests and cancelled meetings meant the transition timeline never held, and securing genuine government engagement took over a year.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0273",
   "finding_id": "F343",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A three-month support window forced the transition strategy to be drafted before the stakeholder capacity analysis was done, and it emerged mid-process that it was unclear to the designated successor institution why it should lead WASH coordination at all.",
   "level": "national",
   "countries": [
    "HND"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0274",
   "finding_id": "F343",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A three-month support window forced the transition strategy to be drafted before the stakeholder capacity analysis was done, and it emerged mid-process that it was unclear to the designated successor institution why it should lead WASH coordination at all.",
   "level": "national",
   "countries": [
    "HND"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0275",
   "finding_id": "F344",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The expectation that every cluster develops a transition plan within three months of activation has in practice not been implemented.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0276",
   "finding_id": "F345",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Clusters are frequently kept active well beyond the emergency phase to fill long-term sectoral gaps, which complicates defining an endpoint, and governments may resist deactivation because clusters also function as resource mobilisation channels.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "funding",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S069",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0277",
   "finding_id": "F346",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A cluster with a transition plan and agreed readiness indicators can show concretely that conditions are not yet met, which is the most effective way to resist a premature, funding-driven deactivation.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "advocacy"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0278",
   "finding_id": "F347",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Coordination structures invite local actors to meetings without giving them real decision-making power.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S062",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0279",
   "finding_id": "F348",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Local organisations remain marginal in the design of transition itself, as distinct from its implementation.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0280",
   "finding_id": "F349",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Community involvement in transition planning and implementation was limited.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "community",
    "cluster"
   ],
   "tags": [
    "localisation",
    "aap"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0281",
   "finding_id": "F350",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Localisation commitments are not consistently translated into operational authority for local actors.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "ingo"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S076",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0282",
   "finding_id": "F350",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Localisation commitments are not consistently translated into operational authority for local actors.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "ingo"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S081",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0283",
   "finding_id": "F350",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Localisation commitments are not consistently translated into operational authority for local actors.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "ingo"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S082",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0284",
   "finding_id": "F351",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The closure of the NGO coordination committee significantly weakened collective NGO coordination.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "localisation",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0285",
   "finding_id": "F352",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Cost differentials make localisation an attractive framing for a response whose funding is falling, while the pooled funding that national NGOs would need remains a small share of the response and largely inaccessible to them.",
   "level": "subnational",
   "countries": [
    "BGD"
   ],
   "actors": [
    "local-ngo",
    "donor"
   ],
   "tags": [
    "localisation",
    "funding",
    "pooled-funds"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0286",
   "finding_id": "F353",
   "theme": "Transition",
   "type": "context",
   "statement": "Abolished national staff positions are re-emerging as newly created local NGOs, which raises the question of whether localisation is moving faster than capacity and safeguards can follow.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "local-ngo",
    "un-agency"
   ],
   "tags": [
    "localisation",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0287",
   "finding_id": "F354",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Capacity building for local successor actors should cover technical skills including emergency preparedness, logistics and supply, finance and human resources, community approaches, operational capacity such as transport, and fundraising.",
   "level": "national",
   "countries": [
    "CAF"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0288",
   "finding_id": "F355",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Structural power imbalances and language barriers, including the absence of translated materials, prevent local actors from participating in or leading coordination.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "inclusion"
   ],
   "stream": "sdr",
   "source_id": "S073",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0289",
   "finding_id": "F356",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Successor reporting systems should be lean, digital and mobile-first rather than replicas of cluster tools, because local actors will not sustain cluster-format reporting.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0290",
   "finding_id": "F357",
   "theme": "Transition",
   "type": "barrier",
   "statement": "National actors lacked clear information about the roles and mandates they were expected to take on.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0291",
   "finding_id": "F358",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Key government officials lacked practical experience with formal humanitarian coordination.",
   "level": "national",
   "countries": [
    "IDN"
   ],
   "actors": [
    "gov-national"
   ],
   "tags": [
    "government-engagement",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0292",
   "finding_id": "F359",
   "theme": "Transition",
   "type": "barrier",
   "statement": "There was no operational coordination mandate at subnational level for the successor arrangement to rest on.",
   "level": "subnational",
   "countries": [
    "UKR"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S065",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0293",
   "finding_id": "F360",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Weak local implementation capacity translated directly into uneven service delivery.",
   "level": "subnational",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-local",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "sustainability"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0294",
   "finding_id": "F361",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The co-leading ministry has effectively one trained focal point who understands what a cluster is, no information management function, and no ministry of humanitarian action, so deactivation this year would leave no coordination in place.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0295",
   "finding_id": "F361",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The co-leading ministry has effectively one trained focal point who understands what a cluster is, no information management function, and no ministry of humanitarian action, so deactivation this year would leave no coordination in place.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0296",
   "finding_id": "F362",
   "theme": "Transition",
   "type": "context",
   "statement": "Years of advocacy produced a government emergency WASH cell with a small technical secretariat shadowing the cluster team, but it has no access to the intersectoral group, partners are hesitant to engage it directly, and its focus defaults to coordinating government activities and direct implementation.",
   "level": "national",
   "countries": [
    "BFA"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0297",
   "finding_id": "F024",
   "theme": "Transition",
   "type": "barrier",
   "statement": "District authorities take part but do not initiate coordination, and government emergency response guidance does not exist for WASH — the only technical guidance available is the cluster own.",
   "level": "subnational",
   "countries": [
    "MOZ"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0298",
   "finding_id": "F364",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government leadership works until a ministry reshuffle moves the trained counterpart, after which the case for coordination has to be rebuilt from the beginning with officials who do not yet see its value.",
   "level": "national",
   "countries": [
    "KEN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "staff-turnover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0299",
   "finding_id": "F365",
   "theme": "Transition",
   "type": "context",
   "statement": "Capacity is not a stock that transition builds once but a flow that staff rotation continuously drains, which is why institutional anchoring matters more than training individuals.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "capacity",
    "staff-turnover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0300",
   "finding_id": "F366",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government is not willing to take over the response for certain population groups. Coordinators distinguished this from capacity, and transition planning currently offers no answer to it.",
   "level": "national",
   "countries": [
    "LBN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover",
    "inclusion"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0301",
   "finding_id": "F367",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transition to a ministry led to allocation decisions following political alignment and reduced transparency toward donors, and the sector had to be re-established around two years after handover.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "gov-national",
    "donor",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0302",
   "finding_id": "F368",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Where government is a party to the conflict, handing coordination to it would create access and acceptance problems with non-state armed actors that the current arrangement avoids.",
   "level": "subnational",
   "countries": [
    "CMR"
   ],
   "actors": [
    "gov-national",
    "un-agency"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0303",
   "finding_id": "F369",
   "theme": "Transition",
   "type": "barrier",
   "statement": "An eventual government lead is structurally difficult for inter-agency coordination to accommodate, including access to the intersectoral group and constraints on information sharing.",
   "level": "national",
   "countries": [
    "SYR"
   ],
   "actors": [
    "gov-national",
    "ocha"
   ],
   "tags": [
    "government-engagement",
    "transition-handover",
    "data-protection"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0304",
   "finding_id": "F370",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Ministries declined to engage in transition until a directive came from the head of government, secured through engagement at humanitarian coordinator level.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "ocha"
   ],
   "tags": [
    "government-engagement",
    "advocacy",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0305",
   "finding_id": "F371",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Transferring services directly to state authorities can expose groups with perceived political or ethnic affiliations.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "community"
   ],
   "tags": [
    "government-engagement",
    "inclusion",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S070",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0306",
   "finding_id": "F372",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government directives on camp closure forced premature returns, and state documentation and assistance frameworks excluded families with perceived affiliations.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "community"
   ],
   "tags": [
    "government-engagement",
    "inclusion"
   ],
   "stream": "sdr",
   "source_id": "S071",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0307",
   "finding_id": "F372",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Government directives on camp closure forced premature returns, and state documentation and assistance frameworks excluded families with perceived affiliations.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "community"
   ],
   "tags": [
    "government-engagement",
    "inclusion"
   ],
   "stream": "sdr",
   "source_id": "S072",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0308",
   "finding_id": "F373",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The transition endpoint cannot be assumed to be government. Depending on context it may be a national institution with durable funding and a formal civil protection role, a development coordination pathway, continued sectoral leadership by the lead agency — or an honest conclusion that no transition is currently viable.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "development",
    "un-agency"
   ],
   "tags": [
    "transition-handover",
    "government-engagement",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0309",
   "finding_id": "F374",
   "theme": "Transition",
   "type": "context",
   "statement": "A transition that proceeds without a viable, neutral and willing counterpart does not transfer coordination but dissolves it, and the system pays a second time when reactivation becomes necessary.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0310",
   "finding_id": "F375",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The transition was anchored by a formal durable solutions coordination structure.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S052",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0311",
   "finding_id": "F376",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The coordination mandate was embedded in government through a dedicated durable solutions secretariat.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0312",
   "finding_id": "F377",
   "theme": "Both",
   "type": "practice",
   "statement": "The subnational architecture was adapted through a multisectoral area-based arrangement.",
   "level": "subnational",
   "countries": [
    "CMR"
   ],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "multisector"
   ],
   "stream": "sdr",
   "source_id": "S061",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0313",
   "finding_id": "F378",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The successor working group had a written terms of reference, clearly identified participants including the line ministry and development banks, and alignment with the development cooperation framework — basics coordinators credit for its survival.",
   "level": "national",
   "countries": [
    "LBY"
   ],
   "actors": [
    "gov-national",
    "development",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0314",
   "finding_id": "F022",
   "theme": "Transition",
   "type": "practice",
   "statement": "A development-oriented WASH coordination platform carried a standing humanitarian agenda item, allowing humanitarian briefing to continue inside a development structure.",
   "level": "national",
   "countries": [
    "LBY"
   ],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0315",
   "finding_id": "F380",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The successor working group was paired with leadership continuity: the NGO co-lead maintained a full-time national co-coordinator after the international coordinator departed.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "localisation",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0316",
   "finding_id": "F381",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Avoid creating additional structures — integrate the early recovery agenda within existing sectoral coordination.",
   "level": "national",
   "countries": [
    "SYR"
   ],
   "actors": [
    "cluster",
    "development"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0317",
   "finding_id": "F382",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Transition is better understood as building a partnership than as closing a structure, which includes naming and scoping the successor platform around what government actually wants to coordinate.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0318",
   "finding_id": "F383",
   "theme": "Transition",
   "type": "enabler",
   "statement": "International organisations shifted to supporting existing local leadership rather than maintaining parallel systems.",
   "level": "national",
   "countries": [
    "IDN"
   ],
   "actors": [
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0319",
   "finding_id": "F384",
   "theme": "Transition",
   "type": "practice",
   "statement": "Locally anchored coordination arrangements were explored as part of the transition design.",
   "level": "subnational",
   "countries": [
    "CMR"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S061",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0320",
   "finding_id": "F385",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Where local coordination forums are lost during transition, rebuilding those networks is slow and incomplete.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S052",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0321",
   "finding_id": "F386",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A bilingual national co-coordinator, institutionally anchored in the NGO co-lead, carried the process for a year after the international coordinator left.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0322",
   "finding_id": "F387",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Embedding coordination capacity directly in the ministry worked because the request came from government: the responsible cabinet secretary asked for an embedded coordination support position, recruited through third-party contracting.",
   "level": "national",
   "countries": [
    "KEN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0323",
   "finding_id": "F388",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Formally appointing local NGOs as co-chairs of coordination forums measurably increases wider local participation.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "partnerships"
   ],
   "stream": "sdr",
   "source_id": "S073",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0324",
   "finding_id": "F389",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Embedding international staff within regional and local government structures builds capacity while avoiding costly parallel sub-offices.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-local",
    "ingo"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S077",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0325",
   "finding_id": "F390",
   "theme": "Transition",
   "type": "context",
   "statement": "Government-funded coordination positions were established as a precondition, which exposed the harder problem of holding embedded staff accountable to coordination terms of reference inside a government hierarchy.",
   "level": "national",
   "countries": [
    "KEN"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0326",
   "finding_id": "F391",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Institutional memory was preserved by archiving cluster files and maintaining continuous online access to them.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S052",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0327",
   "finding_id": "F391",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Institutional memory was preserved by archiving cluster files and maintaining continuous online access to them.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S054",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0328",
   "finding_id": "F392",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A centralised, government-owned aid information management system was established.",
   "level": "national",
   "countries": [
    "SOM"
   ],
   "actors": [
    "gov-national"
   ],
   "tags": [
    "information-management",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S060",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0329",
   "finding_id": "F393",
   "theme": "Transition",
   "type": "practice",
   "statement": "Integrating information management functions into national systems was prioritised in the transition plan.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S061",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0330",
   "finding_id": "F394",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Master lists of WASH facilities and infrastructure asset inventories, built jointly so they remain useful to government after transition, are best started at the beginning of a response rather than at its end.",
   "level": "national",
   "countries": [
    "PSE"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0331",
   "finding_id": "F395",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Cluster products should be backup-archived at global level, beyond the reach of a country-level deactivation, so technical decisions do not have to be reconstructed if coordination restarts.",
   "level": "global",
   "countries": [
    "LBY"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0332",
   "finding_id": "F395",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Cluster products should be backup-archived at global level, beyond the reach of a country-level deactivation, so technical decisions do not have to be reconstructed if coordination restarts.",
   "level": "global",
   "countries": [
    "LBY"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0333",
   "finding_id": "F396",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Continued technical accompaniment provides a necessary safety net for newly established successor mechanisms.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S056",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0334",
   "finding_id": "F397",
   "theme": "Transition",
   "type": "practice",
   "statement": "Transition planning mandated retention of residual functions — quality assurance, technical standards and risk analysis — alongside a proposed six-month post-handover mentoring phase.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0335",
   "finding_id": "F397",
   "theme": "Transition",
   "type": "practice",
   "statement": "Transition planning mandated retention of residual functions — quality assurance, technical standards and risk analysis — alongside a proposed six-month post-handover mentoring phase.",
   "level": "national",
   "countries": [
    "CMR"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S066",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0336",
   "finding_id": "F398",
   "theme": "Transition",
   "type": "practice",
   "statement": "A twelve-month advisory position was opened to help all sectors work through transition, and transition advisers are being considered for deployment to selected settings.",
   "level": "national",
   "countries": [
    "ETH"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0337",
   "finding_id": "F399",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A two-year seconded position was financed through development programme funds to accompany the successor structure.",
   "level": "national",
   "countries": [
    "IRQ"
   ],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "nexus",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0338",
   "finding_id": "F400",
   "theme": "Transition",
   "type": "practice",
   "statement": "A support package for transitioning countries includes a transition chapter in the coordination toolkit, training for coordination teams, customisable in-country training for the authorities who will coordinate after deactivation, a helpdesk with in-country support, and standby partner deployments.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity",
    "peer-learning"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0339",
   "finding_id": "F401",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Dedicated external surge teams managing complex handovers to government entities, and direct mentoring of national cluster co-facilitators, are documented enablers of sustainable handover.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "transition-handover",
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S079",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0340",
   "finding_id": "F402",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "A community of practice connecting coordinators currently in transition would carry learning between countries, given how similar the questions are.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "peer-learning",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0341",
   "finding_id": "F403",
   "theme": "Transition",
   "type": "context",
   "statement": "Coordination platforms cycle rather than end: one has moved between government leadership, national society leadership and reactivation through a flash appeal; another restarted two years after deactivation for a major flood; a third was re-established after collapse.",
   "level": "global",
   "countries": [
    "KEN",
    "LBY",
    "PSE"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0342",
   "finding_id": "F403",
   "theme": "Transition",
   "type": "context",
   "statement": "Coordination platforms cycle rather than end: one has moved between government leadership, national society leadership and reactivation through a flash appeal; another restarted two years after deactivation for a major flood; a third was re-established after collapse.",
   "level": "global",
   "countries": [
    "KEN",
    "LBY",
    "PSE"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0343",
   "finding_id": "F404",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Embed coordination explicitly in emergency preparedness plans, including digital preparedness platforms, so that preparedness reviews automatically ask who convenes and who does information management in the next emergency.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "transition-handover",
    "capacity",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0344",
   "finding_id": "F405",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Run annual preparedness refreshers with transitioned countries — contact lists, and awareness of global surge options — so the system stays reactivatable.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity",
    "peer-learning"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0345",
   "finding_id": "F406",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Use quarterly horizon scans as the trigger for proactive outreach to transitioned countries at risk of a new emergency.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0346",
   "finding_id": "F407",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Preparedness capacity building is well received by governments and works as an entry point for sustaining engagement with successor structures.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0347",
   "finding_id": "F408",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Localised contingency planning, physical stockpiling and regular training enable faster and more effective emergency response.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "gov-local"
   ],
   "tags": [
    "capacity",
    "localisation"
   ],
   "stream": "sdr",
   "source_id": "S078",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0348",
   "finding_id": "F409",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A government emergency response committee structure, well defined nationally for floods, cyclones and cholera, is replicable at district level and can carry WASH coordination readiness inside government systems.",
   "level": "subnational",
   "countries": [
    "MOZ"
   ],
   "actors": [
    "gov-national",
    "gov-local"
   ],
   "tags": [
    "government-engagement",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0349",
   "finding_id": "F410",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Post-transition preparedness obligations sit with the cluster lead agency as much as with government: sectoral emergency readiness accountability remains even where no cluster exists.",
   "level": "global",
   "countries": [],
   "actors": [
    "un-agency",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "capacity"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0350",
   "finding_id": "F411",
   "theme": "Transition",
   "type": "context",
   "statement": "Transition creates WASH-specific risks distinct from general coordination fragmentation: maintaining water systems where technical capacity sits with cluster-supported partners, supply chain continuity for treatment and hygiene items, and the provider of last resort function for cholera response.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "transition-handover",
    "sustainability"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0351",
   "finding_id": "F412",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Replacing emergency water trucking with solarised piped systems cut water supply costs from 11.38 to 0.93 US dollars per cubic metre — the kind of investment that makes service continuity financially viable after transition.",
   "level": "subnational",
   "countries": [
    "ETH"
   ],
   "actors": [
    "development",
    "gov-local"
   ],
   "tags": [
    "sustainability",
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S063",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0352",
   "finding_id": "F413",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Currency collapse left water establishments unable to fund basic operations even after internationally financed repairs, showing that continuity depends on the counterpart financial viability and not only on infrastructure.",
   "level": "national",
   "countries": [
    "LBN"
   ],
   "actors": [
    "gov-national",
    "development"
   ],
   "tags": [
    "sustainability",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S074",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0353",
   "finding_id": "F414",
   "theme": "Both",
   "type": "context",
   "statement": "Area-based coordination is a coordination configuration rather than a transition endpoint; transferring cluster functions to area structures without preserved technical custody reproduces the risks documented in both reviews.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0354",
   "finding_id": "F415",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Humanitarian actors remain within short-term funding cycles while development actors hold the long-term funding, which is the structural mismatch behind most failed handovers.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "development"
   ],
   "tags": [
    "nexus",
    "funding",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S080",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0355",
   "finding_id": "F416",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Recovery financing can remain blocked for years where political deadlock stalls reform agendas.",
   "level": "national",
   "countries": [
    "LBN"
   ],
   "actors": [
    "development",
    "gov-national"
   ],
   "tags": [
    "funding",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S075",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0356",
   "finding_id": "F417",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Use leverage at capital level for development bank financing, and treat host-community programming as the bridge portfolio between humanitarian and development funding.",
   "level": "national",
   "countries": [
    "BGD"
   ],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0357",
   "finding_id": "F417",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Use leverage at capital level for development bank financing, and treat host-community programming as the bridge portfolio between humanitarian and development funding.",
   "level": "national",
   "countries": [
    "BGD"
   ],
   "actors": [
    "development",
    "cluster"
   ],
   "tags": [
    "nexus",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S085",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0358",
   "finding_id": "F418",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Six functions should be explicitly assigned and resourced after deactivation: technical standards custody, analysis and prioritisation, information management, partner mapping, risk analysis and preparedness, and provider of last resort.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0359",
   "finding_id": "F418",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Six functions should be explicitly assigned and resourced after deactivation: technical standards custody, analysis and prioritisation, information management, partner mapping, risk analysis and preparedness, and provider of last resort.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S083",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0360",
   "finding_id": "F418",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Six functions should be explicitly assigned and resourced after deactivation: technical standards custody, analysis and prioritisation, information management, partner mapping, risk analysis and preparedness, and provider of last resort.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "information-management"
   ],
   "stream": "sdr",
   "source_id": "S084",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0361",
   "finding_id": "F419",
   "theme": "Both",
   "type": "barrier",
   "statement": "Area-based coordination can increase operational fragmentation when functional links to national systems and sectoral coordination remain weak.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S052",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0362",
   "finding_id": "F419",
   "theme": "Both",
   "type": "barrier",
   "statement": "Area-based coordination can increase operational fragmentation when functional links to national systems and sectoral coordination remain weak.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S055",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0363",
   "finding_id": "F419",
   "theme": "Both",
   "type": "barrier",
   "statement": "Area-based coordination can increase operational fragmentation when functional links to national systems and sectoral coordination remain weak.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S058",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0364",
   "finding_id": "F419",
   "theme": "Both",
   "type": "barrier",
   "statement": "Area-based coordination can increase operational fragmentation when functional links to national systems and sectoral coordination remain weak.",
   "level": "global",
   "countries": [],
   "actors": [
    "operational-cell",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S061",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0365",
   "finding_id": "F420",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Deactivating clusters while response plan objectives remain active creates operational gaps unless funding, partner presence and successor arrangements are adjusted at the same time.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "hpc"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0366",
   "finding_id": "F421",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Design successor architectures with written mandates, named participants and formalised links to national and development frameworks before deactivation.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "coordination-architecture"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0367",
   "finding_id": "F422",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Begin transition planning at response onset, with criteria agreed before plans are drafted and timelines that assume slippage.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "guidance"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0368",
   "finding_id": "F423",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Decouple deactivation decisions from funding exhaustion and secure development financing for coordination continuity.",
   "level": "global",
   "countries": [],
   "actors": [
    "donor",
    "development",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "funding",
    "nexus"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0369",
   "finding_id": "F424",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Treat information management as core infrastructure with its own transition strategy, named custodians and archives.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0370",
   "finding_id": "F425",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Convert localisation commitments into authority, funding access and usable tools for local actors.",
   "level": "global",
   "countries": [],
   "actors": [
    "local-ngo",
    "donor"
   ],
   "tags": [
    "localisation",
    "funding"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0371",
   "finding_id": "F426",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Assess and build capacity at national and subnational level before handover, anchored institutionally rather than in individuals.",
   "level": "global",
   "countries": [],
   "actors": [
    "gov-national",
    "gov-local"
   ],
   "tags": [
    "capacity",
    "government-engagement"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0372",
   "finding_id": "F427",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Retain technical standards custody, analysis, partner mapping, risk analysis and provider of last resort in explicit successor arrangements.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0373",
   "finding_id": "F428",
   "theme": "Transition",
   "type": "context",
   "statement": "The gap between the pace of formal deactivation and the pace of operational readiness is the core driver of transition difficulty across contexts.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0374",
   "finding_id": "F429",
   "theme": "Transition",
   "type": "context",
   "statement": "Successful WASH transition cases remain far less documented than failures, which biases the available evidence base toward what goes wrong.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "sdr",
   "source_id": "S102",
   "date_collected": "2026-07-17",
   "confidence": "medium",
   "status": "draft"
  },
  {
   "id": "E0375",
   "finding_id": "F364",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The entire counterpart team at the lead ministry changed within one year, including at senior level, leaving nobody the cluster had previously worked with; meetings to rebuild the relationship did not take place and the transition dialogue stalled.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "staff-turnover",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0376",
   "finding_id": "F028",
   "theme": "Both",
   "type": "barrier",
   "statement": "The cluster has had no dedicated information management post this year, having previously been supported both by the refugee coordination platform and directly by the lead agency, and now relies on intermittent consortium and consultancy support.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "information-management",
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0377",
   "finding_id": "F015",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Clusters had limited involvement in the first pooled fund allocation, and the indicator list issued to partners diverged from the indicators agreed in the sector operational framework.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ocha",
    "donor"
   ],
   "tags": [
    "pooled-funds",
    "funding",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0378",
   "finding_id": "F320",
   "theme": "Transition",
   "type": "practice",
   "statement": "An inventory of the information assets the cluster holds was compiled as part of transition planning, so that products can be summarised and taken on by government entities.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0379",
   "finding_id": "F346",
   "theme": "Transition",
   "type": "practice",
   "statement": "A costed transfer plan was prepared with a risk analysis and an inventory of information resources, to be validated by the humanitarian coordinator, and deliberately framed as a transition rather than a deactivation.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "transition-handover",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0380",
   "finding_id": "F500",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Transition preparation began with a documentation exercise reconstructing how the cluster was formed and how earlier transitions went, combined with a partner survey on expectations and recommendations.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "transition-handover",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0381",
   "finding_id": "F501",
   "theme": "Transition",
   "type": "enabler",
   "statement": "When the regulatory water ministry proved not to be operational during emergencies, the cluster shifted its transition counterpart to the health ministry, which works directly with municipalities on water quality, vector control, sanitation and hygiene.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0382",
   "finding_id": "F502",
   "theme": "Transition",
   "type": "practice",
   "statement": "The proposed successor is a specialised technical roundtable inside an existing inter-institutional environmental health commission, which already brings together the water ministry, the health ministry and national research institutes, serving as both an operational and an advisory body.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0383",
   "finding_id": "F503",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A change of national government froze transition dialogues, with the incoming administration signalling a reduction in the number of government entities and its position on humanitarian cooperation not yet known.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0384",
   "finding_id": "F504",
   "theme": "Transition",
   "type": "context",
   "statement": "The cluster set three explicit conditions for its position that it should transition rather than deactivate: humanitarian needs have worsened rather than improved, government capacity that is strong nationally is not matched at territorial level where recurrent emergencies overwhelm resources, and needs persist.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "performance",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0385",
   "finding_id": "F505",
   "theme": "Transition",
   "type": "context",
   "statement": "The separate refugee and migrant response plan is being discontinued and merged into a single response plan, with refugees and migrants included only where they intend to remain, and no regional refugee plan will follow.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "ocha",
    "cluster",
    "un-agency"
   ],
   "tags": [
    "hpc",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0386",
   "finding_id": "F506",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A short implementation window of four to six months led almost all partners to prioritise distribution of critical supplies over rehabilitation or system improvement, because longer works were not feasible in the time available.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "ingo",
    "un-agency",
    "donor"
   ],
   "tags": [
    "funding",
    "sustainability",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0387",
   "finding_id": "F507",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A twelve-month implementation window in the next funding round is expected to allow more integrated work and sustained presence rather than rapid distribution.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding",
    "sustainability"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0388",
   "finding_id": "F508",
   "theme": "ABC",
   "type": "enabler",
   "statement": "Clusters were consulted in the second allocation round, asked to submit a matrix recommending municipalities together with substantive observations, after having raised the omission from the first round.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "advocacy"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0389",
   "finding_id": "F509",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Life-saving criteria should extend beyond supply distribution to include contributions to protective environments — water and sanitation in schools, shelters and temporary accommodation — so that funded actions are intersectoral rather than dispersed.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "donor",
    "ocha"
   ],
   "tags": [
    "multisector",
    "pooled-funds",
    "advocacy"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0390",
   "finding_id": "F510",
   "theme": "Transition",
   "type": "practice",
   "statement": "The cluster recommended including municipalities at the second-highest severity level where armed conflict had recently intensified or where gaps in child health and preventable mortality persisted, rather than restricting allocations to the highest severity band alone.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "geographic-targeting",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0391",
   "finding_id": "F511",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Rapid entries into and exits from communities, driven by the need to reach the highest-severity municipalities within a short window, carry a risk of unintended harm — a point the cluster raised with the donor.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "ingo",
    "community",
    "donor"
   ],
   "tags": [
    "aap",
    "pooled-funds"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0392",
   "finding_id": "F512",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Partners reported instances of infant formula being distributed without complementary water and sanitation activities, which reduces the benefit of the nutrition intervention and can introduce health risk.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "un-agency",
    "ingo"
   ],
   "tags": [
    "multisector",
    "aap"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0393",
   "finding_id": "F513",
   "theme": "Transition",
   "type": "context",
   "statement": "Armed group control of territory confines communities and restricts movement, cutting access to rivers and water sources and forcing reliance on unsafe storage, with documented increases in infectious disease; indigenous and Afro-descendant communities in the Pacific region are the most affected.",
   "level": "subnational",
   "countries": [
    "COL"
   ],
   "actors": [
    "community",
    "local-ngo"
   ],
   "tags": [
    "inclusion",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0394",
   "finding_id": "F514",
   "theme": "Transition",
   "type": "context",
   "statement": "The main humanitarian donor for the sector prioritises protection, health and education, funding very little WASH directly and concentrating instead on intersectoral coordination and information.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "donor",
    "cluster"
   ],
   "tags": [
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0395",
   "finding_id": "F515",
   "theme": "Transition",
   "type": "context",
   "statement": "Multi-sector needs assessment has not been run for around three years because the country has substantial official data, and the sector calculation does not rely on it.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0396",
   "finding_id": "F516",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The cluster must now produce the refugee and migrant disaggregation itself, a function previously carried by the separate refugee coordination platform, without additional capacity.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "hpc",
    "capacity",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0397",
   "finding_id": "F517",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Data needed to estimate refugee and migrant needs sits in a national government social registry that the cluster has found difficult to obtain access to.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0398",
   "finding_id": "F518",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The cluster documents its severity and needs methodology and publishes it openly alongside the results, so the basis of the calculation is available to anyone who questions it.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "performance",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0399",
   "finding_id": "F519",
   "theme": "Transition",
   "type": "context",
   "statement": "A partner agency challenged the sector needs methodology across several clusters as reflecting poverty rather than humanitarian need; the cluster defended it on the basis that it combines conflict exposure, disaster incidence and public health indicators alongside service coverage.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "hpc",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0400",
   "finding_id": "F520",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Strong working relationships with the protection and shelter clusters allow WASH to be positioned as an enabling sector for others, which matters where the crisis is characterised primarily as a protection crisis.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "partnerships",
    "multisector"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0401",
   "finding_id": "F521",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Temporary accommodation is set up quickly under national disaster arrangements, and gender and child-specific considerations, along with shelter and WASH standards, are not always applied consistently.",
   "level": "subnational",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "inclusion",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0402",
   "finding_id": "F522",
   "theme": "Transition",
   "type": "context",
   "statement": "Gender and sexual and reproductive health areas of responsibility have been heavily defunded, and education was excluded from both allocation rounds on the grounds that its activities are not life-saving.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "donor",
    "ocha"
   ],
   "tags": [
    "funding",
    "inclusion",
    "multisector"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0403",
   "finding_id": "F523",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Where a technical study would document vulnerability publicly, its timing should be agreed with the incoming government first, since publishing during a change of administration can undermine the transition relationship it is meant to support.",
   "level": "national",
   "countries": [
    "COL"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "advocacy",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S103",
   "date_collected": "2026-08-03",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0404",
   "finding_id": "F225",
   "theme": "Both",
   "type": "barrier",
   "statement": "All eighteen state cluster coordinator posts are filled by double-hatting staff, in several cases alongside an NGO co-coordinator, so subnational coordination runs entirely on borrowed capacity.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "capacity",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0405",
   "finding_id": "F019",
   "theme": "Both",
   "type": "barrier",
   "statement": "The second coordination post is a temporary appointment unlikely to survive the current budget review, leaving no certainty that two coordination positions exist next year.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "funding",
    "capacity",
    "staff-turnover"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0406",
   "finding_id": "F386",
   "theme": "Transition",
   "type": "enabler",
   "statement": "A national co-coordinator drawn from a Sudanese NGO supports the team, and a second is planned, both to ease workload and to give local NGOs a national counterpart they can approach directly.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "localisation",
    "capacity",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0407",
   "finding_id": "F053",
   "theme": "Both",
   "type": "barrier",
   "statement": "Vulnerability analysis presented previously was not taken up by partners: the framework was not widely understood, and what it prioritised did not always match what partners observed in the field.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0408",
   "finding_id": "F214",
   "theme": "ABC",
   "type": "barrier",
   "statement": "A new central planning and reporting platform is being introduced alongside the cluster's existing reporting system, which would leave partners entering the same activity in both.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster",
    "ingo"
   ],
   "tags": [
    "information-management",
    "coordination-architecture",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0409",
   "finding_id": "F600",
   "theme": "Both",
   "type": "enabler",
   "statement": "State-level expert judgement is built into the severity and needs analysis alongside the survey results, because data quality and the pace of change make survey data alone unreliable and the eighteen state coordination platforms hold genuine field knowledge.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "hpc",
    "information-management",
    "localisation"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0410",
   "finding_id": "F601",
   "theme": "Both",
   "type": "enabler",
   "statement": "Running the expert judgement exercise as a single process covering needs figures, vulnerability analysis and planning together engages state coordinators in the analysis rather than presenting them with a finished product.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0411",
   "finding_id": "F602",
   "theme": "Transition",
   "type": "practice",
   "statement": "An assessment of more than sixteen hundred water points, heading toward twenty-two hundred, was presented to a government-development water task force with an accompanying dashboard.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "gov-national",
    "development",
    "cluster"
   ],
   "tags": [
    "information-management",
    "nexus",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0412",
   "finding_id": "F603",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Facility and asset mapping is among the most effective bridges to development actors, because it produces something they need and creates a shared table where sector coordination otherwise has none.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "development",
    "gov-national",
    "cluster"
   ],
   "tags": [
    "nexus",
    "information-management",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0413",
   "finding_id": "F604",
   "theme": "Both",
   "type": "barrier",
   "statement": "Recruiting state-level information management support has stalled, with previous surge deployments and overall coordination staffing levels both weighing on the decision.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "capacity",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0414",
   "finding_id": "F605",
   "theme": "Both",
   "type": "barrier",
   "statement": "The profile needed for state-level information management is hard to fill because the work is not a short emergency deployment: it connects to systems transitioning and to how the cluster will function in future, so it needs someone embedded, in-country and speaking the national language.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "localisation",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0415",
   "finding_id": "F606",
   "theme": "ABC",
   "type": "barrier",
   "statement": "A central reporting platform launched mid-year asks partners to upload projects retroactively from the start of the year, which is difficult alongside the reporting systems already in use.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "ingo",
    "cluster"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0416",
   "finding_id": "F607",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Replacing cluster reporting with a central system changes beneficiary counting, indicators and data flow at once, and raises a question about where responsibility for defining how sector results are measured should sit..",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "information-management",
    "performance",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0417",
   "finding_id": "F608",
   "theme": "Both",
   "type": "barrier",
   "statement": "WASH beneficiary calculation is context-specific — a water yard serves a set number of people in one country and a different number elsewhere, and source types differ between contexts — so a single standardised reporting model risks misrepresenting what the sector delivered.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "information-management",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0418",
   "finding_id": "F609",
   "theme": "Both",
   "type": "recommendation",
   "statement": "Where a cluster has a functioning reporting system, an interface bridging it to the central platform would avoid partners reporting twice while keeping the sector calculation with the people who understand it.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "information-management",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0419",
   "finding_id": "F610",
   "theme": "Both",
   "type": "enabler",
   "statement": "Having a cluster coordinator in every one of the eighteen states, which no other cluster has, gives the sector enough technical standing to push back when fragmented parallel structures are proposed.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0420",
   "finding_id": "F611",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Some states moved to create a separate outbreak coordination platform with its own information management, which the cluster raised concerns about, given how many coordination structures are already in place.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0421",
   "finding_id": "F612",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Between sixty-five and seventy partners are registered nationally but more operate in practice, and state platforms carry their own partners who are not always connected to the national platform.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "ingo",
    "local-ngo"
   ],
   "tags": [
    "coordination-architecture",
    "information-management",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0422",
   "finding_id": "F613",
   "theme": "Both",
   "type": "barrier",
   "statement": "The most recent census predates the current crisis by close to a decade, so there is no reliable baseline against which needs can be measured.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "information-management",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0423",
   "finding_id": "F614",
   "theme": "Both",
   "type": "barrier",
   "statement": "Outbreak coordination cannot be run nationally because epidemiological information is too fragmented to arrive in time, so it has to be organised state by state — in practice coordinating eighteen separate outbreaks with their own data, partners and supply chains.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "information-management",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0424",
   "finding_id": "F615",
   "theme": "Both",
   "type": "practice",
   "statement": "A weekly outbreak coordination training for state coordinators is being delivered alongside development of the guidance and tools it teaches, tailored to the context but potentially reusable elsewhere.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "capacity",
    "peer-learning"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0425",
   "finding_id": "F616",
   "theme": "Both",
   "type": "barrier",
   "statement": "Rules on collecting location data differ between states, with coordinates permitted in some and prohibited in others, which constrains outbreak response planning.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "data-protection",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0426",
   "finding_id": "F617",
   "theme": "Both",
   "type": "context",
   "statement": "Water systems are repeatedly targeted in areas of active conflict, so service continuity is interrupted by attack as well as by funding or capacity.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "community",
    "cluster"
   ],
   "tags": [
    "sustainability"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0427",
   "finding_id": "F618",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The pooled fund prioritisation exercise required localities to be selected within forty-eight hours using a model the cluster had reservations about, on the understanding it could be refined later; in practice the initial selection has held for the year.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "geographic-targeting",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0428",
   "finding_id": "F619",
   "theme": "ABC",
   "type": "barrier",
   "statement": "Applying geographic prioritisation to emergency supplies works against the objective where needs are dispersed: prepositioned stock needs to reach any pocket of need, and outbreaks are now occurring in localities that were not prioritised and cannot be supplied.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0429",
   "finding_id": "F620",
   "theme": "ABC",
   "type": "context",
   "statement": "A written explanation of the cluster's concerns with the prioritisation methodology did not change the approach for that allocation; an after-action review is now underway, which offers a route to revisit it.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "advocacy",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0430",
   "finding_id": "F621",
   "theme": "ABC",
   "type": "barrier",
   "statement": "A single strategic outcome set at humanitarian coordinator level gives the allocation coherence, while leaving sector gaps that sit outside its scope still needing a funding route.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0431",
   "finding_id": "F622",
   "theme": "Both",
   "type": "barrier",
   "statement": "The pooled fund grant management system offers outputs and indicators structured only around water, sanitation and hygiene, with no public health framing, which makes it difficult to frame an outbreak response within the reporting structure, and can direct otherwise appropriate activities to the wrong locations.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "performance",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0432",
   "finding_id": "F623",
   "theme": "Both",
   "type": "recommendation",
   "statement": "Adding public health outcomes and indicators to pooled fund reporting structures would let outbreak response be planned and measured as transmission reduction rather than as separate water, sanitation and hygiene outputs.",
   "level": "global",
   "countries": [],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0433",
   "finding_id": "F624",
   "theme": "Transition",
   "type": "context",
   "statement": "Development and reconstruction finance from development banks is channelled through UN agencies because it cannot be given directly to government, creating a parallel and much larger funding stream alongside the humanitarian one.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "development",
    "un-agency",
    "gov-national"
   ],
   "tags": [
    "nexus",
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0434",
   "finding_id": "F625",
   "theme": "Transition",
   "type": "enabler",
   "statement": "After a survey exposed water supply gaps, a bilateral donor funded six semi-decentralised systems designed to exit water trucking, with a joint cluster concept note, a steering committee overseeing installation, and explicit decisions on operating costs and whether management would be community-based or utility-run.",
   "level": "subnational",
   "countries": [
    "SDN"
   ],
   "actors": [
    "donor",
    "un-agency",
    "cluster",
    "community"
   ],
   "tags": [
    "nexus",
    "sustainability",
    "funding",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0435",
   "finding_id": "F626",
   "theme": "Both",
   "type": "practice",
   "statement": "A six-month cluster report brings together response progress, coordination progress, financial status, the core supply pipeline, a facility assessment and partner case studies in a single product.",
   "level": "national",
   "countries": [
    "SDN"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "performance",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S104",
   "date_collected": "2026-07-27",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0436",
   "finding_id": "F031",
   "theme": "Both",
   "type": "practice",
   "statement": "A co-coordinating partner was selected through a published terms of reference, but a compliance concern paused the process, and the cluster is deciding whether to re-advertise or return to the original applicant list.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "ingo",
    "local-ngo",
    "cluster"
   ],
   "tags": [
    "partnerships",
    "coordination-architecture",
    "localisation"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0437",
   "finding_id": "F316",
   "theme": "Transition",
   "type": "enabler",
   "statement": "An information management post was requested inside the line ministry so that government holds its own capacity, co-leads the function and helps define what the role covers ahead of the handover.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0438",
   "finding_id": "F024",
   "theme": "Transition",
   "type": "barrier",
   "statement": "The coordination link at local government level is not yet in place: departments and the state water agency need mentoring and coaching before they can carry coordination, even though national arrangements are agreed.",
   "level": "subnational",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "government-engagement",
    "capacity",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0439",
   "finding_id": "F426",
   "theme": "Transition",
   "type": "enabler",
   "statement": "Rather than assuming what ministry capacity gaps are, the cluster commissioned a capacity gap analysis first, on the basis that describing capacity as weak says nothing about what support would actually help.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0440",
   "finding_id": "F026",
   "theme": "Both",
   "type": "recommendation",
   "statement": "Connecting neighbouring countries facing the same cross-border outbreak through a shared space for materials and experience was proposed as a practical form of peer support.",
   "level": "regional",
   "countries": [],
   "actors": [
    "cluster"
   ],
   "tags": [
    "peer-learning",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0441",
   "finding_id": "F225",
   "theme": "Both",
   "type": "barrier",
   "statement": "One information management officer covers both the WASH and education sectors, so information management for each is delivered at partial capacity.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "cluster",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0442",
   "finding_id": "F700",
   "theme": "Transition",
   "type": "practice",
   "statement": "Transition to government-led coordination began at the start of the year, with the line ministry taking the lead supported by an NGO co-coordinator, on a timetable running to the end of the following year.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "ingo",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0443",
   "finding_id": "F701",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Training of trainers for state facilitators and co-coordinators had to be delivered remotely rather than in person because of funding constraints, before a five-day session with state representatives.",
   "level": "subnational",
   "countries": [
    "NGA"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "capacity",
    "funding"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0444",
   "finding_id": "F702",
   "theme": "Transition",
   "type": "barrier",
   "statement": "Ministry staff nominated to lead coordination do not yet hold the skill sets the role needs, and a five-month deployment was arranged to build them.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "un-agency"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0445",
   "finding_id": "F703",
   "theme": "Transition",
   "type": "practice",
   "statement": "A state advisory group is to endorse the transition plan and provide continuing oversight, so that the arrangement is formalised within the ministry rather than resting on individual relationships.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "transition-handover",
    "government-engagement",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0446",
   "finding_id": "F704",
   "theme": "Transition",
   "type": "recommendation",
   "statement": "Ministry staff taking on coordination need training on emergency preparedness and response planning, contingency planning and aligned monitoring tools, not only on coordination mechanics.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "capacity",
    "government-engagement",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0447",
   "finding_id": "F705",
   "theme": "Both",
   "type": "enabler",
   "statement": "The multi-sector needs assessment is led by a national NGO, which has run the country assessment programme for several years in place of an international assessment partner.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "local-ngo",
    "ocha"
   ],
   "tags": [
    "localisation",
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0448",
   "finding_id": "F706",
   "theme": "Both",
   "type": "barrier",
   "statement": "No wider multi-sector needs assessment was conducted last year, so the response plan rested on secondary data analysis alone.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0449",
   "finding_id": "F707",
   "theme": "Both",
   "type": "context",
   "statement": "A large cholera outbreak is running concurrently with the transition, with cases declining in one urban area while rising in others, and the household-level response approach is not sufficient in the worst-affected locations.",
   "level": "subnational",
   "countries": [
    "NGA"
   ],
   "actors": [
    "cluster",
    "ingo"
   ],
   "tags": [
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0450",
   "finding_id": "F708",
   "theme": "Both",
   "type": "barrier",
   "statement": "The outbreak has a cross-border dimension with three neighbouring countries, and containment depends on coordination that no single country platform currently provides.",
   "level": "regional",
   "countries": [],
   "actors": [
    "cluster",
    "gov-national"
   ],
   "tags": [
    "coordination-architecture",
    "peer-learning"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0451",
   "finding_id": "F709",
   "theme": "Both",
   "type": "enabler",
   "statement": "The technical working group leading the outbreak response is chaired by an international NGO rather than the lead agency, with the sector spanning all partner agencies and the ministry.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "ingo",
    "cluster",
    "gov-national"
   ],
   "tags": [
    "partnerships",
    "localisation",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0452",
   "finding_id": "F710",
   "theme": "Both",
   "type": "recommendation",
   "statement": "Technical support to an outbreak should be pitched at the whole sector rather than routed through the lead agency alone, so that all partners work from the same guidance, tools and training.",
   "level": "global",
   "countries": [],
   "actors": [
    "cluster",
    "ingo",
    "un-agency"
   ],
   "tags": [
    "partnerships",
    "capacity",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0453",
   "finding_id": "F711",
   "theme": "Transition",
   "type": "context",
   "statement": "Coordination capacity during the transition is being provided through a standby partner deployment at no cost to the country office, which fills the gap but does not establish a funded post.",
   "level": "national",
   "countries": [
    "NGA"
   ],
   "actors": [
    "un-agency",
    "cluster"
   ],
   "tags": [
    "capacity",
    "funding",
    "transition-handover"
   ],
   "stream": "transcript",
   "source_id": "S105",
   "date_collected": "2026-07-17",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0454",
   "finding_id": "F364",
   "theme": "Both",
   "type": "barrier",
   "statement": "Key informants for the needs analysis were departmental water and sanitation directors, but almost all had just been rotated into new posts when the questionnaire went out, so responses were difficult to use and the gap had to be filled by a cluster workshop.",
   "level": "subnational",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-local",
    "cluster"
   ],
   "tags": [
    "staff-turnover",
    "government-engagement",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0455",
   "finding_id": "F319",
   "theme": "Transition",
   "type": "enabler",
   "statement": "The statistics directorate of the line ministry asked to join the cluster mailing list this year in order to receive cluster information, the first time government has sought the data directly.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "gov-national",
    "cluster"
   ],
   "tags": [
    "information-management",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0456",
   "finding_id": "F214",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The cluster 5W sits on a platform built in-country and shared with other sectors; with a new central module also asking partners to report, it is unresolved whether partners should continue filling the cluster system, both, or neither.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster",
    "ocha",
    "ingo"
   ],
   "tags": [
    "information-management",
    "coordination-architecture",
    "hpc"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0457",
   "finding_id": "F045",
   "theme": "ABC",
   "type": "context",
   "statement": "The cluster terms of reference were revised to cover current issues and a new thematic working group, but not area-based coordination, because the cluster was not approached about it.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster",
    "ocha"
   ],
   "tags": [
    "guidance",
    "coordination-architecture"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0458",
   "finding_id": "F708",
   "theme": "Both",
   "type": "context",
   "statement": "Gastroenteritis cases have been notified near the border with a neighbouring country where a large cholera outbreak is under way, and emergency preparations are being made with the zone offices.",
   "level": "subnational",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0459",
   "finding_id": "F800",
   "theme": "ABC",
   "type": "context",
   "statement": "Measured against a definition of area-based coordination operating at the smallest administrative unit, the country does not have it: a pilot covering four of two hundred and sixty-six communes was tried and did not continue beyond the pilot.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "coordination-architecture",
    "geographic-targeting"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0460",
   "finding_id": "F801",
   "theme": "ABC",
   "type": "context",
   "statement": "Treated instead as regional structures, five functional coordination groups meet monthly and work for practically all sectors — so whether the country has area-based coordination depends entirely on which administrative level the definition refers to.",
   "level": "subnational",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster",
    "gov-local"
   ],
   "tags": [
    "coordination-architecture",
    "guidance"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0461",
   "finding_id": "F802",
   "theme": "Both",
   "type": "barrier",
   "statement": "An advocacy committee bringing together the cluster thematic sub-groups and members with advocacy expertise was recommended two years ago and has still not been established, because each year emergencies require the workplan to be reprioritised.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "advocacy",
    "capacity",
    "performance"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0462",
   "finding_id": "F803",
   "theme": "ABC",
   "type": "barrier",
   "statement": "A change to the pooled fund project review process arrived with a day’s notice and required the committee to meet across the week and nominate members for an in-person session, displacing the cluster meeting and other planned work.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "pooled-funds",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0463",
   "finding_id": "F804",
   "theme": "Transition",
   "type": "practice",
   "statement": "A donor delegation met the cluster to discuss strategic priorities and advised that proposals emphasise environmental impact assessment and the donor four environmental priority areas, which the cluster is now building into partner capacity building and its advocacy strategy.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "donor",
    "cluster",
    "ingo"
   ],
   "tags": [
    "advocacy",
    "funding",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0464",
   "finding_id": "F805",
   "theme": "Both",
   "type": "enabler",
   "statement": "A database that takes data pasted from the cluster reporting platform and returns results by indicator has made routine information products quick to produce, and the cluster considers information management its strongest area.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0465",
   "finding_id": "F806",
   "theme": "Both",
   "type": "barrier",
   "statement": "A discrepancy between the reporting platform and the dashboard affects the total people-reached figure, and reconciling the two requires support the cluster does not hold in-house.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster"
   ],
   "tags": [
    "information-management",
    "capacity"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0466",
   "finding_id": "F807",
   "theme": "ABC",
   "type": "barrier",
   "statement": "The response to questions about which reporting system applies has been that the central module is a pilot and no answer is available yet, so partners have not begun reporting into it and the cluster continues extracting from its own platform alongside an interim spreadsheet.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "ocha",
    "cluster"
   ],
   "tags": [
    "information-management",
    "hpc",
    "guidance"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0467",
   "finding_id": "F808",
   "theme": "Transition",
   "type": "barrier",
   "statement": "A transition plan was raised once at an intersectoral meeting as something every cluster should have; the cluster asked how it should be done, received no answer, and has not been contacted since, so ordinary coordination continues with neither government nor partners raising it.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "ocha",
    "cluster",
    "gov-national"
   ],
   "tags": [
    "transition-handover",
    "guidance",
    "government-engagement"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0468",
   "finding_id": "F809",
   "theme": "Both",
   "type": "barrier",
   "statement": "The cluster contributed indicators and questionnaire content to the planned multi-sector assessment and asked to take part in enumerator training, was told it would be included, and then heard nothing; collection was due to start in July and had not begun by mid-month.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "ocha",
    "ingo",
    "cluster"
   ],
   "tags": [
    "hpc",
    "information-management",
    "partnerships"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  },
  {
   "id": "E0469",
   "finding_id": "F810",
   "theme": "Both",
   "type": "practice",
   "statement": "With no multi-sector assessment last year, the cluster updated the previous one through key informants and agreed severity levels collectively at a cluster workshop.",
   "level": "national",
   "countries": [
    "NER"
   ],
   "actors": [
    "cluster",
    "local-ngo"
   ],
   "tags": [
    "hpc",
    "information-management"
   ],
   "stream": "transcript",
   "source_id": "S106",
   "date_collected": "2026-07-13",
   "confidence": "high",
   "status": "draft"
  }
 ],
 "sources": [
  {
   "source_id": "S011",
   "title": "Country consultation — Somalia",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-08-03",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  },
  {
   "source_id": "S012",
   "title": "Country consultation — Myanmar (two sessions)",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-07-28",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  },
  {
   "source_id": "S013",
   "title": "Flagship Initiative Evolving Approach",
   "organisation": "Flagship Initiative",
   "year": "",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S1",
   "source_group": ""
  },
  {
   "source_id": "S014",
   "title": "Decentralised Coordination Models",
   "organisation": "Food Security Cluster",
   "year": "2023",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S2",
   "source_group": ""
  },
  {
   "source_id": "S015",
   "title": "Reflections on Area-Based Coordination",
   "organisation": "ACTED",
   "year": "2024",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S3",
   "source_group": ""
  },
  {
   "source_id": "S016",
   "title": "Ukraine Localization Survey 2024",
   "organisation": "Refugees International",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S4",
   "source_group": ""
  },
  {
   "source_id": "S017",
   "title": "Pulse of Humanitarian Coordination 2023",
   "organisation": "OCHA",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S5",
   "source_group": ""
  },
  {
   "source_id": "S018",
   "title": "CCCM Paper on Area-based Approaches",
   "organisation": "CCCM Cluster",
   "year": "2020",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S6",
   "source_group": ""
  },
  {
   "source_id": "S019",
   "title": "Guidance: Cluster Simplification and Adapting Coordination",
   "organisation": "IASC HWG",
   "year": "2026",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S7",
   "source_group": ""
  },
  {
   "source_id": "S020",
   "title": "Leading in times of crisis",
   "organisation": "UN Women",
   "year": "2026",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S8",
   "source_group": ""
  },
  {
   "source_id": "S021",
   "title": "Flagship Initiative Second Year Learning Report, April 2025",
   "organisation": "OCHA",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S9",
   "source_group": ""
  },
  {
   "source_id": "S022",
   "title": "Session 2 Area Based Coordination",
   "organisation": "Health Cluster",
   "year": "",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S10",
   "source_group": ""
  },
  {
   "source_id": "S023",
   "title": "Somalia: Drought Situation Report No. 7",
   "organisation": "OCHA",
   "year": "2022",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S11",
   "source_group": ""
  },
  {
   "source_id": "S024",
   "title": "Subnational HCTs and ICCGs",
   "organisation": "OCHA",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S12",
   "source_group": ""
  },
  {
   "source_id": "S025",
   "title": "Evaluation of EU humanitarian interventions",
   "organisation": "ADE",
   "year": "2022",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S13",
   "source_group": ""
  },
  {
   "source_id": "S026",
   "title": "Promoting Equitable Partnerships with Local Responders",
   "organisation": "DG ECHO",
   "year": "2023",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S14",
   "source_group": ""
  },
  {
   "source_id": "S027",
   "title": "IAHE Response to Somalia Crisis",
   "organisation": "IAHE",
   "year": "2024",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S15",
   "source_group": ""
  },
  {
   "source_id": "S028",
   "title": "Humanitarian Access SCORE Report: Haiti",
   "organisation": "Stoddard et al",
   "year": "2023",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S16",
   "source_group": ""
  },
  {
   "source_id": "S029",
   "title": "Data Flow in Humanitarian Aid",
   "organisation": "Coalition for Accountability and Integrity",
   "year": "2025",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S17",
   "source_group": ""
  },
  {
   "source_id": "S030",
   "title": "Humanitarian Response Plan Myanmar 2023",
   "organisation": "OCHA",
   "year": "2023",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S18",
   "source_group": ""
  },
  {
   "source_id": "S031",
   "title": "Syria Cross-border Humanitarian Fund Strategy",
   "organisation": "OCHA",
   "year": "2024",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S19",
   "source_group": ""
  },
  {
   "source_id": "S032",
   "title": "Urban Compendium",
   "organisation": "Global Shelter Cluster",
   "year": "2018",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S20",
   "source_group": ""
  },
  {
   "source_id": "S033",
   "title": "Coordination in Transition",
   "organisation": "ICVA",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S21",
   "source_group": ""
  },
  {
   "source_id": "S034",
   "title": "Area-Based Development Practice Note",
   "organisation": "UNDP",
   "year": "2025",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S22",
   "source_group": ""
  },
  {
   "source_id": "S035",
   "title": "Operationalizing the HDP Nexus",
   "organisation": "UNDP",
   "year": "2026",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S23",
   "source_group": ""
  },
  {
   "source_id": "S036",
   "title": "UNHCR Leadership and Coordination Role",
   "organisation": "Collinson & Schenkenberg",
   "year": "2019",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S24",
   "source_group": ""
  },
  {
   "source_id": "S037",
   "title": "Partner Meeting Note, 19–20 June 2025",
   "organisation": "Global Health Cluster",
   "year": "2025",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S25",
   "source_group": ""
  },
  {
   "source_id": "S038",
   "title": "Messages from SC coordinators on ABC",
   "organisation": "Global Shelter Cluster",
   "year": "2024",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S26",
   "source_group": ""
  },
  {
   "source_id": "S039",
   "title": "ABC – Findings from consultation with countries",
   "organisation": "Global Shelter Cluster",
   "year": "2024",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S27",
   "source_group": ""
  },
  {
   "source_id": "S040",
   "title": "ABC: Responses from Cluster Coordinators",
   "organisation": "Global Education Cluster",
   "year": "2024",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S28",
   "source_group": ""
  },
  {
   "source_id": "S041",
   "title": "Area-Based Coordination and Area-Based Programming: Typology, Lessons and Implications. Study commissioned by the Global Cluster Coordination Group, supported by OCHA and UNICEF",
   "organisation": "Derzsi-Horváth, A",
   "year": "2025",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S29",
   "source_group": ""
  },
  {
   "source_id": "S042",
   "title": "ABC & WASH: Theory, Challenges and Experiences — Webinar",
   "organisation": "GWC",
   "year": "2026",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S30",
   "source_group": "gwc-consult-2025"
  },
  {
   "source_id": "S043",
   "title": "Area-Based Humanitarian Coordination — Internal Reflections",
   "organisation": "GWC",
   "year": "2024",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S31",
   "source_group": "gwc-consult-2025"
  },
  {
   "source_id": "S044",
   "title": "Area-Based Coordination Survey",
   "organisation": "GWC",
   "year": "2024",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S32",
   "source_group": "gwc-consult-2025"
  },
  {
   "source_id": "S045",
   "title": "GWC NCP Validation Workshop — Briefing Note: Area-Based Coordination and Transition in Humanitarian Settings. May/June 2026",
   "organisation": "GWC",
   "year": "2026",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-S33",
   "source_group": "gwc-consult-2026"
  },
  {
   "source_id": "S046",
   "title": "The Future of Humanitarian Coordination",
   "organisation": "HERE-Geneva",
   "year": "2021",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A1",
   "source_group": ""
  },
  {
   "source_id": "S047",
   "title": "AAP Evaluation",
   "organisation": "OCHA",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A2",
   "source_group": ""
  },
  {
   "source_id": "S048",
   "title": "Localisation in Humanitarian Leadership — Venezuela",
   "organisation": "ICVA",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A3",
   "source_group": ""
  },
  {
   "source_id": "S049",
   "title": "ABC in Urban Areas",
   "organisation": "Global Shelter Cluster",
   "year": "2018",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A4",
   "source_group": ""
  },
  {
   "source_id": "S050",
   "title": "Bangladesh Humanitarian Situation Report No. 70",
   "organisation": "UNICEF",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A5",
   "source_group": ""
  },
  {
   "source_id": "S051",
   "title": "IOM Afghanistan Summary Appeal 2024",
   "organisation": "IOM",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "ABC-A6",
   "source_group": ""
  },
  {
   "source_id": "S052",
   "title": "IASC. (2024.). 5\\_Annex E — Examples of cluster transition",
   "organisation": "",
   "year": "",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S1",
   "source_group": ""
  },
  {
   "source_id": "S053",
   "title": "6\\_Summary Guidance on Cluster Transition and Deactivation",
   "organisation": "IASC",
   "year": "2024",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S2",
   "source_group": ""
  },
  {
   "source_id": "S054",
   "title": "CCCM Cluster Iraq Transition Strategy. NOTE: Replaces \"Source 36, Iraq\"",
   "organisation": "CCCM Cluster Iraq",
   "year": "2022",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S3",
   "source_group": ""
  },
  {
   "source_id": "S055",
   "title": "Humanitarian transition context — Joint EMOPS, CoE and Regional Office support mission to Cameroon",
   "organisation": "UNICEF",
   "year": "2026",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S4",
   "source_group": ""
  },
  {
   "source_id": "S056",
   "title": "Coordination in Transition. ICVA",
   "organisation": "Holland, K",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S5",
   "source_group": ""
  },
  {
   "source_id": "S057",
   "title": "IASC Guidance on Cluster Transition and Deactivation",
   "organisation": "IASC",
   "year": "2024",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S6",
   "source_group": ""
  },
  {
   "source_id": "S058",
   "title": "Linking Cluster Coordination Deactivation to ABC in Cameroon",
   "organisation": "UNICEF GCCS",
   "year": "2026",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S7",
   "source_group": ""
  },
  {
   "source_id": "S059",
   "title": "The Pulse of Humanitarian Coordination 2024",
   "organisation": "IASC",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S8",
   "source_group": ""
  },
  {
   "source_id": "S060",
   "title": "National Durable Solutions Strategy 2020–2024",
   "organisation": "Federal Government of Somalia",
   "year": "2020",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S9",
   "source_group": ""
  },
  {
   "source_id": "S061",
   "title": "Transition of the Health Cluster in Cameroon",
   "organisation": "WHO",
   "year": "2026",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S10",
   "source_group": ""
  },
  {
   "source_id": "S062",
   "title": "Sustaining Coordination Beyond Cluster Deactivation",
   "organisation": "GCCG — Localisation Working Group",
   "year": "2026",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S11",
   "source_group": ""
  },
  {
   "source_id": "S063",
   "title": "Sustainable Water Access in Gambella",
   "organisation": "UNICEF",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S12",
   "source_group": ""
  },
  {
   "source_id": "S064",
   "title": "Sector Financing Review: WASH sector in Iraq",
   "organisation": "UNICEF",
   "year": "2023",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S13",
   "source_group": ""
  },
  {
   "source_id": "S065",
   "title": "Ukraine Education Cluster Transition Plan 2025–2026. NOTE: Replaces \"Source 23, Ukraine\"",
   "organisation": "Kalden & Rymarenko",
   "year": "2025",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S14",
   "source_group": ""
  },
  {
   "source_id": "S066",
   "title": "Transition synthesis — Cameroon. NOTE: Replaces \"Source 24, Cameroon\"",
   "organisation": "Task Force Transition",
   "year": "2026",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S15",
   "source_group": ""
  },
  {
   "source_id": "S067",
   "title": "CWG Transition Strategy — Iraq",
   "organisation": "Termes, M",
   "year": "2022",
   "type": "strategy",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S16",
   "source_group": ""
  },
  {
   "source_id": "S068",
   "title": "CWG deactivation in Iraq (full report)",
   "organisation": "Termes, M",
   "year": "2023",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S17",
   "source_group": ""
  },
  {
   "source_id": "S069",
   "title": "Evaluation of UNICEF CLA Role. NOTE: Pre-2015; restored to active registry — provides systemic evidence on mission creep and government resistance to deactivation cited in Section 3.4",
   "organisation": "UNICEF Evaluation Office",
   "year": "2013",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S18",
   "source_group": ""
  },
  {
   "source_id": "S070",
   "title": "Practice Note: Continuity of Protection in Transitions",
   "organisation": "Global Protection Cluster & NRC",
   "year": "2025",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S19",
   "source_group": ""
  },
  {
   "source_id": "S071",
   "title": "Humanitarian Transition Overview 2024 Iraq",
   "organisation": "OCHA",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S20",
   "source_group": ""
  },
  {
   "source_id": "S072",
   "title": "Humanitarian Transition Overview 2023 Iraq",
   "organisation": "OCHA",
   "year": "2023",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S21",
   "source_group": ""
  },
  {
   "source_id": "S073",
   "title": "Iraq Cash Forum. CALP Network",
   "organisation": "Palacios & Tonea",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S22",
   "source_group": ""
  },
  {
   "source_id": "S074",
   "title": "Evaluation of UNICEF Support to Water Establishments — Lebanon",
   "organisation": "Triangle Consulting",
   "year": "2023",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S23",
   "source_group": ""
  },
  {
   "source_id": "S075",
   "title": "From Crisis to Recovery — Rapid Impact Assessment",
   "organisation": "UNDP Lebanon",
   "year": "2025",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S24",
   "source_group": ""
  },
  {
   "source_id": "S076",
   "title": "Reflections: HDP Nexus Approaches",
   "organisation": "IEO/UNDP",
   "year": "2025",
   "type": "evaluation",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S25",
   "source_group": ""
  },
  {
   "source_id": "S077",
   "title": "Area-Based Development Practice Note",
   "organisation": "UNDP",
   "year": "2025",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S26",
   "source_group": ""
  },
  {
   "source_id": "S078",
   "title": "Effectiveness of coordination in humanitarian WASH. GWC/Tufts",
   "organisation": "Heylen et al",
   "year": "2023",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S27",
   "source_group": ""
  },
  {
   "source_id": "S079",
   "title": "Field Support Team Consortium Annual Report 2024",
   "organisation": "ACF & GWC",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S28",
   "source_group": ""
  },
  {
   "source_id": "S080",
   "title": "WASH Resilience, Conflict Sensitivity and Peacebuilding",
   "organisation": "GWN",
   "year": "2024",
   "type": "guidance",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S29",
   "source_group": ""
  },
  {
   "source_id": "S081",
   "title": "Accelerated Transitions: Key takeaways",
   "organisation": "NRC",
   "year": "2025",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S30",
   "source_group": ""
  },
  {
   "source_id": "S082",
   "title": "Post-transition planning Part 2",
   "organisation": "NRC",
   "year": "2025",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S31",
   "source_group": ""
  },
  {
   "source_id": "S083",
   "title": "GWC NCP Validation Workshop — Day 2: Transition in Humanitarian Settings. Transcript and briefing materials, May/June 2026",
   "organisation": "GWC",
   "year": "2026",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S32",
   "source_group": "gwc-consult-2026"
  },
  {
   "source_id": "S084",
   "title": "Operational Support Clinic — Transition. Facilitated peer-exchange transcript, 12 June 2026",
   "organisation": "GWC",
   "year": "2026",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S33",
   "source_group": "gwc-consult-2026"
  },
  {
   "source_id": "S085",
   "title": "Transition Rapid Key Informant Interviews with selected NCPs",
   "organisation": "GWC",
   "year": "2026",
   "type": "workshop-notes",
   "url": "",
   "stream": "workshop",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-S34",
   "source_group": "gwc-consult-2026"
  },
  {
   "source_id": "S086",
   "title": "2\\_Annex B — Example template for a Transition Strategy",
   "organisation": "IASC",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A1",
   "source_group": ""
  },
  {
   "source_id": "S087",
   "title": "HC-HCT Transition and Deactivation Checklist",
   "organisation": "IASC",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A2",
   "source_group": ""
  },
  {
   "source_id": "S088",
   "title": "Cluster Approach Evaluation Final Draft. HPG/ODI",
   "organisation": "Stoddard et al",
   "year": "2007",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A3",
   "source_group": ""
  },
  {
   "source_id": "S089",
   "title": "[Removed during validation — number not reassigned]",
   "organisation": "",
   "year": "",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A4",
   "source_group": ""
  },
  {
   "source_id": "S090",
   "title": "Investment case for sustainable water systems in Somalia",
   "organisation": "UNICEF",
   "year": "2019",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A5",
   "source_group": ""
  },
  {
   "source_id": "S091",
   "title": "COVID-19 Lessons Learned",
   "organisation": "WASH Cluster Iraq & Mercy Corps",
   "year": "2021",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A6",
   "source_group": ""
  },
  {
   "source_id": "S092",
   "title": "Evaluation of the Global Cluster for Early Recovery. UNDP",
   "organisation": "Murray et al",
   "year": "2018",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A7",
   "source_group": ""
  },
  {
   "source_id": "S093",
   "title": "UNICEF WASH in Protracted Crisis (Annexes)",
   "organisation": "Itad",
   "year": "2020",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A8",
   "source_group": ""
  },
  {
   "source_id": "S094",
   "title": "UNICEF WASH in Protracted Crises: Cameroon Case Study",
   "organisation": "Itad",
   "year": "2020",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A9",
   "source_group": ""
  },
  {
   "source_id": "S095",
   "title": "Protection Toolkit — Ch. 8: Cluster Transition",
   "organisation": "Global Protection Cluster",
   "year": "2025",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A10",
   "source_group": ""
  },
  {
   "source_id": "S096",
   "title": "WASH service delivery in protracted crises: South Sudan. ODI",
   "organisation": "Mosello et al",
   "year": "2016",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A11",
   "source_group": ""
  },
  {
   "source_id": "S097",
   "title": "Reviving Sanitation Campaign after 2015 Earthquake",
   "organisation": "UN-Habitat & WSSCC",
   "year": "2016",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A12",
   "source_group": ""
  },
  {
   "source_id": "S098",
   "title": "CO Guide on CLA Accountabilities",
   "organisation": "UNICEF",
   "year": "2024",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A13",
   "source_group": ""
  },
  {
   "source_id": "S099",
   "title": "Shelter Projects: Nepal Housing Recovery",
   "organisation": "Global Shelter Cluster",
   "year": "2019",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A14",
   "source_group": ""
  },
  {
   "source_id": "S100",
   "title": "Strategic Plan 2022–2025",
   "organisation": "GWC",
   "year": "2022",
   "type": "report",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "Transition-A15",
   "source_group": ""
  },
  {
   "source_id": "S101",
   "title": "Secondary Data Review — Area-Based Coordination (V17)",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "",
   "source_group": "abc-sdr"
  },
  {
   "source_id": "S102",
   "title": "Secondary Data Review — Transition in Humanitarian Settings",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "study",
   "url": "",
   "stream": "sdr",
   "date_added": "2026-07-17",
   "access": "public",
   "legacy_id": "",
   "source_group": "transition-sdr"
  },
  {
   "source_id": "S103",
   "title": "Country consultation — Colombia",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-08-03",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  },
  {
   "source_id": "S104",
   "title": "Country consultation — Sudan",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-07-27",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  },
  {
   "source_id": "S105",
   "title": "Country consultation — Nigeria",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-07-17",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  },
  {
   "source_id": "S106",
   "title": "Country consultation — Niger",
   "organisation": "Global WASH Cluster",
   "year": "2026",
   "type": "interview",
   "url": "",
   "stream": "transcript",
   "date_added": "2026-07-13",
   "access": "restricted",
   "legacy_id": "",
   "source_group": ""
  }
 ]
};
