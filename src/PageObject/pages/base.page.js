let webdriver = require('selenium-webdriver');
require('chromedriver');
let driver = new webdriver.Builder().forBrowser('chrome').build();
const {By, until} = require('selenium-webdriver');


class BasePage {
    submit = '[type="submit"]';
    constructor() {
        global.driver = driver
    }
    async goToURL(url) {
        await driver.get(url);
    }
    async clickSubmitBtn(){
        await driver.findElement(By.css(this.submit)).click();
    }
    //it's better to use mocha driver to describe before and after blocks.
    async quiteDriver() {
        await driver.quit();
    }
    async isTitleExist(title) {
        await driver.wait(until.titleIs(title), 1000);
    }
}

module.exports = BasePage