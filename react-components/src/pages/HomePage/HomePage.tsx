import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';

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
        <div className={styles.cardsWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default HomePage;
