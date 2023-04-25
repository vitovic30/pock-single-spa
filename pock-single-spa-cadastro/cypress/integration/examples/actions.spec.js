/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; })
    cy.visit('http://localhost:9000/dashboard/cadastro')
    localStorage.setItem('token', 'asdasdasdasd')
  })

  it('haa', () => {
    cy.get('#validationServer01').type('asdd')
  })
})