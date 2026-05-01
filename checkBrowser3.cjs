const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5173/fundamentos-fotografia', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 2000));
    const text = await page.evaluate(() => document.body.innerText);
    console.log('--- BODY TEXT ---');
    console.log(text);
  } catch (err) {
    console.error('Script error:', err);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
