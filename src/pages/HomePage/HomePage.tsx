import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';
import { Loading } from '../../components/common/Loading';

interface Card {
  id: string;
  alt_description: string;
  user: {
    username: string;
    first_name: string;
    last_name: string;
    instagram_username: string | null | undefined;
  };
  urls: {
    small: string;
  };
  likes: number;
  links: {
    download: string;
  };
}

const HomePage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchFetchedData = (searchData: string) => {
    setIsLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchData}&client_id=p5CxTsOwAVeWUyHi4DkvNtEtsfyUTRVzgEjZLOLJepI`
    )
      .then((res) => res.json())
      .then((data) => {
        const cards = data.results.map((card: Card) => ({
          id: card.id,
          alt_description: card.alt_description,
          user: {
            first_name: card.user.first_name,
            last_name: card.user.last_name,
            username: card.user.username,
            bio: card.user.instagram_username,
          },
          likes: card.likes,
          urls: {
            small: card.urls.small,
          },
          links: {
            download: card.links.download,
          },
        }));
        setIsLoading(false);
        setCards(cards);
      });
  };

  const getFetchUserData = async () => {
    setIsLoading(true);
    await fetch(
      'https://api.unsplash.com/photos/?client_id=p5CxTsOwAVeWUyHi4DkvNtEtsfyUTRVzgEjZLOLJepI'
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setCards(data);
      });
  };
  useEffect(() => {
    getFetchUserData();
  }, []);
  return (
    <div className={styles.main} data-testid={'home-page'}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Site Search</h2>
          <p className={styles.text}>To begin searching, please press the enter key</p>
        </div>
        <SearchBar
          onKeyDown={(searchData) => {
            searchFetchedData(searchData);
            if (searchData === '') getFetchUserData();
          }}
        />
      </div>
      <Loading isLoading={isLoading} />
      <div className={styles.cardsWrapper} data-testid="card-container">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              description={card.alt_description}
              title={`${card.user.first_name} ${card.user.last_name}`}
              authorInfo={card.user.username}
              bio={
                card.user.instagram_username === null || card.user.instagram_username === undefined
                  ? "We don't have any information yet"
                  : card.user.instagram_username
              }
              likes={card.likes}
              image={card.urls.small}
              fill={'none'}
              color={'var(--gray)'}
              downloadLink={card.links.download}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
