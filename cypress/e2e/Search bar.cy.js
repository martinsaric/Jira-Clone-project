describe('Search bar', () => {

    it('Veriy that the search bar is shown', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="input-container"]')
        .should('be.visible')
    })
})