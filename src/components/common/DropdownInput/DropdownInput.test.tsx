import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropdownInput from './DropdownInput';
import { act } from 'react-dom/test-utils';

const props = {
  label: 'Example label',
  placeholder: 'Example placeholder',
  options: [{ value: 'value 1' }, { value: 'value 2' }],
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
    expect(select.name).toBe('Example label');
  });

  it('should render an error message when the user does not select an option', () => {
    render(<DropdownInput {...props} />);
    const select = screen.getByLabelText('Example label') as HTMLSelectElement;
    fireEvent.blur(select);
    const errorMessage = screen.getByText('* Please select one of the following options');
    expect(errorMessage).toBeInTheDocument();
  });

  it('should not render an error message when the user selects an option', () => {
    render(<DropdownInput {...props} />);
    const select = screen.getByLabelText('Example label') as HTMLSelectElement;
    select.focus();
    select.value = 'value 1';
    act(() => {
      select.blur();
    });
    const errorMessage = screen.queryByText('* Please select one of the following options');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
