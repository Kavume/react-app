import React from 'react';
import ContactForm from './ContactForm';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('ContactForm', () => {
  beforeEach(() => {
    mockedSelector.mockClear();
    mockedDispatch.mockClear();
  });

  it('should render contact form', () => {
    render(<ContactForm />);
  });

  it('should render form with all necessary fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Upload your profile image'));
    expect(screen.getByLabelText('Firstname'));
    expect(screen.getByLabelText('Lastname'));
    expect(screen.getByLabelText('Gender'));
    expect(screen.getByLabelText('Birth date'));
    expect(screen.getByTitle('Agreement'));
    expect(screen.getByText('Choose how we can contact'));
    expect(screen.getByText('How satisfied are you with our service?'));
  });

  it('should render isSubmit using useAppSelector', () => {
    mockedSelector.mockReturnValue(true);
    render(<ContactForm />);
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });

  it('should render !isSubmit using useAppSelector', async () => {
    mockedSelector.mockReturnValue(false);
    render(<ContactForm />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Firstname'), { target: { value: 'Will' } });
    fireEvent.change(screen.getByLabelText('Lastname'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'Male' } });
    fireEvent.change(screen.getByLabelText('Birth date'), { target: { value: '1990-01-01' } });
    fireEvent.click(screen.getByTitle('Agreement'));
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() => expect(mockedDispatch).toHaveBeenCalled());
  });

  it('should display an error', async () => {
    mockedSelector.mockReturnValue(false);
    render(<ContactForm />);
    const input = screen.getByLabelText('Lastname');
    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.click(screen.getByText('Submit'));
    await waitFor(() =>
      expect(screen.getByText('* This field must contain only letters')).toBeInTheDocument()
    );
  });
});
