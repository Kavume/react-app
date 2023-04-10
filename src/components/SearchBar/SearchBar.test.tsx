import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import * as reduxHooks from 'react-redux';
import * as actions from '../../store/slices/SearchBarSlice';
import * as actionsHome from '../../store/slices/CardsHomePageSlice';

jest.mock('react-redux');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('SearchBar', () => {
  it('should render SearchInput component with correct props', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    mockedSelector.mockReturnValue('');

    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');
    expect(searchInput).toHaveAttribute('placeholder', 'Search');
  });

  it('should dispatch actions', () => {
    const dispatch = jest.fn();
    const mockedActionCreator = jest.spyOn(actions, 'getSearchData');
    mockedDispatch.mockReturnValue(dispatch);

    render(<SearchBar />);

    fireEvent.change(screen.getByPlaceholderText('Search'), {
      target: { value: 'some search text' },
    });

    expect(mockedActionCreator).toHaveBeenCalledWith('some search text');
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should dispatch getSearchFetchCards action on Enter key press with non-empty search input', () => {
    const dispatch = jest.fn();
    const mockedGetSearchFetchCards = jest.spyOn(actionsHome, 'getSearchFetchCards');
    mockedDispatch.mockReturnValue(dispatch);
    mockedSelector.mockReturnValue('water');

    const { getByPlaceholderText } = render(<SearchBar />);

    const searchInput = getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'water' } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedGetSearchFetchCards).toHaveBeenCalledWith('water');
  });

  it('should dispatch getFetchCards action on Enter key press with empty search input', () => {
    const dispatch = jest.fn();
    const mockedGetFetchCards = jest.spyOn(actionsHome, 'getFetchCards');
    mockedDispatch.mockReturnValue(dispatch);
    mockedSelector.mockReturnValue('');

    const { getByPlaceholderText } = render(<SearchBar />);

    const searchInput = getByPlaceholderText('Search');
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockedGetFetchCards).toHaveBeenCalled();
  });
});
