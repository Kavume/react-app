import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should render the input with the correct placeholder', () => {
    const placeholder = 'Search for something';
    const { getByPlaceholderText } = render(
      <SearchInput
        type="text"
        name="search"
        placeholder={placeholder}
        onChange={jest.fn()}
        value=""
      />
    );
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
  });
});
