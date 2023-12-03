Cypress.Commands.add("mockApiResponse", (url, fixture) => {
  cy.intercept(url, { fixture });
});
