///<reference types="Cypress" />


describe("test suite01",()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("click hide and show button and check the action",()=>{
     // Select an option from the dropdown
     
     cy.get('#displayed-text').should("be.visible");

     cy.get("#hide-textbox").click()
     cy.get('#displayed-text').should("not.be.visible");
     cy.get("#show-textbox").click()
     cy.get('#displayed-text').should("be.visible");



    })

})