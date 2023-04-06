import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  it('renders input', () => {
    const onChangeMock = jest.fn();
    render(<SearchBar onChange={onChangeMock} />);

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();

    const inputValue = 'search term';
    userEvent.type(searchInput, inputValue);
    expect(searchInput).toHaveValue(inputValue);

    expect(onChangeMock).toHaveBeenCalledTimes(inputValue.length);
    expect(onChangeMock).toHaveBeenCalledWith(inputValue);
  });

  it('should loads search data from local storage', () => {
    localStorage.setItem('searchData', 'saved data');
    const onChangeMock = jest.fn();
    render(<SearchBar onChange={onChangeMock} />);

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toHaveValue('saved data');
  });

  it('should saves search data to local storage', () => {
    const onChangeMock = jest.fn();
    const inputValue = 'search term';
    render(<SearchBar onChange={onChangeMock} />);

    const searchInput = screen.getByPlaceholderText('Search');
    userEvent.type(searchInput, inputValue);

    expect(localStorage.getItem('searchData')).toBe(`saved data${inputValue}`);
  });

  it('should call onKeyDown when Enter key is pressed', () => {
    const mockOnKeyDown = jest.fn();
    const { getByRole } = render(<input onKeyDown={mockOnKeyDown} />);

    const input = getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(mockOnKeyDown).toHaveBeenCalledTimes(1);
  });

  it('should not call onKeyDown when a key other than Enter is pressed', () => {
    const mockOnKeyDown = jest.fn();
    render(<SearchBar onKeyDown={mockOnKeyDown} />);

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.keyDown(searchInput, { key: 'Tab' });

    expect(mockOnKeyDown).toHaveBeenCalledTimes(0);
  });
});
