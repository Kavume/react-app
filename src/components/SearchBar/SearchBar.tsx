import React, { Component, ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { SearchInput } from './SearchInput';

interface SearchBarProps {
  onChange: (value: string) => void;
}

interface SearchBarState {
  searchData: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    const searchData = localStorage.getItem('searchData') || '';
    this.state = {
      searchData,
    };
  }

  componentDidMount() {
    const searchData = localStorage.getItem('searchData') || '';
    if (searchData) {
      this.props.onChange(searchData);
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchData', this.state.searchData);
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchData = event.currentTarget.value;
    this.setState({ searchData });
    this.props.onChange(searchData);
  };

  render() {
    return (
      <div className={styles.searchBarWrapper}>
        <SearchInput
          type={'search'}
          placeholder={'Search'}
          onChange={this.handleChange}
          value={this.state.searchData}
        />
      </div>
    );
  }
}

export default SearchBar;
