import React from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';
import { data } from '../../data';

const HomePage = () => {
  return (
    <div className={styles.main} data-testid={'home-page'}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Site Search</h2>
          <p className={styles.text}>What are we looking for today?</p>
        </div>
        <SearchBar onChange={() => ''} />
      </div>
      <div className={styles.cardsWrapper}>
        {data.map((card) => (
          <Card
            key={card.title}
            authorInfo={card.authorInfo}
            color={'var(--gray)'}
            fill={'none'}
            description={card.description}
            image={card.image}
            likes={card.likes}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
