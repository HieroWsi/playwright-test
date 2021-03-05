//Testing page url
const testingPageUrl = 'http://google.com/';

//Initialization testing page
export const init = async () => {
    await page.goto(testingPageUrl, { waitUntil: 'networkidle' });
};
