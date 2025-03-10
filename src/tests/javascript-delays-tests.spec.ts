import {expect, test} from "@playwright/test";
import {JavascriptDelaysPage} from "../pages/javascript-delays-page";
import {MainPage} from "../pages/main-page";

test.beforeEach(async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    await mainPage.navigateToPage(mainPage.javascriptDelaysButton);
});

test('shouldDisplayTextAfterDelay', async ({page}) => {
    const javascriptDelaysPage = new JavascriptDelaysPage(page);
    await javascriptDelaysPage.clickStartButton();
    await expect(javascriptDelaysPage.delayText).toHaveValue('Liftoff!', {timeout: 12000});
});