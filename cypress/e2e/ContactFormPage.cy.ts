/// <reference types="cypress" />
import 'cypress-file-upload';

describe('Contact form page E2E', () => {
  it('should render the success message and cards after submit', () => {
    cy.visit('http://localhost:3000/contact-form');
    cy.get('h2').should('have.text', 'Contact Form');
    cy.get('form').should('have.prop', 'onsubmit');

    cy.get('[label="Upload your profile image"]').should('have.value', '');

    const fileName = 'test-image.png';
    const fileType = 'image/png';
    const filePath = `${fileName}`;

    cy.get('input[type="file"]').attachFile({
      filePath,
      fileName,
      mimeType: fileType,
    });

    cy.get('[placeholder="Enter your firstname"]')
      .should('have.value', '')
      .type('Helena')
      .should('have.value', 'Helena');

    cy.get('[placeholder="Enter your lastname"]')
      .should('have.value', '')
      .type('Ivanova')
      .should('have.value', 'Ivanova');

    cy.get('label').contains('Gender').siblings('select').find('option').should('have.length', 5);
    cy.get('label')
      .contains('Gender')
      .siblings('select')
      .select('Male')
      .should('have.value', 'Male');

    cy.get('label').contains('Birth date').next('input').type('1990-01-01');
    cy.contains('* This field is required').should('not.exist');
    cy.contains('* Please enter the correct data').should('not.exist');

    cy.get('input[type="checkbox"][value="I consent to my personal data"]')
      .check()
      .should('be.checked');

    cy.get('p')
      .contains('Choose how we can contact')
      .siblings('div')
      .find('input[type="checkbox"]')
      .check(['SMS', 'Email']);

    cy.get('input[type="radio"]').check('Very satisfied');

    cy.contains('Submit').click();
    cy.contains('* This field is required').should('not.exist');
    cy.contains('* This field must start with a capital letter').should('not.exist');
    cy.contains('* This field must contain only letters').should('not.exist');
    cy.contains('* This field must have at least 2 letters').should('not.exist');

    cy.get('[data-testid="success-message"]').should(
      'have.text',
      'Form was submitted successfully'
    );
    cy.get('[data-testid="success-message-image"]');

    cy.contains('Go back').click();
    cy.get('[data-testid="success-message"]').should('not.exist');
    cy.get('[data-testid="list"]').find('li').eq(0).should('contain', 'Name: Helena');
    cy.get('[data-testid="list"]').find('li').eq(6).should('contain', 'Rate: Very satisfied');
  });

  it('should render an error when one of the following fields is empty', () => {
    cy.visit('http://localhost:3000/contact-form');

    cy.get('[placeholder="Enter your firstname"]')
      .should('have.value', '')
      .type('44')
      .should('have.value', '44');
    cy.contains('Submit').click();
    cy.contains('* This field is required');
    cy.contains('* This field must contain only letters');
    cy.contains('* Please select one of the following options');
    cy.get('[data-testid="success-message"]').should('not.exist');
  });
});

export {};
