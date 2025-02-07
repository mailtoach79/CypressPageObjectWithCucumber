
const loginElementLocators = require('../PageElements/LoginPageElements.json')
export class lognPageElements {

    username(usernameinput) {
        cy.get(loginElementLocators.LoginPageLocators.username_text).type(usernameinput);
        return;
    }

    password(passwordinput) {
        cy.get(loginElementLocators.LoginPageLocators.password_text).type(passwordinput);
        return;
    }

    LoginButton() {
        cy.get(loginElementLocators.LoginPageLocators.loginbtn_text).click();
        return;
    }

}