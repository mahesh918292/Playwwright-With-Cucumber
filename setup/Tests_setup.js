import BasePage from "../tests/pages/login_page.js";
import CheckoutPage from "../tests/pages/checkout_page.js";
export default class TestSetup {
    constructor(page) {
       this.login_page = new BasePage(page);
       this.checkout_page = new CheckoutPage(page);
    }
}
