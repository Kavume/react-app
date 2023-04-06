import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('renders the about us page', () => {
    render(<AboutUs />);
    expect(screen.getByText('AboutUs')).toBeInTheDocument();
  });
});
