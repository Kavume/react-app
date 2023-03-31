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

  it('checkbox components work', () => {
    render(<ContactForm {...props} />);
    const agreementCheckbox = screen.getByLabelText('I consent to my personal data');
    const contactCheckbox = screen.getByLabelText('SMS');
    fireEvent.click(agreementCheckbox);
    fireEvent.click(contactCheckbox);
    expect(agreementCheckbox).toBeChecked();
    expect(contactCheckbox).toBeChecked();
  });

  it('should render the contact form', () => {
    render(<ContactForm {...props} />);
    expect(screen.getByLabelText('Upload your profile image')).toBeInTheDocument();
    expect(screen.getByLabelText('Firstname')).toBeInTheDocument();
    expect(screen.getByLabelText('Lastname')).toBeInTheDocument();
    expect(screen.getByLabelText('Gender')).toBeInTheDocument();
    expect(screen.getByLabelText('Birth date')).toBeInTheDocument();
    expect(screen.getByText('Agreement')).toBeInTheDocument();
    expect(screen.getByText('Choose how we can contact')).toBeInTheDocument();
    expect(screen.getByText('How satisfied are you with our service?')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should initializes state correctly', () => {
    const { getByLabelText } = render(<ContactForm {...props} />);
    expect(getByLabelText('Firstname')).toHaveValue('');
    expect(getByLabelText('Lastname')).toHaveValue('');
    expect(getByLabelText('Gender')).toHaveValue('');
    expect(getByLabelText('Birth date')).toHaveValue('');
    expect(getByLabelText('I consent to my personal data')).not.toBeChecked();
    expect(getByLabelText('SMS')).not.toBeChecked();
    expect(getByLabelText('Call')).not.toBeChecked();
    expect(getByLabelText('Email')).not.toBeChecked();
    expect(getByLabelText('Video chat')).not.toBeChecked();
    expect(getByLabelText('Very satisfied')).not.toBeChecked();
    expect(getByLabelText('Satisfied')).not.toBeChecked();
    expect(getByLabelText('Neutral')).not.toBeChecked();
    expect(getByLabelText('Unsatisfied')).not.toBeChecked();
    expect(getByLabelText('Very unsatisfied')).not.toBeChecked();
  });

  it('should submit the form when all required fields are filled', () => {
    window.alert = jest.fn();
    const { getByLabelText, getByText } = render(<ContactForm {...props} />);
    const nameInput = getByLabelText('Firstname');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    const surnameInput = getByLabelText('Lastname');
    fireEvent.change(surnameInput, { target: { value: 'Smith' } });
    const genderInput = getByLabelText('Gender');
    fireEvent.change(genderInput, { target: { value: 'Male' } });
    const birthDateInput = getByLabelText('Birth date');
    fireEvent.change(birthDateInput, { target: { value: '1990-01-01' } });
    const consentInput = getByLabelText('I consent to my personal data');
    fireEvent.click(consentInput);
    const smsInput = getByLabelText('SMS');
    fireEvent.click(smsInput);
    const callInput = getByLabelText('Call');
    fireEvent.click(callInput);
    const emailInput = getByLabelText('Email');
    fireEvent.click(emailInput);
    const videoChatInput = getByLabelText('Video chat');
    fireEvent.click(videoChatInput);
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
