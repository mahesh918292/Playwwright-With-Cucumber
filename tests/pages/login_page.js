import {expect} from '@playwright/test';
export default class BasePage {

    constructor(page) {
        this.page = page;
    }

    async NavigateToBrowser(url) {
        await this.page.goto(url);
        await this.page.waitForTimeout(5000);
    }
    async Fill_Login_Details(username, password) {
        await this.page.fill("#user-name",username)
        await this.page.fill("#password",password)
        await this.page.click('#login-button')
        await this.page.waitForTimeout(3000);
    }
    async Products_Page_Validation()
    {
        const url=await this.page.url()
        await expect(url).toBe('https://www.saucedemo.com/inventory.html')
    }
}
