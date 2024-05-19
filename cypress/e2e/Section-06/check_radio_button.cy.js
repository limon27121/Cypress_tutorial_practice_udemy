///<reference types="Cypress" />

describe("test-suite01",()=>{
 
    it("radio-button activity check",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#radio-btn-example").should("be.visible")
        cy.get("legend").contains("Radio Button Example")
        // cy.get(".radioButton").eq("01").check().should("have.value","radio2")
        cy.get("input[value='radio1']").check()
        cy.get("input[value='radio1']").should("be.checked")
        cy.get("input[value='radio1']").should("have.value","radio1")
    })
})