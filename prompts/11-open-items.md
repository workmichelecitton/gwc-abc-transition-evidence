# Open items

Things a session cannot discover by running the build. Everything else about the
state of this base is self-reporting: `python scripts/build.py` names unread
sources, missing quotes and bad rows, `sources.csv` notes say what has been read
and what has only been linked, and the commit messages carry the reasoning.

These four do not surface anywhere. They were established in conversation and
would otherwise be lost when that conversation ends.

Written 15/09/2026, at 796 records · 196 findings · 113 sources.
Figures below were recomputed the same day. Recompute before acting on them.

---

## 1. F114 — two records still make a claim not found in their sources

`F114` carries the recommendation *"Map development actors as transition
counterparts"*. It was credited to seven sources. Two were checked against the
documents and the sentence is absent from both; those records were withdrawn.

Five remain:

| Record | Source | Quote |
|---|---|---|
| E0090 | S083 | yes |
| E0091 | S084 | yes |
| E0093 | S085 | yes |
| **E0092** | **S074** | **none** |
| **E0095** | **S077** | **none** |

The three quoted records are GWC workshop material and stand. **E0092 and E0095
are the problem**: same sentence, no quote, and the two records already
withdrawn from this finding failed the same test. Treat them as suspect until
someone opens S074 and S077 and either finds the sentence or withdraws them.

This matters beyond one finding. The sentence is a v1 artefact — the first
version of this base was built by AI synthesis that attributed claims
*collectively* to every document in a corpus, and import then split each
collective attribution into separate records. That manufactures corroboration
which is invisible once committed. Wherever the same wording appears under
several sources with no quote, assume this until shown otherwise.

---

## 2. The cross-source duplicate residue

**12 statement groups · 35 records · 31 of them with no quote.** Records with
identical wording attributed to *different* source groups, which is what the
counting rule exists to catch. Worst first:

| Records | Unquoted | Statement |
|---|---|---|
| 5 | 2 | Map development actors as transition counterparts *(item 1 above)* |
| 5 | 5 | Where technical prioritisation functions such as standards, indicators… |
| 4 | 4 | Area-based coordination can increase operational fragmentation when fu… |
| 3 | 3 | Inconsistencies between national strategies and subnational implementa… |
| 3 | 3 | Shifts from internationally led to nationally anchored systems can cre… |
| 3 | 2 | Six functions should be explicitly assigned and resourced after deacti… |

**Bands are already protected** — de-duplication runs at build time, so these do
not inflate any strength. The damage is different: each record asserts that a
named document says something, and for 31 of them nobody has checked.

Two documents that genuinely say the same thing produce *different* quotes. So
the resolution for each record is binary: open the source and capture its own
quote, or withdraw the record. Do not paste one source's quote onto another's
record.

Recompute the list rather than trusting the table:

```python
import csv, collections
E = list(csv.DictReader(open("data/evidence.csv", encoding="utf-8")))
S = {s["source_id"]: s for s in csv.DictReader(open("data/sources.csv", encoding="utf-8"))}
grp = {k: (v["source_group"] or k) for k, v in S.items()}
by = collections.defaultdict(list)
for e in E:
    by[e["statement"].strip().lower()].append(e)
for st, rs in by.items():
    if len(rs) > 1 and len({grp[r["source_id"]] for r in rs}) > 1:
        print(len(rs), sum(1 for r in rs if not r["quote"].strip()), st[:70])
```

---

## 3. The relation rule is applied inconsistently — my error, unresolved

Three relations are declared in `findings.csv`:

| Relation | Bands |
|---|---|
| F209 → qualifies → F001 | band 5 (11 sources) qualifies band 4 (4 sources) |
| **F1954 → qualifies → F304** | **band 1 (1 source) qualifies band 5 (7 sources)** |
| **F1958 → qualifies → F333** | **band 1 (1 source) qualifies band 5 (12 sources)** |

I declined to create a band-1 → band-5 relation earlier in the same session on
the grounds that it overstates a single source against a corroborated finding,
and then created two. One of those positions is wrong and I did not settle
which.

The question to settle, once, and write into `00-shared-rules.md`:

> **Can a single-source finding qualify a corroborated one?**
>
> *Argument for:* a relation is a pointer, not a strength claim. The bands are
> still displayed, so a reader sees a band 1 qualifying a band 5 and weighs it
> accordingly. Suppressing the pointer hides a real tension.
>
> *Argument against:* a relation on the page reads as "this finding needs
> reading alongside that one", which lends the single source borrowed weight it
> has not earned. The base's whole defence is that nobody's judgement sets
> strength — and choosing which findings qualify which is judgement.

Whichever is chosen, apply it to all three and delete or keep accordingly. The
current state is defensible under neither rule.

---

## 4. S036 — linked, correctly named, never opened

**UNHCR, *UNHCR's Leadership and Coordination Role in Refugee Response Settings***
— 2 records, **0 quotes**.

The registry entry was corrected and linked, which makes it *look* settled on the
Sources page. It is not: nobody has read it, and its two records rest on v1
attribution. Same treatment as item 1.

---

## Not on this list, deliberately

**Unread sources.** `build.py` already prints them on every run, and each one
carries either a `NOT YET READ` note or a `DELIBERATELY NOT EXTRACTED` decision
in `sources.csv`. That is self-maintaining and does not need a second copy here.
Currently 12 open, 8 decided.

**Gaps in country or theme coverage.** The A3 skill rebuilds the gap table at
Step A, and the map on the Findings tab carries the live count of country-by-theme
combinations nobody has been asked about. A written snapshot would go stale within
one round. (The Analysis tab that used to compute this was removed on 15/09/2026;
its coverage matrix went with it, its gap sentence moved onto the map.)

---

## When an item is closed

Delete it from this file in the same commit that closes it, and say in the commit
message what was found — particularly if a record was withdrawn. A withdrawal is
more informative than an addition, and the repository's history is its reasoning.
