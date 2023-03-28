import React from 'react';
import styles from './SearchInput.module.scss';
import { SearchIcon } from '../SearchIcon';

interface SearchInputProps {
  type: string;
  name?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchInput = (props: SearchInputProps) => {
  return (
    <div className={styles.main}>
      <label className={styles.label} htmlFor={props.name}>
        {props.name}
      </label>
      <div className={styles.inputWrapper}>
        <SearchIcon fill={'none'} stroke={'var(--gray)'} className={styles.icon} />
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default SearchInput;
