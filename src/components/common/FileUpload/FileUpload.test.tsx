import React from 'react';
import { render, screen } from '@testing-library/react';
import FileUpload from './FileUpload';

const props = {
  label: 'Choose an image',
  name: 'profileImage',
  onChange: jest.fn(),
};

describe('FileUpload', () => {
  it('should render file upload', () => {
    render(<FileUpload {...props} />);
  });

  it('should render the component with given props', () => {
    render(<FileUpload {...props} />);
    expect(screen.getByLabelText('Choose an image')).toBeInTheDocument();
  });

  it('should display an error message when an error prop is passed', () => {
    const { getByText } = render(<FileUpload {...props} error="require" />);
    const errorMessage = getByText('require');
    expect(errorMessage).toBeInTheDocument();
  });
});
