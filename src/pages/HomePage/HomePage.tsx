import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';

interface Card {
  id: string;
  alt_description: string;
  user: {
    username: string;
    first_name: string;
    last_name: string;
  };
  urls: {
    small: string;
  };
  likes: number;
}

const HomePage = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/?client_id=p5CxTsOwAVeWUyHi4DkvNtEtsfyUTRVzgEjZLOLJepI')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div className={styles.main} data-testid={'home-page'}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Site Search</h2>
          <p className={styles.text}>What are we looking for today?</p>
        </div>
        <SearchBar onChange={() => ''} />
      </div>
      <div className={styles.cardsWrapper} data-testid="card-container">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              description={card.alt_description}
              title={`${card.user.first_name} ${card.user.last_name}`}
              authorInfo={card.user.username}
              likes={card.likes}
              image={card.urls.small}
              fill={'none'}
              color={'var(--gray)'}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
