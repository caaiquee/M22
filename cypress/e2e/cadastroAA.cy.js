const { email, senha } = require('../fixtures/users.json')


describe('Checkout', () => {
    beforeEach(() =>{
        cy.setCookie('ebacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
        cy.visit('/')
    })
    it('Deve fazer um checkout utilizando o conceito de Page Objects', () => {
        cy.cadastro()
    });
});