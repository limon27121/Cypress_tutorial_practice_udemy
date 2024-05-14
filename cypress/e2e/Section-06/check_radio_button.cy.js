///<reference types="Cypress" />

describe("test-suite01",()=>{
 
    it("radio-button activity check",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#radio-btn-example").should("be.visible")
        cy.get(".radioButton").eq("01").check().should("have.value","radio2")
    })
})