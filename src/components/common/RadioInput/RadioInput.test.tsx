import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioInput from './RadioInput';

const props = {
  name: 'Example name',
  radioInputs: [
    { id: 'exampleId1', label: 'example label 1' },
    { id: 'exampleId2', label: 'example label 2' },
    { id: 'exampleId3', label: 'example label 3' },
  ],
  title: 'Example title',
};

describe('RadioInput', () => {
  it('should render radio input', () => {
    render(<RadioInput {...props} />);
  });

  it('should render correct radio inputs', () => {
    render(<RadioInput {...props} />);
    const radioInputs = [
      { id: 'exampleId1', label: 'example label 1' },
      { id: 'exampleId2', label: 'example label 2' },
      { id: 'exampleId3', label: 'example label 3' },
    ];
    radioInputs.forEach((item) => {
      const radioElement = screen.getByLabelText(item.label);
      expect(radioElement).toBeInTheDocument();
      expect(radioElement).toHaveAttribute('type', 'radio');
      expect(radioElement).toHaveAttribute('name', 'Example name');
      expect(radioElement).toHaveAttribute('value', item.label);
    });
  });

  it('should select radio input option', () => {
    render(<RadioInput {...props} />);
    const radio1 = screen.getByLabelText('example label 1');
    const radio2 = screen.getByLabelText('example label 2');
    const radio3 = screen.getByLabelText('example label 3');

    fireEvent.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
    expect(radio3).not.toBeChecked();

    fireEvent.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
    expect(radio3).not.toBeChecked();

    fireEvent.click(radio3);
    expect(radio1).not.toBeChecked();
    expect(radio2).not.toBeChecked();
    expect(radio3).toBeChecked();
  });
});
