//<reference types="Cypress" />
describe("First test suite",()=>{
    beforeEach(() => {
        // Visit the webpage where your input field is
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      })
    
     
      it("text validation and take action using each function",()=>{
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



describe("Second test suite",()=>{
    beforeEach(() => {
        // Visit the webpage where your input field is
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      })

      it.only("test add to cart function,checkout and processed",()=>{
        cy.get(".search-keyword").type("ca")
        cy.wait(1000)
        cy.get(".products").find(".product").eq(0).contains("ADD TO CART").click()
        cy.get(".cart-icon").click()
        //check the length of cart
        cy.get('.cart-items').find('li.cart-item').should("be.visible").and('have.length', 2);
        cy.get(".action-block").contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        cy.get('.wrapperTwo > div').click()

 //check the url of current page
    cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/country');

    // Select Bangladesh from the dropdown
    cy.get('select').select('Bangladesh');

    // Assert that Bangladesh is selected
    cy.get('select').should('have.value', 'Bangladesh');

    cy.get("input[type='checkbox']").check()
    cy.contains("Proceed").click()
    
    cy.wait(1000)
    //check current page is the home page
    cy.url().should("eq",'https://rahulshettyacademy.com/seleniumPractise/#/')


      })
})