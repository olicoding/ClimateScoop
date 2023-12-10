describe("Home Page", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("successfully loads and displays main layout components", () => {
    cy.visit("/");

    cy.get('[data-testid="header"]').should("be.visible");
    cy.get('[data-testid="footer"]').should("be.visible");
    cy.get('[data-testid="navbar"]').should("be.visible");
  });
});
