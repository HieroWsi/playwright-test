import { test, expect } from '@playwright/test';
import LoginPage from '../models/loginPage';

test.describe('Login page', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
    });

    test('Successfull login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.enterLogin(process.env.AUTH_USERNAME);
        await loginPage.enterPassword(process.env.AUTH_PASSWORD);
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL(process.env.BASE_URL + 'dashboard');
    });
});
