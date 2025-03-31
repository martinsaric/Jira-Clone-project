describe('Jira board task filter', () => {
    it('When "only me" is selected, only task assigned to me should be displayed', () => {

        cy.baseURL()

        cy.xpath("//span[normalize-space()='Only My Issues']")
            .contains('Only My Issues')
            .click()


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