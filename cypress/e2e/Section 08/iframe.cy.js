import 'cypress-iframe'

//test code from tutorialstpoint
describe('Tutorialspoint Test', function () {
   // test case
   it('Test Case6', function (){
      // launch URL
      cy.visit("https://jqueryui.com/draggable/");
      // frame loading
      cy.frameLoaded('.demo-frame');
      //shifting focus
      cy.iframe().find("#draggable").then(function(t){
         const frmtxt = t.text()
         //assertion to verify text
         expect(frmtxt).to.contains('Drag me around');
         cy.log(frmtxt);
      })
   });
});


//udemy course test code is ready

describe("test suite",()=>{
    it.only("test",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(1000)
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find('.pricing-title.text-white.ls-1').should('have.length', 2);

    })
})