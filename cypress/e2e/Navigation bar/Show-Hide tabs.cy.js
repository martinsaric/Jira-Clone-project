describe('Show/hide tabs arrow', () => {

    it('When the user clicks on arrow, the tab should be hidden', () => {
        
        //Step1: Visit the Jira board
        cy.visit('https://jira.trungk18.com/project/board')

        //Step2:  Verify that the side bar is shown
        cy.get('[class="sidebar"]')
        .should('have.css', 'width', '240px')
        .then((width) => {

            //Step3: If the sidebar is shown, click on the arrow to hide the sidebar
            if(width === '240px') {

                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '15px')
            
            // Step4: If the sidebar is hidden, click on the arrow to show the sidebar
            }else {

                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '240px')
            }
         })
    })

    it('When the user clicks on arrow, the tab should be shown', () => {
        
        //Step1: Visit the Jira board
        cy.visit('https://jira.trungk18.com/project/board')

        //Step2: Verify that the sidebar is shown and click on the arrow to hide it
        cy.get('[class="sidebar"]')
        .should('have.css', 'width', '240px')
        .click()

        //Step3: Verify that the sidebar is hidden and click on the arrow to show it
        cy.get('[class="sidebar"]')
        .then((width) => {

            if(width === '15px') {
                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '240px')

            //Step4: If the sidebar is hidden, click on the arrow to show it
            }else {
                cy.get('[class="overlay"]').click()
                cy.get('[class="sidebar"]').should('have.css', 'width', '15px')
            }
            
        })
    })
})