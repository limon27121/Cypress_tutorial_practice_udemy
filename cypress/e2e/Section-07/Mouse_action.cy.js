///<reference types="Cypress" />


describe("test suite-01",()=>{
    it("test mouse action",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#mousehover').invoke('show');
        cy.contains('Top').click({force:true})
        cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/#top")
        cy.wait(2000)
        cy.contains("Reload").click({force:true})
        cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/")
    })
})