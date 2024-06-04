///<reference types="Cypress" />



describe("test hook",()=>{
    before(()=>{
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
    })

    it("first test suite",()=>{
       
        cy.get(':nth-child(1) > .form-control').type("limon")
        cy.get(':nth-child(2) > .form-control').type("hunter27121")
        cy.get('#exampleCheck1').check()
        cy.get('#exampleFormControlSelect1').select("Male")
        cy.get(':nth-child(8) > .form-control').type("1998-11-22")

    })
})



// before − It is executed, once the prior execution of any tests within a describe block is carried out.

// after − It is executed, once the post execution of all the tests within a describe block is carried out.

// beforeEach − It is executed prior to the execution of an individual, it blocks within a describe block.

// afterEach − It is executed post execution of the individual, it blocks within a describe block.