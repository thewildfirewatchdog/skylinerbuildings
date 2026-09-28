/*
  Browser tests for the pre-certified carport wizard.
  Run:  NODE_PATH=$(npm root -g) node precert-carport-quote/tests/run-tests.cjs
  1) Prices match the old calculator (hm-12-24-pre-cert) for 400 random buildings.
  2) Full click-through of the questionnaire inside a fake "Divi" page with hostile theme CSS.
  3) PDF download works. Screenshots are saved to tests/screenshots/.
*/
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const WIZARD = fs.readFileSync(path.join(ROOT, "precert-carport-quote", "skyliner-precert-carport-quote.html"), "utf8");
// Reference calculators (tests/fixtures): triple-wide sheets from branch claude/charming-shannon-nglira,
// 60 ft / 13-17 ft widths / $250 gable ends from branch claude/relaxed-gates-0qiqu0.
const SHOTS = path.join(__dirname, "screenshots");
fs.mkdirSync(SHOTS, { recursive: true });

// A page that imitates a Divi layout with theme styles that often break embedded widgets.
const HOSTED_JS = path.join(ROOT, "precert-carport-quote", "hosted", "carport-quote.js");
const SNIPPET = fs.readFileSync(path.join(ROOT, "precert-carport-quote", "hosted", "divi-snippet.html"), "utf8")
  .replace('phone: ""', 'phone: "(555) 000-1111"').replace(/src="[^"]+"/, 'src="https://example-site.test/carport-quote/carport-quote.js"');
const diviPage = (EMBED) => `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
body{font-family:Georgia,serif;margin:0;background:#f3f3f3}
#main-header{position:fixed;top:0;left:0;right:0;height:70px;background:#222;z-index:99999}
#page-container{padding-top:80px}
button,input{background:red;padding:30px;border:5px solid lime;text-transform:uppercase;letter-spacing:4px}
p{padding-bottom:1em;font-size:22px}
ul li{list-style:square}
.et_pb_section{padding:40px 0}.et_pb_row{max-width:1080px;margin:0 auto}
</style></head><body>
<header id="main-header"></header>
<div id="page-container"><div class="et_pb_section"><div class="et_pb_row">
<p>Other page content above the calculator.</p>
<div class="et_pb_module et_pb_code"><div class="et_pb_code_inner">${EMBED}</div></div>
<p><a class="et_pb_button" href="#carport-quote">Divi button that opens the wizard</a></p>
</div></div></div></body></html>`;

const jsPdfPath = (() => {
  for (const p of [path.join(__dirname, "node_modules", "jspdf", "dist", "jspdf.umd.min.js")]) if (fs.existsSync(p)) return p;
  return null;
})();

let failures = 0;
function check(cond, msg) {
  if (cond) console.log("  ok  - " + msg);
  else { failures++; console.log("  FAIL- " + msg); }
}

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const SALE_ON = { enabled: true, label: "Fall Sale", endsOn: "2099-12-31", tiers: [{ from: 0, percent: 5 }, { from: 5000, percent: 10 }, { from: 15000, percent: 15 }] };
const tierPct = (t) => (t >= 15000 ? 15 : (t >= 5000 ? 10 : 5));

async function wizardPage(browser, sale) {
  const page = await browser.newPage();
  await page.setContent(`<!doctype html><html><body><script>window.SkylinerQuoteConfig = { sale: ${JSON.stringify(sale)} };</script>${WIZARD}</body></html>`);
  return page;
}

async function priceParity(browser, fixture, widths, lengths, withGables, n) {
  console.log(`\n[1] Price parity with ${fixture}`);
  const OLD_SRC = fs.readFileSync(path.join(__dirname, "fixtures", fixture), "utf8");
  const oldPage = await browser.newPage();
  await oldPage.route("**/jspdf*", r => r.fulfill({ body: "" }));
  await oldPage.setContent(`<!doctype html><html><body>${OLD_SRC}</body></html>`);
  const newPage = await wizardPage(browser, SALE_ON);
  let mismatches = 0, callForPrice = 0;
  for (let i = 0; i < n; i++) {
    const c = {
      gauge: rand(["14", "12"]), w: rand(widths), L: rand(lengths), h: rand([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
      snow: rand(["standard", "60"]), side: rand([0, 2]), end: rand([0, 1, 2]),
      xp: rand([0, 1, 2, 5]), xpl: rand([21, 26, 31, 36, 41]), cp: rand([0, 1, 4]), cpl: rand([12, 16]),
      gd: rand([0, 1, 3]), gds: rand(["8x7", "9x8", "10x8", "10x10"]), wi: rand([0, 1, 2]), win: rand([0, 1, 4]),
      wf: rand([0, 2]), df: rand([0, 1]), gf: rand([0, 2]), br: rand([0, 3]), brs: rand([2, 3, 4]),
      gc: rand([0, 1]), dl: rand([false, true]), ma: rand([0, 2, 8]), mai: rand(["installed", "not_installed"]), cb: rand([0, 4, 16]),
      gab: withGables ? rand([0, 1, 2]) : 0
    };
    // Doors/windows only exist when there are walls in the new wizard (the old one allowed them on an open carport).
    if (c.side + c.end === 0) { c.gd = 0; c.wi = 0; c.win = 0; c.wf = 0; c.df = 0; c.gf = 0; }
    const oldTotal = await oldPage.evaluate((c) => {
      const set = (id, v) => { document.getElementById(id).value = String(v); };
      set("gauge", c.gauge); set("width_ft", c.w); set("length_ft", c.L); set("height_ft", c.h); set("snow_load", c.snow);
      set("sidewall_qty", c.side); set("endwall_qty", c.end); set("extra_panel_qty", c.xp); set("extra_panel_length", c.xpl);
      set("clear_panel_qty", c.cp); set("clear_panel_length", c.cpl); set("garage_door_qty", c.gd); set("garage_door_size", c.gds);
      set("walkin_door_qty", c.wi); set("window_qty", c.win); set("window_frame_qty", c.wf); set("door_frame_qty", c.df); set("garage_frame_qty", c.gf);
      set("brace_qty", c.br); set("brace_size", c.brs); set("ground_cert_qty", c.gc); set("ground_cert_length", c.L + 1); set("gable_qty", c.gab);
      if (c.gc && document.getElementById("ground_cert_length").value !== String(c.L + 1)) return "no-cert-option";
      document.getElementById("ground_cert_doubleleg").checked = c.dl;
      set("mobile_anchor_qty", c.ma); set("mobile_anchor_install", c.mai); set("concrete_bolt_qty", c.cb);
      const r = calcQuote(); // eslint-disable-line no-undef
      return r.ok ? r.total : null;
    }, c);
    if (oldTotal === "no-cert-option") { mismatches++; console.log("   reference has no ground cert for", c.L + 1); continue; }
    const q = await newPage.evaluate((c) => {
      const gd = {}; gd[c.gds] = c.gd; const br = {}; br[c.brs] = c.br;
      return window.SkylinerQuote.price({
        width: c.w, length: c.L, height: c.h, gauge: c.gauge, snow: c.snow, sidewalls: c.side, endwalls: c.end,
        garageDoors: gd, walkins: c.wi, windows: c.win, windowFrames: c.wf, doorFrames: c.df, garageFrames: c.gf,
        surface: "unsure", groundCert: c.gc ? "yes" : "no", doubleLeg: c.dl, mobileAnchors: c.ma, anchorInstall: c.mai, concreteBolts: c.cb,
        extraPanels: c.xp, extraPanelLen: c.xpl, clearPanels: c.cp, clearPanelLen: c.cpl, braces: br, gables: c.gab, bows: 0, roofExt: 0
      });
    }, c);
    if (oldTotal === null) { callForPrice++; if (!q.blockers.length) { mismatches++; console.log("   should be call-for-price", JSON.stringify(c)); } continue; }
    if (q.blockers.length) { mismatches++; console.log("   unexpected call-for-price", JSON.stringify(c), q.blockers); continue; }
    if (q.subtotal !== oldTotal) { mismatches++; if (mismatches < 5) console.log("   mismatch", JSON.stringify(c), "old", oldTotal, "new", q.subtotal); }
    // Fall Sale tiers (5% / 10% at $5k / 15% at $15k) and 10% deposit
    const disc = Math.round(oldTotal * tierPct(oldTotal) / 100), after = oldTotal - disc, dep = Math.round(after * 0.10);
    if (q.total !== after || q.deposit !== dep || q.due !== after - dep) { mismatches++; console.log("   sale/deposit mismatch", oldTotal, q.salePct, q.total); }
  }
  check(mismatches === 0, `${n} random buildings (widths ${widths[0]}'-${widths[widths.length - 1]}', lengths up to ${lengths[lengths.length - 1]}') match; ${callForPrice} unpriced cells show "Call for price"; Fall Sale tiers correct`);
  await oldPage.close(); await newPage.close();
}

async function saleRules(browser) {
  console.log("\n[1b] Fall Sale rules");
  const on = await wizardPage(browser, SALE_ON);
  const tiers = await on.evaluate(() => {
    const out = [];
    const base = { width: 12, length: 20, height: 6, gauge: "14", snow: "standard", sidewalls: 0, endwalls: 0, surface: "concrete" };
    // 12x20 = $2,295. Add $10 concrete bolts to reach exact totals.
    for (const target of [4995, 5005, 14995, 15005]) {
      const q = window.SkylinerQuote.price(Object.assign({}, base, { concreteBolts: Math.round((target - 2295) / 10) }));
      out.push([q.subtotal, q.salePct]);
    }
    const r = window.SkylinerQuote.price(Object.assign({}, base, { roofExt: 2, gables: 1 }));
    out.push([r.subtotal, r.lines.map(l => l.label).join("|")]);
    return out;
  });
  check(tiers[0][1] === 5 && tiers[1][1] === 10 && tiers[2][1] === 10 && tiers[3][1] === 15, "sale tiers: under $5k = 5%, $5k-$15k = 10%, $15k+ = 15% (" + JSON.stringify(tiers.slice(0, 4)) + ")");
  check(tiers[4][0] === 2295 + 1000 + 250, "5' roof extension $500 each and gable end $250 each are added to the price");
  const bows = await on.evaluate(() => [12, 17, 20, 22, 24, 30].map(w => { const q = window.SkylinerQuote.price({ width: w, length: 20, height: 6, bows: 2 }); const l = q.lines.find(x => x.label.indexOf("Extra bow") === 0); return l.amount; }));
  check(JSON.stringify(bows) === JSON.stringify([450, 450, 450, 620, 620, 620]), "extra bows: $225 each up to 20' wide, $310 each 22'-30' wide (" + bows.join(",") + " for 2 bows)");
  const ended = await wizardPage(browser, Object.assign({}, SALE_ON, { endsOn: "2020-01-01" }));
  const q = await ended.evaluate(() => window.SkylinerQuote.price({ width: 20, length: 30, height: 10 }));
  check(q.sale === 0 && q.total === q.subtotal, "sale turns itself off after its end date");
  const sixty = await on.evaluate(() => [window.SkylinerQuote.price({ width: 20, length: 60, height: 10, sidewalls: 2 }), window.SkylinerQuote.price({ width: 30, length: 60, height: 10 })]);
  check(sixty[0].subtotal === 2 * 4195 + 2 * 953 + 2 * 1420 && sixty[1].blockers.length === 1, "60' = two 30' sections; triple-wide 60' is 'Call for price'");
  await on.close(); await ended.close();
}

async function walkthrough(browser, viewport, tag, hosted) {
  console.log(`\n[2] Questionnaire walk-through (${tag})`);
  const ctx = await browser.newContext({ viewport, acceptDownloads: true });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  if (jsPdfPath) await page.route("**/jspdf.umd.min.js", r => r.fulfill({ path: jsPdfPath, contentType: "application/javascript" }));
  if (hosted) await page.route("https://example-site.test/**", r => r.fulfill({ path: HOSTED_JS, contentType: "application/javascript" }));
  await page.setContent(diviPage(hosted ? SNIPPET : WIZARD), { waitUntil: "load" });
  await page.screenshot({ path: path.join(SHOTS, `${tag}-00-launcher.png`), fullPage: true });

  await page.click(".skq-embed [data-skq-open]");
  await page.waitForSelector(".skq-overlay.is-open");
  check(await page.isVisible(".skq-overlay"), "launcher button opens the pop-up");
  const btnStyle = await page.$eval(".skq-overlay .skq-btn-p", b => { const s = getComputedStyle(b); return s.textTransform + "|" + s.borderTopWidth; });
  check(btnStyle === "none|0px", "theme button CSS does not leak into the wizard (" + btnStyle + ")");
  await page.screenshot({ path: path.join(SHOTS, `${tag}-01-intro.png`) });
  await page.click('[data-act="begin"]');

  // Site
  await page.click('[data-act="next"]');
  check(await page.isVisible(".skq-content .skq-err"), "validation blocks moving on without a ZIP code");
  await page.fill("#skq-zip", "76a102");
  check((await page.inputValue("#skq-zip")) === "76102", "ZIP field strips letters");
  await page.click('[data-key="surface"][data-val="gravel"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-02-site.png`) });
  await page.click('[data-act="next"]');
  // Size
  await page.click('[data-key="width"][data-val="20"]');
  await page.click('[data-key="length"][data-val="35"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-03-size.png`) });
  await page.click('[data-act="next"]');
  // Height
  check(!(await page.$('[data-key="use"]')), "no 'what will you use it for' question");
  await page.click('[data-key="height"][data-val="12"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-04-height.png`) });
  await page.click('[data-act="next"]');
  // Strength
  await page.click('[data-key="gauge"][data-val="12"]');
  await page.click('[data-key="snow"][data-val="60"]');
  await page.click('[data-act="next"]');
  // Walls
  await page.click('[data-act="preset"][data-side="2"][data-end="2"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-05-walls.png`) });
  await page.click('[data-act="next"]');
  // Openings
  check((await page.textContent(".skq-h")).includes("Doors"), "doors step appears because walls were added");
  await page.click('[data-act="inc"][data-key="garageDoors.10x10"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="walkins"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="windows"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="windows"][data-d="1"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-06-doors.png`) });
  await page.click('[data-act="next"]');
  // Anchors
  await page.click('[data-act="next"]');
  check(await page.isVisible(".skq-content .skq-err"), "ground certification question must be answered");
  await page.click('[data-key="groundCert"][data-val="yes"]');
  await page.click('[data-key="doubleLeg"][data-val="true"]');
  await page.click('[data-act="inc"][data-key="mobileAnchors"][data-d="2"]');
  await page.click('[data-act="inc"][data-key="mobileAnchors"][data-d="2"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-07-anchors.png`) });
  await page.click('[data-act="next"]');
  // Extras
  await page.click('[data-act="inc"][data-key="extraPanels"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="braces.2"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="braces.2"][data-d="1"]');
  await page.click('[data-act="inc"][data-key="gables"][data-d="1"]');
  await page.click('[data-act="next"]');
  // Colors
  await page.click('[data-key="roofColor"][data-val="Barn Red"]');
  await page.click('[data-key="trimColor"][data-val="White"]');
  await page.click('[data-key="wallColor"][data-val="Pewter Gray"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-08-colors.png`) });
  await page.click('[data-act="next"]');
  // Contact
  await page.click('[data-act="next"]');
  check(await page.isVisible(".skq-content .skq-err"), "contact info required before price (requireContactInfo: true)");
  await page.fill("#skq-name", "Test Customer");
  await page.fill("#skq-phone", "(555) 123-4567");
  await page.fill("#skq-email", "test@example.com");
  await page.click('[data-key="timeframe"][data-val="As soon as possible"]');
  await page.screenshot({ path: path.join(SHOTS, `${tag}-09-contact.png`) });
  await page.click('[data-act="next"]');
  // Quote
  await page.waitForSelector(".skq-total");
  const expected = await page.evaluate(() => window.SkylinerQuote.price(window.SkylinerQuote._state()));
  // Hand-computed from the price sheet: 20x35 base 4795; 12ga +15% = 719 (round 5514.25 -> 5514); height 12 @35 = 1295;
  // snow 3240; sidewalls 35|12 = 2060; endwalls 2 x 20|12 1510 = 3020; 10x10 door 1295; walk-in 350; windows 2 x 230 = 460;
  // ground cert 36' 795 x2 = 1590; mobile anchors 4 x 35 = 140; extra panel 36' = 230; braces 2 x 10 = 20; gable end 250.
  const hand = 4795 + 719 + 1295 + 3240 + 2060 + 3020 + 1295 + 350 + 460 + 1590 + 140 + 230 + 20 + 250;
  check(expected.subtotal === hand, `subtotal ${expected.subtotal} equals hand calculation ${hand}`);
  const shown = await page.textContent(".skq-total-v");
  check(shown.trim() === "$" + expected.total.toLocaleString("en-US"), "quote page shows sale price " + shown.trim());
  check((await page.textContent(".skq-content")).includes("Gable end"), "gable end listed on the quote");
  check(expected.tbd.length === 0, "no 'priced by our team' items (gable ends now $250)");
  if (hosted) check(await page.isVisible('.skq-content a[href^="tel:"]'), "settings typed in the Divi snippet (phone) are used");
  await page.screenshot({ path: path.join(SHOTS, `${tag}-10-quote.png`) });
  await page.screenshot({ path: path.join(SHOTS, `${tag}-10-quote-full.png`), fullPage: true });

  if (jsPdfPath) {
    const [dl] = await Promise.all([page.waitForEvent("download", { timeout: 15000 }), page.click('.skq-content [data-act="pdf"]')]);
    const out = path.join(SHOTS, `${tag}-quote.pdf`);
    await dl.saveAs(out);
    const size = fs.statSync(out).size;
    check(size > 3000, `PDF downloaded (${dl.suggestedFilename()}, ${size} bytes)`);
  }

  // Edit from quote -> change size -> back to quote
  await page.click('.skq-content [data-act="goto"][data-step="size"]');
  await page.click('[data-key="length"][data-val="40"]');
  await page.click('[data-act="toquote"]');
  await page.waitForSelector(".skq-total");
  const q2 = await page.evaluate(() => window.SkylinerQuote.price(window.SkylinerQuote._state()));
  check(q2.subtotal > expected.subtotal, "editing size from the quote page updates the price");

  // Lower legs below door height -> warning blocks
  await page.click('.skq-content [data-act="goto"][data-step="height"]');
  await page.click('[data-key="height"][data-val="8"]');
  await page.click('[data-act="toquote"]');
  await page.click('[data-act="next"]'); // strength
  await page.click('[data-act="next"]'); // walls
  await page.click('[data-act="next"]'); // doors -> must block
  check((await page.textContent(".skq-content .skq-err") || "").includes("10' legs"), "10' door on 8' legs is blocked with a clear message");

  // Close + reopen keeps progress; Divi-style #carport-quote link opens it
  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);
  check(!(await page.$(".skq-overlay")), "Escape closes the pop-up");
  await page.click("a.et_pb_button");
  await page.waitForSelector(".skq-overlay.is-open");
  check((await page.textContent(".skq-h")).includes("Doors"), "Divi button link (#carport-quote) reopens where the customer left off");

  check(errors.length === 0, "no JavaScript errors" + (errors.length ? ": " + errors.join(" | ") : ""));
  await ctx.close();
}

async function inlineMode(browser) {
  console.log("\n[3] Inline mode");
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  await page.setContent(`<!doctype html><html><body>${WIZARD.replace('data-style="card"', 'data-mode="inline"')}</body></html>`);
  check(await page.isVisible(".skq-inline .skq-shell"), "data-mode=\"inline\" shows the wizard directly on the page");
  await page.click('[data-act="begin"]');
  check((await page.textContent(".skq-h")).includes("Where"), "inline wizard starts at step 1");
  check(errors.length === 0, "no JavaScript errors in inline mode");
  await page.close();
}

(async () => {
  const browser = await chromium.launch();
  try {
    await priceParity(browser, "hm-triple-wide-reference.html", [12, 18, 20, 22, 24, 26, 28, 30], [20, 25, 30, 35, 40, 45, 50], false, 1200);
    await priceParity(browser, "hm-60ft-odd-widths-reference.html", [12, 13, 14, 15, 16, 17, 18, 20, 22, 24], [20, 25, 30, 35, 40, 45, 50, 60], true, 800);
    await saleRules(browser);
    await walkthrough(browser, { width: 1366, height: 860 }, "desktop");
    await walkthrough(browser, { width: 390, height: 844 }, "mobile");
    await walkthrough(browser, { width: 1366, height: 860 }, "hosted", true);
    await inlineMode(browser);
  } finally { await browser.close(); }
  console.log(failures ? `\n${failures} FAILED` : "\nALL TESTS PASSED");
  process.exit(failures ? 1 : 0);
})();
