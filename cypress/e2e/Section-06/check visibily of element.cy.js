///<reference types="Cypress" />


describe("test suite01",()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("click hide and show button and check the action",()=>{
     // Select an option from the dropdown
     
     cy.get(':nth-child(5) > .right-align > :nth-child(1) > legend').should("be.visible")

     cy.get('#displayed-text').should("be.visible");



     //test the placeholder text

     cy.get('#displayed-text')  
    .invoke('attr', 'placeholder') 
    .should('equal', 'Hide/Show Example');

    //visiblity functionality check

     cy.get("#hide-textbox").click()
     cy.get('#displayed-text').should("not.be.visible");
     cy.get("#show-textbox").click()
     cy.get('#displayed-text').should("be.visible");

    })

})