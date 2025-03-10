import {expect, test} from "@playwright/test";
import {JavascriptDelaysPage} from "../pages/javascript-delays-page";

test('shouldWaitForDelay', async ({page}) => {
    const javascriptDelaysPage = new JavascriptDelaysPage(page);
    await javascriptDelaysPage.navigate();

    await javascriptDelaysPage.clickStartButton();
    await expect(javascriptDelaysPage.delayText).toHaveValue('Liftoff!', {timeout: 12000});
});