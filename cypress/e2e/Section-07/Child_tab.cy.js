///<reference types="Cypress" />


describe('test child windows', function () {
    // test case
    it('test child window with  remove target attribute', function (){
       // url launch
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/") //parent window
       // delete target attribute with invoke for link
       cy.get('#opentab')
       .invoke('removeAttr', 'target').click() //remove target element

    //    verify child window url
    //    cy.url()
    //    .should('include', "https://www.qaclickacademy.com/")

       cy.wait(5000)
       // shift to parent window
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });

    it.only('test child windows with target attribute', function (){
        // url launch
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") //parent window
        
        cy.get('#opentab').each((e)=>{
            let link=e.prop("href")
            cy.visit(link)
        })
 
        // verify child window url
        // cy.url()
        // .should('include', 'qaclickacademy')
 
        cy.wait(5000)
        // shift to parent window
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
     });
 });