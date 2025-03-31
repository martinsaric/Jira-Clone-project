describe('Change project settings', () => {
    it('Verify that the category can be edited', () => {
  
      // Step:1 Visit the Jira board
      cy.baseURL()

      // Step:2 Click on the "Project Settings" button
      cy.get('[class="pt-px text-15"]')
      .contains('Project Settings')
      .click()

      //Step:3 Select the category and the desired category
      cy.get('select[formcontrolname="category"]')
      .select('Software')

      //Step:4 Click on the "Save" button
      cy.get('[class="btn btn-primary mr-2"]')
      .click()

      //Step:5 Verify that the category has been changed successfully
      cy.get('[class="ant-notification ant-notification-topRight"]')
      .should('be.visible')
      .and('contain', 'Changes have been saved successfully')
    })
})