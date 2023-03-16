import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.searchBarWrapper}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Site Search</h2>
            <p className={styles.text}>What are we looking for today?</p>
          </div>
          <SearchBar onChange={() => ''} />
        </div>
      </div>
    );
  }
}

export default HomePage;
