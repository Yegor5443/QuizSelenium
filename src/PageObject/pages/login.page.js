const BasePage = require("./base.page");
const { By } = require('selenium-webdriver');

class LoginPage extends BasePage {
    async logIn(login, pass) {
        await driver.findElement(By.name('email')).sendKeys(login);
        await driver.findElement(By.name('password')).sendKeys(pass);
        await this.clickSubmitBtn();
    }
}

module.exports = LoginPage;