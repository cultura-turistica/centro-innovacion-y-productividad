const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const filePath = path.resolve('public/assets/certificados/diploma.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
        await page.pdf({
            path: 'public/assets/certificados/diploma-template.pdf',
            width: '2452px',
            height: '1749px',
            printBackground: true
        });
        await browser.close();
        console.log('Template generated successfully');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
