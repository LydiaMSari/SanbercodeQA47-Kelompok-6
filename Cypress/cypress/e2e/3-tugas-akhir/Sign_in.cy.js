// cypress/e2e/signin.cy.js
/// <reference types="cypress" />

import Navigation from '../../support/PageObject/Navigation';
import userData from '../../data/userData';

describe('User Registration Test Suite', () => {
    beforeEach(() => {
        Navigation.visitHomepage();
        cy.contains('Create an Account').click();
    });

    it('Verifikasi dapat membuat akun untuk masuk', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.validUser.firstName);
        cy.get('#lastname').type(userData.validUser.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.validUser.password);
        cy.get('#password-confirmation').type(userData.validUser.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('.message-success').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan invalid email', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser1.firstName);
        cy.get('#lastname').type(userData.invalidUser1.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser1.password);
        cy.get('#password-confirmation').type('differentpassword');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-confirmation-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password hanya huruf', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser2.firstName);
        cy.get('#lastname').type(userData.invalidUser2.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser2.password);
        cy.get('#password-confirmation').type('userData.invalidUser2.password');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-confirmation-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password hanya angka', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser3.firstName);
        cy.get('#lastname').type(userData.invalidUser3.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser3.password);
        cy.get('#password-confirmation').type(userData.invalidUser3.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan symbol', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser4.firstName);
        cy.get('#lastname').type(userData.invalidUser4.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser4.password);
        cy.get('#password-confirmation').type(userData.invalidUser4.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi huruf dan angka', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser5.firstName);
        cy.get('#lastname').type(userData.invalidUser5.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser5.password);
        cy.get('#password-confirmation').type(userData.invalidUser5.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi huruf dan symbol', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser6.firstName);
        cy.get('#lastname').type(userData.invalidUser6.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser6.password);
        cy.get('#password-confirmation').type(userData.invalidUser6.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi angka dan symbol', () => {
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
        cy.get('#firstname').type(userData.invalidUser7.firstName);
        cy.get('#lastname').type(userData.invalidUser7.lastName);
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type(userData.invalidUser7.password);
        cy.get('#password-confirmation').type(userData.invalidUser7.password);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('#password-error').should('be.visible');
    });

    it('Verifikasi tidak dapat membuat akun untuk masuk jika semua kolom kosong', () => {
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
        cy.get('.message-error > div').should('be.visible');

    });

    // Add more test cases for other scenarios related to user registration.
});
