describe('Search bar', () => {

    it('Verify that the search bar is shown', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="input-container"]')
        .should('be.visible')
    })

    it('Verify that the search bar is working correctly', () => {

        cy.get('[class="input-container"]')
        .click()
        .type('api')
        
        cy.get('[class="flex container mt-7"]')
        .should('be.visible') 
        .each(($task) => {
            cy.wrap($task).should('contain.text', 'API')
    })
    })
})