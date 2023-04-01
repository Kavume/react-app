import React, { ChangeEvent, useState } from 'react';
import styles from './SearchBar.module.scss';
import { SearchInput } from './SearchInput';

interface SearchBarProps {
  onChange?: (value: string) => void;
  onKeyDown?: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [searchData, setSearchData] = useState(() => localStorage.getItem('searchData') || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchData = event.currentTarget.value;
    setSearchData(searchData);
    localStorage.setItem('searchData', searchData);
    props.onChange && props.onChange(searchData);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onKeyDown && props.onKeyDown(event.currentTarget.value);
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
