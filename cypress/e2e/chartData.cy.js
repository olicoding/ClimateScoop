describe("Chart Data Rendering", () => {
  it("renders charts with mock data", () => {
    cy.mockApiResponse(
      "https://global-warming.org/api/temperature-api",
      "apiMockData.json"
    );
    cy.mockApiResponse(
      "https://global-warming.org/api/ocean-warming-api",
      "apiMockData.json"
    );
    cy.mockApiResponse(
      "https://global-warming.org/api/arctic-api",
      "apiMockData.json"
    );
    cy.mockApiResponse("http://localhost:3000/api/data", "apiMockData.json");

    cy.visit("/");

    cy.get('[data-testid="global-chart"]').should("be.visible");
    cy.get('[data-testid="ocean-chart"]').should("be.visible");
    cy.get('[data-testid="arctic-chart"]').should("be.visible");
    cy.get('[data-testid="energy-chart"]').should("be.visible");
  });
});
