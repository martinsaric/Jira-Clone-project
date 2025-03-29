describe('Show/hide tabs arrow', () => {

    it('When the user clicks on arrow, the tab should be shown/hidden', () => {
        
        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('[class="overlay"]').click()
    })
})