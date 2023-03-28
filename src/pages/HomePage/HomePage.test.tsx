import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { data } from '../../data';

describe('HomePage', () => {
  it('renders title and description for the search bar', () => {
    render(<HomePage />);
    expect(screen.getByText('Site Search')).toBeInTheDocument();
    expect(screen.getByText('What are we looking for today?')).toBeInTheDocument();
  });

  it('renders the search bar', () => {
    render(<HomePage />);
    const searchBar = screen.getByRole('searchbox');
    expect(searchBar).toBeInTheDocument();
  });

  it('renders a card for each item in the data array', () => {
    render(<HomePage />);
    const cardElements = screen.getAllByRole('heading');
    expect(cardElements).toHaveLength(data.length);

    data.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.description)).toBeInTheDocument();
      expect(screen.getByText(card.likes)).toBeInTheDocument();
      expect(screen.getByText(`by ${card.authorInfo}`)).toBeInTheDocument();
    });
  });
});
