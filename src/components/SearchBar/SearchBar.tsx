import React, { ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { SearchInput } from './SearchInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSearchData } from '../../store/slices/SearchBarSlice';
import { getFetchCards, getSearchFetchCards } from '../../store/slices/CardsHomePageSlice';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const searchData = useAppSelector((state) => state.search.value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchData = event.currentTarget.value;
    dispatch(getSearchData(searchData));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchData === '') {
        dispatch(getFetchCards());
      } else {
        dispatch(getSearchFetchCards(searchData));
      }
    }
  };

  return (
    <div className={styles.searchBarWrapper}>
      <SearchInput
        type={'search'}
        placeholder={'Search'}
        onChange={handleChange}
        value={searchData}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
