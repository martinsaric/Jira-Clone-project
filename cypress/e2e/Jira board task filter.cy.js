describe('Jira board task filter', () => {
    it('When "only me" is selected, only task assigned to me should be displayed', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.xpath("//span[normalize-space()='Only My Issues']")
        .contains('Only My Issues')
        .click()
    })
})