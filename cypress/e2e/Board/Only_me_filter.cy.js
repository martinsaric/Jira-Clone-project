describe('Only me filter', () => {
    it('Clicking "Only Me" filter shows only tasks assigned to the logged in user', () => {

        //Step1: Visit the Jira board
        cy.baseURL()

        //Step2: Find and click on the "Only My Issues" filter
        cy.xpath("//span[normalize-space()='Only My Issues']")
            .contains('Only My Issues')
            .click()

        //Step3: Verify that only tasks assigned to the logged in user are displayed
        cy.get('[class="flex container mt-7"]')
        .find('[class="avatar-container shadow-outline-white -ml-1 ng-star-inserted"]')
        .each(($task) => {
            cy.wrap($task)
                    .should('have.css', 'background-image')
                    .and((BgImage) => {
                        expect(BgImage).to.include('trung-vo')
                    })

        });
    });
});