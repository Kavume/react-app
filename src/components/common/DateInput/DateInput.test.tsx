import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DateInput from './DateInput';

const props = {
  label: 'Example label',
};

describe('DateInput', () => {
  it('should render date input', () => {
    render(<DateInput {...props} />);
  });

  it('should render the correct label', () => {
    render(<DateInput {...props} />);
    expect(screen.getByLabelText('Example label')).toBeInTheDocument();
  });

  it('should render the input element with correct attributes', () => {
    render(<DateInput {...props} />);
    const input = screen.getByLabelText('Example label');
    expect(input).toHaveAttribute('type', 'date');
    expect(input).toHaveAttribute('name', 'birth date');
    expect(input).not.toHaveAttribute('required');
  });

  it('should not render an error message when the input value is valid', () => {
    render(<DateInput {...props} />);
    const input = screen.getByLabelText('Example label');
    fireEvent.change(input, { target: { value: '2000-03-23' } });
    fireEvent.blur(input);
    const errorMessage = screen.queryByText('* Enter your birth date');
    expect(errorMessage).toBeNull();
  });

  it('should render an error message when the input value is empty', () => {
    render(<DateInput {...props} />);
    fireEvent.blur(screen.getByLabelText('Example label'));
    const errorMessage = screen.getByText('* Enter your birth date');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render an error message when the user is under 18 years old', () => {
    render(<DateInput {...props} />);
    const input = screen.getByLabelText('Example label');
    fireEvent.change(input, { target: { value: '2010-03-23' } });
    fireEvent.blur(input);
    const errorMessage = screen.getByText('* You must be 18 years or older');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should render an error message when the entered date is invalid', () => {
    render(<DateInput {...props} />);
    const input = screen.getByLabelText('Example label');
    fireEvent.change(input, { target: { value: '1910-03-31' } });
    fireEvent.blur(input);
    const errorMessage = screen.getByText('* Please enter the correct data');
    expect(errorMessage).toBeInTheDocument();
  });
});
