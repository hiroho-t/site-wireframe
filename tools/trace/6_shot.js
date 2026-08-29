const puppeteer = require('puppeteer-core');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
(async () => {
  const [t, out, w] = [process.argv[2], process.argv[3], +(process.argv[4] || 1440)];
  const url = t.startsWith('http') ? t : 'file://' + require('path').resolve(t);
  const b = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'shell', args: ['--hide-scrollbars', '--force-device-scale-factor=1'] });
  const p = await b.newPage();
  await p.setViewport({ width: w, height: 900 });
  await p.goto(url, { waitUntil: 'networkidle2', timeout: 120000 }).catch(()=>{});
  await new Promise(r => setTimeout(r, 2000));
  await p.evaluate(async () => { const s=window.innerHeight; for(let y=0;y<document.documentElement.scrollHeight;y+=s){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,120));} window.scrollTo(0,0); });
  await new Promise(r => setTimeout(r, 1500));
  await p.evaluate(() => document.head.insertAdjacentHTML('beforeend', '<style>*{animation-play-state:paused!important}</style>'));
  await p.screenshot({ path: out, fullPage: true });
  await b.close();
  console.log('saved', out);
})();
