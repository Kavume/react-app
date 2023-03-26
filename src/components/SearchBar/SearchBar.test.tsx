import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
