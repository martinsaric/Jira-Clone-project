describe('Quick links', () => {

    it('Verify that the "Tetris" quick link is displayed ', () => {
        
        //Step1: Visit the Jira board
        cy.baseURL()

        cy.get('[class="btn btn-secondary mr-2"]')
        .contains('Tetris')
        .should('be.visible')
    })

    it('Verify that the "Tetris" quick link redirects to the correct page', () => {

        //Step1: Visit the Jira board
        cy.baseURL()

        //Step:2 Find a Tetris link
        cy.get('a[href="https://tetris.trungk18.com/"]')
        .invoke('attr', 'href')
        .then((tetrisURL) => {

            //Step3: Using origin to visit redirected Tetris page and verify that the URL is correct
            cy.origin(tetrisURL, () => {
                cy.visit('/')
                cy.url().should('eql', 'https://tetris.trungk18.com/')
            })
            
        })
        

    })
})