describe('Show/hide tabs arrow', () => {

    it('When the user clicks on arrow, the tab should be shown/hidden', () => {
        
        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="sidebar-content"]')
        .invoke('css', 'width')
        .then((width) => {

            if(width === '240px') {

                cy.get('[class="overlay"]').click()

                cy.get('[class="sidebar"]')
                .should('have.css', 'width', '15px')

            }else {

                cy.get('[class="overlay"]').click()

                cy.get('[class="sidebar"]')
                .should('have.css', 'width', '240px')
            }
         })
    })
})