import React from 'react';
import { render, screen } from '@testing-library/react';
import SuccessMessage from './SuccessMessage';

describe('SuccessMessage', () => {
  it('should render the success message', () => {
    render(<SuccessMessage />);
    expect(screen.getByText('Form was submitted successfully')).toBeInTheDocument();
  });

  it('should render the success message image', () => {
    render(<SuccessMessage />);
    expect(screen.getByAltText('component image')).toBeInTheDocument();
  });
});
