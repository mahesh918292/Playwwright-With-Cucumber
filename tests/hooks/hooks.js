// hooks/hooks.js
import { Before, AfterAll, BeforeAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import TestSetup from '../../setup/Tests_setup.js';
let browser;
let browserContext;
let page;
export let Objects
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  browserContext = await browser.newContext();
  page = await browserContext.newPage();
  Objects = new TestSetup(page);
});

Before(async function () {
  await page.waitForTimeout(1500);
});

AfterAll(async function () {
  await browser.close();
});
