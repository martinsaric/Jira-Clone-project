describe('Jira board task filter', () => {
    it('Clicking "Only Me" filter shows only tasks assigned to the logged in user', () => {

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