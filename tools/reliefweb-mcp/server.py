#!/usr/bin/env python3
"""
ReliefWeb MCP server — search and read humanitarian reports.

Why this exists
---------------
Most of the literature this evidence base needs sits on domains an automated
fetch cannot read: unocha.org, reliefweb.int, interagencystandingcommittee.org,
unicefintercluster.net, washcluster.net. Search finds the documents; opening
them is what fails.

ReliefWeb aggregates most of what those domains publish — OCHA, IASC, the
global clusters, the major NGOs and evaluation offices — and exposes it through
a public API with no authentication. Crucially it returns report *body text*,
so an agent using this does not need to download or parse PDFs at all for
anything ReliefWeb has indexed.

It also filters on country, source, theme and date, which is what the A3 method
actually needs: Step A produces a gap table naming specific countries and a
search floor date, and those map straight onto API parameters.

Deliberately zero-dependency
----------------------------
Standard library only. This has to keep working after whoever wrote it has
moved on, on whatever machine it lands on, without a package manager. The MCP
protocol here is plain JSON-RPC over stdin and stdout — about sixty lines of it
— which is a smaller maintenance surface than an SDK that will have moved on in
two years.

Usage
-----
    python3 server.py                 # speaks MCP on stdin/stdout
    python3 server.py --selftest      # hits the live API and reports what it got

See README.md for how to register it with a client.
"""

import json
import os
import sys
import urllib.request
import urllib.error

# v1 was decommissioned — it returns HTTP 410 telling you to use v2. Confirmed
# against the live API on 2026-08-17. If v2 is ever retired the same way, the
# error message says which version to move to, and this is the line to change.
API = "https://api.reliefweb.int/v2/reports"

# SET THIS BEFORE THE CONNECTOR WILL WORK.
#
# From 1 November 2025, ReliefWeb v2 requires a *pre-approved* appname. v1 took
# anything; v2 returns HTTP 403 for an unregistered one. It is free and it is
# not a secret — closer to a courtesy identifier than a key — but somebody has
# to request it once.
#
#   Request one at: https://apidoc.reliefweb.int/parameters#appname
#   The form asks for organisation, purpose, and wants the name to combine
#   organisation, purpose and some random characters. They reply by email.
#
# Resolution order, first match wins:
#
#   1. RELIEFWEB_APPNAME in the environment
#   2. appname.txt sitting beside this file
#   3. a placeholder, which the self-test catches and explains
#
# appname.txt is gitignored. This repository is public, and while an appname is
# an identifier rather than a credential, there is no reason to publish it — if
# somebody else used it heavily, it is this project's name that gets throttled.
# A text file is also less trouble than setting an environment variable on
# Windows, which is the machine this actually runs on.
def _appname():
    env = os.environ.get("RELIEFWEB_APPNAME", "").strip()
    if env:
        return env
    # __file__ is undefined when this module is loaded with exec(), which is how
    # it gets run from a Python prompt on a machine without a convenient shell.
    # Fall back to the working directory rather than raising NameError.
    where = globals().get("__file__")
    dirs = [os.path.dirname(os.path.abspath(where))] if where else []
    dirs.append(os.getcwd())
    for d in dirs:
        try:
            with open(os.path.join(d, "appname.txt"), encoding="utf-8") as fh:
                name = fh.read().strip()
                if name and not name.startswith("#"):
                    return name
        except OSError:
            continue
    return "REPLACE-ME-request-from-reliefweb"


APPNAME = _appname()

# Requested on every call. 'body' is the one that matters: it carries the report
# text, which is what removes the need to download and parse a PDF.
FIELDS = [
    "title", "body", "url", "origin", "date.original", "date.created",
    "source.name", "source.shortname", "country.name", "country.iso3",
    "theme.name", "format.name", "language.name", "file.url", "file.filename",
]

TIMEOUT = 30


# --------------------------------------------------------------------------
# ReliefWeb
# --------------------------------------------------------------------------

def _post(payload):
    """POST a query. ReliefWeb accepts GET too, but filters nest several levels
    deep and JSON is far easier to get right than a URL-encoded query string."""
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        f"{API}?appname={APPNAME}",
        data=data,
        headers={"Content-Type": "application/json", "Accept": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
            return json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", "replace")[:500]
        raise RuntimeError(f"ReliefWeb returned HTTP {e.code}. {detail}") from None
    except urllib.error.URLError as e:
        raise RuntimeError(f"Could not reach ReliefWeb: {e.reason}") from None


def _conditions(countries, sources, themes, date_from, date_to, formats):
    """Build the filter block. Each condition is ANDed; values within one
    condition are ORed, which is what the gap loop wants — 'Venezuela OR
    Colombia, published since the search floor'."""
    conds = []
    if countries:
        conds.append({"field": "country.iso3", "value": [c.upper() for c in countries]})
    if sources:
        conds.append({"field": "source.shortname", "value": sources})
    if themes:
        conds.append({"field": "theme.name", "value": themes})
    if formats:
        conds.append({"field": "format.name", "value": formats})
    if date_from or date_to:
        rng = {}
        if date_from:
            rng["from"] = f"{date_from}T00:00:00+00:00"
        if date_to:
            rng["to"] = f"{date_to}T23:59:59+00:00"
        conds.append({"field": "date.original", "value": rng})
    return conds


def search_reports(query, countries=None, sources=None, themes=None,
                   date_from=None, date_to=None, formats=None,
                   limit=10, offset=0, include_body=False):
    """Search. Body text is off by default because ten full reports is a great
    deal of text; pull the list first, then read the ones worth reading."""
    fields = [f for f in FIELDS if f != "body"] if not include_body else list(FIELDS)
    payload = {
        "limit": max(1, min(int(limit), 50)),
        "offset": max(0, int(offset)),
        "fields": {"include": fields},
        "sort": ["date.original:desc"],
    }
    if query:
        payload["query"] = {
            "value": query,
            # Title and body only. Searching every field drags in source and
            # country names and returns documents that merely mention a place.
            "fields": ["title", "body"],
            "operator": "AND",
        }
    conds = _conditions(countries, sources, themes, date_from, date_to, formats)
    if conds:
        payload["filter"] = {"operator": "AND", "conditions": conds}
    return _post(payload)


def get_report(report_id):
    """One report, with full body text."""
    return _post({
        "limit": 1,
        "fields": {"include": list(FIELDS)},
        "filter": {"field": "id", "value": str(report_id)},
    })


# --------------------------------------------------------------------------
# Shaping results for a reader
# --------------------------------------------------------------------------

def _fmt_one(item, with_body):
    f = item.get("fields", {})
    out = [f"## {f.get('title','(untitled)')}", f"id: {item.get('id')}"]
    src = ", ".join(s.get("shortname") or s.get("name", "") for s in f.get("source", []))
    if src:
        out.append(f"source: {src}")
    d = (f.get("date") or {}).get("original") or (f.get("date") or {}).get("created")
    if d:
        out.append(f"date: {d[:10]}")
    ctry = ", ".join(f"{c.get('name')} ({c.get('iso3')})" for c in f.get("country", []))
    if ctry:
        out.append(f"countries: {ctry}")
    fmts = ", ".join(x.get("name", "") for x in f.get("format", []))
    if fmts:
        out.append(f"format: {fmts}")
    if f.get("url"):
        out.append(f"url: {f['url']}")
    # Attachments matter: where body text is thin, the PDF is the real document
    # and its direct URL is usually fetchable even when the landing page is not.
    for att in f.get("file", []) or []:
        if att.get("url"):
            out.append(f"attachment: {att.get('filename','file')} — {att['url']}")
    if with_body and f.get("body"):
        out.append("")
        out.append(f["body"])
    return "\n".join(out)


def _fmt(res, with_body):
    total = res.get("totalCount", 0)
    items = res.get("data", [])
    if not items:
        return "No reports matched. Widen the query, or drop a filter."
    head = f"{len(items)} of {total} reports.\n"
    return head + "\n\n---\n\n".join(_fmt_one(i, with_body) for i in items)


# --------------------------------------------------------------------------
# MCP — JSON-RPC over stdin/stdout
# --------------------------------------------------------------------------

TOOLS = [
    {
        "name": "reliefweb_search",
        "description": (
            "Search ReliefWeb for humanitarian reports, evaluations and studies. "
            "ReliefWeb aggregates OCHA, IASC, the global clusters and major NGOs, "
            "so it reaches material that is otherwise hard to open. Returns "
            "metadata and attachment URLs; set include_body to read the text. "
            "Filter by country and date to match a gap table."
        ),
        "inputSchema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Full-text terms, searched in title and body."},
                "countries": {"type": "array", "items": {"type": "string"},
                              "description": "ISO3 codes, e.g. ['VEN','COL']. OR'd together."},
                "sources": {"type": "array", "items": {"type": "string"},
                            "description": "Publisher shortnames, e.g. ['OCHA','IASC','UNICEF']."},
                "themes": {"type": "array", "items": {"type": "string"},
                           "description": "ReliefWeb themes, e.g. ['Coordination','Water Sanitation Hygiene']."},
                "formats": {"type": "array", "items": {"type": "string"},
                            "description": "e.g. ['Analysis','Evaluation and Lessons Learned','Manual and Guideline']. Use this to exclude news."},
                "date_from": {"type": "string", "description": "YYYY-MM-DD. Use the search floor from the gap table."},
                "date_to": {"type": "string", "description": "YYYY-MM-DD."},
                "limit": {"type": "integer", "description": "1-50, default 10."},
                "offset": {"type": "integer", "description": "For paging."},
                "include_body": {"type": "boolean", "description": "Return full text. Costly; use on a shortlist."},
            },
        },
    },
    {
        "name": "reliefweb_get",
        "description": "Fetch one ReliefWeb report by id, with its full body text and attachment URLs.",
        "inputSchema": {
            "type": "object",
            "properties": {"id": {"type": ["string", "integer"], "description": "ReliefWeb report id."}},
            "required": ["id"],
        },
    },
]


def _call(name, args):
    if name == "reliefweb_search":
        res = search_reports(
            query=args.get("query", ""),
            countries=args.get("countries"), sources=args.get("sources"),
            themes=args.get("themes"), formats=args.get("formats"),
            date_from=args.get("date_from"), date_to=args.get("date_to"),
            limit=args.get("limit", 10), offset=args.get("offset", 0),
            include_body=bool(args.get("include_body")),
        )
        return _fmt(res, bool(args.get("include_body")))
    if name == "reliefweb_get":
        return _fmt(get_report(args["id"]), True)
    raise ValueError(f"Unknown tool: {name}")


def _reply(rid, result=None, error=None):
    msg = {"jsonrpc": "2.0", "id": rid}
    if error is not None:
        msg["error"] = error
    else:
        msg["result"] = result
    sys.stdout.write(json.dumps(msg) + "\n")
    sys.stdout.flush()


def serve():
    for line in sys.stdin:
        line = line.strip()
        if not line:
            continue
        try:
            req = json.loads(line)
        except json.JSONDecodeError:
            continue
        method, rid, params = req.get("method"), req.get("id"), req.get("params") or {}

        # Notifications carry no id and expect no reply. Answering one is a
        # protocol violation that some clients treat as fatal.
        if rid is None:
            continue

        if method == "initialize":
            _reply(rid, {
                "protocolVersion": params.get("protocolVersion", "2024-11-05"),
                "capabilities": {"tools": {}},
                "serverInfo": {"name": "reliefweb", "version": "1.0.0"},
            })
        elif method == "tools/list":
            _reply(rid, {"tools": TOOLS})
        elif method == "tools/call":
            try:
                text = _call(params.get("name"), params.get("arguments") or {})
                _reply(rid, {"content": [{"type": "text", "text": text}]})
            except Exception as e:
                # Reported as tool output rather than a protocol error, so the
                # model can read what went wrong and adjust the query.
                _reply(rid, {"content": [{"type": "text", "text": f"ERROR: {e}"}],
                             "isError": True})
        elif method == "ping":
            _reply(rid, {})
        else:
            _reply(rid, error={"code": -32601, "message": f"Method not found: {method}"})


# --------------------------------------------------------------------------
# Self-test — answers the open question before anyone builds on this
# --------------------------------------------------------------------------

def selftest():
    """Does the API return body text? The whole case for this connector rests on
    it. Also dumps the response shape, so that if v2 differs from what this code
    expects, one run tells us exactly how rather than requiring several."""
    print("ReliefWeb API self-test — " + API + "\n" + "=" * 64)
    print(f"appname : {APPNAME}")
    if APPNAME.startswith("REPLACE-ME"):
        print("""
NOT SET. ReliefWeb v2 needs a pre-approved appname — since 1 November 2025 an
unregistered one is refused with HTTP 403.

  Request one, free, at: https://apidoc.reliefweb.int/parameters#appname
  They ask for organisation and purpose, want the name to combine both plus
  some random characters, and reply by email.

Then either set RELIEFWEB_APPNAME in your environment, or edit APPNAME near
the top of this file. Nothing else needs changing.""")
        return 1
    print()

    try:
        res = search_reports("area-based coordination", limit=3, include_body=True)
    except RuntimeError as e:
        print(f"FAIL — {e}\n")
        print("If the message names a newer API version, change API at the top")
        print("of this file to match. That is the only edit needed.")
        return 1

    print("reachable : yes\n")

    # Print the raw shape before interpreting it. If v2 renamed anything, this
    # is what shows it, and guessing from a failed run is what wastes time.
    print("-- response shape " + "-" * 46)
    print(f"top-level keys : {sorted(res.keys())}")
    for k in ("totalCount", "count", "total"):
        if k in res:
            print(f"{k:15}: {res[k]}")
    items = res.get("data") or res.get("results") or []
    print(f"items returned : {len(items)}")
    if items:
        first = items[0]
        print(f"item keys      : {sorted(first.keys())}")
        f = first.get("fields", first)
        print(f"field keys     : {sorted(f.keys())}")
    else:
        print("\nNo items came back. Either the query matched nothing, or v2 nests")
        print("results under a different key than 'data'. The keys above say which.")
        return 1

    print("\n-- what came back " + "-" * 46)
    bodies = 0
    for it in items:
        f = it.get("fields", it)
        body = f.get("body") or ""
        if body:
            bodies += 1
        src = ", ".join(s.get("shortname", "") or s.get("name", "")
                        for s in (f.get("source") or []))
        atts = len(f.get("file") or [])
        print(f"  {str(f.get('title',''))[:64]}")
        print(f"    source {src or '?'} · body {len(body):>6} chars · {atts} attachment(s)")

    print("\n-- the answer " + "-" * 50)
    if bodies:
        print(f"BODY TEXT: YES — {bodies} of {len(items)} carried full text.")
        print("An agent using this never needs to download or parse a PDF for")
        print("anything ReliefWeb has indexed.")
    else:
        print("BODY TEXT: NO — metadata only.")
        print("Still worth having: attachment URLs sit on a CDN that is usually")
        print("fetchable even where the landing page is not. PDF parsing stays.")

    print("\n-- filters the gap loop needs " + "-" * 34)
    try:
        r2 = search_reports("coordination", countries=["VEN"], date_from="2025-01-01", limit=3)
        n = r2.get("totalCount", r2.get("count", "?"))
        print(f"  Venezuela, since 2025-01-01 : {n} reports")
        for it in (r2.get("data") or [])[:3]:
            f = it.get("fields", it)
            print(f"    - {str(f.get('title',''))[:66]}")
        print("\n  Country and date filtering works.")
    except RuntimeError as e:
        print(f"  FAIL — {e}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(selftest() if "--selftest" in sys.argv else (serve() or 0))
