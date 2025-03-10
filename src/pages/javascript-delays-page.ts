import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";

export class JavascriptDelaysPage extends BasePage {
    protected url = '/javascript-delays';
    public startButton: Locator;
    public delayText: Locator;

    constructor(page: Page) {
        super(page);
        this.startButton = this.page.locator('#start');
        this.delayText = this.page.locator('#delay');
    }
}