
/// <reference types='Cypress' />

import { lognPageElements } from "../../PageObjects/PageActions/LoginPageActions.cy";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPageElements = new lognPageElements();
describe('My Login Test', () => {
    Given('Visit the Orange HRM website', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    })

    When('User provide the username', function () {
        loginPageElements.username('Admin');
    })

    When('User provide the password', function () {
        loginPageElements.password('admin123');
    })

    Then('Click on the Login button to log in into the Orange HRM website', function () {
        loginPageElements.LoginButton();

    })
})
