describe('Clear all button', () => {
    it('Verify that the "Clear All" removes "Ignore Resolved" filter', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="ml-3"]')
        .contains('Ignore Resolved')
        .click()

        cy.get('[class="px-3 pb-4 pt-3 uppercase text-textMedium text-13 truncate"]')
        .should('contain.text', 'Done')
        cy.get('div[id="Done"]')
        .children()
        .should('not.exist')


        cy.get('[class="btn btn-secondary"]')
        .contains('Clear all')
        .click()

        cy.get('div[id="Done"]')
        .children()
        .should('exist')
    })

}) 