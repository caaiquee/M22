/// <reference types="cypress" />

const {homePage} = require("../support/pages/home.page")
const loginPage = require('../support/pages/login.page')
const profilePage = require('../support/pages/profile.page')
const { email, senha } = require('../fixtures/users.json')


describe('Checkout', () => {
    beforeEach(() =>{
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    })
    it('Deve fazer um checkout utilizando o conceito de Page Objects', () => {
        homePage.openMenu('Account')
        loginPage.login(email, senha)
        homePage.openMenu('Account')
        profilePage.logOut()
    });
});