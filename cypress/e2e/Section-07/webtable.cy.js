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

    it('checks displayed total amount', () => {
        // Replace with your actual URL
    
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
        // Replace with your actual URL
    
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