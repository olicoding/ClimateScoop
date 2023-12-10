describe("Charts Rendering and Interactivity", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it("renders charts with actual data and displays tooltip on chart interaction", () => {
    cy.visit("/");

    cy.wait(10000);

    cy.get('[data-testid="global-chart"]')
      .should("be.visible")
      .and("contain", "1.5");
    cy.get('[data-testid="global-chart"]').click("center");
    cy.get('[data-testid="global-chart-tooltip"]').should("be.visible");

    cy.get('[data-testid="ocean-chart"]')
      .should("be.visible")
      .and("contain", "0.6");
    cy.get('[data-testid="ocean-chart"]').click("center");
    cy.get('[data-testid="ocean-chart-tooltip"]').should("be.visible");

    cy.get('[data-testid="arctic-chart"]')
      .should("be.visible")
      .and("contain", "2");
    cy.get('[data-testid="arctic-chart"]').click("center");
    cy.get('[data-testid="arctic-chart-tooltip"]').should("be.visible");

    cy.get('[data-testid="energy-chart"]').should("be.visible");
  });
});
