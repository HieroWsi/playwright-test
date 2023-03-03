import { Locator, Page } from '@playwright/test';

export default class LoginPage {
    /**
     * @param {import('playwright').Page} page
     */

    readonly page: Page;
    readonly logiInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly hereLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logiInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[aria-label="login"]');
        this.hereLink = page.locator('a:contains("here")');
    }

    // Fill user login
    async enterLogin(login) {
        await this.logiInput.fill(login);
    }

    // Fill user password
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    // Click on <LOG IN> button
    async clickLoginButton() {
        await this.loginButton.click();
    }

    async logIn(login: string, password: string) {
        await this.enterLogin(login);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}
