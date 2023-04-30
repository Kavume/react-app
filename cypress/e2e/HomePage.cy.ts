/// <reference types="cypress" />

describe('Home page E2E', () => {
  it('should render all main elements in the page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[placeholder="Search"]').should('have.value', '');
    cy.get('[placeholder="Search"]').should('have.attr', 'placeholder').and('contain', 'Search');

    cy.contains(/Site Search/);
    cy.contains(/To begin searching, please press the enter key/);
    cy.get('[data-testid="home-card"]');
  });

  it('should save input value', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[placeholder="Search"]')
      .should('have.value', '')
      .type('Water')
      .should('have.value', 'Water');

    cy.contains('About Us').click();
    cy.contains('AboutUs');
    cy.get('[placeholder="Search"]').should('not.exist');
    cy.get('[data-testid="home-card"]').should('not.exist');

    cy.contains('Home page').click();
    cy.get('[placeholder="Search"]').should('have.value', 'Water');
  });

  it('should render modal', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('button:visible', 'Show more').first().click();
  });
});

export {};
