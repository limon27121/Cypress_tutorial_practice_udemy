///<reference types="Cypress" />


describe("test suite-01",()=>{
    it("test switch_window",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(1000)
        cy.get('#openwindow').click()
        cy.window().then((win) => {
            cy.stub(win, "open").as("windowOpen");
          });
    
          // Wait for the window to open
          cy.get("@windowOpen").should("be.called");
        
          // Switch to the new window
          cy.window().then((win) => {
            const newWindow = win.open.args[0][0];
            cy.window().then((win) => {
              win.open(newWindow, "_self");
            });
          });
    })
})