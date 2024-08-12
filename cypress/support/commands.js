// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const loginPage = require("./pages/login.page")
const {homePage} = require("./pages/home.page")
const cadastroPage = require("./pages/cadastro.page")

Cypress.Commands.add('cadastro', (email, password) => { 
    homePage.openMenu('Account')
    loginPage.loginMap('signUp')
    cadastroPage.cadastro('QA', 'Teste', '11999884466', 'qa2@teste.com', 'teste123', 'teste123')
    cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > [style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]').should('contain', 'EBAC Store')
})