///<reference types="Cypress" />

describe("test suite for webtables",()=>{
    beforeEach(()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })
    it("verify course and price", () => {
        cy.get('#product tbody tr').each(($row) => {
            // Find the course name in the second column
            const courseName = $row.find('td').eq(1).text().trim();
    
            // Check if the course name matches the target course
            if (courseName === "Master Selenium Automation in simple Python Language") {
                // Verify the course name
                expect(courseName).to.equal("Master Selenium Automation in simple Python Language");
    
                // Check the price in the third column
                const price = $row.find('td').eq(2).text().trim();
                expect(price).to.equal('25');
            }
        });
    });

    it('checks displayed total amount of web table fixed header section', () => {
      
    
        // Find the element containing the total amount
        cy.get('.totalAmount').should('be.visible');
    
        // Extract the text content containing the total amount
        cy.get('.totalAmount').invoke('text').then(($totalAmountText) => {
          // Remove unwanted characters (e.g., "Total Amount Collected: ")
          const actualTotalAmount = parseInt($totalAmountText.replace(/\D+/g, ''));
    
          // Expected total amount (replace 296 with your expected value if different)
          const expectedTotalAmount = 296;
    
          // Assert that the actual total amount matches the expected value
          expect(actualTotalAmount).to.equal(expectedTotalAmount);
        });
      });
    
      it('calculates and verifies total amount from table', () => {
       
    
        // Find all "Amount" column cells
        cy.get('table#product tbody tr td:nth-child(4)').then(($amountCells) => {
          // Convert each cell text to a number and sum them
          const totalAmount = $amountCells.toArray().reduce((sum, cell) => sum + parseInt(cell.innerText), 0);
    
          // Expected total amount (replace 296 with your expected value if different)
          const expectedTotalAmount = 296;
    
          // Assert that the calculated total amount matches the expected value
          expect(totalAmount).to.equal(expectedTotalAmount);
        });
      });
})



describe('Web Table Data Tests', () => {
  it('Should verify all td elements content in the first table', () => {
    // Visit the page that contains the tables
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // Array of expected table data for the first table
    const expectedDataFirstTable = [
      'Rahul Shetty',
      'Selenium Webdriver with Java Basics + Advanced + Interview Guide',
      '30',
      'Rahul Shetty',
      'Learn SQL in Practical + Database Testing from Scratch',
      '25',
      'Rahul Shetty',
      'Appium (Selenium) - Mobile Automation Testing from Scratch',
      '30',
      'Rahul Shetty',
      'WebSecurity Testing for Beginners-QA knowledge to next level',
      '20',
      'Rahul Shetty',
      'Learn JMETER from Scratch - (Performance + Load) Testing Tool',
      '25',
      'Rahul Shetty',
      'WebServices / REST API Testing with SoapUI',
      '35',
      'Rahul Shetty',
      'QA Expert Course :Software Testing + Bugzilla + SQL + Agile',
      '25',
      'Rahul Shetty',
      'Master Selenium Automation in simple Python Language',
      '25',
      'Rahul Shetty',
      'Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C',
      '20',
      'Rahul Shetty',
      'Write effective QA Resume that will turn to interview call',
      '0'
    ];

    // Get all td elements in the first table and verify their content
    cy.get('.left-align fieldset table#product tbody tr td').each(($td, index) => {
      // Get the text content of the td element, trim whitespace, and verify it
      cy.wrap($td).invoke('text').then((text) => {
        cy.log(`Index: ${index}, Text: ${text.trim()}`);
        // Verify the text content
        expect(text.trim()).to.equal(expectedDataFirstTable[index]);
      });
    });
  });

});

describe("second table test",()=>{
  it.only('Should verify all visible td elements content in the second table', () => {
    // Array of expected table data for the second table
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    const expectedDataSecondTable = [
      'Alex', 'Engineer', 'Chennai', '28',
      'Ben', 'Mechanic', 'Bengaluru', '23',
      'Dwayne', 'Manager', 'Kolkata', '48',
      'Ivory', 'Receptionist', 'Chennai', '18',
      'Jack', 'Engineer', 'Pune', '32',
      'Joe', 'Postman', 'Chennai', '46',
      'Raymond', 'Businessman', 'Mumbai', '37',
      'Ronaldo', 'Sportsman', 'Chennai', '31',
      'Smith', 'Cricketer', 'Delhi', '33'
    ];

    // Get all visible td elements in the second table and verify their content
    cy.get('.right-align fieldset .tableFixHead table#product tbody tr td:visible').each(($td, index) => {
      // Get the text content of the td element, trim whitespace, and verify it
      cy.wrap($td).invoke('text').then((text) => {
        cy.log(`Index: ${index}, Text: ${text.trim()}`);
        // Verify the text content
        expect(text.trim()).to.equal(expectedDataSecondTable[index]);
      });
    });
  });
});


