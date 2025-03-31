describe('Ignore resolved', () => {

    it('When the user clicks on "Ignore resolved" button, the resolved tasks should be hidden', () => {

        //Step1: Visit the Jira board
        cy.baseURL()

        //Step2: Click on the "Ignore resolved" button
        cy.ignoreResolved()
        .click()

        //Step3: Verify that column name "Done" is displayed
        cy.get('[class="px-3 pb-4 pt-3 uppercase text-textMedium text-13 truncate"]')
        .should('contain.text', 'Done')

        //Step4: Verify that the column "Done" is empty
        cy.get('div[id="Done"]')
        .children()
        .should('not.exist')
    })
})