describe('Search bar', () => {

    it('Verify that the search bar is shown', () => {

        //Step1: Visit the Jira board
        cy.visit('https://jira.trungk18.com/project/board')

        //Step2: Verify that the search bar is shown
        cy.get('[class="input-container"]')
        .should('be.visible')
    })

    it('Verify that the search bar is working correctly', () => {

        //Step1: Visit th eJira board
        cy.visit('https://jira.trungk18.com/project/board')

        //Step2: Navigate to the search bar and search for existing task that contains the word "api"
        cy.get('[class="input-container"]')
        .click()
        .type('api')
        
        //Step3: Verify that the search bar is working as expected
        cy.get('[class="flex container mt-7"]')
        .should('be.visible') 
        .each(($task) => {
            cy.wrap($task).should('contain.text', 'API')
    })
    })
})