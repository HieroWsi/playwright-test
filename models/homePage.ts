import { Locator, Page } from '@playwright/test';

export default class HomePage {
    /**
     * @param {import('playwright').Page} page
     */

    readonly page: Page;
    readonly addNewDecisionButton: Locator;

    constructor(page) {
        this.page = page;
        this.addNewDecisionButton = page.locator('a[href="/add-decision"] > button');
    }

    async clickAddNewDecision() {
        await this.addNewDecisionButton.click();
    }
}
