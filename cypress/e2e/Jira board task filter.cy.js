desctibe('Jira board task filter', () => {
    it('When "only me" is selected, only task assigned to me should be displayed', () => {

        cy.visit('https://jira.trungk18.com/project/board')

        cy.get('button[_ngcontent-uyo-c99]')
        .contains('Only me')
        .click()
    })
    })