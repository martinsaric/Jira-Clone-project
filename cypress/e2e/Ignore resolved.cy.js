describe('Ignore resolved', () => {

    it('When the user clicks on "Ignore resolved" button, the resolved tasks should be hidden', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="ml-3"]')
        .contains('Ignore Resolved')
        .click()

        cy.get('[class="px-3 pb-4 pt-3 uppercase text-textMedium text-13 truncate"]')
        .should('contain.text', 'Done')
        cy.get('div[id="Done"]')
        .children()
        .should('not.exist')
    })
})