describe("Display list of products", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("is expected to see a header", () => {
      cy.get("[data-cy=header]").should("contain","RockPaperScissors")
      ;
    });
})

