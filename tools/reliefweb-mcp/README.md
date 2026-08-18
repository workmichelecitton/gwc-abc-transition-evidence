# ReliefWeb connector

An MCP server that lets an assistant search and read humanitarian reports on ReliefWeb.

## Why

Most of the literature this evidence base needs sits on domains an automated fetch cannot read — `unocha.org`, `reliefweb.int`, `interagencystandingcommittee.org`, `unicefintercluster.net`, `washcluster.net`. Search finds the documents; opening them is what fails. Two of the highest-value outstanding sources in the base are behind that wall.

ReliefWeb aggregates most of what those domains publish — OCHA, IASC, the global clusters, the major NGOs and evaluation offices — and exposes it through a public API with **no authentication and no key to obtain**.

It also filters on country, source, theme and date, which is what the method needs. Step A of `prompts/A3-online-research-spec.md` produces a gap table naming specific countries and a search floor date; those map straight onto API parameters. A browser search does not.

## First: run the self-test

The case for this connector rested on an unverified assumption — that the API returns report **body text**, not just metadata. If it does, an agent using it never needs to download or parse a PDF for anything ReliefWeb has indexed.

```
python3 server.py --selftest
```

It hits the live API and tells you plainly which it is, plus whether the country and date filters behave. **Run this before building anything on top.** If body text is not returned, the connector is still worth having — attachment URLs sit on a CDN that is usually fetchable even where the landing page is not — but PDF parsing stays in the picture.

## Requirements

Python 3.8 or later. Nothing else — standard library only, deliberately. This has to keep working after whoever wrote it has moved on, on whatever machine it lands on, without a package manager.

## Registering it

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "reliefweb": {
      "command": "python3",
      "args": ["/absolute/path/to/tools/reliefweb-mcp/server.py"]
    }
  }
}
```

On Windows use `python` and a Windows path.

## Tools

### `reliefweb_search`

| Parameter | Notes |
|---|---|
| `query` | Full-text, searched in title and body only — searching every field returns documents that merely mention a country |
| `countries` | ISO3 codes, OR'd: `["VEN","COL"]` |
| `sources` | Publisher shortnames: `["OCHA","IASC","UNICEF"]` |
| `themes` | e.g. `["Coordination","Water Sanitation Hygiene"]` |
| `formats` | e.g. `["Analysis","Evaluation and Lessons Learned"]` — **the main way to exclude news** |
| `date_from` / `date_to` | `YYYY-MM-DD`. Use the search floor from the gap table |
| `include_body` | Off by default. Ten full reports is a lot of text — list first, then read the shortlist |

### `reliefweb_get`

One report by id, with full body text and attachment URLs.

## How it fits the A3 method

- **Step A** produces the gap table: which countries, which findings need independent corroboration, what the search floor is
- **Step B** turns that into queries — `countries` and `date_from` come straight from the table. Results become source registry rows, each already carrying a working URL, which satisfies rule 0.12
- **Step C** uses `include_body` on the shortlist to extract records with verbatim quotes, which is what this stream requires

Use `formats` hard. The A3 filter excludes news, press releases and project announcements, and the format facet does most of that work before anything reaches a human.

## Limits worth knowing

- ReliefWeb indexes what publishers submit. It is broad but not complete, and absence from ReliefWeb is not absence from the literature
- `appname` identifies the caller. It is courtesy rather than authentication, and it is how ReliefWeb would contact you if a query pattern caused them trouble. Leave it set to something identifiable
- Body text is extracted by ReliefWeb, so formatting, tables and figure captions may be lossy. Where a claim rests on a table, open the attachment
- Results are capped at 50 per call. Page with `offset`

## If it stops working

The API is versioned at `/v1/`. If the shape of the response changes, `_fmt_one` in `server.py` is the only place that reads field names — that is the function to update. `--selftest` will show you what is coming back.
