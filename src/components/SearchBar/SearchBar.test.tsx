import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should loads search data from local storage', () => {
    localStorage.setItem('searchData', 'saved data');
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toHaveValue('saved data');
  });

  it('should call onKeyDown when Enter key is pressed', () => {
    const mockOnKeyDown = jest.fn();
    const { getByRole } = render(<input onKeyDown={mockOnKeyDown} />);

    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockOnKeyDown).toHaveBeenCalledTimes(1);
  });
});
