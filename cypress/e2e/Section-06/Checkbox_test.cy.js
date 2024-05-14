///<reference types="Cypress" />

describe("test suite 01",()=>{
  beforeEach(()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  })
  it("test the check-box for selecting one value",()=>{
    cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1")
  })
  
  it.only("test the check-box for selecting multiple value",()=>{
    cy.get('input[type="checkbox"]').check(['option2','option3'])
  })
})