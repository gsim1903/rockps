describe("Display list of products", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("is expected to see a header", () => {
      cy.get("[data-cy=header]").should("contain","Rock Paper Scissors")
      ;
    });

    it("is expected to prompt user for input", () => {
        cy.get("[data-cy=user_prompt]").should("contain","Enter your guess here")
        ;
      });
  
})

