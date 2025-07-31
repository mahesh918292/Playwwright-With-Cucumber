import { Given, When, Then } from '@cucumber/cucumber';
import { Objects } from '../hooks/hooks.js';
import { setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(60 * 1000);
Given('I open the login page', async function () {
    await Objects.login_page.NavigateToBrowser('https://www.saucedemo.com/');
});

When('I enter username {string} and password {string}', async function (username, password) {
  console.log(username, password);
  await Objects.login_page.Fill_Login_Details(username, password);
});

Then('I should be on the inventory page', async function () {
  const url = await Objects.login_page.Products_Page_Validation();
});


When('I click the "Add to Cart" button', async function () {
  await Objects.checkout_page.addProductToCart();
});

Then('the product should appear in the cart', async function () {
  await Objects.checkout_page.openCart();
});

When('I proceed to checkout', async function () {
  await Objects.checkout_page.proceedToCheckout();
});

When('I enter my shipping details', async function () {
  await Objects.checkout_page.enterShippingDetails('Mahesh', 'Testville', '12345');
});

When('I confirm the order', async function () {
  await Objects.checkout_page.confirmOrder();
});

Then('the order should be placed successfully', async function () {
  await Objects.checkout_page.verifyOrderSuccess();
});
