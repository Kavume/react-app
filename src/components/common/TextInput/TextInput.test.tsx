import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

const props = {
  label: 'Example lable',
  name: 'Example name',
  placeholder: 'Example placeholder',
  errormessageempty: '* This field is required',
  errormessagelength: '* This field must have at least 2 letters',
  errormessagenum: '* This field must contain only letters',
  errormessagecase: '* This field must start with a capital letter',
  onChange: jest.fn(),
};

describe('TextInput', () => {
  it('should render text input', () => {
    render(<TextInput {...props} />);
  });

  it('should render the label and input with the correct props', () => {
    const { getByLabelText, getByPlaceholderText } = render(<TextInput {...props} />);
    expect(getByLabelText(props.label)).toBeInTheDocument();
    expect(getByPlaceholderText(props.placeholder)).toBeInTheDocument();
  });

  it('should update the value of the input when user types in it', () => {
    const { getByPlaceholderText } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Example Input' } });
    expect(input.value).toBe('Example Input');
  });

  it('should display the error message when an error prop is passed', () => {
    const { container, getByText } = render(<TextInput {...props} error="Example error" />);
    const error = getByText('Example error');
    expect(error).toBeInTheDocument();
    expect(container.querySelector('.error')).toBeInTheDocument();
  });
});
