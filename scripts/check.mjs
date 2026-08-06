// Interaction test for index.html. Loads the page in jsdom twice — once served
// over http (the published site, which fetches data/site.json) and once from
// file:// (a coordinator opening the folder on a laptop, where fetch is blocked
// and the page falls back to data/site.js). Both paths must render.
//
// Run:  node scripts/check.mjs      (needs jsdom: npm i -g jsdom)
//
// This exists because build.py can be perfectly green while the page shows
// nothing: the CSVs are valid, site.json is written, and index.html still fails
// on a field that was renamed. Exit code 1 on any failure.

import { JSDOM, VirtualConsole } from "jsdom";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join, extname } from "node:path";

// SITE_ROOT lets the script run from wherever jsdom happens to be installed.
const ROOT = process.env.SITE_ROOT || join(dirname(fileURLToPath(import.meta.url)), "..");
const site = JSON.parse(readFileSync(join(ROOT, "data/site.json"), "utf8"));
const fails = [];
const ok = (cond, msg) => { if (!cond) fails.push(msg); };

const TYPES = { ".html": "text/html", ".json": "application/json",
                ".js": "text/javascript", ".css": "text/css" };

function serve() {
  return new Promise((res) => {
    const s = createServer((req, rep) => {
      const p = join(ROOT, decodeURIComponent(req.url.split("?")[0]));
      try {
        rep.writeHead(200, { "Content-Type": TYPES[extname(p)] || "text/plain" });
        rep.end(readFileSync(p));
      } catch { rep.writeHead(404); rep.end(); }
    });
    s.listen(0, "127.0.0.1", () => res(s));
  });
}

async function load(url) {
  const vc = new VirtualConsole();
  const errs = [];
  vc.on("jsdomError", (e) => errs.push(e.message));
  const dom = await JSDOM.fromURL(url, {
    runScripts: "dangerously", resources: "usable", virtualConsole: vc,
    // jsdom ships no fetch. Supply Node's over http, and make it reject on
    // file:// exactly as a browser does — that rejection is what triggers the
    // data/site.js fallback, so it has to be exercised, not worked around.
    beforeParse(w) {
      w.fetch = url.startsWith("file:")
        ? () => Promise.reject(new TypeError("Failed to fetch"))
        : (u, o) => fetch(new URL(u, w.location.href), o);
    },
  });
  // wait for the data load + first render
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 100));
    if (dom.window.document.querySelectorAll("#view .card").length) break;
  }
  return { dom, errs };
}

async function exercise(label, url) {
  const { dom, errs } = await load(url);
  const d = dom.window.document;
  const $$ = (s) => [...d.querySelectorAll(s)];

  ok(errs.length === 0, `${label}: script errors — ${errs.join(" | ")}`);

  const tabs = $$("[data-tab]");
  ok(tabs.length >= 4, `${label}: expected the tab bar, found ${tabs.length} tabs`);

  for (const t of tabs) {
    t.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 60));
    const view = d.querySelector("#view");
    ok(view && view.textContent.trim().length > 40,
       `${label}: tab '${t.dataset.tab}' renders empty`);
  }

  // Findings tab must show every published finding before any filter is applied.
  const findingsTab = tabs.find((t) => /finding/i.test(t.dataset.tab));
  if (findingsTab) {
    findingsTab.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 120));
    const cards = $$("#view .card[data-f]").length;
    ok(cards === site.findings.length,
       `${label}: ${cards} finding cards rendered, site.json has ${site.findings.length}`);
  }

  // Highlights must carry curated plain-language text, not the analytic statement.
  const hi = site.findings.filter((f) => f.strength === "high");
  const noHl = hi.filter((f) => !f.highlight || !f.highlight.plain);
  ok(noHl.length === 0,
     `${label}: high-strength findings with no plain-language text — ${noHl.map((f) => f.finding_id).join(", ")}`);

  dom.window.close();
}

// ---- data-shape assertions, independent of the DOM -------------------------
{
  const ids = new Set(site.findings.map((f) => f.finding_id));
  ok(ids.size === site.findings.length, "duplicate finding_id in site.json");
  const orphan = site.records.filter((r) => r.finding_id && !ids.has(r.finding_id));
  ok(orphan.length === 0, `records pointing at a finding that does not exist: ${orphan.length}`);
  ok(!site.records.some((r) => "quote" in r || "notes" in r),
     "a quote or notes column reached site.json — build-time redaction failed");
  ok(!site.findings.some((f) => f.strength === "high" && f.n_sources < 2),
     "a finding rated high rests on one source group");
  const solo = site.findings.filter((f) => f.n_records === 1).length;
  console.log(`    ${site.findings.length} findings, ${solo} holding one record ` +
              `(${Math.round((solo / site.findings.length) * 100)}%)`);
}

const server = await serve();
const { port } = server.address();
await exercise("http", `http://127.0.0.1:${port}/index.html`);
server.close();
await exercise("file", pathToFileURL(join(ROOT, "index.html")).href);

if (fails.length) {
  console.error("FAIL\n" + fails.map((f) => "  " + f).join("\n"));
  process.exit(1);
}
console.log("OK  index.html renders over http and from file://");
