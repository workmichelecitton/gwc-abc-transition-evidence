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
  ok(tabs.length === 5, `${label}: expected 5 tabs (About, Guidance, Highlights, Findings, Sources), found ${tabs.length}`);

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

    // The list is grouped. The invariant that matters is that grouping shows
    // every finding exactly once — a grouping keyed on a multi-value field
    // would silently duplicate cards, which is why it is not keyed on tags.
    const ids = $$("#view .card[data-f]").map((c) => c.dataset.f);
    ok(new Set(ids).size === ids.length,
       `${label}: grouping duplicated cards — ${ids.length} rendered, ${new Set(ids).size} distinct`);
    ok($$("#view h2.grp").length > 0, `${label}: findings list rendered with no group headers`);

    // Switching the grouping must not change what is shown, only its order.
    const sel = d.querySelector("#groupby");
    for (const mode of ["theme", "type", ""]) {
      sel.value = mode;
      sel.dispatchEvent(new dom.window.Event("change", { bubbles: true }));
      await new Promise((r) => setTimeout(r, 80));
      const n = $$("#view .card[data-f]").length;
      ok(n === site.findings.length,
         `${label}: group-by "${mode || "none"}" shows ${n} of ${site.findings.length} findings`);
    }
  }

  // Guidance is normative and must stay out of the evidence. Assert the wall:
  // it has its own three columns, and nothing in guidance.csv is a source_id or
  // affects a strength count.
  const gTab = tabs.find((t) => t.dataset.tab === "guidance");
  if (gTab) {
    gTab.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 120));
    ok($$("#view .gd").length === site.guidance.length,
       `${label}: ${$$("#view .gd").length} guidance cards for ${site.guidance.length} entries`);
    // The evidence filter bar must stay hidden — guidance is not evidence and
    // must not respond to country or strength.
    ok(d.querySelector(".filters").classList.contains("hidden"),
       `${label}: the evidence filter bar is showing on the Guidance tab`);
    // Guidance has its own filter instead. Every entry must be reachable by at
    // least one topic button and one type button, or it is invisible.
    const gbtns = $$("#view .gfb").filter((b) => !b.classList.contains("clr"));
    ok(gbtns.length >= 2, `${label}: guidance filter bar has ${gbtns.length} buttons`);
    for (const [key, vals] of [["topics", ["coordination", "transition", "abc"]],
                               ["doctype", ["guideline", "checklist", "faq", "template"]]]) {
      for (const v of vals) {
        const expect = site.guidance.filter((g) =>
          key === "topics" ? g.topics.includes(v) : g.doctype === v).length;
        if (!expect) continue;
        const btn = gbtns.find((b) => b.getAttribute("onclick").includes(`'${v}'`));
        ok(!!btn, `${label}: no guidance filter button for ${key}=${v}`);
        if (!btn) continue;
        btn.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
        await new Promise((r) => setTimeout(r, 60));
        const shown = $$("#view .gd").length;
        ok(shown === expect,
           `${label}: guidance ${key}=${v} shows ${shown}, expected ${expect}`);
        btn.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
        await new Promise((r) => setTimeout(r, 60));
      }
    }
    await new Promise((r) => setTimeout(r, 60));
    ok($$("#view .gd").length === site.guidance.length,
       `${label}: guidance filters did not reset cleanly`);
    // The page and the data must agree on the shape. This is the check that
    // would have caught three guidance headings rendering zero items: the page
    // was reading "column", the build had written "topics", and nothing said so.
    const declared = readFileSync(join(ROOT, "index.html"), "utf8")
      .match(/^var SCHEMA = (\d+);/m);
    ok(!!declared, `${label}: index.html declares no SCHEMA version`);
    ok(declared && Number(declared[1]) === site.schema,
       `${label}: index.html expects schema ${declared && declared[1]}, ` +
       `site.json is schema ${site.schema}`);
    ok(!$$("#view .warn.stale").length,
       `${label}: the stale-page banner is showing against freshly built data`);
    // Multi-label is the whole point: at least one entry must carry more than
    // one topic, otherwise the columns were removed for nothing.
    ok(site.guidance.some((g) => g.topics.length > 1),
       `${label}: no guidance entry carries more than one topic`);
    // Every entry needs a working link. Michele's rule: if it cannot be opened,
    // it does not belong on this tab.
    ok(site.guidance.every((g) => /^https?:\/\//.test(g.url || "")),
       `${label}: a guidance entry has no URL`);
  }

  // Highlights: three columns, and no finding in more than one of them. It used
  // to be grouped by theme, so anything tagged ABC;Transition rendered twice on
  // the same page.
  const hlTab = tabs.find((t) => /highlight/i.test(t.dataset.tab));
  if (hlTab) {
    hlTab.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 120));
    const cols = $$("#view .hlcol");
    ok(cols.length === 3, `${label}: expected 3 highlight columns, found ${cols.length}`);
    const heads = $$("#view .hlcol .hl h3").map((h) => h.textContent.trim());
    ok(new Set(heads).size === heads.length,
       `${label}: a highlight appears in more than one column — ` +
       heads.filter((h, i) => heads.indexOf(h) !== i).join(" | "));
    // No cap any more: the bands decide what appears, so every band 4+ finding
    // must be on the page. A cap would hide evidence for a reason the reader
    // cannot see, which is what the old top-ten did.
    const shown = $$("#view .hlcol .hl").length;
    const expect = site.findings.filter((f) => f.strength >= 4).length;
    ok(shown === expect,
       `${label}: Highlights shows ${shown} cards for ${expect} findings at band 4+`);
  }

  // ---- every filter, on every tab ----------------------------------------
  // The Sources tab was showing all 107 sources whatever was selected, because
  // filtered() never returned a sources list and the view fell back to the full
  // one. Nothing caught it because nothing exercised a filter and checked the
  // result. This does.
  const click = async (sel) => {
    const el = d.querySelector(sel);
    if (!el) return false;
    el.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 90));
    return true;
  };
  const goTab = async (name) => {
    const t = tabs.find((x) => x.dataset.tab === name);
    t.dispatchEvent(new dom.window.Event("click", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 110));
  };
  const reset = async () => {
    await click("#reset");
    await new Promise((r) => setTimeout(r, 110));
  };

  // What the data says a filter should produce, computed independently of the page.
  const expect = (pred) => {
    const recs = site.records.filter(pred);
    const fids = new Set(recs.map((r) => r.finding_id));
    const finds = site.findings.filter((f) => fids.has(f.finding_id));
    const kept = new Set(finds.map((f) => f.finding_id));
    const recs2 = recs.filter((r) => kept.has(r.finding_id));
    return { findings: finds.length, sources: new Set(recs2.map((r) => r.source_id)).size };
  };

  const CASES = [
    ["stream", "search",       (r) => r.stream === "search"],
    ["stream", "transcript",   (r) => r.stream === "transcript"],
    ["stream", "workshop",     (r) => r.stream === "workshop"],
    ["theme",  "ABC",          (r) => r.theme.includes("ABC")],
    ["theme",  "Fundamentals", (r) => r.theme.includes("Fundamentals")],
    ["type",   "barrier",      (r) => r.type === "barrier"],
    ["type",   "recommendation", (r) => r.type === "recommendation"],
    ["level",  "global",       (r) => r.level === "global"],
  ];

  for (const [k, v, pred] of CASES) {
    await reset();
    await goTab("sources");
    const before = $$("#view tbody tr").length;
    const hit = await click(`.chip[data-k="${k}"][data-v="${v}"]`);
    ok(hit, `${label}: no filter chip for ${k}=${v}`);
    const rows = $$("#view tbody tr").length;
    const exp = expect(pred);
    ok(rows === exp.sources,
       `${label}: Sources tab with ${k}=${v} shows ${rows} rows, expected ${exp.sources}`);
    ok(rows < before,
       `${label}: filtering ${k}=${v} did not reduce the Sources tab (${before} -> ${rows})`);

    await goTab("findings");
    const cards = $$("#view .card[data-f]").length;
    ok(cards === exp.findings,
       `${label}: Findings tab with ${k}=${v} shows ${cards} cards, expected ${exp.findings}`);
  }

  // Reset must actually clear everything on every tab. Unfiltered, the Sources
  // tab shows the WHOLE registry including sources carrying no records, so the
  // red "not cited" flag stays visible — that is how an unmined source gets
  // noticed. Filtered, it shows only what matches.
  await reset();
  for (const [tab, sel, total] of [
    ["findings", "#view .card[data-f]", site.findings.length],
    ["sources",  "#view tbody tr",      site.sources.length],
  ]) {
    await goTab(tab);
    const n = $$(sel).length;
    ok(n === total, `${label}: after reset, ${tab} shows ${n} of ${total}`);
  }
  await goTab("sources");
  const uncited = new Set(site.sources.map((x) => x.source_id));
  site.records.forEach((r) => uncited.delete(r.source_id));
  ok($$("#view tbody tr").length === site.sources.length,
     `${label}: unfiltered Sources tab hides the ${uncited.size} uncited sources`);

  // The count line must describe the tab you are looking at.
  await goTab("sources");
  ok(/\bsources?\b/i.test(d.querySelector("#count").textContent),
     `${label}: Sources tab count line does not mention sources — "${d.querySelector("#count").textContent}"`);

  // Search box narrows and clears.
  await reset();
  await goTab("findings");
  const q = d.querySelector("#q");
  q.value = "zzzznotarealword";
  q.dispatchEvent(new dom.window.Event("input", { bubbles: true }));
  await new Promise((r) => setTimeout(r, 110));
  ok($$("#view .card[data-f]").length === 0,
     `${label}: search for nonsense still returned findings`);
  await reset();
  ok($$("#view .card[data-f]").length === site.findings.length,
     `${label}: reset did not clear the search box`);

  // Highlights must carry curated plain-language text, not the analytic statement.
  const hi = site.findings.filter((f) => f.strength >= 4);
  const noHl = hi.filter((f) => !f.highlight || !f.highlight.plain);
  ok(noHl.length === 0,
     `${label}: band 4+ findings with no plain-language text — ${noHl.map((f) => f.finding_id).join(", ")}`);

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
  // Bands are counted, so they can be recomputed here from the raw numbers. If
  // this ever disagrees with build.py, one of the two has drifted.
  const band = (f) =>
    f.n_sources >= 6 && f.n_streams >= 2 && f.countries.length >= 2 ? 5
    : f.n_sources >= 3 && f.n_streams >= 2 ? 4
    : f.n_sources >= 3 || (f.n_sources >= 2 && f.n_streams >= 2) ? 3
    : f.n_sources >= 2 ? 2 : 1;
  const drift = site.findings.filter((f) => f.strength !== band(f));
  ok(drift.length === 0,
     `band drift between build.py and the rule: ${drift.map((f) =>
        `${f.finding_id} is ${f.strength}, should be ${band(f)}`).join("; ")}`);
  ok(!site.findings.some((f) => f.strength > 1 && f.n_sources < 2),
     "a finding above band 1 rests on one source group");
  ok(!site.findings.some((f) => f.strength === 5 && f.countries.length < 2),
     "a band 5 finding sits in a single country — depth is passing for breadth");
  const dist = [5, 4, 3, 2, 1].map((b) =>
    `${b}:${site.findings.filter((f) => f.strength === b).length}`).join(" · ");
  console.log(`    bands  ${dist}  of ${site.findings.length} findings`);
  // Theme is multi-value. 'Both' as a single value made cross-cutting evidence
  // invisible to both filters; nothing may reintroduce it.
  const themes = new Set(site.findings.flatMap((f) => f.theme)
                   .concat(site.records.flatMap((r) => r.theme)));
  ok(!themes.has("Both"), "'Both' is back as a theme value — it matches neither filter");
  ok([...themes].every((t) => ["ABC", "Transition", "Fundamentals"].includes(t)),
     `unexpected theme values: ${[...themes].join(", ")}`);
  ok(!site.findings.some((f) => !f.theme.length),
     "a finding has no theme and cannot be reached by either filter");
  const byTheme = (t) => site.findings.filter((f) => f.theme.includes(t)).length;
  console.log(`    themes: ${byTheme("ABC")} ABC · ${byTheme("Transition")} Transition · ` +
              `${byTheme("Fundamentals")} fundamentals, of ${site.findings.length} findings`);
  // Quotes make a record checkable against its source. They are stripped at
  // build time, so capturing them costs nothing publicly.
  console.log(`    (quote coverage is reported by build.py, not here)`);
  // Guidance must never leak into the source registry or a strength count.
  const gids = new Set((site.guidance || []).map((g) => g.id));
  const sids = new Set(site.sources.map((x) => x.source_id));
  ok([...gids].every((g) => !sids.has(g)),
     "a guidance id also appears as a source_id — the normative/evidence wall is broken");
  ok(!site.records.some((r) => gids.has(r.source_id)),
     "an evidence record cites a guidance entry as its source");
  console.log(`    guidance: ${(site.guidance || []).length} entries, separate from ` +
              `${site.sources.length} evidence sources`);

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
