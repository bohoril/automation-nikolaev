import {expect, test} from "@playwright/test";
import {MainPage} from "../pages/main-page";
import {ModalsPage} from "../pages/modals-page";

test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.navigateToPage(mainPage.modalsButton);
});

test('shouldOpenSimpleModal', async ({page}) => {
    const modalsPage = new ModalsPage(page);

    await modalsPage.simpleModalButton.click();
    await expect(modalsPage.simpleModal).toBeVisible();

    await modalsPage.simpleModalCloseButton.click();
    await expect(modalsPage.simpleModal).not.toBeVisible();
});