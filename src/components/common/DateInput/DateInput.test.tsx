import React from 'react';
import { render, screen } from '@testing-library/react';
import DateInput from './DateInput';

const props = {
  label: 'Example label',
  onChange: jest.fn(),
  name: 'Example name',
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
    expect(input).toHaveAttribute('name', 'Example name');
    expect(input).not.toHaveAttribute('required');
  });

  it('should display the error message when an error prop is passed', () => {
    const { container, getByText } = render(<DateInput {...props} error="Example error" />);
    const error = getByText('Example error');
    expect(error).toBeInTheDocument();
    expect(container.querySelector('.error')).toBeInTheDocument();
  });
});
