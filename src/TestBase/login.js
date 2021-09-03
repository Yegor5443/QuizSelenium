const LogInPage = require('../PageObject/pages/login.page')
const logInPage = new LogInPage;
(async function example() {
    await logInPage.goToURL('http://qa-55.w2.ae/login');
    await logInPage.logIn('max@power.com', '1234');
    await logInPage.isTitleExist('Melon');
    await logInPage.quiteDriver();
})();
