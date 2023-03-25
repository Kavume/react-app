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

  it('should render the form with all inputs and a submit button', () => {
    const { getByLabelText, getByText } = render(<ContactForm {...props} />);
    expect(getByLabelText('Upload your profile image')).toBeInTheDocument();
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Surname')).toBeInTheDocument();
    expect(getByLabelText('Gender')).toBeInTheDocument();
    expect(getByLabelText('Birth date')).toBeInTheDocument();
    expect(getByLabelText('I consent to my personal data')).toBeInTheDocument();
    expect(getByLabelText('SMS')).toBeInTheDocument();
    expect(getByLabelText('Call')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Video chat')).toBeInTheDocument();
    expect(getByLabelText('Very satisfied')).toBeInTheDocument();
    expect(getByLabelText('Satisfied')).toBeInTheDocument();
    expect(getByLabelText('Neutral')).toBeInTheDocument();
    expect(getByLabelText('Unsatisfied')).toBeInTheDocument();
    expect(getByLabelText('Very unsatisfied')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('should initializes state correctly', () => {
    const { getByLabelText } = render(<ContactForm {...props} />);
    expect(getByLabelText('Name')).toHaveValue('');
    expect(getByLabelText('Surname')).toHaveValue('');
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
    const nameInput = getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    const surnameInput = getByLabelText('Surname');
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

  it('should displays an alert message when any required field is missing', () => {
    const onSubmit = jest.fn();
    const { getByText } = render(<ContactForm {...props} />);
    const submitButton = getByText('Submit');
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    fireEvent.click(submitButton);
    expect(onSubmit).not.toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith(
      'Please fill in the following required fields:\nname,\nsurname,\ngender,\nbirth date,\nagreement,\ncontacts,\nrate,\nimage'
    );
  });
});
