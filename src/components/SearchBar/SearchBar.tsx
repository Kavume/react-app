import React, { ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { SearchInput } from './SearchInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSearchData } from '../../store/slices/SearchBarSlice';

interface SearchBarProps {
  onChange?: (value: string) => void;
  onKeyDown?: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchData = event.currentTarget.value;
    dispatch(getSearchData(searchData));
    props.onChange && props.onChange(searchData);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onKeyDown && props.onKeyDown(event.currentTarget.value);
    }
  };

  const enteredValue = useAppSelector((state) => state.search.value);

  return (
    <div className={styles.searchBarWrapper}>
      <SearchInput
        type={'search'}
        placeholder={'Search'}
        onChange={handleChange}
        value={enteredValue}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBar;
