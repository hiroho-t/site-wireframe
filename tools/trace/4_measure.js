const puppeteer = require('puppeteer-core');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const WIDTHS = [1440, 1024, 768, 390];
(async () => {
  const target = process.argv[2];
  const url = target.startsWith('http') ? target : 'file://' + require('path').resolve(target);
  const browser = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
  const out = {};
  for (const w of WIDTHS) {
    const page = await browser.newPage();
    await page.setViewport({ width: w, height: 900, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(() => {});
    await new Promise(r => setTimeout(r, 3000));
    // 遅延読み込みを起こすためにスクロール
    await page.evaluate(async () => {
      const step = window.innerHeight;
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    }).catch(() => {});
    await new Promise(r => setTimeout(r, 1500));
    const m = await page.evaluate(() => ({
      h: document.documentElement.scrollHeight,
      sw: document.documentElement.scrollWidth,
      invisible: [...document.querySelectorAll('*')].filter(e => {
        const s = getComputedStyle(e);
        return s.opacity === '0' || (s.filter !== 'none' && /blur/.test(s.filter));
      }).length
    }));
    out[w] = m;
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify(out, null, 2));
})();
