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


Cypress.Commands.add('baseURL', () => {

    cy.visit('https://jira.trungk18.com/project/board')

})

Cypress.Commands.add('createIssueSideButton', () => {

    cy.get('[class="anticon text-xl text-white anticon-plus"]')
})

Cypress.Commands.add('createIssueButton', () => {

    cy.get('[class="btn btn-primary mr-2"]')
})

Cypress.Commands.add('ignoreResolvedButton', () => {

    cy.get('[class="ml-3"]')
        .contains('Ignore Resolved')

})