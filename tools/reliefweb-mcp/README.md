# ReliefWeb connector

An MCP server that lets an assistant search and read humanitarian reports on ReliefWeb.

## Why

Most of the literature this evidence base needs sits on domains an automated fetch cannot read — `unocha.org`, `reliefweb.int`, `interagencystandingcommittee.org`, `unicefintercluster.net`, `washcluster.net`. Search finds the documents; opening them is what fails. Two of the highest-value outstanding sources in the base are behind that wall.

ReliefWeb aggregates most of what those domains publish — OCHA, IASC, the global clusters, the major NGOs and evaluation offices — and exposes it through a public API with **no authentication and no key to obtain**.

It also filters on country, source, theme and date, which is what the method needs. Step A of `prompts/A3-online-research-spec.md` produces a gap table naming specific countries and a search floor date; those map straight onto API parameters. A browser search does not.

## Before anything else: request an appname

**This is the only step that needs a human, and it is one-time.**

Since 1 November 2025 the ReliefWeb API requires a **pre-approved appname**. It is free and it is not a secret — closer to a courtesy identifier than a key — but an unregistered one is refused with HTTP 403.

1. Request one at **<https://apidoc.reliefweb.int/parameters#appname>**. The form asks for organisation and purpose, and wants the name to combine organisation, purpose and some random characters — e.g. `gwc-abc-evidence-7f3a`.
2. They review it and reply by email.
3. Put it in **`appname.txt`** beside `server.py` — one line, nothing else. That file is gitignored, so the name stays out of this public repository. An appname is an identifier rather than a credential, but if somebody else used it heavily it is this project's name that gets throttled.

   The environment variable `RELIEFWEB_APPNAME` also works and takes precedence.

Until then the self-test will say so and stop rather than failing obscurely.

## Then: run the self-test

The case for this connector rested on an unverified assumption — that the API returns report **body text**, not just metadata. If it does, an agent using it never needs to download or parse a PDF for anything ReliefWeb has indexed.

**Windows.** Press <kbd>Win</kbd>, type `cmd`, press Enter. You want a prompt reading `C:\Users\you>`. If you see `>>>` you are inside Python — that is the wrong window, close it. Then:

```
python "C:\path\to\tools\reliefweb-mcp\server.py" --selftest
```

**macOS or Linux:**

```
python3 server.py --selftest
```

**Confirmed against the live API, 17 August 2026:**

- **Body text: yes.** Three of three reports returned full text, 1,700 to 30,700 characters. Nothing needs downloading or parsing.
- Country and date filters work — 175 Venezuela reports since January 2025.
- Response shape is as this code expects: `totalCount`, `data[]`, `fields{}` with `body`, `file`, `source`, `country`, `format`.

## The one thing that will waste your time if you skip it

A bare query is far too loose. `"area-based coordination"` returns **15,540** matches, because ReliefWeb indexes situation reports that merely contain those words. The three the self-test returned were a Pakistan information-sharing protocol, a WHO preparedness story and an oPt situation report — none of them about area-based coordination at all.

**Always narrow with `formats`.** The useful values are:

```
["Analysis", "Evaluation and Lessons Learned", "Manual and Guideline", "Assessment"]
```

That drops situation reports, news and appeals, which is most of the noise. `themes: ["Coordination"]` narrows further. Method rule A5 says to exclude news and announcements, and the format facet does that work before anything reaches a human — this is where it happens in practice.

## Requirements

Python 3.8 or later. Nothing else — standard library only, deliberately. This has to keep working after whoever wrote it has moved on, on whatever machine it lands on, without a package manager.

## Registering it

**This repository already carries `.mcp.json` at its root**, so a client that opens this folder as a project should pick the server up with no configuration at all. That is the intended route — the connector travels with the repository, and the next person to work on this does not have to be told about it.

If the tools do not appear, the likely cause is that the client resolved the relative path against a different working directory. Replace the `args` line in `.mcp.json` with an absolute path:

```json
{
  "mcpServers": {
    "reliefweb": {
      "command": "python",
      "args": ["C:\\Users\\you\\path\\to\\tools\\reliefweb-mcp\\server.py"]
    }
  }
}
```

On macOS or Linux use `python3` and a POSIX path.

**Two client types, two different config files.** A desktop assistant chat window normally reads a global config (`claude_desktop_config.json`); a project or agent session normally reads `.mcp.json` in the open folder. Putting the entry in one does not register it in the other. If the connector works in one place and not the other, that is the reason — and either way the client must be **fully quit and reopened**, not just the window closed.

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
