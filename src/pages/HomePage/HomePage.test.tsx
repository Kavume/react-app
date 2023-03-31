import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('should renders title and description for the search bar', () => {
    render(<HomePage />);
    expect(screen.getByText('Site Search')).toBeInTheDocument();
    expect(screen.getByText('What are we looking for today?')).toBeInTheDocument();
  });

  it('should renders the search bar', () => {
    render(<HomePage />);
    const searchBar = screen.getByRole('searchbox');
    expect(searchBar).toBeInTheDocument();
  });

  it('should renders cards', () => {
    render(<HomePage />);
    const cardContainer = screen.getByTestId('card-container');
    expect(cardContainer).toBeInTheDocument();
  });
});
