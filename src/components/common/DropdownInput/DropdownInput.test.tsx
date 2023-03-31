import React from 'react';
import { render, screen } from '@testing-library/react';
import DropdownInput from './DropdownInput';

const props = {
  label: 'Example label',
  placeholder: 'Example placeholder',
  options: [{ value: 'value 1' }, { value: 'value 2' }],
  onChange: () => console.log('Example'),
  name: 'Example name',
};

describe('DropdownInput', () => {
  it('should render dropdown input', () => {
    render(<DropdownInput {...props} />);
  });

  it('should render the correct label', () => {
    render(<DropdownInput {...props} />);
    expect(screen.getByLabelText('Example label')).toBeInTheDocument();
  });

  it('should render the correct number of options', () => {
    render(<DropdownInput {...props} />);
    const select = screen.getByLabelText('Example label') as HTMLSelectElement;
    expect(select.options.length).toBe(3);
  });

  it('should render the correct options', () => {
    render(<DropdownInput {...props} />);
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[1]).toHaveTextContent('value 1');
    expect(options[2]).toHaveTextContent('value 2');
  });

  it('should render the dropdown input with correct attributes', () => {
    render(<DropdownInput {...props} />);
    const select = screen.getByLabelText('Example label') as HTMLSelectElement;
    expect(select).toBeInTheDocument();
    expect(select.selectedOptions[0].value).toBe('');
    expect(select.name).toBe('Example name');
  });

  it('should display the error message when an error prop is passed', () => {
    const { container, getByText } = render(<DropdownInput {...props} error="Example error" />);
    const error = getByText('Example error');
    expect(error).toBeInTheDocument();
    expect(container.querySelector('.error')).toBeInTheDocument();
  });
});
