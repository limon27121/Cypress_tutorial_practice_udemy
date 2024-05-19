///<reference types="Cypress" />


describe("alerts test suite",()=>{

    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it("normal alerts test with only ok button",()=>{
        cy.get("#alertbtn").click()
        
        //check the alert text
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.include('Hello , share this practice page and share your knowledge');
         })
    })

    it("alerts box with ok and cancel button",()=>{
      cy.get("#name").type("limon")
        cy.get("#confirmbtn").click()

         //if click the ok button 
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.include("Hello limon, Are you sure you want to confirm?");
            
         });

          cy.wait(2000)
          
          //if click the cancel button 
          cy.on("window:confirm", (s) => {

            return false;
         });
    })
})




describe('Prompt Alert Test', () => {
    it('displays text entered in prompt in a paragraph tag', () => {
      // Visit the page
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Stubbing the window.prompt method to return a fixed value
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Limon');
      });
  
      // Click the button to trigger the prompt
      cy.contains('button', 'Click for JS Prompt').click();
  
      // Verify that the text entered in the prompt is displayed in the paragraph tag
      cy.get('p#result').should('have.text', 'You entered: Limon');
    });
 
     
    it('displays "null" in paragraph tag if prompt is canceled', () => {
      // Visit the page
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
  
      // Stubbing the window.prompt method to return null
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns(null);
      });
  
      // Click the button to trigger the prompt
      cy.contains('button', 'Click for JS Prompt').click();
  
      // Verify that "null" is displayed in the paragraph tag
      cy.get('p#result').should('have.text', 'You entered: null');
    });
  });
  