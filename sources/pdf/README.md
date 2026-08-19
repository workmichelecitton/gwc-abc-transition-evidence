# Downloaded source documents

Working copies of documents the evidence base draws on. **Nothing in here is committed** — the folder is gitignored apart from this file.

That is deliberate. These are other organisations' publications; they are large, and every one of them is already public at the URL recorded in `data/sources.csv`. The URL is the permanent record. The file is a convenience so a document can be read and quoted from, and it can be deleted at any time without losing anything.

## How files get here

Two ways.

**The connector.** `reliefweb_download` writes here, given a ReliefWeb report id or attachment URL. Use it only when `reliefweb_get` came back with thin body text — ReliefWeb extracts text from what publishers submit, and for many reports that extraction stops at the executive summary.

**By hand.** Drop anything here that an automated fetch cannot reach. Several of the domains this base needs — `unocha.org`, `interagencystandingcommittee.org`, `unicefintercluster.net`, `washcluster.net` — refuse automated requests, and a person with a browser gets the file in seconds. That is not a workaround; for those domains it is the method.

## What still has to be true

A file here does not make a source. Registering it in `data/sources.csv` with a working public URL is what makes it citable, and the URL rule in `scripts/build.py` enforces that. Downloading a document changes nothing about the evidence rules: a record still needs a verbatim quote, and `status: validated` still means someone read the passage.

## Naming

The connector keeps the publisher's filename, stripped of anything that could act as a path. Files added by hand need no particular name — the source registry is what links a document to its records, not the filename.
