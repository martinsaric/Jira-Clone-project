describe('Show/hide tabs arrow', () => {

    it('When the user clicks on arrow, the tab should be hidden', () => {
        
        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="sidebar"]')
        .should('have.css', 'width', '240px')
        .then((width) => {

            if(width === '240px') {

                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '15px')

            }else {

                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '240px')
            }
         })
    })

    it('When the user clicks on arrow, the tab should be shown', () => {
        
        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="sidebar"]')
        .should('have.css', 'width', '240px')
        .click()

        cy.get('[class="sidebar"]')
        .then((width) => {

            if(width === '15px') {
                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '240px')
            }else {
                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '15px')
            }
            
        })
    })
})