const { webkit } = require('@playwright/test');

(async () => {
    const browser = await webkit.launch({ headless: false });
    const context = await browser.newContext({});
    console.log('WebKit version', browser.version());
    const page = await context.newPage();
    await page.goto('');
})();
