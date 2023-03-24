import React from 'react';
import ContactForm from './ContactForm';
import { render, screen, fireEvent } from '@testing-library/react';

const props = {
  onSubmit: jest.fn(),
  onReset: jest.fn(),
};

describe('ContactForm', () => {
  it('should render contact form', () => {
    render(<ContactForm {...props} />);
  });

  it('should render the correct title', () => {
    const { getByText } = render(<ContactForm {...props} />);
    const title = getByText('Contact Form');
    expect(title).toBeInTheDocument();
  });

  it('should render all expected input fields', () => {
    render(<ContactForm {...props} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Surname')).toBeInTheDocument();
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
    expect(screen.getByLabelText('Birth date')).toBeInTheDocument();
    expect(screen.getByText('Agreement')).toBeInTheDocument();
    expect(screen.getByText('Choose how we can contact')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our service?')).toBeInTheDocument();
  });

  it('checkbox components work', () => {
    render(<ContactForm {...props} />);
    const agreementCheckbox = screen.getByLabelText('I consent to my personal data');
    const contactCheckbox = screen.getByLabelText('SMS');
    fireEvent.click(agreementCheckbox);
    fireEvent.click(contactCheckbox);
    expect(agreementCheckbox).toBeChecked();
    expect(contactCheckbox).toBeChecked();
  });
});
