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
})