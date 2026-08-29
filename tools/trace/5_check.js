const puppeteer = require('puppeteer-core');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
(async () => {
  const t = process.argv[2];
  const url = 'file://' + require('path').resolve(t);
  const b = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new' });
  for (const w of [1440, 390]) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: 900 });
    await p.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(()=>{});
    await new Promise(r => setTimeout(r, 2000));
    const r = await p.evaluate(() => {
      const bg = getComputedStyle(document.body).backgroundColor;
      const imgs = [...document.querySelectorAll('img')];
      let ph = 0, invisiblePh = 0, sizes = [];
      for (const im of imgs) {
        const s = im.getAttribute('src') || '';
        if (!s.startsWith('data:image/svg+xml')) continue;
        ph++;
        const d = decodeURIComponent(s);
        const m = d.match(/fill="(#[0-9a-fA-F]{6})"/);
        const rect = im.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) invisiblePh++;
        if (m) sizes.push(m[1]);
      }
      const counts = {};
      sizes.forEach(c => counts[c] = (counts[c]||0)+1);
      const zero = [...document.querySelectorAll('*')].filter(e => {
        const s = getComputedStyle(e); return s.opacity === '0';
      }).length;
      const blur = [...document.querySelectorAll('*')].filter(e => /blur/.test(getComputedStyle(e).filter)).length;
      return { bodyBg: bg, placeholders: ph, tinyPlaceholders: invisiblePh, opacity0: zero, blurred: blur, topFills: Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,6) };
    });
    console.log(w + 'px', JSON.stringify(r));
    await p.close();
  }
  await b.close();
})();
