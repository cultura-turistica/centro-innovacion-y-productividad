const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:5173/fundamentos-fotografia', { waitUntil: 'domcontentloaded' });
    
    // Wait for the "Continuar" button and click it to go to Modulo 2
    await page.waitForSelector('button.btn-primary');
    
    const buttons = await page.$$('button.btn-primary');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text.includes('Continuar')) {
        await btn.click();
        break;
      }
    }
    
    await new Promise(r => setTimeout(r, 2000));

    // See what text is visible inside glass-card
    const bodyText = await page.evaluate(() => {
      const el = document.querySelector('.glass-card');
      return el ? el.innerText : 'NO GLASS CARD';
    });
    console.log('Modulo 2 Text:', bodyText);
    
  } catch (err) {
    console.error('Script error:', err);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
