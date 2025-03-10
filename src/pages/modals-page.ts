import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";

export class ModalsPage extends BasePage {
    protected url = '/modals';
    public simpleModalButton: Locator;
    public simpleModal: Locator;
    public simpleModalCloseButton: Locator;

    constructor(page: Page) {
        super(page);
        this.simpleModalButton = this.page.locator('#simpleModal');
        this.simpleModal = this.page.locator('[role="dialog"][aria-modal="true"]');
        this.simpleModalCloseButton = this.simpleModal.locator('button[aria-label="Close"]');
    }
}