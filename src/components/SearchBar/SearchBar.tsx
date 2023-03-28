import React, { ChangeEvent, useState, useEffect } from 'react';
import styles from './SearchBar.module.scss';
import { SearchInput } from './SearchInput';

interface SearchBarProps {
  onChange: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [searchData, setSearchData] = useState(() => localStorage.getItem('searchData') || '');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchData = event.currentTarget.value;
    setSearchData(searchData);
    localStorage.setItem('searchData', searchData);
    props.onChange(searchData);
  };

  useEffect(() => {
    if (searchData) {
      props.onChange(searchData);
    }
  }, [searchData, props]);

  return (
    <div className={styles.searchBarWrapper}>
      <SearchInput
        type={'search'}
        placeholder={'Search'}
        onChange={handleChange}
        value={searchData}
      />
    </div>
  );
};

export default SearchBar;
