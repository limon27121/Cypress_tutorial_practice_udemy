
///<reference types="Cypress" />
describe("visit the site",()=>{
    beforeEach(() => {
        // Visit the webpage where your input field is
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      })
    it("css locators",()=>{
        cy.get(".brand.greenLogo").contains("GREEN")
        cy.get(".redLogo").contains("KART")
    })

    it('Checks if the placeholder text is correct', () => {
        // Check if the placeholder text is correct
        cy.get('.search-keyword')  // Find the input field by its class name
          .invoke('attr', 'placeholder') // Get the placeholder text
          .should('equal', 'Search for Vegetables and Fruits'); // Make sure it's what we expect
      });

      it("check length after write in search-box",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".product").should("have.length",5)
      })

      it.only("test only visible part of the section",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)

        //handle visible and invisible product test

        // cy.get(".product:visible").should("have.length",4)

        //parent-child relationship chaining
         cy.get(".products").find(".product").should("have.length",4)

      })

  //action on single products
      it.only("check add to cart function",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
      })
})