const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  try {
    console.log('Navigating to course...');
    await page.goto('http://localhost:5173/fundamentos-fotografia', { waitUntil: 'networkidle2' });
    console.log('Navigated to course');
    
    // Wait a little bit for React
    await new Promise(r => setTimeout(r, 2000));
    
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log('HTML Snippet:', html.substring(0, 1000));
    
  } catch (err) {
    console.error('Script error:', err);
  } finally {
    await browser.close();
    process.exit(0);
  }
})();
