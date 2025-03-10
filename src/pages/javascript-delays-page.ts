import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class JavascriptDelaysPage extends BasePage {
    protected url = '/javascript-delays';
    public startButton: Locator;
    public delayText: Locator;

    constructor(page: Page) {
        super(page);
        this.startButton = this.page.locator('#start');
        this.delayText = this.page.locator('#delay');
    }

    /**
     * Clicks the start button.
     *
     * @returns {Promise<void>} A promise that resolves when the click action is complete.
     */
    async clickStartButton(): Promise<void> {
        logger.info('Clicking the start button');
        await this.startButton.click();
        logger.info('Start button clicked');
    }
}