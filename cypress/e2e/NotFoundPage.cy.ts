/// <reference types="cypress" />

describe('Not found page E2E', () => {
  it('should render main parts of the not found page', () => {
    cy.visit('http://localhost:3000/s');

    cy.contains("Something's wrong here!");
    cy.contains(
      'This is a 404 error, which means you have clicked on a wrong link or entered an invalid URL'
    );
    cy.contains('Go back').click();
    cy.get('[placeholder="Search"]');
    cy.get('[data-testid="home-card"]');
  });
});

export {};
