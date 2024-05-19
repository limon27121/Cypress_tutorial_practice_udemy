///<reference types="Cypress" />


describe("test suite01",()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("static dropdown test",()=>{
     // Select an option from the dropdown
     
     cy.get('#dropdown-class-example').select("Option1").should("have.value", "option1");
    

    })


    it("dynamic dropdown testing",()=>{
        cy.get("#autocomplete").type("ban")
        cy.get(".ui-menu-item").each(($el)=>{
          if($el.text()==="Bangladesh")
           cy.wrap($el).click()
        })
        cy.get("#autocomplete").should("have.value","Bangladesh")
    })
})