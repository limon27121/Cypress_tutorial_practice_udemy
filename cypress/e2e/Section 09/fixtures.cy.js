///<reference types="Cypress" />





describe("Test Hook", () => {
    let data; // Declare `data` outside the `before` hook for better scoping
  
    before(() => {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      cy.fixture("example.json").then((loadedData) => { // Use .then() for better chaining
        data = loadedData; // Assign loaded data to `data` variable
      });
    });
  
    it("First Test Suite", () => {
      cy.get(':nth-child(1) > .form-control').type(data.name);
      cy.get("#exampleInputPassword1").type(data.password);
      cy.get('#exampleCheck1').check();
      cy.get('#exampleFormControlSelect1').select("Male");
      cy.get(':nth-child(8) > .form-control').type(data.dateofbrith);
    });
  });