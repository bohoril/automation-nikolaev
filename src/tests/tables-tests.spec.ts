import {expect, test} from "@playwright/test";
import {MainPage} from "../pages/main-page";
import {TablesPage} from "../pages/tables-page";

test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.navigateToPage(mainPage.tablesButton);
});

test('shouldHaveProductInTable', async ({page}) => {
    const tablesPage = new TablesPage(page);
    await tablesPage.simpleTable.scrollIntoViewIfNeeded();
    expect(await tablesPage.validateProductExists('Laptop')).toBeTruthy();
});