describe('Create issue', () => {
  it('An issue "Bug" can be created successfully', () => {

    // Step:1 Visit the Jira board
    cy.baseURL()

    // Step:2 Click on the "Create issue" button
    cy.createIssueSideButton().click()

    // Step:3 Select the type (Bug)
    cy.get('[class="ant-select-selector ng-tns-c95-64"]').click()
    cy.get('[class="ant-select-dropdown ng-tns-c95-64 ant-select-dropdown-placement-bottomLeft ng-trigger ng-trigger-slideMotion ng-star-inserted"]')
    .should('be.visible')
    .contains('Bug')
    .click()

    // Step:4 Select the priority (High)
    cy.get('[class="ant-select-selector ng-tns-c95-65"]').click()
    cy.get('[class="cdk-overlay-pane"]')
    .contains('High')
    .click()

    // Step:5 Enter the bug title
    cy.get('[class="form-input ng-pristine ng-invalid ng-touched"]')
    .click()
    .type('Patient Unable to Enter Data in Form')

    // Step: 6 Enter the bug description
    cy.get('[class="ql-editor ql-blank"]')
    .click()
    .type("Background:{shift}{enter}Actual behavior:{shift}{enter}Expected behavior:{shift}{enter}Steps to reproduce:{shift}{enter}Priority:")

    //Step: 7 Select the assignee (Spider Man)
    cy.get('[class="ant-select-selector ng-tns-c95-67"]').click()
    cy.get('[class="cdk-overlay-pane"]')
    .should('be.visible')
    .contains('Spider Man')
    .click()

    //Step:8 Click on the "Create issue" button
    cy.createIssueButton()
    .should('have.css', 'background-color', 'rgb(0, 82, 204)')
    .click()
  })
})