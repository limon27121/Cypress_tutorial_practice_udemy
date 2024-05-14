//<reference types="Cypress" />
describe("visit the site",()=>{
    beforeEach(() => {
        // Visit the webpage where your input field is
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      })
    
      it("test only visible part of the section",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".products").find(".product").should("have.length",4)

      })
      it("check add to cart function",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
      })


      it.only("text validation and take action using each function",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".products").find(".product").each(($el)=>{
            let text=$el.find(".product-name").text()
            if(text.includes("Cashews")){
               cy.wrap($el).contains("ADD TO CART").click()
            }
        })
      })
})