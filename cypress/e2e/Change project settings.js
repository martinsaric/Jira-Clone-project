describe('Change project settings', () => {
    it('Verify that the category can be edited', () => {
  
      // Step:1 Visit the Jira board
      cy.visit('https://jira.trungk18.com/project/board')

      cy.get('[class="pt-px text-15"]')
      .contains('Project Settings')
      .click()
    })
})