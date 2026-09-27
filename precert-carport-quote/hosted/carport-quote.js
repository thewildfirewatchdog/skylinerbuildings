/* Skyliner Buildings - Pre-Certified Carport Price Wizard (hosted build).
   Generated from skyliner-precert-carport-quote.html by build-hosted.py - edit that file, then rebuild. */
(function () { if (document.getElementById("skq-styles")) return; var s = document.createElement("style"); s.id = "skq-styles"; s.textContent = ".skq,.skq *,.skq *::before,.skq *::after{box-sizing:border-box}\n.skq{--a:#2563eb;--d:#111827;--t:#1f2937;--m:#64748b;--b:#e2e8f0;--bg:#f8fafc;--ok:#15803d;--err:#b91c1c;--tint:#eff6ff;font-family:system-ui,-apple-system,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;color:var(--t);font-size:16px;line-height:1.45;text-align:left;letter-spacing:normal;text-transform:none;font-weight:400;-webkit-font-smoothing:antialiased}\n.skq button{font:inherit;color:inherit;margin:0;padding:0;background:none;border:0;cursor:pointer;text-transform:none;letter-spacing:normal;box-shadow:none;line-height:inherit;text-align:inherit;-webkit-appearance:none;appearance:none}\n.skq button:disabled{cursor:not-allowed}\n.skq input,.skq textarea{font:inherit;color:var(--t);margin:0}\n.skq svg{display:block;max-width:100%}\n.skq :focus-visible{outline:3px solid var(--a);outline-offset:2px}\n/* launcher inside the Divi module */\n.skq-launch{background:#fff;border:1px solid var(--b);border-radius:18px;padding:28px;box-shadow:0 10px 30px rgba(15,23,42,.08);display:grid;grid-template-columns:1fr 260px;gap:24px;align-items:center}\n.skq-launch-k{font-size:13px;font-weight:800;color:var(--a);text-transform:uppercase;letter-spacing:.06em}\n.skq-launch-h{font-size:26px;font-weight:800;line-height:1.2;color:var(--d);margin:6px 0 8px}\n.skq-launch-p{color:var(--m);margin:0 0 18px;font-size:17px}\n.skq-launch-list{display:flex;flex-wrap:wrap;gap:8px 18px;margin:0 0 20px;padding:0;list-style:none;font-size:14px;color:var(--t)}\n.skq-launch-list li{display:flex;gap:6px;align-items:center;margin:0;padding:0}\n.skq-launch-list li::before{content:\"\";width:16px;height:16px;border-radius:50%;background:var(--ok) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E\") center/12px no-repeat;flex:none}\n.skq-launch-art{background:var(--bg);border-radius:14px;padding:10px}\n.skq-launch.is-btn{display:block;background:none;border:0;box-shadow:none;padding:0}\n@media (max-width:700px){.skq-launch{grid-template-columns:1fr;padding:20px}.skq-launch-art{display:none}.skq-launch-h{font-size:22px}}\n.skq .skq-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:12px;padding:12px 20px;font-weight:700;font-size:16px;min-height:46px;transition:background .15s,transform .05s,box-shadow .15s;white-space:nowrap}\n.skq .skq-btn-p{background:var(--a);color:#fff}\n.skq .skq-btn-p:hover{filter:brightness(1.08)}\n.skq .skq-btn-p:active{transform:translateY(1px)}\n.skq .skq-btn-g{background:#fff;color:var(--t);border:1px solid var(--b)}\n.skq .skq-btn-g:hover{background:var(--bg)}\n.skq .skq-btn-lg{font-size:18px;padding:14px 26px;min-height:54px}\n.skq .skq-btn:disabled{opacity:.45}\n/* modal shell */\n.skq-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2147483000;background:rgba(15,23,42,.62);display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;transition:opacity .2s}\n.skq-overlay.is-open{opacity:1}\n.skq-shell{background:#fff;width:100%;max-width:1140px;height:100%;max-height:880px;border-radius:18px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.35)}\n.skq-inline .skq-shell{height:auto;max-height:none;min-height:620px;border:1px solid var(--b);box-shadow:0 10px 30px rgba(15,23,42,.08)}\n.skq-top{display:flex;align-items:center;gap:12px;padding:12px 16px 12px 20px;background:var(--d);color:#fff;flex:none}\n.skq-brand{font-weight:800;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.skq-steplbl{font-size:13px;opacity:.75;white-space:nowrap}\n.skq-top-sp{flex:1}\n.skq .skq-top button{color:#fff;opacity:.85;border-radius:8px;padding:6px 10px;font-size:14px}\n.skq .skq-top button:hover{opacity:1;background:rgba(255,255,255,.12)}\n.skq .skq-x{width:38px;height:38px;display:flex;align-items:center;justify-content:center;padding:0}\n.skq-prog{height:5px;background:var(--b);flex:none}\n.skq-prog-bar{height:100%;background:var(--a);transition:width .3s}\n.skq-main{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 340px}\n.skq-content{overflow-y:auto;padding:28px 34px 36px;-webkit-overflow-scrolling:touch}\n.skq-inline .skq-content{overflow:visible}\n.skq-side{border-left:1px solid var(--b);background:var(--bg);padding:20px;overflow-y:auto}\n.skq-foot{display:flex;align-items:center;gap:12px;padding:12px 20px;border-top:1px solid var(--b);background:#fff;flex:none}\n.skq-foot-price{flex:1;min-width:0;display:flex;flex-direction:column;line-height:1.2}\n.skq-fp-l{font-size:12px;color:var(--m);font-weight:600;text-transform:uppercase;letter-spacing:.04em}\n.skq-fp-v{font-size:22px;font-weight:800;color:var(--d)}\n.skq-fp-v s{font-size:14px;color:var(--m);font-weight:500;margin-left:6px}\n.skq-fp-n{font-size:13px;color:var(--m)}\n.skq-foot-nav{display:flex;gap:10px}\n@media (max-width:900px){.skq-main{grid-template-columns:minmax(0,1fr)}.skq-side{display:none}}\n@media (max-width:700px){.skq-overlay{padding:0}.skq-shell{border-radius:0;max-height:none}.skq-content{padding:20px 16px 28px}.skq-foot{padding:10px 12px;gap:8px}.skq-fp-v{font-size:19px}.skq-btn{padding:11px 14px}.skq-steplbl{display:none}.skq-hide-sm{display:none}}\n/* content */\n.skq-h{font-size:26px;font-weight:800;line-height:1.2;color:var(--d);margin:0 0 6px;outline:none}\n.skq-sub{color:var(--m);margin:0 0 22px;font-size:16px}\n.skq-q{margin:0 0 26px}\n.skq-label{display:block;font-weight:700;font-size:16px;color:var(--d);margin:0 0 10px}\n.skq-help{font-size:14px;color:var(--m);margin:-4px 0 12px}\n.skq-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}\n.skq-cards.skq-c-sm{grid-template-columns:repeat(auto-fill,minmax(96px,1fr))}\n.skq-cards.skq-c-lg{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}\n.skq .skq-card{position:relative;display:flex;flex-direction:column;gap:2px;border:2px solid var(--b);border-radius:14px;padding:14px 14px 12px;background:#fff;transition:border-color .12s,background .12s,box-shadow .12s;min-height:64px;justify-content:center}\n.skq .skq-card:hover{border-color:#94a3b8}\n.skq .skq-card.is-sel{border-color:var(--a);background:var(--tint);box-shadow:0 0 0 1px var(--a) inset}\n.skq .skq-card.is-sel::after{content:\"\";position:absolute;top:8px;right:8px;width:18px;height:18px;border-radius:50%;background:var(--a) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E\") center/13px no-repeat}\n.skq .skq-card.is-off{opacity:.45}\n.skq-card-t{font-weight:700;font-size:16px;color:var(--d);padding-right:20px}\n.skq-card-s{font-size:13px;color:var(--m)}\n.skq-card-p{font-size:14px;font-weight:700;color:var(--a);margin-top:4px}\n.skq-card-p.is-inc{color:var(--ok)}\n.skq-badge{align-self:flex-start;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:#fef3c7;color:#92400e;border-radius:999px;padding:2px 8px;margin-bottom:4px}\n.skq-input{display:block;width:100%;max-width:420px;border:2px solid var(--b);border-radius:12px;padding:12px 14px;font-size:16px;background:#fff;min-height:48px;box-shadow:none}\n.skq-input:focus{border-color:var(--a);outline:none}\n.skq-input.skq-in-sm{max-width:180px}\ntextarea.skq-input{max-width:none;min-height:96px;resize:vertical}\n.skq-grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px 18px}\n.skq-grid2 .skq-input{max-width:none}\n@media (max-width:600px){.skq-grid2{grid-template-columns:1fr}}\n.skq-err{display:flex;gap:10px;align-items:flex-start;background:#fef2f2;border:1px solid #fecaca;color:var(--err);border-radius:12px;padding:12px 14px;margin:0 0 20px;font-weight:600;font-size:15px}\n.skq-note{background:var(--bg);border:1px solid var(--b);border-radius:12px;padding:12px 14px;font-size:14px;color:var(--t);margin:0 0 20px}\n.skq-note b{color:var(--d)}\n.skq-warn{background:#fffbeb;border-color:#fde68a}\n/* rows with steppers */\n.skq-rows{border:1px solid var(--b);border-radius:14px;overflow:hidden;background:#fff}\n.skq-row{display:flex;align-items:center;gap:14px;padding:14px 16px;border-top:1px solid var(--b)}\n.skq-row:first-child{border-top:0}\n.skq-row-i{flex:1;min-width:0}\n.skq-row-t{font-weight:700;color:var(--d)}\n.skq-row-s{font-size:13px;color:var(--m)}\n.skq-row-s.is-bad{color:var(--err)}\n.skq-row-p{font-weight:700;color:var(--a);white-space:nowrap;font-size:15px}\n.skq-row-p.is-tbd{color:var(--m);font-weight:600;font-size:13px}\n.skq-step{display:flex;align-items:center;border:2px solid var(--b);border-radius:12px;overflow:hidden;flex:none}\n.skq .skq-step button{width:42px;height:42px;font-size:22px;font-weight:700;color:var(--d);display:flex;align-items:center;justify-content:center}\n.skq .skq-step button:hover:not(:disabled){background:var(--bg)}\n.skq .skq-step button:disabled{opacity:.3}\n.skq-step output{min-width:36px;text-align:center;font-weight:800;font-size:17px}\n@media (max-width:600px){.skq-row{flex-wrap:wrap}.skq-row-i{flex-basis:100%}.skq-row-p{flex:1}}\n.skq-sec{font-size:13px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--m);margin:28px 0 10px}\n.skq-sec:first-child{margin-top:0}\n.skq-presets{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px}\n.skq .skq-chip{border:2px solid var(--b);border-radius:999px;padding:8px 14px;font-size:14px;font-weight:700;background:#fff}\n.skq .skq-chip:hover{border-color:#94a3b8}\n.skq .skq-chip.is-sel{border-color:var(--a);background:var(--tint);color:var(--a)}\n/* colors */\n.skq-sw{display:grid;grid-template-columns:repeat(auto-fill,minmax(88px,1fr));gap:10px}\n.skq .skq-swb{display:flex;flex-direction:column;align-items:center;gap:6px;padding:8px 4px;border-radius:12px;border:2px solid transparent;font-size:12px;font-weight:600;text-align:center;line-height:1.2}\n.skq .skq-swb:hover{background:var(--bg)}\n.skq .skq-swb.is-sel{border-color:var(--a);background:var(--tint)}\n.skq-swc{width:44px;height:44px;border-radius:10px;border:1px solid rgba(0,0,0,.18);box-shadow:inset 0 -8px 0 rgba(0,0,0,.08)}\n.skq-swc.is-later{background:repeating-linear-gradient(45deg,#fff,#fff 5px,#e2e8f0 5px,#e2e8f0 10px)}\n/* side panel */\n.skq-pv{background:#fff;border:1px solid var(--b);border-radius:14px;padding:10px;margin:0 0 14px}\n.skq-pv-dim{text-align:center;font-size:13px;font-weight:700;color:var(--m);margin-top:4px}\n.skq-specs{margin:0 0 14px;padding:0;list-style:none;font-size:14px}\n.skq-specs li{display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px dashed var(--b);margin:0}\n.skq-specs li span:first-child{color:var(--m)}\n.skq-specs li span:last-child{font-weight:700;color:var(--d);text-align:right}\n.skq-mpv{display:none;margin:0 0 20px}\n@media (max-width:900px){.skq-mpv{display:block}}\n/* intro */\n.skq-hero{max-width:640px}\n.skq-hero-list{list-style:none;margin:0 0 24px;padding:0;display:grid;gap:10px}\n.skq-hero-list li{display:flex;gap:10px;align-items:flex-start;margin:0;padding:0;font-size:16px}\n.skq-hero-list li::before{content:\"\";width:22px;height:22px;flex:none;border-radius:50%;background:var(--ok) url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M4 8.5l2.5 2.5L12 5.5' fill='none' stroke='white' stroke-width='2'/%3E%3C/svg%3E\") center/15px no-repeat}\n.skq-hero-steps{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 26px}\n.skq-hero-steps span{font-size:13px;background:var(--bg);border:1px solid var(--b);border-radius:999px;padding:4px 10px;color:var(--m);font-weight:600}\n.skq-actions{display:flex;flex-wrap:wrap;gap:10px}\n/* quote page */\n.skq-total{border-radius:16px;background:var(--d);color:#fff;padding:22px 24px;margin:0 0 20px;display:grid;grid-template-columns:1fr auto;gap:12px 24px;align-items:end}\n.skq-total-l{font-size:13px;text-transform:uppercase;letter-spacing:.06em;opacity:.75;font-weight:700}\n.skq-total-v{font-size:40px;font-weight:800;line-height:1.1}\n.skq-total-was{font-size:15px;opacity:.8;margin-top:4px}\n.skq-total-was s{opacity:.8}\n.skq-total-save{display:inline-block;background:#22c55e;color:#052e16;font-weight:800;font-size:13px;border-radius:999px;padding:3px 10px;margin-top:8px}\n.skq-total-r{text-align:right;font-size:14px;line-height:1.7}\n.skq-total-r b{font-size:17px}\n@media (max-width:600px){.skq-total{grid-template-columns:1fr}.skq-total-r{text-align:left}.skq-total-v{font-size:34px}}\n.skq-table{width:100%;border-collapse:collapse;font-size:15px;margin:0 0 8px}\n.skq-table td{padding:9px 0;border-bottom:1px solid var(--b);vertical-align:top}\n.skq-table td:last-child{text-align:right;font-weight:700;white-space:nowrap;padding-left:12px}\n.skq-table .skq-tg td{padding-top:18px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--m);border-bottom:2px solid var(--b)}\n.skq-table .skq-tn{display:block;font-size:13px;color:var(--m);font-weight:400}\n.skq-table .skq-tt td{border-bottom:0;font-weight:800;font-size:16px;color:var(--d)}\n.skq-table .skq-ts td{color:var(--ok);font-weight:700}\n.skq-sumgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:0 0 8px}\n.skq-sumc{border:1px solid var(--b);border-radius:12px;padding:10px 12px;display:flex;justify-content:space-between;gap:8px;align-items:flex-start}\n.skq-sumc-l{font-size:12px;color:var(--m);font-weight:700;text-transform:uppercase;letter-spacing:.04em}\n.skq-sumc-v{font-weight:700;color:var(--d);font-size:15px}\n.skq .skq-edit{font-size:13px;font-weight:700;color:var(--a);text-decoration:underline;flex:none}\n.skq-disc{font-size:13px;color:var(--m);margin:20px 0 0}\n.skq-ok{background:#f0fdf4;border-color:#bbf7d0}\n@media (prefers-reduced-motion:reduce){.skq *{transition:none!important}}\n"; document.head.appendChild(s); })();
(function () {
  "use strict";
  if (window.SkylinerQuote) { window.SkylinerQuote.mountAll(); return; }
  /* ====================================================================
     1) YOUR SETTINGS  (safe to edit - keep the quotes and commas)
     ==================================================================== */
  var CONFIG = {
    companyName: "Skyliner Buildings",
    phone: "",                 /* e.g. "(555) 123-4567"  -> shows a "Call us" button            */
    email: "",                 /* e.g. "sales@yourdomain.com" -> shows "Email this quote to us"   */
    leadWebhookUrl: "",        /* optional: Zapier / Make / Google Sheets web-app URL for leads   */
    launchHeadline: "What will your certified carport cost?",
    launchText: "Answer a few quick questions and get an instant, itemized price for a pre-certified metal carport.",
    launchButtonText: "Get My Carport Price",
    accentColor: "#2563eb",    /* buttons and highlights */
    darkColor: "#111827",      /* header bar and total box */
    roofStyleName: "A-Frame (Vertical Roof)",
    sale: { enabled: true, percent: 10, label: "Holiday Sale" },
    depositPercent: 10,
    requireContactInfo: true,  /* true = customer must enter name/phone/email before seeing the price */
    frameOutWithEachDoor: false, /* true = automatically add a frame-out charge for every door and window */
    quoteValidDays: 0,         /* 0 = do not print an expiration date on the quote */
    disclaimer: "This is an estimate based on the options you picked. Final pricing, engineering, and certification for your ZIP code are confirmed by our team before your order is placed. Taxes, permits, and site preparation (leveling, concrete, etc.) are not included unless listed above."
  };
  /* ====================================================================
     2) PRICE BOOK  -  Pre-certified, 14-gauge base prices
     ==================================================================== */
  var PRICES = {
    widths: [12, 18, 20, 22, 24],
    lengths: [20, 25, 30, 35, 40, 45, 50],
    heights: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    /* Base building (frame + roof, 6 ft legs), 14-gauge.  "width x length": price */
    base14: {"12x20":2295,"12x25":2895,"12x30":3395,"12x35":3995,"12x40":4395,"12x45":4995,"12x50":5595,"18x20":2795,"18x25":3395,"18x30":3995,"18x35":4495,"18x40":4995,"18x45":5595,"18x50":6195,"20x20":2995,"20x25":3595,"20x30":4195,"20x35":4795,"20x40":5595,"20x45":6295,"20x50":6995,"22x20":3395,"22x25":3995,"22x30":4695,"22x35":5395,"22x40":6195,"22x45":6895,"22x50":7595,"24x20":3595,"24x25":4595,"24x30":5195,"24x35":5895,"24x40":6595,"24x45":7595,"24x50":8395},
    gauge12Percent: 15,        /* 12-gauge = base price + 15% */
    /* Leg height add-on.  "length|height": price */
    heightAdd: {"20|6":0,"25|6":0,"30|6":0,"35|6":0,"40|6":0,"45|6":0,"50|6":0,"20|7":120,"25|7":145,"30|7":160,"35|7":190,"40|7":215,"45|7":250,"50|7":270,"20|8":230,"25|8":275,"30|8":210,"35|8":370,"40|8":420,"45|8":490,"50|8":540,"20|9":335,"25|9":410,"30|9":460,"35|9":590,"40|9":700,"45|9":730,"50|9":810,"20|10":648,"25|10":820,"30|10":953,"35|10":1115,"40|10":1290,"45|10":1485,"50|10":1660,"20|11":700,"25|11":885,"30|11":1030,"35|11":1205,"40|11":1390,"45|11":1605,"50|11":1790,"20|12":785,"25|12":953,"30|12":1105,"35|12":1295,"40|12":1493,"45|12":1725,"50|12":1925,"20|13":1780,"25|13":2315,"30|13":2500,"35|13":2900,"40|13":3380,"45|13":3860,"50|13":4340,"20|14":1870,"25|14":2450,"30|14":2530,"35|14":3020,"40|14":3500,"45|14":3980,"50|14":4450,"20|15":1930,"25|15":2490,"30|15":2650,"35|15":3140,"40|15":3620,"45|15":4100,"50|15":4580,"20|16":2170,"25|16":2530,"30|16":2890,"35|16":3370,"40|16":3860,"45|16":4340,"50|16":4620,"20|17":2720,"25|17":3080,"30|17":3440,"35|17":4170,"40|17":4610,"45|17":5055,"50|17":5485,"20|18":2830,"25|18":3210,"30|18":3600,"35|18":4360,"40|18":4825,"45|18":5290,"50|18":5760,"20|19":2950,"25|19":3350,"30|19":3760,"35|19":4560,"40|19":5050,"45|19":5550,"50|19":6050,"20|20":3070,"25|20":3485,"30|20":3910,"35|20":4760,"40|20":5285,"45|20":5815,"50|20":6340},
    /* Enclosed sidewalls, BOTH sides together.  "length|height": price */
    sidewallsBoth: {"20|6":580,"25|6":700,"30|6":845,"35|6":990,"40|6":1140,"45|6":1280,"50|6":1420,"20|7":690,"25|7":835,"30|7":1060,"35|7":1170,"40|7":1355,"45|7":1495,"50|7":1660,"20|8":820,"25|8":985,"30|8":1230,"35|8":1350,"40|8":1620,"45|8":1710,"50|8":1880,"20|9":850,"25|9":1025,"30|9":1255,"35|9":1500,"40|9":1745,"45|9":1840,"50|9":2045,"20|10":935,"25|10":1170,"30|10":1420,"35|10":1735,"40|10":1960,"45|10":2075,"50|10":2310,"20|11":1085,"25|11":1325,"30|11":1610,"35|11":1870,"40|11":2180,"45|11":2305,"50|11":2600,"20|12":1135,"25|12":1410,"30|12":1735,"35|12":2060,"40|12":2405,"45|12":2550,"50|12":2850,"20|13":1240,"25|13":1560,"30|13":1900,"35|13":2255,"40|13":2620,"45|13":2795,"50|13":3240,"20|14":1350,"25|14":1710,"30|14":2080,"35|14":2455,"40|14":2850,"45|14":3055,"50|14":3605,"20|15":2165,"25|15":2705,"30|15":3250,"35|15":3750,"40|15":4325,"45|15":4900,"50|15":5480,"20|16":2440,"25|16":3030,"30|16":3655,"35|16":4265,"40|16":4895,"45|16":5470,"50|16":6080,"20|17":2700,"25|17":3365,"30|17":4040,"35|17":4670,"40|17":5345,"45|17":6010,"50|17":6690,"20|18":2950,"25|18":3690,"30|18":4415,"35|18":5165,"40|18":5885,"45|18":6605,"50|18":7320,"20|19":3230,"25|19":4025,"30|19":4825,"35|19":5620,"40|19":6425,"45|19":7225,"50|19":8050,"20|20":3480,"25|20":4325,"30|20":5810,"35|20":6055,"40|20":6920,"45|20":7780,"50|20":8650},
    /* Enclosed end wall, price for ONE end.  "width|height": price */
    endwallEach: {"12|6":730,"18|6":850,"20|6":970,"22|6":1090,"24|6":1210,"12|7":820,"18|7":940,"20|7":1060,"22|7":1200,"24|7":1320,"12|8":910,"18|8":1030,"20|8":1150,"22|8":1270,"24|8":1390,"12|9":1000,"18|9":1120,"20|9":1240,"22|9":1360,"24|9":1480,"12|10":1090,"18|10":1220,"20|10":1330,"22|10":1450,"24|10":1570,"12|11":1180,"18|11":1300,"20|11":1420,"22|11":1540,"24|11":1660,"12|12":1270,"18|12":1390,"20|12":1510,"22|12":1700,"24|12":1750,"12|13":1360,"18|13":1480,"20|13":1600,"22|13":1890,"24|13":1910,"12|14":1450,"18|14":1600,"20|14":1770,"22|14":1930,"24|14":2100,"12|15":1685,"18|15":2120,"20|15":2550,"22|15":2980,"24|15":3370,"12|16":1830,"18|16":2290,"20|16":2880,"22|16":3220,"24|16":3665,"12|17":1980,"18|17":2480,"20|17":2990,"22|17":3480,"24|17":3960,"12|18":2120,"18|18":2650,"20|18":3210,"22|18":3730,"24|18":4240,"12|19":2310,"18|19":2840,"20|19":3420,"22|19":3970,"24|19":4530,"12|20":2460,"18|20":3060,"20|20":3630,"22|20":4230,"24|20":4810},
    snowLoad: { standard: 0, "60": 3240 },
    garageDoors: {             /* roll-up doors: width (ft), height (ft), price */
      "8x7": { w: 8, h: 7, price: 895 },
      "9x8": { w: 9, h: 8, price: 895 },
      "10x8": { w: 10, h: 8, price: 1095 },
      "10x10": { w: 10, h: 10, price: 1295 }
    },
    walkInDoor: 350,
    walkInDoorMinLegHeight: 7,
    window: 230,               /* 24" x 36" window */
    windowFrameOut: 150,
    doorFrameOut: 160,
    garageFrameOut: 300,
    extraPanel: { 21: 130, 26: 160, 31: 200, 36: 230, 41: 260 },   /* panel length (ft): price */
    clearPanel: { 12: 150, 16: 200 },                               /* skylight panel length (ft): price */
    brace: { 2: 10, 3: 15, 4: 20 },                                 /* brace size (ft): price */
    gableEnd: null,            /* null = "priced by our team" (no price on file yet) */
    extraBow: null,            /* null = "priced by our team" (no price on file yet) */
    groundCert: { 21: 595, 26: 695, 31: 695, 36: 795, 41: 895, 46: 995, 51: 1195 }, /* building length + 1 ft */
    mobileAnchor: { installed: 35, not_installed: 30 },
    concreteBolt: 10
  };
  /* Metal colors (hex values are approximate screen colors) */
  var COLORS = [
    ["White", "#f4f4f1"], ["Light Stone", "#ddd6c4"], ["Pebble Beige", "#cfc2a4"], ["Tan", "#b89c70"],
    ["Clay", "#a39277"], ["Earth Brown", "#6b4a33"], ["Burnished Slate", "#4b4038"], ["Barn Red", "#8b2320"],
    ["Burgundy", "#6b1d2b"], ["Evergreen", "#1f4d36"], ["Gallery Blue", "#1f4f8c"], ["Slate Blue", "#5b7087"],
    ["Pewter Gray", "#8f9396"], ["Quaker Gray", "#76797a"], ["Charcoal", "#3b3d41"], ["Black", "#17181a"]
  ];
  /* ====================================================================
     3) APP CODE  (no need to edit below this line)
     ==================================================================== */
  /* Settings typed into the Divi snippet (window.SkylinerQuoteConfig) override the ones above */
  if (window.SkylinerQuoteConfig) { Object.keys(window.SkylinerQuoteConfig).forEach(function (k) { CONFIG[k] = window.SkylinerQuoteConfig[k]; }); }
  var STORE_KEY = "skq-precert-v1";
  var HASH = "#carport-quote";
  var AMP = String.fromCharCode(38);
  var SURFACES = [
    { value: "ground", label: "Dirt or grass", sub: "Bare ground" },
    { value: "gravel", label: "Gravel", sub: "Gravel pad" },
    { value: "concrete", label: "Concrete", sub: "Slab or footers" },
    { value: "asphalt", label: "Asphalt", sub: "Driveway or lot" },
    { value: "unsure", label: "Not sure yet", sub: "We'll help you decide" }
  ];
  var TIMEFRAMES = ["As soon as possible", "Within 1 to 3 months", "3 to 6 months", "Just researching"];
  var CONTACT_PREFS = ["Call", "Text", "Email"];
  var NUMERIC = { width: 1, length: 1, height: 1, sidewalls: 1, endwalls: 1, clearPanelLen: 1, extraPanelLen: 1 };
  var GROUND_SURFACES = ["ground", "gravel", "unsure"];
  var CONCRETE_SURFACES = ["concrete", "unsure"];
  /* ---------------- helpers ---------------- */
  function isIn(v, arr) { return arr.indexOf(v) !== -1; }
  function num(v) { var n = Number(v); return isFinite(n) ? n : 0; }
  function money(n) { var neg = n < 0; var s = "$" + Math.round(Math.abs(n)).toLocaleString("en-US"); return neg ? "-" + s : s; }
  function esc(v) {
    return String(v == null ? "" : v).replace(/[\u0026<>"']/g, function (c) {
      return { "\u0026": "\u0026amp;", "<": "\u0026lt;", ">": "\u0026gt;", '"': "\u0026quot;", "'": "\u0026#39;" }[c];
    });
  }
  function sumQty(obj) { var t = 0; Object.keys(obj || {}).forEach(function (k) { t += num(obj[k]); }); return t; }
  function hasWalls(s) { return s.sidewalls > 0 || s.endwalls > 0; }
  function numKeys(obj) { return Object.keys(obj).map(Number).sort(function (a, b) { return a - b; }); }
  function defaultPanelLen(L) {
    var lens = numKeys(PRICES.extraPanel), want = (L || 20) + 1;
    for (var i = 0; i < lens.length; i++) { if (lens[i] >= want) return lens[i]; }
    return lens[lens.length - 1];
  }
  function colorHex(name, fallback) {
    for (var i = 0; i < COLORS.length; i++) { if (COLORS[i][0] === name) return COLORS[i][1]; }
    return fallback;
  }
  function shade(hex, pct) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) % 256, b = n % 256;
    var t = pct < 0 ? 0 : 255, p = Math.abs(pct) / 100;
    var f = function (c) { return Math.round((t - c) * p + c); };
    return "rgb(" + f(r) + "," + f(g) + "," + f(b) + ")";
  }
  function hexRgb(hex) { var n = parseInt(String(hex).replace("#", ""), 16); return [n >> 16, (n >> 8) % 256, n % 256]; }
  function getPath(obj, path) {
    var parts = path.split("."), cur = obj;
    for (var i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
    return cur;
  }
  function setPath(obj, path, val) {
    var parts = path.split("."), cur = obj;
    for (var i = 0; i < parts.length - 1; i++) { if (typeof cur[parts[i]] !== "object" || cur[parts[i]] === null) cur[parts[i]] = {}; cur = cur[parts[i]]; }
    cur[parts[parts.length - 1]] = val;
  }
  function label(list, v) { for (var i = 0; i < list.length; i++) { if (list[i].value === v) return list[i].label; } return ""; }
  /* ---------------- state ---------------- */
  function freshState() {
    return {
      v: 1, step: "intro", zip: "", surface: "", use: "",
      width: null, length: null, height: null, gauge: "14", snow: "standard",
      sidewalls: 0, endwalls: 0,
      garageDoors: {}, walkins: 0, windows: 0, windowFrames: 0, doorFrames: 0, garageFrames: 0,
      groundCert: "", doubleLeg: false, mobileAnchors: 0, anchorInstall: "installed", concreteBolts: 0,
      extraPanels: 0, extraPanelLen: null, clearPanels: 0, clearPanelLen: 12, braces: {}, gables: 0, bows: 0,
      roofColor: "", trimColor: "", wallColor: "",
      name: "", phone: "", email: "", timeframe: "", contactPref: "", notes: "",
      quoteId: "", quoteDate: "", leadSent: false, reachedQuote: false
    };
  }
  function sanitize(o) {
    var s = Object.assign(freshState(), o || {});
    if (!isIn(s.width, PRICES.widths)) s.width = null;
    if (!isIn(s.length, PRICES.lengths)) s.length = null;
    if (!isIn(s.height, PRICES.heights)) s.height = null;
    if (!isIn(s.gauge, ["14", "12"])) s.gauge = "14";
    if (PRICES.snowLoad[s.snow] === undefined) s.snow = "standard";
    if (!isIn(s.sidewalls, [0, 2])) s.sidewalls = 0;
    if (!isIn(s.endwalls, [0, 1, 2])) s.endwalls = 0;
    if (PRICES.extraPanel[s.extraPanelLen] === undefined) s.extraPanelLen = null;
    if (PRICES.clearPanel[s.clearPanelLen] === undefined) s.clearPanelLen = numKeys(PRICES.clearPanel)[0];
    if (PRICES.mobileAnchor[s.anchorInstall] === undefined) s.anchorInstall = "installed";
    Object.keys(s.garageDoors || {}).forEach(function (k) { if (!PRICES.garageDoors[k]) delete s.garageDoors[k]; });
    Object.keys(s.braces || {}).forEach(function (k) { if (PRICES.brace[k] === undefined) delete s.braces[k]; });
    return s;
  }
  function load() {
    try { var raw = window.localStorage.getItem(STORE_KEY); if (!raw) return null; var o = JSON.parse(raw); if (!o || o.v !== 1) return null; return sanitize(o); } catch (e) { return null; }
  }
  function save() { try { window.localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* storage blocked - fine */ } }
  var S = load() || freshState();
  /* ---------------- pricing engine ---------------- */
  function priceQuote(s) {
    var P = PRICES, w = s.width, L = s.length, h = s.height || P.heights[0];
    var r = { lines: [], tbd: [], warnings: [], subtotal: 0, sale: 0, total: 0, deposit: 0, due: 0, hasSize: false, complete: false };
    if (!w || !L) return r;
    var base14 = P.base14[w + "x" + L];
    if (base14 === undefined) { r.warnings.push("We don't have a price on file for " + w + "' x " + L + "'."); return r; }
    r.hasSize = true;
    r.complete = Boolean(s.height);
    function add(group, lbl, qty, each, note) {
      r.lines.push({ group: group, label: lbl, qty: qty, each: each, amount: each === null ? null : Math.round(qty * each), note: note || "" });
      if (each === null) r.tbd.push(lbl);
    }
    add("Building", w + "' x " + L + "' pre-certified frame and roof", 1, base14, CONFIG.roofStyleName + ", 14-gauge, 6' legs");
    if (s.gauge === "12") add("Building", "12-gauge frame upgrade", 1, Math.round(base14 * (1 + P.gauge12Percent / 100)) - base14, "Heavier-duty steel (+" + P.gauge12Percent + "% of building)");
    var hAdd = P.heightAdd[L + "|" + h] || 0;
    if (hAdd > 0) add("Building", h + "' leg height", 1, hAdd, "Upgrade from 6' standard legs");
    var snow = P.snowLoad[s.snow] || 0;
    if (snow > 0) add("Building", s.snow + " lb snow load rating", 1, snow, "");
    if (s.sidewalls === 2) add("Walls", "Enclosed sidewalls (both sides)", 1, P.sidewallsBoth[L + "|" + h], L + "' long x " + h + "' tall");
    if (s.endwalls > 0) add("Walls", s.endwalls === 2 ? "Enclosed end walls (both ends)" : "Enclosed end wall (one end)", s.endwalls, P.endwallEach[w + "|" + h], w + "' wide x " + h + "' tall" + (s.endwalls === 2 ? ", " + money(P.endwallEach[w + "|" + h]) + " each" : ""));
    if (hasWalls(s)) {
      Object.keys(P.garageDoors).forEach(function (k) {
        var q = num(s.garageDoors[k]), d = P.garageDoors[k];
        if (q <= 0) return;
        add("Doors and windows", d.w + "' x " + d.h + "' roll-up garage door", q, d.price, q > 1 ? money(d.price) + " each" : "");
        if (CONFIG.frameOutWithEachDoor) add("Doors and windows", "Garage door frame-out", q, P.garageFrameOut, "");
        if (d.h > h) r.warnings.push("A " + d.w + "' x " + d.h + "' door needs at least " + d.h + "' legs. Your building has " + h + "' legs.");
      });
      if (s.walkins > 0) {
        add("Doors and windows", "Walk-in door", s.walkins, P.walkInDoor, s.walkins > 1 ? money(P.walkInDoor) + " each" : "");
        if (CONFIG.frameOutWithEachDoor) add("Doors and windows", "Walk-in door frame-out", s.walkins, P.doorFrameOut, "");
        if (h < P.walkInDoorMinLegHeight) r.warnings.push("A walk-in door needs at least " + P.walkInDoorMinLegHeight + "' legs. Your building has " + h + "' legs.");
      }
      if (s.windows > 0) {
        add("Doors and windows", "Window (24\" x 36\")", s.windows, P.window, s.windows > 1 ? money(P.window) + " each" : "");
        if (CONFIG.frameOutWithEachDoor) add("Doors and windows", "Window frame-out", s.windows, P.windowFrameOut, "");
      }
      if (s.garageFrames > 0) add("Doors and windows", "Garage door frame-out (framed opening only)", s.garageFrames, P.garageFrameOut, "");
      if (s.doorFrames > 0) add("Doors and windows", "Walk-in door frame-out (framed opening only)", s.doorFrames, P.doorFrameOut, "");
      if (s.windowFrames > 0) add("Doors and windows", "Window frame-out (framed opening only)", s.windowFrames, P.windowFrameOut, "");
    }
    if (isIn(s.surface, GROUND_SURFACES)) {
      if (s.groundCert === "yes") {
        var gLen = L + 1, gEach = P.groundCert[gLen];
        if (gEach !== undefined) add("Anchoring", "Ground certification (" + gLen + "')", 1, gEach * (s.doubleLeg ? 2 : 1), s.doubleLeg ? "Double leg (x2)" : "");
      }
      if (s.mobileAnchors > 0) add("Anchoring", "Mobile home anchors (" + (s.anchorInstall === "installed" ? "installed" : "not installed") + ")", s.mobileAnchors, P.mobileAnchor[s.anchorInstall], money(P.mobileAnchor[s.anchorInstall]) + " each");
    }
    if (isIn(s.surface, CONCRETE_SURFACES)) {
      if (s.concreteBolts > 0) add("Anchoring", "Concrete anchor bolts", s.concreteBolts, P.concreteBolt, money(P.concreteBolt) + " each");
    }
    if (s.extraPanels > 0) { var pl = s.extraPanelLen || defaultPanelLen(L); add("Extras", "Extra panel (" + pl + "')", s.extraPanels, P.extraPanel[pl], s.extraPanels > 1 ? money(P.extraPanel[pl]) + " each" : ""); }
    if (s.clearPanels > 0) add("Extras", "Clear skylight panel (" + s.clearPanelLen + "')", s.clearPanels, P.clearPanel[s.clearPanelLen], s.clearPanels > 1 ? money(P.clearPanel[s.clearPanelLen]) + " each" : "");
    numKeys(P.brace).forEach(function (sz) { var q = num((s.braces || {})[sz]); if (q > 0) add("Extras", "Extra brace (" + sz + "')", q, P.brace[sz], q > 1 ? money(P.brace[sz]) + " each" : ""); });
    if (s.gables > 0) add("Extras", "Gable end" + (s.gables > 1 ? "s" : ""), s.gables, P.gableEnd, P.gableEnd === null ? "Priced by our team" : "");
    if (s.bows > 0) add("Extras", "Extra bow" + (s.bows > 1 ? "s" : ""), s.bows, P.extraBow, P.extraBow === null ? "Priced by our team" : "");
    r.lines.forEach(function (l) { if (l.amount !== null) r.subtotal += l.amount; });
    r.sale = CONFIG.sale.enabled ? Math.round(r.subtotal * CONFIG.sale.percent / 100) : 0;
    r.total = r.subtotal - r.sale;
    r.deposit = Math.round(r.total * CONFIG.depositPercent / 100);
    r.due = r.total - r.deposit;
    return r;
  }
  function priceWith(patch) { return priceQuote(Object.assign({}, S, patch)).subtotal; }
  function delta(patch, basePatch) { return priceWith(Object.assign({}, basePatch || {}, patch)) - priceWith(basePatch || {}); }
  function plus(n) { return n > 0 ? "+" + money(n) : "Included"; }
  /* ---------------- building picture ---------------- */
  function buildingSVG(st, opt) {
    opt = opt || {};
    var w = st.width || 20, L = st.length || 30, h = st.height || 8, peak = (w / 2) * (4 / 12);
    var kx = Math.cos(Math.PI / 6) * 0.6, ky = Math.sin(Math.PI / 6) * 0.6;
    var walls = hasWalls(st), out = [];
    function P(x, y, z) { return [x + y * kx, -(z + y * ky)]; }
    function pts(arr) { return arr.map(function (p) { var q = P(p[0], p[1], p[2]); return q[0].toFixed(2) + "," + q[1].toFixed(2); }).join(" "); }
    function poly(arr, fill, stroke, sw) { out.push('<polygon points="' + pts(arr) + '" fill="' + fill + '" stroke="' + (stroke || "none") + '" stroke-width="' + (sw || 1) + '" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>'); }
    function line(a, b, stroke, sw, op) { var p = P(a[0], a[1], a[2]), q = P(b[0], b[1], b[2]); out.push('<line x1="' + p[0].toFixed(2) + '" y1="' + p[1].toFixed(2) + '" x2="' + q[0].toFixed(2) + '" y2="' + q[1].toFixed(2) + '" stroke="' + stroke + '" stroke-width="' + (sw || 1) + '" stroke-opacity="' + (op || 1) + '" vector-effect="non-scaling-stroke" stroke-linecap="round"/>'); }
    function endTop(y) { return y <= w / 2 ? h + (y / (w / 2)) * peak : h + ((w - y) / (w / 2)) * peak; }
    var roof = colorHex(st.roofColor, "#8e99a6"), trim = colorHex(st.trimColor, "#475569"), wall = colorHex(st.wallColor, "#cbd5e1");
    var legXs = []; for (var lx = 0; lx <= L; lx += 5) legXs.push(lx);
    poly([[-2, -2, 0], [L + 2, -2, 0], [L + 2, w + 2, 0], [-2, w + 2, 0]], "#e2e8f0");
    if (st.sidewalls === 2) poly([[0, w, 0], [L, w, 0], [L, w, h], [0, w, h]], shade(wall, -22), shade(wall, -40));
    if (st.endwalls === 2) poly([[0, 0, 0], [0, w, 0], [0, w, h], [0, w / 2, h + peak], [0, 0, h]], shade(wall, -28), shade(wall, -40));
    legXs.forEach(function (x) { line([x, w, 0], [x, w, h], shade(trim, -10), 2.2); });
    if (st.endwalls < 2) line([0, 0, 0], [0, 0, h], trim, 2.6);
    poly([[0, w / 2, h + peak], [L, w / 2, h + peak], [L, w, h], [0, w, h]], shade(roof, -18), shade(roof, -35));
    poly([[0, 0, h], [L, 0, h], [L, w / 2, h + peak], [0, w / 2, h + peak]], roof, shade(roof, -30));
    for (var rx = 1.5; rx < L; rx += 1.5) line([rx, 0, h], [rx, w / 2, h + peak], shade(roof, -25), 1, 0.55);
    if (st.endwalls >= 1) {
      poly([[L, 0, 0], [L, w, 0], [L, w, h], [L, w / 2, h + peak], [L, 0, h]], shade(wall, -10), shade(wall, -35));
      for (var ey = 1.5; ey < w; ey += 1.5) line([L, ey, 0], [L, ey, endTop(ey)], shade(wall, -28), 1, 0.5);
    } else if (st.gables > 0) {
      poly([[L, 0, h], [L, w / 2, h + peak], [L, w, h]], shade(wall, -10), shade(wall, -35));
    } else {
      line([L, 0, h], [L, w, h], trim, 2);
      line([L, w, 0], [L, w, h], trim, 2.4);
    }
    var gd = sumQty(st.garageDoors), doorKey = null;
    Object.keys(PRICES.garageDoors).forEach(function (k) { if (num(st.garageDoors[k]) > 0) doorKey = k; });
    if (gd > 0 ? st.endwalls >= 1 : false) {
      var d = PRICES.garageDoors[doorKey], dw = Math.min(d.w, w - 2), dh = Math.min(d.h, h - 0.3), y0 = w / 2 - dw / 2;
      poly([[L, y0, 0], [L, y0 + dw, 0], [L, y0 + dw, dh], [L, y0, dh]], "#eef2f6", "#64748b");
      for (var sz = 0.8; sz < dh; sz += 0.8) line([L, y0, sz], [L, y0 + dw, sz], "#94a3b8", 1, 0.8);
    }
    if (st.sidewalls === 2) {
      poly([[0, 0, 0], [L, 0, 0], [L, 0, h], [0, 0, h]], wall, shade(wall, -35));
      for (var wx = 1.5; wx < L; wx += 1.5) line([wx, 0, 0], [wx, 0, h], shade(wall, -22), 1, 0.5);
      var used = 0;
      if (gd > 0 ? st.endwalls === 0 : false) {
        var d2 = PRICES.garageDoors[doorKey], dh2 = Math.min(d2.h, h - 0.3), x0 = L / 2 - d2.w / 2;
        poly([[x0, 0, 0], [x0 + d2.w, 0, 0], [x0 + d2.w, 0, dh2], [x0, 0, dh2]], "#eef2f6", "#64748b");
        for (var sz2 = 0.8; sz2 < dh2; sz2 += 0.8) line([x0, 0, sz2], [x0 + d2.w, 0, sz2], "#94a3b8", 1, 0.8);
        used = 1;
      }
      if (st.walkins > 0) { var wxs = used ? 1.5 : L * 0.18; poly([[wxs, 0, 0], [wxs + 3, 0, 0], [wxs + 3, 0, Math.min(6.7, h - 0.3)], [wxs, 0, Math.min(6.7, h - 0.3)]], "#f8fafc", "#475569"); }
      var nWin = Math.min(st.windows, 4), zb = h >= 8 ? 3.5 : h - 3.6;
      for (var i = 0; i < nWin; i++) { var xw = L * (0.45 + i * 0.13); if (xw + 2 < L) poly([[xw, 0, zb], [xw + 2, 0, zb], [xw + 2, 0, zb + 3], [xw, 0, zb + 3]], "#bfdbfe", "#475569"); }
    } else {
      legXs.forEach(function (x) { line([x, 0, 0], [x, 0, h], trim, 2.6); });
    }
    line([0, 0, h], [L, 0, h], trim, 2.4);
    line([0, w / 2, h + peak], [L, w / 2, h + peak], trim, 2.4);
    line([0, 0, h], [0, w / 2, h + peak], trim, 2.2);
    line([L, 0, h], [L, w / 2, h + peak], trim, 2.2);
    line([L, w / 2, h + peak], [L, w, h], trim, 2.2);
    if (walls) { line([L, 0, 0], [L, 0, h], trim, 2.4); }
    var corners = [[-2, -2, 0], [L + 2, -2, 0], [L + 2, w + 2, 0], [-2, w + 2, 0], [0, w / 2, h + peak], [L, w / 2, h + peak], [L, w, h]];
    var xs = corners.map(function (c) { return P(c[0], c[1], c[2])[0]; }), ys = corners.map(function (c) { return P(c[0], c[1], c[2])[1]; });
    var minX = Math.min.apply(null, xs) - 1, maxX = Math.max.apply(null, xs) + 1, minY = Math.min.apply(null, ys) - 1, maxY = Math.max.apply(null, ys) + 1;
    var desc = w + " by " + L + " foot building with " + h + " foot legs, " + (walls ? "partly or fully enclosed" : "open carport");
    return '<svg class="skq-svg" viewBox="' + minX.toFixed(1) + " " + minY.toFixed(1) + " " + (maxX - minX).toFixed(1) + " " + (maxY - minY).toFixed(1) + '" role="img" aria-label="Preview: ' + esc(desc) + '"' + (opt.height ? ' style="height:' + opt.height + 'px;width:100%"' : "") + ">" + out.join("") + "</svg>";
  }
  /* ---------------- UI building blocks ---------------- */
  function choice(key, opts, cur, cls, lbl) {
    return '<div class="skq-cards ' + (cls || "") + '" role="radiogroup"' + (lbl ? ' aria-label="' + esc(lbl) + '"' : "") + ">" + opts.map(function (o) {
      var sel = cur !== null ? String(cur) === String(o.value) : false;
      return '<button type="button" class="skq-card' + (sel ? " is-sel" : "") + (o.disabled ? " is-off" : "") + '" role="radio" aria-checked="' + sel + '" data-act="set" data-key="' + key + '" data-val="' + esc(o.value) + '"' + (o.disabled ? " disabled" : "") + ">" +
        (o.badge ? '<span class="skq-badge">' + esc(o.badge) + "</span>" : "") +
        '<span class="skq-card-t">' + esc(o.label) + "</span>" +
        (o.sub ? '<span class="skq-card-s">' + esc(o.sub) + "</span>" : "") +
        (o.price ? '<span class="skq-card-p' + (o.price === "Included" ? " is-inc" : "") + '">' + esc(o.price) + "</span>" : "") +
        "</button>";
    }).join("") + "</div>";
  }
  function stepper(key, title, sub, priceText, o) {
    o = o || {};
    var v = num(getPath(S, key)), min = 0, max = o.max || 10, st = o.step || 1;
    var canAdd = v + st <= max ? !o.block : false;
    return '<div class="skq-row"><div class="skq-row-i"><div class="skq-row-t">' + esc(title) + "</div>" +
      (o.block ? '<div class="skq-row-s is-bad">' + esc(o.block) + "</div>" : (sub ? '<div class="skq-row-s">' + esc(sub) + "</div>" : "")) +
      '</div><div class="skq-row-p' + (o.tbd ? " is-tbd" : "") + '">' + esc(priceText) + "</div>" +
      '<div class="skq-step"><button type="button" data-act="inc" data-key="' + key + '" data-d="' + (-st) + '" data-max="' + max + '" aria-label="Remove one: ' + esc(title) + '"' + (v <= min ? " disabled" : "") + ">−</button>" +
      '<output aria-live="polite" aria-label="' + esc(title) + ' quantity">' + v + "</output>" +
      '<button type="button" data-act="inc" data-key="' + key + '" data-d="' + st + '" data-max="' + max + '" aria-label="Add one: ' + esc(title) + '"' + (canAdd ? "" : " disabled") + ">+</button></div></div>";
  }
  function chips(key, list, cur) {
    return '<div class="skq-presets" role="radiogroup">' + list.map(function (v) {
      var sel = cur === v;
      return '<button type="button" class="skq-chip' + (sel ? " is-sel" : "") + '" role="radio" aria-checked="' + sel + '" data-act="set" data-key="' + key + '" data-val="' + esc(v) + '">' + esc(v) + "</button>";
    }).join("") + "</div>";
  }
  function swatches(key, cur) {
    var all = COLORS.concat([["Decide later", ""]]);
    return '<div class="skq-sw" role="radiogroup">' + all.map(function (c) {
      var v = c[1] ? c[0] : "later", sel = cur === v;
      return '<button type="button" class="skq-swb' + (sel ? " is-sel" : "") + '" role="radio" aria-checked="' + sel + '" data-act="set" data-key="' + key + '" data-val="' + esc(v) + '">' +
        '<span class="skq-swc' + (c[1] ? "" : " is-later") + '"' + (c[1] ? ' style="background:' + c[1] + '"' : "") + "></span>" + esc(c[0]) + "</button>";
    }).join("") + "</div>";
  }
  function note(html, cls) { return '<div class="skq-note ' + (cls || "") + '">' + html + "</div>"; }
  function colorText(v) { return v === "later" ? "Decide later" : (v || "-"); }
  function wallsText(s) {
    var a = s.sidewalls === 2 ? "Both sides" : "", b = s.endwalls === 2 ? "both ends" : (s.endwalls === 1 ? "one end" : "");
    if (!a) return b ? "Enclosed " + b : "Open (no walls)";
    return b ? a + " + " + b : a;
  }
  function specList(s) {
    var list = [];
    if (s.width) list.push(["Size", s.width + "' wide x " + s.length + "' long", "size"]);
    if (s.height) list.push(["Leg height", s.height + "'", "height"]);
    list.push(["Roof style", CONFIG.roofStyleName, ""]);
    list.push(["Frame", s.gauge + "-gauge steel", "strength"]);
    list.push(["Snow load", s.snow === "standard" ? "Standard" : s.snow + " lb", "strength"]);
    list.push(["Walls", wallsText(s), "walls"]);
    if (s.surface) list.push(["Install on", label(SURFACES, s.surface), "site"]);
    if (s.roofColor) list.push(["Roof color", colorText(s.roofColor), "colors"]);
    if (s.trimColor) list.push(["Trim color", colorText(s.trimColor), "colors"]);
    if (hasWalls(s) ? Boolean(s.wallColor) : false) list.push(["Wall color", colorText(s.wallColor), "colors"]);
    if (s.zip) list.push(["ZIP code", s.zip, "site"]);
    return list;
  }
  /* ---------------- steps ---------------- */
  var STEPS = [
    { id: "site", nav: "Location", title: "Where is your building going?", sub: "This helps us match the right certification and anchoring for your site.", html: stepSite, check: checkSite },
    { id: "size", nav: "Size", title: "How big do you need it?", sub: "Width is side to side. Length is front to back.", html: stepSize, check: function (s) { return !s.width ? "Please pick a width." : (!s.length ? "Please pick a length." : ""); } },
    { id: "height", nav: "Height", title: "How tall should the legs be?", sub: "Leg height is measured from the ground to where the roof starts. Taller legs mean more clearance.", html: stepHeight, check: function (s) { return s.height ? "" : "Please pick a leg height."; } },
    { id: "strength", nav: "Strength", title: "Frame strength and snow load", sub: "Every building in this program is pre-certified. Choose extra strength if you need it.", html: stepStrength, check: function () { return ""; } },
    { id: "walls", nav: "Walls", title: "Do you want any walls?", sub: "Leave it open as a carport, or enclose it all the way into a garage.", html: stepWalls, check: function () { return ""; } },
    { id: "openings", nav: "Doors", title: "Doors and windows", sub: "Add roll-up doors, walk-in doors, and windows to your walls. Skip this if you don't need any.", html: stepOpenings, check: checkOpenings, show: hasWalls },
    { id: "anchors", nav: "Anchoring", title: "Anchoring and certification", sub: "How your building is tied down is a big part of certification.", html: stepAnchors, check: function (s) { return isIn(s.surface, GROUND_SURFACES) ? (s.groundCert ? "" : "Please answer the ground certification question.") : ""; } },
    { id: "extras", nav: "Extras", title: "Anything extra?", sub: "Optional add-ons. Skip this step if you don't need any.", html: stepExtras, check: function () { return ""; } },
    { id: "colors", nav: "Colors", title: "Pick your colors", sub: "Colors don't change the price. Screen colors are approximate, so ask us for a color chart.", html: stepColors, check: checkColors },
    { id: "contact", nav: "Contact", title: "Where should we send your quote?", sub: "We'll save your quote and a building specialist can answer any questions.", html: stepContact, check: checkContact },
    { id: "quote", nav: "Your quote", title: "Your carport quote", sub: "", html: stepQuote, check: function () { return ""; } }
  ];
  function visibleSteps() { return STEPS.filter(function (st) { return st.show ? st.show(S) : true; }); }
  function stepById(id) { for (var i = 0; i < STEPS.length; i++) { if (STEPS[i].id === id) return STEPS[i]; } return null; }
  function checkSite(s) {
    if (!/^\d{5}$/.test(s.zip)) return "Please enter your 5-digit ZIP code.";
    if (!s.surface) return "Please tell us what the building will sit on.";
    return "";
  }
  function checkOpenings(s) {
    var q = priceQuote(s);
    return q.warnings.length ? q.warnings[0] + " Remove that item or go back and pick taller legs." : "";
  }
  function checkColors(s) {
    if (!s.roofColor) return "Please pick a roof color (or choose Decide later).";
    if (!s.trimColor) return "Please pick a trim color (or choose Decide later).";
    if (hasWalls(s) ? !s.wallColor : false) return "Please pick a wall color (or choose Decide later).";
    return "";
  }
  function contactIssues(s) {
    if (!s.name.trim()) return "Please enter your name.";
    if (s.phone.replace(/\D/g, "").length < 10) return "Please enter a 10-digit phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim())) return "Please enter a valid email address.";
    return "";
  }
  function checkContact(s) { return CONFIG.requireContactInfo ? contactIssues(s) : ""; }
  function stepSite() {
    return '<div class="skq-q"><label class="skq-label" for="skq-zip">Installation ZIP code</label>' +
      '<input id="skq-zip" class="skq-input skq-in-sm" type="text" inputmode="numeric" autocomplete="postal-code" placeholder="12345" data-key="zip" value="' + esc(S.zip) + '"></div>' +
      '<div class="skq-q"><div class="skq-label">What will the building sit on?</div>' + choice("surface", SURFACES, S.surface, "", "Install surface") + "</div>" ;
  }
  function stepSize() {
    var L = S.length || PRICES.lengths[0], wref = S.width || PRICES.widths[0];
    var wOpts = PRICES.widths.map(function (w) { return { value: w, label: w + "' wide", sub: "", price: (S.length ? "" : "from ") + money(PRICES.base14[w + "x" + L]) }; });
    var lOpts = PRICES.lengths.map(function (l) { return { value: l, label: l + "' long", sub: "", price: (S.width ? "" : "from ") + money(PRICES.base14[wref + "x" + l]) }; });
    return '<div class="skq-q"><div class="skq-label">Width</div>' + choice("width", wOpts, S.width, "", "Width") + "</div>" +
      '<div class="skq-q"><div class="skq-label">Length</div>' + choice("length", lOpts, S.length, "", "Length") + "</div>";
  }
  function stepHeight() {
    var opts = PRICES.heights.map(function (h) {
      var d = delta({ height: h }, { height: PRICES.heights[0] });
      return { value: h, label: h + "' legs", sub: "", price: plus(d) };
    });
    return '<div class="skq-mpv">' + buildingSVG(S, { height: 160 }) + "</div>" +
      '<div class="skq-q">' + choice("height", opts, S.height, "skq-c-sm", "Leg height") + "</div>" +
      (hasWalls(S) ? note("Your wall prices are included in the height prices above.") : "");
  }
  function stepStrength() {
    var g12 = delta({ gauge: "12" }, { gauge: "14" });
    var snowOpts = Object.keys(PRICES.snowLoad).map(function (k) {
      return k === "standard" ? { value: k, label: "Standard", sub: "Standard certified rating", price: "Included" } : { value: k, label: k + " lb snow load", sub: "For areas with heavy snow", price: plus(PRICES.snowLoad[k]) };
    });
    return '<div class="skq-q"><div class="skq-label">Frame steel</div>' + choice("gauge", [
      { value: "14", label: "14-gauge", sub: "Standard certified frame", price: "Included" },
      { value: "12", label: "12-gauge", sub: "Thicker, heavier-duty steel", price: plus(g12) }
    ], S.gauge, "skq-c-lg", "Frame steel") + "</div>" +
      '<div class="skq-q"><div class="skq-label">Snow load rating</div><div class="skq-help">Your local building code sets the requirement. We\'ll confirm it for ZIP ' + esc(S.zip || "code") + " before you order.</div>" + choice("snow", snowOpts, S.snow, "skq-c-lg", "Snow load") + "</div>";
  }
  function stepWalls() {
    var presets = [["Open carport", 0, 0], ["Both sides", 2, 0], ["Sides + one end", 2, 1], ["Fully enclosed", 2, 2]];
    var side = delta({ sidewalls: 2 }, { sidewalls: 0 });
    var e1 = delta({ endwalls: 1 }, { endwalls: 0 }), e2 = delta({ endwalls: 2 }, { endwalls: 0 });
    return '<div class="skq-mpv">' + buildingSVG(S, { height: 170 }) + "</div>" +
      '<div class="skq-label">Quick picks</div><div class="skq-presets">' + presets.map(function (p) {
        var sel = S.sidewalls === p[1] ? S.endwalls === p[2] : false;
        return '<button type="button" class="skq-chip' + (sel ? " is-sel" : "") + '" data-act="preset" data-side="' + p[1] + '" data-end="' + p[2] + '">' + p[0] + (p[1] + p[2] ? " (" + plus(delta({ sidewalls: p[1], endwalls: p[2] }, { sidewalls: 0, endwalls: 0 })) + ")" : "") + "</button>";
      }).join("") + "</div>" +
      '<div class="skq-q"><div class="skq-label">Sidewalls (the long sides)</div>' + choice("sidewalls", [
        { value: 0, label: "Open", sub: "No sidewalls", price: "Included" },
        { value: 2, label: "Both sides enclosed", sub: S.length + "' long x " + S.height + "' tall", price: plus(side) }
      ], S.sidewalls, "skq-c-lg", "Sidewalls") + "</div>" +
      '<div class="skq-q"><div class="skq-label">End walls (the short ends)</div>' + choice("endwalls", [
        { value: 0, label: "Open", sub: "No end walls", price: "Included" },
        { value: 1, label: "One end", sub: S.width + "' wide x " + S.height + "' tall", price: plus(e1) },
        { value: 2, label: "Both ends", sub: "Fully closed ends", price: plus(e2) }
      ], S.endwalls, "", "End walls") + "</div>";
  }
  function stepOpenings() {
    var h = S.height, rows = "";
    Object.keys(PRICES.garageDoors).forEach(function (k) {
      var d = PRICES.garageDoors[k], tooTall = d.h > h, have = num(S.garageDoors[k]);
      rows += stepper("garageDoors." + k, d.w + "' x " + d.h + "' roll-up door", d.w + "' wide x " + d.h + "' tall", money(d.price) + " each", { max: 4, block: tooTall ? (have ? "Needs " + d.h + "' legs - remove or pick taller legs" : "Needs at least " + d.h + "' legs") : "" });
    });
    var walkBlock = h < PRICES.walkInDoorMinLegHeight ? "Needs at least " + PRICES.walkInDoorMinLegHeight + "' legs" : "";
    var fo = CONFIG.frameOutWithEachDoor ? " (includes frame-out)" : "";
    var warn = priceQuote(S).warnings;
    return (warn.length ? '<div class="skq-err" role="alert">' + esc(warn[0]) + "</div>" : "") +
      '<div class="skq-sec">Roll-up garage doors' + fo + "</div><div class=\"skq-rows\">" + rows + "</div>" +
      '<div class="skq-sec">Walk-in doors and windows</div><div class="skq-rows">' +
      stepper("walkins", "Walk-in door", "Standard steel entry door" + fo, money(PRICES.walkInDoor) + " each", { max: 4, block: walkBlock }) +
      stepper("windows", "Window", "24\" x 36\" window" + fo, money(PRICES.window) + " each", { max: 8 }) + "</div>" +
      '<div class="skq-sec">Framed openings only</div><div class="skq-help">A framed opening, ready for a door or window you supply yourself.</div><div class="skq-rows">' +
      stepper("garageFrames", "Garage door frame-out", "Framed opening for a roll-up door", money(PRICES.garageFrameOut) + " each", { max: 4 }) +
      stepper("doorFrames", "Walk-in door frame-out", "Framed opening for a walk-in door", money(PRICES.doorFrameOut) + " each", { max: 4 }) +
      stepper("windowFrames", "Window frame-out", "Framed opening for a window", money(PRICES.windowFrameOut) + " each", { max: 8 }) + "</div>" +
      '<div class="skq-help" style="margin-top:14px">Tell us where you want each door and window in the notes on the contact step.</div>';
  }
  function stepAnchors() {
    var out = "", ground = isIn(S.surface, GROUND_SURFACES), conc = isIn(S.surface, CONCRETE_SURFACES);
    out += note("You told us the building will sit on <b>" + esc(label(SURFACES, S.surface).toLowerCase() || "your site") + '</b>. <button type="button" class="skq-edit" data-act="goto" data-step="site">Change</button>');
    if (S.surface === "asphalt") out += note("Asphalt installs need special anchors. Our team will confirm the right anchoring and price for your site before you order.", "skq-warn");
    if (ground) {
      var gLen = S.length + 1, gEach = PRICES.groundCert[gLen];
      if (gEach !== undefined) {
        out += '<div class="skq-q"><div class="skq-label">Add ground certification?</div><div class="skq-help">For installs on dirt, grass, or gravel. Priced by your building length (' + S.length + "').</div>" +
          choice("groundCert", [{ value: "yes", label: "Yes, add it", sub: gLen + "' ground certification", price: plus(gEach) }, { value: "no", label: "No thanks", sub: "", price: "" }], S.groundCert, "skq-c-lg", "Ground certification") + "</div>";
        if (S.groundCert === "yes") {
          out += '<div class="skq-q"><div class="skq-label">Double leg?</div>' + choice("doubleLeg", [{ value: "false", label: "Single leg", sub: "Standard", price: "Included" }, { value: "true", label: "Double leg", sub: "Doubles the ground certification", price: plus(gEach) }], String(S.doubleLeg), "skq-c-lg", "Double leg") + "</div>";
        }
      }
      out += '<div class="skq-sec">Mobile home anchors</div><div class="skq-rows">' + stepper("mobileAnchors", "Mobile home anchors", "Sold in pairs", money(PRICES.mobileAnchor[S.anchorInstall]) + " each", { max: 30, step: 2 }) + "</div>";
      if (S.mobileAnchors > 0) out += '<div class="skq-q" style="margin-top:12px">' + choice("anchorInstall", [{ value: "installed", label: "Installed by us", price: money(PRICES.mobileAnchor.installed) + " each" }, { value: "not_installed", label: "Not installed", sub: "Delivered, you install", price: money(PRICES.mobileAnchor.not_installed) + " each" }], S.anchorInstall, "skq-c-lg", "Anchor installation") + "</div>";
    }
    if (conc) out += '<div class="skq-sec">Concrete anchors</div><div class="skq-rows">' + stepper("concreteBolts", "Concrete anchor bolts", "Sold in sets of 4", money(PRICES.concreteBolt) + " each", { max: 48, step: 4 }) + "</div>";
    return out;
  }
  function stepExtras() {
    var pl = S.extraPanelLen || defaultPanelLen(S.length), out = "";
    out += '<div class="skq-sec">Panels</div><div class="skq-rows">' + stepper("extraPanels", "Extra metal panels", pl + "' panels", money(PRICES.extraPanel[pl]) + " each", { max: 10 }) + stepper("clearPanels", "Clear skylight panels", S.clearPanelLen + "' clear panels to let light in", money(PRICES.clearPanel[S.clearPanelLen]) + " each", { max: 6 }) + "</div>";
    if (S.extraPanels > 0) out += '<div class="skq-q" style="margin-top:12px"><div class="skq-label">Extra panel length</div>' + choice("extraPanelLen", numKeys(PRICES.extraPanel).map(function (l) { return { value: l, label: l + "'", price: money(PRICES.extraPanel[l]) }; }), pl, "skq-c-sm", "Extra panel length") + "</div>";
    if (S.clearPanels > 0) out += '<div class="skq-q" style="margin-top:12px"><div class="skq-label">Skylight panel length</div>' + choice("clearPanelLen", numKeys(PRICES.clearPanel).map(function (l) { return { value: l, label: l + "'", price: money(PRICES.clearPanel[l]) }; }), S.clearPanelLen, "skq-c-sm", "Skylight length") + "</div>";
    out += '<div class="skq-sec">Framing</div><div class="skq-rows">';
    numKeys(PRICES.brace).forEach(function (sz) { out += stepper("braces." + sz, "Extra " + sz + "' braces", "Added bracing at the corners", money(PRICES.brace[sz]) + " each", { max: 20 }); });
    out += stepper("gables", "Gable ends", "Closes the triangle at the top of an open end", PRICES.gableEnd === null ? "Priced by our team" : money(PRICES.gableEnd) + " each", { max: 2, tbd: PRICES.gableEnd === null });
    out += stepper("bows", "Extra bows (trusses)", "Additional roof trusses", PRICES.extraBow === null ? "Priced by our team" : money(PRICES.extraBow) + " each", { max: 6, tbd: PRICES.extraBow === null }) + "</div>";
    return out;
  }
  function stepColors() {
    return '<div class="skq-mpv">' + buildingSVG(S, { height: 170 }) + "</div>" +
      '<div class="skq-q"><div class="skq-label">Roof color' + (S.roofColor ? ": <span style=\"font-weight:500\">" + esc(colorText(S.roofColor)) + "</span>" : "") + "</div>" + swatches("roofColor", S.roofColor) + "</div>" +
      '<div class="skq-q"><div class="skq-label">Trim color' + (S.trimColor ? ": <span style=\"font-weight:500\">" + esc(colorText(S.trimColor)) + "</span>" : "") + "</div>" + swatches("trimColor", S.trimColor) + "</div>" +
      (hasWalls(S) ? '<div class="skq-q"><div class="skq-label">Wall color' + (S.wallColor ? ": <span style=\"font-weight:500\">" + esc(colorText(S.wallColor)) + "</span>" : "") + "</div>" + swatches("wallColor", S.wallColor) + "</div>" : "");
  }
  function stepContact() {
    var req = CONFIG.requireContactInfo ? ' <span style="color:var(--err)">*</span>' : "";
    return '<div class="skq-grid2">' +
      '<div><label class="skq-label" for="skq-name">Full name' + req + '</label><input id="skq-name" class="skq-input" type="text" autocomplete="name" data-key="name" value="' + esc(S.name) + '"></div>' +
      '<div><label class="skq-label" for="skq-phone">Phone' + req + '</label><input id="skq-phone" class="skq-input" type="tel" autocomplete="tel" inputmode="tel" data-key="phone" value="' + esc(S.phone) + '"></div>' +
      '<div><label class="skq-label" for="skq-email">Email' + req + '</label><input id="skq-email" class="skq-input" type="email" autocomplete="email" data-key="email" value="' + esc(S.email) + '"></div>' +
      '<div><div class="skq-label">Best way to reach you</div>' + chips("contactPref", CONTACT_PREFS, S.contactPref) + "</div></div>" +
      '<div class="skq-q" style="margin-top:18px"><div class="skq-label">When do you need it?</div>' + chips("timeframe", TIMEFRAMES, S.timeframe) + "</div>" +
      '<div class="skq-q"><label class="skq-label" for="skq-notes">Notes (door and window placement, questions, anything else)</label><textarea id="skq-notes" class="skq-input" data-key="notes" rows="4">' + esc(S.notes) + "</textarea></div>" +
      '<div class="skq-help">We only use your information to follow up on this quote. We never sell it.</div>';
  }
  function stepQuote() {
    var q = priceQuote(S), groups = [], out = "";
    q.lines.forEach(function (l) { if (!isIn(l.group, groups)) groups.push(l.group); });
    out += '<div class="skq-sub">Quote #' + esc(S.quoteId) + " · " + esc(S.quoteDate) + (S.name ? " · Prepared for " + esc(S.name) : "") + "</div>";
    out += '<div class="skq-total"><div><div class="skq-total-l">' + (CONFIG.sale.enabled ? "Your sale price" : "Your price") + '</div><div class="skq-total-v">' + money(q.total) + "</div>" +
      (CONFIG.sale.enabled ? '<div class="skq-total-was">Regular price <s>' + money(q.subtotal) + '</s></div><div class="skq-total-save">You save ' + money(q.sale) + " with our " + esc(CONFIG.sale.label) + " (" + CONFIG.sale.percent + "% off)</div>" : "") +
      '</div><div class="skq-total-r">Deposit to order (' + CONFIG.depositPercent + "%)<br><b>" + money(q.deposit) + "</b><br>Due at installation<br><b>" + money(q.due) + "</b></div></div>";
    if (q.warnings.length) out += '<div class="skq-err" role="alert">' + q.warnings.map(esc).join("<br>") + "</div>";
    if (q.tbd.length) out += note("<b>Priced by our team:</b> " + esc(q.tbd.join(", ")) + ". These items aren't in the total yet. We'll add them when we confirm your order.", "skq-warn");
    if (!CONFIG.leadWebhookUrl ? false : S.leadSent) out += note("<b>Thanks, " + esc(S.name.split(" ")[0]) + "!</b> We received your quote and a building specialist will reach out soon.", "skq-ok");
    out += '<div class="skq-actions" style="margin:0 0 24px">' +
      '<button type="button" class="skq-btn skq-btn-p" data-act="pdf">Download PDF quote</button>' +
      (CONFIG.email ? '<button type="button" class="skq-btn skq-btn-g" data-act="email">Email this quote to us</button>' : "") +
      (CONFIG.phone ? '<a class="skq-btn skq-btn-g" style="text-decoration:none" href="tel:' + esc(CONFIG.phone.replace(/[^\d+]/g, "")) + '">Call ' + esc(CONFIG.phone) + "</a>" : "") +
      '<button type="button" class="skq-btn skq-btn-g" data-act="print">Print</button></div>';
    out += '<div class="skq-mpv">' + buildingSVG(S, { height: 180 }) + "</div>";
    out += '<div class="skq-sec">Your building</div><div class="skq-sumgrid">' + specList(S).map(function (it) {
      return '<div class="skq-sumc"><div><div class="skq-sumc-l">' + esc(it[0]) + '</div><div class="skq-sumc-v">' + esc(it[1]) + "</div></div>" + (it[2] ? '<button type="button" class="skq-edit" data-act="goto" data-step="' + it[2] + '" aria-label="Change ' + esc(it[0]) + '">Change</button>' : "") + "</div>";
    }).join("") + "</div>";
    out += '<div class="skq-sec">Price breakdown</div><table class="skq-table"><tbody>';
    groups.forEach(function (g) {
      out += '<tr class="skq-tg"><td colspan="2">' + esc(g) + "</td></tr>";
      q.lines.forEach(function (l) {
        if (l.group !== g) return;
        out += "<tr><td>" + esc(l.label) + (l.qty > 1 ? " × " + l.qty : "") + (l.note ? '<span class="skq-tn">' + esc(l.note) + "</span>" : "") + "</td><td>" + (l.amount === null ? "TBD" : money(l.amount)) + "</td></tr>";
      });
    });
    out += '<tr class="skq-tt"><td>Subtotal</td><td>' + money(q.subtotal) + "</td></tr>";
    if (CONFIG.sale.enabled) out += '<tr class="skq-ts"><td>' + esc(CONFIG.sale.label) + " (" + CONFIG.sale.percent + '% off)</td><td>-' + money(q.sale) + "</td></tr>" + '<tr class="skq-tt"><td>Total</td><td>' + money(q.total) + "</td></tr>";
    out += "<tr><td>Deposit to order (" + CONFIG.depositPercent + "%)</td><td>" + money(q.deposit) + "</td></tr><tr><td>Due at installation</td><td>" + money(q.due) + "</td></tr></tbody></table>";
    out += '<div class="skq-disc">' + esc(CONFIG.disclaimer) + (CONFIG.quoteValidDays > 0 ? " Prices valid for " + CONFIG.quoteValidDays + " days." : "") + "</div>";
    out += '<div class="skq-actions" style="margin-top:20px"><button type="button" class="skq-btn skq-btn-g" data-act="restart">Start a new quote</button></div>';
    return out;
  }
  function introHTML() {
    var resuming = S.width ? true : Boolean(S.zip);
    return '<div class="skq-hero"><div class="skq-h" id="skq-step-h" tabindex="-1" role="heading" aria-level="2">Price your pre-certified carport in about 2 minutes</div>' +
      '<div class="skq-sub">Answer a few simple questions. Your price updates as you go.</div>' +
      '<ul class="skq-hero-list"><li>Instant, itemized price with no waiting on a call back</li><li>Pre-certified steel buildings, ' + PRICES.widths[0] + "' to " + PRICES.widths[PRICES.widths.length - 1] + "' wide</li>" + '<li>See your building as you design it</li><li>Download or print your quote as a PDF</li></ul>' +
      '<div class="skq-hero-steps">' + visibleSteps().map(function (st) { return "<span>" + esc(st.nav) + "</span>"; }).join("") + "</div>" +
      '<div class="skq-actions">' + (resuming ? '<button type="button" class="skq-btn skq-btn-p skq-btn-lg" data-act="resume">Continue my quote</button><button type="button" class="skq-btn skq-btn-g skq-btn-lg" data-act="restart">Start over</button>' : '<button type="button" class="skq-btn skq-btn-p skq-btn-lg" data-act="begin">Let\'s get started</button>') + "</div></div>";
  }
  function sideHTML() {
    var q = priceQuote(S);
    return '<div class="skq-pv">' + buildingSVG(S) + '<div class="skq-pv-dim">' + (S.width ? S.width + "' W × " + S.length + "' L" + (S.height ? " × " + S.height + "' H" : "") : "Pick a size to preview") + "</div></div>" +
      '<ul class="skq-specs">' + specList(S).slice(0, 7).map(function (it) { return "<li><span>" + esc(it[0]) + "</span><span>" + esc(it[1]) + "</span></li>"; }).join("") +
      (q.hasSize ? "<li><span>Subtotal</span><span>" + money(q.subtotal) + "</span></li>" + (CONFIG.sale.enabled ? "<li><span>" + esc(CONFIG.sale.label) + "</span><span style=\"color:var(--ok)\">-" + money(q.sale) + "</span></li>" : "") : "") + "</ul>";
  }
  /* ---------------- quote output: text, PDF, print ---------------- */
  function quoteText() {
    var q = priceQuote(S), t = [];
    t.push(CONFIG.companyName + " - Pre-Certified Carport Quote #" + S.quoteId + " (" + S.quoteDate + ")", "");
    if (S.name) t.push("Customer: " + S.name, "Phone: " + S.phone, "Email: " + S.email, "");
    specList(S).forEach(function (it) { t.push(it[0] + ": " + it[1]); });
    t.push("", "PRICE BREAKDOWN");
    q.lines.forEach(function (l) { t.push("- " + l.label + (l.qty > 1 ? " x " + l.qty : "") + ": " + (l.amount === null ? "TBD" : money(l.amount))); });
    t.push("", "Subtotal: " + money(q.subtotal));
    if (CONFIG.sale.enabled) t.push(CONFIG.sale.label + " (" + CONFIG.sale.percent + "% off): -" + money(q.sale), "Total: " + money(q.total));
    t.push("Deposit (" + CONFIG.depositPercent + "%): " + money(q.deposit), "Due at installation: " + money(q.due));
    if (S.timeframe) t.push("", "Timeframe: " + S.timeframe);
    if (S.contactPref) t.push("Preferred contact: " + S.contactPref);
    if (S.notes) t.push("Notes: " + S.notes);
    return t.join("\n");
  }
  function loadJsPDF() {
    return new Promise(function (res, rej) {
      if (window.jspdf ? window.jspdf.jsPDF : false) return res(window.jspdf.jsPDF);
      var sc = document.createElement("script");
      sc.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      sc.onload = function () { if (window.jspdf ? window.jspdf.jsPDF : false) res(window.jspdf.jsPDF); else rej(new Error("jsPDF missing")); };
      sc.onerror = function () { rej(new Error("jsPDF failed to load")); };
      document.head.appendChild(sc);
    });
  }
  function ascii(s) { return String(s).replace(/×/g, "x").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[–—−]/g, "-").replace(/[^\x20-\x7e]/g, ""); }
  function makePDF(JsPDF) {
    var q = priceQuote(S), doc = new JsPDF({ unit: "pt", format: "letter" });
    var W = 612, H = 792, M = 44, y = 0, dark = hexRgb(CONFIG.darkColor), acc = hexRgb(CONFIG.accentColor);
    function need(hh) { if (y + hh > H - 64) { doc.addPage(); y = 56; } }
    function txt(s, x, yy, o) { doc.text(ascii(s), x, yy, o || {}); }
    function font(style, size, rgb) { doc.setFont("helvetica", style); doc.setFontSize(size); doc.setTextColor(rgb[0], rgb[1], rgb[2]); }
    var BLACK = [17, 24, 39], GRAY = [100, 116, 139], GREEN = [21, 128, 61], WHITE = [255, 255, 255];
    doc.setFillColor(dark[0], dark[1], dark[2]); doc.rect(0, 0, W, 92, "F");
    doc.setFillColor(acc[0], acc[1], acc[2]); doc.rect(0, 92, W, 4, "F");
    font("bold", 20, WHITE); txt(CONFIG.companyName, M, 42);
    font("normal", 11, WHITE); txt("Pre-Certified Carport Quote", M, 62);
    txt([CONFIG.phone, CONFIG.email].filter(Boolean).join("   |   "), M, 78);
    font("bold", 11, WHITE); txt("Quote #" + S.quoteId, W - M, 42, { align: "right" });
    font("normal", 10, WHITE); txt("Date: " + S.quoteDate, W - M, 58, { align: "right" });
    if (CONFIG.quoteValidDays > 0) txt("Valid for " + CONFIG.quoteValidDays + " days", W - M, 72, { align: "right" });
    y = 126;
    var colW = (W - 2 * M - 24) / 2, leftY = y, rightY = y;
    font("bold", 10, GRAY); txt("PREPARED FOR", M, leftY); leftY += 16;
    font("normal", 11, BLACK);
    [S.name || "-", S.phone, S.email, S.zip ? "Install ZIP: " + S.zip : ""].filter(Boolean).forEach(function (s) { txt(s, M, leftY); leftY += 15; });
    var rx = M + colW + 24;
    font("bold", 10, GRAY); txt("YOUR BUILDING", rx, rightY); rightY += 16;
    specList(S).filter(function (it) { return it[0] !== "ZIP code"; }).forEach(function (it) {
      font("normal", 10, GRAY); txt(it[0], rx, rightY);
      font("bold", 10, BLACK); txt(it[1], W - M, rightY, { align: "right" }); rightY += 14;
    });
    y = Math.max(leftY, rightY) + 14;
    doc.setFillColor(241, 245, 249); doc.rect(M, y, W - 2 * M, 22, "F");
    font("bold", 10, BLACK); txt("DESCRIPTION", M + 8, y + 15); txt("QTY", W - M - 110, y + 15, { align: "right" }); txt("AMOUNT", W - M - 8, y + 15, { align: "right" });
    y += 38;
    var groups = [];
    q.lines.forEach(function (l) { if (!isIn(l.group, groups)) groups.push(l.group); });
    groups.forEach(function (g) {
      need(40); font("bold", 9, GRAY); txt(g.toUpperCase(), M + 8, y); y += 15;
      q.lines.forEach(function (l) {
        if (l.group !== g) return;
        need(l.note ? 30 : 18);
        font("normal", 11, BLACK); txt(l.label, M + 8, y); txt(String(l.qty), W - M - 110, y, { align: "right" });
        font("bold", 11, BLACK); txt(l.amount === null ? "TBD" : money(l.amount), W - M - 8, y, { align: "right" });
        if (l.note) { y += 12; font("normal", 9, GRAY); txt(l.note, M + 8, y); }
        y += 8; doc.setDrawColor(226, 232, 240); doc.setLineWidth(0.6); doc.line(M, y, W - M, y); y += 14;
      });
    });
    need(130);
    y += 4;
    var bx = W - M - 250;
    function tot(lbl, val, o) { o = o || {}; font(o.bold ? "bold" : "normal", o.size || 11, o.color || BLACK); txt(lbl, bx, y); txt(val, W - M - 8, y, { align: "right" }); y += o.gap || 18; }
    tot("Subtotal", money(q.subtotal));
    if (CONFIG.sale.enabled) tot(CONFIG.sale.label + " (" + CONFIG.sale.percent + "% off)", "-" + money(q.sale), { color: GREEN });
    doc.setDrawColor(148, 163, 184); doc.line(bx, y - 10, W - M, y - 10); y += 4;
    tot("TOTAL", money(q.total), { bold: true, size: 14, gap: 20 });
    tot("Deposit to order (" + CONFIG.depositPercent + "%)", money(q.deposit));
    doc.setFillColor(acc[0], acc[1], acc[2]); doc.rect(bx - 8, y - 14, W - M - bx + 8, 24, "F");
    font("bold", 12, WHITE); txt("Due at installation", bx, y + 2); txt(money(q.due), W - M - 8, y + 2, { align: "right" }); y += 34;
    var notes = [];
    if (q.tbd.length) notes.push("Priced by our team (not in total yet): " + q.tbd.join(", ") + ".");
    q.warnings.forEach(function (wn) { notes.push("Please confirm: " + wn); });
    if (S.timeframe) notes.push("Timeframe: " + S.timeframe + ".");
    if (S.notes) notes.push("Customer notes: " + S.notes);
    notes.push(CONFIG.disclaimer);
    notes.forEach(function (n) {
      var lines = doc.splitTextToSize(ascii(n), W - 2 * M);
      need(lines.length * 12 + 8); font("normal", 9, GRAY); doc.text(lines, M, y); y += lines.length * 12 + 6;
    });
    var pages = doc.getNumberOfPages();
    for (var p = 1; p <= pages; p++) { doc.setPage(p); font("normal", 8, GRAY); txt(CONFIG.companyName + "  |  Quote #" + S.quoteId + "  |  Page " + p + " of " + pages, W / 2, H - 28, { align: "center" }); }
    doc.save(ascii(CONFIG.companyName).replace(/[^A-Za-z0-9]+/g, "-") + "-Quote-" + S.quoteId + ".pdf");
  }
  function printQuote() {
    var q = priceQuote(S), rows = q.lines.map(function (l) { return "<tr><td>" + esc(l.label) + (l.qty > 1 ? " x " + l.qty : "") + (l.note ? "<br><small>" + esc(l.note) + "</small>" : "") + "</td><td>" + (l.amount === null ? "TBD" : money(l.amount)) + "</td></tr>"; }).join("");
    var specs = specList(S).map(function (it) { return "<tr><td>" + esc(it[0]) + "</td><td>" + esc(it[1]) + "</td></tr>"; }).join("");
    var html = "<!doctype html><html><head><meta charset=\"utf-8\"><title>Quote " + esc(S.quoteId) + "</title><style>body{font-family:Arial,sans-serif;color:#111;margin:32px}h1{margin:0}table{width:100%;border-collapse:collapse;margin:12px 0}td{padding:6px 0;border-bottom:1px solid #ddd;vertical-align:top}td:last-child{text-align:right}small{color:#666}.t td{font-weight:bold;font-size:18px}</style></head><body>" +
      "<h1>" + esc(CONFIG.companyName) + "</h1><p>Pre-Certified Carport Quote #" + esc(S.quoteId) + " - " + esc(S.quoteDate) + "<br>" + esc([S.name, S.phone, S.email].filter(Boolean).join(" | ")) + "</p>" +
      "<h3>Your building</h3><table>" + specs + "</table><h3>Price breakdown</h3><table>" + rows +
      "<tr><td>Subtotal</td><td>" + money(q.subtotal) + "</td></tr>" + (CONFIG.sale.enabled ? "<tr><td>" + esc(CONFIG.sale.label) + " (" + CONFIG.sale.percent + "% off)</td><td>-" + money(q.sale) + "</td></tr>" : "") +
      "<tr class=\"t\"><td>Total</td><td>" + money(q.total) + "</td></tr><tr><td>Deposit (" + CONFIG.depositPercent + "%)</td><td>" + money(q.deposit) + "</td></tr><tr><td>Due at installation</td><td>" + money(q.due) + "</td></tr></table>" +
      "<p><small>" + esc(CONFIG.disclaimer) + "</small></p></body></html>";
    var fr = document.createElement("iframe");
    fr.setAttribute("aria-hidden", "true");
    fr.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    document.body.appendChild(fr);
    var d = fr.contentWindow.document; d.open(); d.write(html); d.close();
    setTimeout(function () { try { fr.contentWindow.focus(); fr.contentWindow.print(); } catch (e) { /* ignore */ } setTimeout(function () { fr.remove(); }, 2000); }, 250);
  }
  function emailQuote() {
    var url = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Carport quote #" + S.quoteId + (S.name ? " - " + S.name : "")) + AMP + "body=" + encodeURIComponent(quoteText());
    window.location.href = url;
  }
  function sendLead() {
    if (!CONFIG.leadWebhookUrl) return;
    if (S.leadSent) return;
    var q = priceQuote(S);
    var payload = {
      source: "precert-carport-wizard", quoteId: S.quoteId, date: S.quoteDate, page: window.location.href,
      name: S.name, phone: S.phone, email: S.email, zip: S.zip, contactPref: S.contactPref, timeframe: S.timeframe, notes: S.notes,
      surface: label(SURFACES, S.surface),
      specs: specList(S).map(function (it) { return it[0] + ": " + it[1]; }).join("; "),
      lines: q.lines.map(function (l) { return { item: l.label, qty: l.qty, amount: l.amount }; }),
      subtotal: q.subtotal, sale: q.sale, total: q.total, deposit: q.deposit, dueAtInstall: q.due,
      summary: quoteText()
    };
    var body = JSON.stringify(payload);
    function done() { S.leadSent = true; save(); if (S.step === "quote") render(); }
    fetch(CONFIG.leadWebhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: body }).then(done).catch(function () {
      fetch(CONFIG.leadWebhookUrl, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: body }).then(done).catch(function () { /* offline - ignore */ });
    });
  }
  function track(name, data) {
    try {
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: "carport_quote_" + name }, data || {}));
      window.dispatchEvent(new CustomEvent("skyliner-quote", { detail: Object.assign({ name: name }, data || {}) }));
    } catch (e) { /* ignore */ }
  }
  /* ---------------- app shell ---------------- */
  var host = null, shell = null, isModal = true, lastFocus = null, errorMsg = "", lastStep = null, firstRender = true;
  function applyColors(el) { el.style.setProperty("--a", CONFIG.accentColor); el.style.setProperty("--d", CONFIG.darkColor); el.style.setProperty("--tint", "color-mix(in srgb, " + CONFIG.accentColor + " 9%, #fff)"); }
  function shellHTML() {
    return '<div class="skq-shell"' + (isModal ? ' role="dialog" aria-modal="true" aria-labelledby="skq-title"' : "") + ">" +
      '<div class="skq-top"><div class="skq-brand" id="skq-title">' + esc(CONFIG.companyName) + ' <span style="font-weight:500;opacity:.8">· Carport Price Builder</span></div><div class="skq-steplbl" data-part="steplbl"></div><div class="skq-top-sp"></div>' +
      '<button type="button" data-act="restart" class="skq-hide-sm">Start over</button>' +
      (isModal ? '<button type="button" class="skq-x" data-act="close" aria-label="Close price builder"><svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>' : "") + "</div>" +
      '<div class="skq-prog" aria-hidden="true"><div class="skq-prog-bar" data-part="bar"></div></div>' +
      '<div class="skq-main"><div class="skq-content" data-part="content"></div><aside class="skq-side" data-part="side" aria-label="Your building so far"></aside></div>' +
      '<div class="skq-foot" data-part="foot"></div></div>';
  }
  function part(name) { return shell.querySelector('[data-part="' + name + '"]'); }
  function footHTML(q, idx, total) {
    var cur = S.step, price;
    if (!q.hasSize) price = '<span class="skq-fp-l">Your price</span><span class="skq-fp-n">Pick a size to see your price</span>';
    else price = '<span class="skq-fp-l">' + (q.complete ? "Your price" : "Starting at") + (CONFIG.sale.enabled ? " with " + esc(CONFIG.sale.label) : "") + '</span><span class="skq-fp-v" aria-live="polite">' + money(q.total) + (CONFIG.sale.enabled ? "<s>" + money(q.subtotal) + "</s>" : "") + "</span>";
    if (cur === "intro") return '<div class="skq-foot-price"></div>';
    var nav = "", editing = S.reachedQuote ? (cur !== "contact" ? cur !== "quote" : false) : false;
    if (idx > 0) nav += '<button type="button" class="skq-btn skq-btn-g' + (editing ? " skq-hide-sm" : "") + '" data-act="back">Back</button>';
    if (cur === "quote") nav += '<button type="button" class="skq-btn skq-btn-p" data-act="pdf">Download PDF</button>';
    else if (editing) {
      nav += '<button type="button" class="skq-btn skq-btn-g" data-act="next">Next</button><button type="button" class="skq-btn skq-btn-p" data-act="toquote">Update quote</button>';
    } else {
      if (cur === "contact" ? !CONFIG.requireContactInfo : false) nav += '<button type="button" class="skq-btn skq-btn-g" data-act="skip">Skip</button>';
      nav += '<button type="button" class="skq-btn skq-btn-p" data-act="next">' + (cur === "contact" ? "See my price" : "Next") + "</button>";
    }
    return '<div class="skq-foot-price">' + price + '</div><div class="skq-foot-nav">' + nav + "</div>";
  }
  function render() {
    if (!shell) return;
    var steps = visibleSteps(), idx = -1;
    for (var i = 0; i < steps.length; i++) { if (steps[i].id === S.step) idx = i; }
    if (S.step !== "intro" ? idx === -1 : false) { S.step = steps[0].id; idx = 0; }
    var q = priceQuote(S), content = part("content"), changed = lastStep !== S.step;
    if (S.step === "intro") {
      content.innerHTML = introHTML();
      part("steplbl").textContent = "";
      part("bar").style.width = "0%";
    } else {
      var st = steps[idx];
      content.innerHTML = '<div class="skq-h" id="skq-step-h" tabindex="-1" role="heading" aria-level="2">' + esc(st.title) + "</div>" +
        (st.sub ? '<div class="skq-sub">' + esc(st.sub) + "</div>" : "") +
        (errorMsg ? '<div class="skq-err" role="alert">' + esc(errorMsg) + "</div>" : "") + st.html();
      part("steplbl").textContent = st.id === "quote" ? "Done" : "Step " + (idx + 1) + " of " + (steps.length - 1) + " · " + st.nav;
      part("bar").style.width = Math.round(((idx + 1) / steps.length) * 100) + "%";
    }
    part("side").innerHTML = sideHTML();
    part("foot").innerHTML = footHTML(q, idx, steps.length);
    if (changed) {
      content.scrollTop = 0;
      if (!isModal) { var top = shell.getBoundingClientRect().top; if (top < 0) window.scrollBy(0, top - 20); }
      var hd = content.querySelector("#skq-step-h");
      if (hd ? !firstRender : false) { try { hd.focus({ preventScroll: true }); } catch (e) { hd.focus(); } }
      if (errorMsg) { var er = content.querySelector(".skq-err"); if (er) er.scrollIntoView({ block: "nearest" }); }
      track("step", { step: S.step });
    }
    lastStep = S.step; firstRender = false;
  }
  function refreshLive() {
    var steps = visibleSteps(), idx = 0;
    for (var i = 0; i < steps.length; i++) { if (steps[i].id === S.step) idx = i; }
    part("side").innerHTML = sideHTML();
    part("foot").innerHTML = footHTML(priceQuote(S), idx, steps.length);
  }
  function go(id) { errorMsg = ""; S.step = id; save(); render(); }
  function finalizeQuote() {
    if (!S.quoteId) {
      var d = new Date();
      S.quoteId = "SKY-" + String(d.getFullYear()).slice(2) + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2) + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
    }
    S.quoteDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    S.reachedQuote = true;
    var q = priceQuote(S);
    track("complete", { value: q.total, quoteId: S.quoteId });
    if (contactIssues(S) === "") sendLead();
  }
  function next(skipCheck) {
    var steps = visibleSteps(), idx = 0;
    for (var i = 0; i < steps.length; i++) { if (steps[i].id === S.step) idx = i; }
    var err = skipCheck ? "" : steps[idx].check(S);
    if (err) { errorMsg = err; lastStep = null; render(); return; }
    var nextStep = steps[Math.min(idx + 1, steps.length - 1)];
    if (nextStep.id === "quote") { goQuote(skipCheck); return; }
    go(nextStep.id);
  }
  function goQuote(skipContact) {
    var steps = visibleSteps();
    for (var j = 0; j < steps.length - 1; j++) {
      var e2 = steps[j].check(S);
      if (steps[j].id === "contact" ? skipContact : false) e2 = "";
      if (e2) { S.step = steps[j].id; lastStep = null; save(); errorMsg = e2; render(); return; }
    }
    finalizeQuote();
    go("quote");
  }
  function back() {
    var steps = visibleSteps(), idx = 0;
    for (var i = 0; i < steps.length; i++) { if (steps[i].id === S.step) idx = i; }
    go(idx > 0 ? steps[idx - 1].id : "intro");
  }
  function onClick(ev) {
    var b = ev.target.closest("[data-act]");
    if (!b ? true : !shell.contains(b)) return;
    var act = b.getAttribute("data-act"), key = b.getAttribute("data-key");
    if (act === "set") {
      var raw = b.getAttribute("data-val"), val = NUMERIC[key] ? Number(raw) : (raw === "true" ? true : (raw === "false" ? false : raw));
      setPath(S, key, val);
      if (key === "surface") errorMsg = "";
      if (key === "groundCert" ? val === "no" : false) S.doubleLeg = false;
      errorMsg = errorMsg ? (S.step === "site" ? checkSite(S) : "") : "";
      save(); var sc = part("content").scrollTop; render(); part("content").scrollTop = sc;
      var again = shell.querySelector('[data-act="set"][data-key="' + key + '"][data-val="' + (window.CSS ? CSS.escape(raw) : raw) + '"]');
      if (again) again.focus({ preventScroll: true });
      return;
    }
    if (act === "inc") {
      var d = Number(b.getAttribute("data-d")), max = Number(b.getAttribute("data-max")), v = num(getPath(S, key)) + d;
      setPath(S, key, Math.max(0, Math.min(max, v)));
      if (key === "extraPanels" ? !S.extraPanelLen : false) S.extraPanelLen = defaultPanelLen(S.length);
      errorMsg = "";
      save(); var sc2 = part("content").scrollTop; render(); part("content").scrollTop = sc2;
      var same = shell.querySelector('[data-act="inc"][data-key="' + key + '"][data-d="' + d + '"]');
      if (same ? !same.disabled : false) same.focus({ preventScroll: true });
      return;
    }
    if (act === "preset") { S.sidewalls = Number(b.getAttribute("data-side")); S.endwalls = Number(b.getAttribute("data-end")); save(); var sc3 = part("content").scrollTop; render(); part("content").scrollTop = sc3; return; }
    if (act === "begin") { track("start"); go(STEPS[0].id); return; }
    if (act === "resume") { if (S.reachedQuote) { goQuote(false); return; } var steps = visibleSteps(), target = "contact"; for (var i = 0; i < steps.length - 1; i++) { if (steps[i].check(S)) { target = steps[i].id; break; } } go(target); return; }
    if (act === "next") { next(false); return; }
    if (act === "skip") { next(true); return; }
    if (act === "back") { back(); return; }
    if (act === "goto") { go(b.getAttribute("data-step")); return; }
    if (act === "toquote") { var cur = stepById(S.step), e0 = cur ? cur.check(S) : ""; if (e0) { errorMsg = e0; lastStep = null; render(); return; } goQuote(false); return; }
    if (act === "close") { close(); return; }
    if (act === "restart") {
      if (S.step !== "intro" ? !window.confirm("Start over? Your current answers will be cleared.") : false) return;
      S = freshState(); S.step = "intro"; save(); errorMsg = ""; render(); return;
    }
    if (act === "pdf") {
      var label0 = b.textContent; b.disabled = true; b.textContent = "Preparing PDF...";
      track("pdf", { quoteId: S.quoteId });
      loadJsPDF().then(function (J) { makePDF(J); }).catch(function () { printQuote(); }).then(function () { b.disabled = false; b.textContent = label0; });
      return;
    }
    if (act === "print") { printQuote(); return; }
    if (act === "email") { emailQuote(); return; }
  }
  function onInput(ev) {
    var el = ev.target, key = el.getAttribute ? el.getAttribute("data-key") : null;
    if (!key) return;
    var v = el.value;
    if (key === "zip") { v = v.replace(/\D/g, "").slice(0, 5); if (v !== el.value) el.value = v; }
    S[key] = v; save();
    if (key === "zip") return;
    if (S.step === "contact") return;
    refreshLive();
  }
  function onKey(ev) {
    if (!shell) return;
    if (ev.key === "Escape" ? isModal : false) { close(); return; }
    if (ev.key === "Enter" ? (ev.target.tagName === "INPUT" ? shell.contains(ev.target) : false) : false) { ev.preventDefault(); next(false); return; }
    if (ev.key === "Tab" ? isModal : false) {
      var f = Array.prototype.filter.call(shell.querySelectorAll("button:not([disabled]),a[href],input,textarea,[tabindex='0']"), function (x) { return x.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (ev.shiftKey ? document.activeElement === first : false) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey ? document.activeElement === last : false) { ev.preventDefault(); first.focus(); }
    }
  }
  function wire(el) { el.addEventListener("click", onClick); el.addEventListener("input", onInput); if (!isModal) el.addEventListener("keydown", onKey); }
  var inlineRoot = null, prevOverflow = "";
  function open() {
    if (inlineRoot) { inlineRoot.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (host ? host.parentNode : false) return;
    lastFocus = document.activeElement;
    isModal = true;
    host = document.createElement("div");
    host.className = "skq skq-overlay";
    applyColors(host);
    host.innerHTML = shellHTML();
    shell = host.querySelector(".skq-shell");
    wire(host);
    host.addEventListener("mousedown", function (e) { if (e.target === host) close(); });
    document.body.appendChild(host);
    prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    lastStep = null; firstRender = true;
    render();
    requestAnimationFrame(function () { host.classList.add("is-open"); var hd = shell.querySelector("#skq-step-h") || shell.querySelector("button"); if (hd) { try { hd.focus({ preventScroll: true }); } catch (e) { hd.focus(); } } });
    track("open");
  }
  function close() {
    if (!host ? true : !isModal) return;
    save();
    document.removeEventListener("keydown", onKey);
    var h = host; host = null; shell = null;
    h.classList.remove("is-open");
    document.documentElement.style.overflow = prevOverflow;
    setTimeout(function () { if (h.parentNode) h.parentNode.removeChild(h); }, 200);
    if (window.location.hash === HASH) { try { history.replaceState(null, "", window.location.pathname + window.location.search); } catch (e) { /* ignore */ } }
    if (lastFocus ? lastFocus.focus : false) lastFocus.focus();
    track("close", { step: S.step });
  }
  function mountEmbed(el) {
    if (el.getAttribute("data-skq-mounted")) return;
    el.setAttribute("data-skq-mounted", "1");
    el.classList.add("skq");
    applyColors(el);
    if (el.getAttribute("data-mode") === "inline") {
      if (inlineRoot) return;
      inlineRoot = el; isModal = false;
      el.classList.add("skq-inline");
      el.innerHTML = shellHTML();
      shell = el.querySelector(".skq-shell"); host = el;
      wire(el); render();
      return;
    }
    var style = el.getAttribute("data-style") || "card";
    var btn = '<button type="button" class="skq-btn skq-btn-p skq-btn-lg" data-skq-open="1">' + esc(CONFIG.launchButtonText) + ' <span aria-hidden="true">→</span></button>';
    if (style === "button") el.innerHTML = '<div class="skq-launch is-btn">' + btn + "</div>";
    else el.innerHTML = '<div class="skq-launch"><div><div class="skq-launch-k">Instant online pricing</div><div class="skq-launch-h">' + esc(CONFIG.launchHeadline) + '</div><div class="skq-launch-p">' + esc(CONFIG.launchText) + '</div><ul class="skq-launch-list"><li>About 2 minutes</li><li>Itemized price</li><li>Free PDF quote</li></ul>' + btn + '</div><div class="skq-launch-art" aria-hidden="true">' + buildingSVG({ width: 20, length: 30, height: 10, sidewalls: 0, endwalls: 0, garageDoors: {}, roofColor: "Barn Red", trimColor: "White" }) + "</div></div>";
  }
  function mountAll() { Array.prototype.forEach.call(document.querySelectorAll(".skq-embed"), mountEmbed); }
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest('[data-skq-open], a[href$="' + HASH + '"], .skq-open, .skq-open a') : null;
    if (!t) return;
    e.preventDefault(); e.stopPropagation();
    open();
  }, true);
  window.addEventListener("hashchange", function () { if (window.location.hash === HASH) open(); });
  window.SkylinerQuote = { open: open, close: close, mountAll: mountAll, price: priceQuote, config: CONFIG, prices: PRICES, _state: function () { return S; }, _setState: function (o) { S = sanitize(o); save(); if (shell) render(); } };
  function boot() { mountAll(); if (window.location.hash === HASH) open(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
