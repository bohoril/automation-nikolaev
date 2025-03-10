import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class MainPage extends BasePage {
    protected url = '/';
    public javascriptDelaysButton: Locator;
    public tablesButton: Locator;
    public modalsButton: Locator;

    constructor(page: Page) {
        super(page);
        this.javascriptDelaysButton = this.page.locator('a:has-text("JavaScript Delays")');
        this.tablesButton = this.page.locator('a:has-text("Tables")');
        this.modalsButton = this.page.locator('a:has-text("Modals")');
    }

    /**
     * Navigates to a specific page using the provided button locator.
     *
     * @param {Locator} buttonLocator - The locator for the button to click.
     * @returns {Promise<void>} A promise that resolves when the navigation is complete.
     */
    async navigateToPage(buttonLocator: Locator): Promise<void> {
        logger.info(`Navigating to ${await buttonLocator.textContent()} page`);
        await Promise.all([
            buttonLocator.click(),
            this.page.waitForLoadState()
        ]);
    }
}