import React from 'react';
import CheckboxInput from './CheckboxInput';
import { render, fireEvent } from '@testing-library/react';

const props = {
  checkboxes: [{ value: 'Example 1' }, { value: 'Example 2' }, { value: 'Example 3' }],
  title: 'Example title',
  name: 'Example name',
  onChange: jest.fn(),
};

describe('CheckboxInput', () => {
  it('should render checkboxes', () => {
    render(<CheckboxInput {...props} />);
  });

  it('should allow user to check checkboxes', () => {
    const { container } = render(<CheckboxInput {...props} />);
    const checkboxes = container.querySelectorAll<HTMLInputElement>('.checkbox');
    fireEvent.click(checkboxes[0]);
    expect(checkboxes[0].checked).toBe(true);
    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1].checked).toBe(true);
  });

  it('should render correct name attribute of checkboxes', () => {
    const { container } = render(<CheckboxInput {...props} />);
    const checkboxes = container.querySelectorAll<HTMLInputElement>('.checkbox');
    checkboxes.forEach((checkbox) => {
      expect(checkbox.name).toBe(props.name);
    });
  });

  it('should call the onChange callback when a checkbox is clicked', () => {
    const { container } = render(<CheckboxInput {...props} />);
    const checkboxes = container.querySelectorAll<HTMLInputElement>('.checkbox');
    fireEvent.click(checkboxes[0]);
    expect(props.onChange).toHaveBeenCalledTimes(1);
  });

  it('should display the error message when an error prop is passed', () => {
    const { container, getByText } = render(<CheckboxInput {...props} error="Example error" />);
    const error = getByText('Example error');
    expect(error).toBeInTheDocument();
    expect(container.querySelector('.error')).toBeInTheDocument();
  });
});
