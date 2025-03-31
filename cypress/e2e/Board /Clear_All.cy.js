describe('Clear all button', () => {
    it('Verify that the "Clear All" removes "Ignore Resolved" filter', () => {

        //Step1: Open the Jira board
        cy.baseURL()

        //Step2: Click on the "Ignore Resolved" button
        cy.get('[class="ml-3"]')
        .contains('Ignore Resolved')
        .click()

        //Step3: Verify that the "Done" column doesn't show any tasks
        cy.get('[class="px-3 pb-4 pt-3 uppercase text-textMedium text-13 truncate"]')
        .should('contain.text', 'Done')
        cy.get('div[id="Done"]')
        .children()
        .should('not.exist')

        //Step4: Click on the "Clear all" button
        cy.get('[class="btn btn-secondary"]')
        .contains('Clear all')
        .click()

        //Step5: Verify that the "Ignore Resolved" filter is removed
        cy.get('div[id="Done"]')
        .children()
        .should('exist')
    })

}) 