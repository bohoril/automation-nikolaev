import {Locator, Page} from "@playwright/test";
import {BasePage} from "./base-page";
import logger from "../utils/logger";

export class TablesPage extends BasePage {
    protected url = '/tables';
    public simpleTableHeading: Locator;
    public simpleTable: Locator;

    constructor(page: Page) {
        super(page);
        this.simpleTableHeading = this.page.locator('#simple-table-item-prices');
        this.simpleTable = this.simpleTableHeading.locator('~ figure > table');
    }

    /**
     * Validates that a product with the specified name exists in the table and logs its price.
     *
     * @param {string} productName - The name of the product to validate.
     * @returns {Promise<boolean>} A promise that resolves to true if the product exists, otherwise false.
     */
    async validateProductExists(productName: string): Promise<boolean> {
        logger.info(`Looking for product: ${productName}`);
        const rows = this.simpleTable.locator('tbody > tr');
        const rowCount = await rows.count();
        logger.info(`Found ${rowCount} rows in the table`);

        for (let i = 1; i < rowCount; i++) {
            const itemName = await rows.nth(i).locator('td').first().textContent();
            if (itemName?.trim() === productName) {
                const itemPrice = await rows.nth(i).locator('td').nth(1).textContent();
                logger.info(`Found product: ${productName} with price: ${itemPrice}`);
                return true;
            }
        }
        logger.info(`Product not found: ${productName}`);
        return false;
    }
}