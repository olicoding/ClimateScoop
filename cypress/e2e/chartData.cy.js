describe("Chart Data Rendering", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("renders charts with actual data", () => {
    cy.visit("/");

    cy.wait(10000);

    cy.get('[data-testid="global-chart"]').should("be.visible");
    cy.get('[data-testid="ocean-chart"]').should("be.visible");
    cy.get('[data-testid="arctic-chart"]').should("be.visible");
    cy.get('[data-testid="energy-chart"]').should("be.visible");
  });
});
