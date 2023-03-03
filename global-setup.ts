// global-setup.ts
import { chromium, FullConfig, request } from '@playwright/test';
import LoginPage from './models/loginPage';

// Global setup example that authenticates once and reuses authentication state in tests via website
async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        httpCredentials: { username: process.env.HTTP_USERNAME!, password: process.env.HTTP_PASSWORD! }
    });
    await page.goto(process.env.BASE_URL!);
    const loginPage = new LoginPage(page);
    await loginPage.logIn(process.env.AUTH_USERNAME!, process.env.AUTH_PASSWORD!);
    await page.waitForLoadState('networkidle');
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
}

// // Global setup example that authenticates once and reuses authentication state in tests via API
// async function globalSetup(config: FullConfig) {
//     const requestContext = await request.newContext({
//         httpCredentials: { username: process.env.HTTP_USERNAME!, password: process.env.HTTP_PASSWORD! }
//     });
//     await requestContext.post('https://api.xyz', {
//         data: {
//             username: process.env.AUTH_USERNAME!,
//             password: process.env.AUTH_PASSWORD!
//         }
//     });

//     const response = await requestContext.get('https://api.xyz');

//     console.log('Response', await response.status());
//     // Save signed-in state to 'storageState.json'.
//     await requestContext.storageState({ path: storageState as string });
//     // await requestContext.storageState({ path: 'storageState.json' });
//     await requestContext.dispose();
// }

export default globalSetup;
