const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }).catch(async e => { return await chromium.launch(); });
  for (const [f, out] of [['index.html','preview_mobile.png'],['prelaunch_landing.html','landing_mobile.png']]) {
    const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    await p.goto('file://' + process.cwd() + '/' + f);
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    console.log(f, 'scrollWidth', sw);
    await p.screenshot({ path: out, fullPage: false });
    if (f.startsWith('prelaunch')) { await p.fill('#em','test@example.com'); await p.check('#c1'); p.on('console', m=>console.log('console:', m.text())); await p.click('button'); await p.waitForTimeout(300); console.log('msg:', await p.textContent('#msg')); }
  }
  await b.close();
})();
