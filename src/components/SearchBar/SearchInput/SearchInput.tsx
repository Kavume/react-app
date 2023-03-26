import React, { Component } from 'react';
import styles from './SearchInput.module.scss';
import { SearchIcon } from '../SearchIcon';

interface InputProps {
  type: string;
  name?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

class SearchInput extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        <label className={styles.label} htmlFor={this.props.name}>
          {this.props.name}
        </label>
        <div className={styles.inputWrapper}>
          <SearchIcon fill={'none'} stroke={'var(--gray)'} className={styles.icon} />
          <input
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            value={this.props.value}
            className={styles.input}
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
