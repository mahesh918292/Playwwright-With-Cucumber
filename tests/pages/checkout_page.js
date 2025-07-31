export default class CheckoutPage {
  constructor(page) {
    this.page = page;
  }
  async addProductToCart() {
        const Products=await this.page.locator('.inventory_item_name').all()
        for(let i=0; i<Products.length; i++){
                await Products[i].click()
                await this.page.click('#add-to-cart')
                await this.page.click('#back-to-products')
                await this.page.waitForTimeout(1000);
        }
       await this.page.waitForTimeout(1000);
  }
  async openCart() {
    await this.page.locator('.shopping_cart_link').click();
    await this.page.waitForTimeout(2000);
  }

  async proceedToCheckout() {
    await this.page.locator('#checkout').click();
    await this.page.waitForTimeout(2000);
  }
  async enterShippingDetails(firstName, lastName, zip) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
    await this.page.waitForTimeout(2000);
    await this.page.locator('#continue').click();
  }

  async confirmOrder() {
    await this.page.locator('#finish').click();
    await this.page.waitForTimeout(2000);
  }

  async verifyOrderSuccess() {
    await this.page.locator('#back-to-products').click();
    await this.page.waitForTimeout(2000);
  }
}
