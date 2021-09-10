describe("Integration Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Home page is loaded", () => {
    // homepage get started button
    cy.contains("Vamos");
  });

  it("Docs Pages Works: Default Page", () => {
    // homepage get started button clicked
    cy.contains("Vamos").click();

    // show default docs page
    cy.contains("Basics");
  });

  it("Docs Pages Works: Quick Start", () => {
    // homepage get started button clicked
    cy.contains("Vamos").click();

    // show default docs page
    cy.contains("Gerundio").click();

    cy.contains("Present Continuous");
  });
});
