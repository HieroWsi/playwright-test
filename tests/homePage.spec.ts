import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

import HomePage from '../models/homePage';

test.describe('Home page', async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
    });

    test('User can add fake data', async ({ page }) => {
        const home = new HomePage(page);
        const fakeDecisionName = faker.company.name(); 
    });
});
