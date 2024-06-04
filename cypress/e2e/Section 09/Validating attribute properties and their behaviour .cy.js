///<reference types="Cypress" />





describe("Test Hook", () => {
    let data; // Declare `data` outside the `before` hook for better scoping
  
    beforeEach(() => {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      cy.fixture("example.json").then((loadedData) => { // Use .then() for better chaining
        data = loadedData; // Assign loaded data to `data` variable
      });
    });
  
    it("First Test Suite", () => {
      cy.get(':nth-child(1) > .form-control').type(data.name);
    //   cy.get("#exampleInputPassword1").type(data.password);
    //   cy.get('#exampleCheck1').check();
    //   cy.get('#exampleFormControlSelect1').select("Male");
    //   cy.get(':nth-child(8) > .form-control').type(data.dateofbrith);
      cy.get(':nth-child(4) > .ng-untouched').should("have.value",data.name)
    });

    it('should have minlength attribute set to 2 with assertion', () => {
       
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');
        cy.get('input[id="inlineRadio3"]').should('be.disabled');

      });
  });