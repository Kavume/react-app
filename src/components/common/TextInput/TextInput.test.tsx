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

  it('should show error message if input value contains a number', () => {
    const { getByPlaceholderText, getByTestId } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: 'Example3' } });
    fireEvent.blur(input);
    const errorMessage = getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(props.errormessagenum);
  });

  it('should show error message if input value has length less 2', () => {
    const { getByPlaceholderText, getByTestId } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.blur(input);
    const errorMessage = getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(props.errormessagelength);
  });

  it('should show error message if input value is empty', () => {
    const { getByPlaceholderText, getByTestId } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);
    const errorMessage = getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(props.errormessageempty);
  });

  it('should show error message if input value has lower case first letter', () => {
    const { getByPlaceholderText, getByTestId } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: 'example' } });
    fireEvent.blur(input);
    const errorMessage = getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe(props.errormessagecase);
  });

  it('should not show error message if input value is valid', () => {
    const { getByPlaceholderText, queryByText } = render(<TextInput {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    fireEvent.change(input, { target: { value: 'Example Input' } });
    fireEvent.blur(input);
    expect(
      queryByText(props.errormessagenum || props.errormessagelength || props.errormessageempty)
    ).toBeNull();
  });
});
