# How to update this site

Written for someone who has never seen this project — including an AI assistant picking it up cold. If you are the latter, read `prompts/00-shared-rules.md` next.

---

## The one rule

**Edit the CSVs. Never edit `index.html` to change what the site says.**

`index.html` renders data. It contains none. If you find yourself editing it to add a finding, stop — you are in the wrong file.

---

## Adding evidence

### 1. Extract

Give the source material to an AI assistant along with the matching prompt:

| You have | Use |
|---|---|
| Notes from a country conversation | `prompts/01-transcript-extraction.md` |
| A report, evaluation or study | `prompts/02-secondary-data-review.md` |
| A quarterly search to run | `prompts/03-search-update.md` |

All three depend on `prompts/00-shared-rules.md` — supply it too.

You will get back CSV rows plus a summary of what was rejected and what was uncertain. **Read that summary.** It is the part that tells you whether to trust the rows.

### 2. Append

Paste the new rows at the bottom of `data/evidence.csv`. Add any new source to `data/sources.csv`.

Rules that will otherwise bite you:

- `id` continues from the highest existing — never reuse an id
- multi-value fields (`countries`, `actors`, `tags`) separate with `;` not `,`
- any field containing a comma must be wrapped in `"double quotes"`
- every value in a controlled column must already exist in `data/taxonomy.json`

### 2b. Commitments go somewhere else

Requests for support made during a country call go to `data/follow-ups.csv`, not `evidence.csv`. They are validated by the build but never published to the site.

Use roles rather than names in `owner_role` — this file is in the public repository. If you would rather it were not, add `data/follow-ups.csv` to `.gitignore`; nothing else depends on it.

### 3. Group into findings

Run `prompts/04-merge-and-dedupe.md`. This assigns `finding_id`.

**Do not skip this.** Strength of evidence is calculated from how many independent sources share a `finding_id`. Ungrouped records show as isolated low-strength findings, and the site quietly understates what you actually know.

### 4. Commit

Commit `data/evidence.csv` and `data/sources.csv`. The GitHub Action does the rest — usually live within two minutes.

### 5. Check the build went green

Go to the **Actions** tab.

- Green: done.
- Red: click in and read the error. It names the row and the problem. Fix and commit again. Nothing was published, so the live site is unaffected.

Typical errors:

```
evidence.csv row 14: tags value 'synergies' not in taxonomy.tags
evidence.csv row 22: source_id 'S099' does not exist in sources.csv
evidence.csv row 31: duplicate id 'E0043'
```

---

## Changing the About tab or the Highlights

Still no need to touch `index.html`.

- **About text** — `data/about.json`. Intro, sections, the strength definitions, the caveats. Edit and commit.
- **Highlights** — `data/highlights.csv`, one row per finding: `finding_id`, `headline`, `plain`, `so_what`.

The Highlights tab shows only high-strength findings. When a finding reaches high strength and has no row in `highlights.csv`, the build warns you and the tab falls back to the raw statement — which is usually too technical for the audience this tab exists for. Write the plain-language version when you see that warning.

Keep the language short and concrete. Someone who has never heard of a JIAF should understand it.

## Adding a new tag, actor or country

1. Add it to `data/taxonomy.json` — value and label.
2. Bump `version`.
3. Then use it in the CSV.

That order matters, and the friction is deliberate. Ad-hoc tags are what kill filtering after six months. Adding one should be a decision, not a reflex. Prefer an existing tag that is nearly right over a new one that is exactly right.

---

## Editing in the GitHub web interface

No local setup needed:

1. Open `data/evidence.csv` on GitHub
2. Pencil icon → edit → **Commit changes**

For anything more than a couple of rows, download the CSV, edit it in Excel, and upload it back (*Add file → Upload files*, same filename, which replaces it).

⚠️ **If you use Excel:** save as *CSV UTF-8 (Comma delimited)*. Plain "CSV" mangles accented characters — and this evidence base covers Türkiye, Côte d'Ivoire and francophone West Africa.

---

## Editing locally

```bash
git clone <repo-url>
cd <repo>
python scripts/build.py     # validate before committing
python -m http.server 8000  # preview at http://localhost:8000
```

⚠️ **Do not put the clone inside Google Drive, OneDrive or Dropbox.** Sync clients corrupt git repositories by writing to `.git` mid-operation. Use a plain local folder. GitHub is already your backup.

---

## Removing something published by mistake

Deleting the row and committing removes it from the site — but **not** from git history, which is public and permanent.

If the content was genuinely sensitive, deleting the row is not sufficient. Make the repository private immediately, then get help rewriting history. Prevention is the only reliable control here, which is why `prompts/00-shared-rules.md` is strict about anonymisation.

---

## What good looks like

Before committing a batch, sanity-check:

- Does each statement make a claim someone could disagree with? Or is it a topic label?
- Do grouped records genuinely say the same thing?
- Are the grouped sources genuinely independent — different organisations, different underlying data?
- Would every quote still be safe if the person quoted read it on a public website?

The site will happily publish weak evidence. It cannot tell the difference. Only you can.
