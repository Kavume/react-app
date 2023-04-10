import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';
import { Loading } from '../../components/common/Loading';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getFetchCards } from '../../store/slices/CardsHomePageSlice';

const HomePage = () => {
  const cards = useAppSelector((state) => state.cardsHomePage.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFetchCards());
  }, [dispatch]);

  return (
    <div className={styles.main} data-testid={'home-page'}>
      <div className={styles.searchBarWrapper}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Site Search</h2>
          <p className={styles.text}>To begin searching, please press the enter key</p>
        </div>
        <SearchBar data-testid="search-bar" />
      </div>
      <Loading />
      <div className={styles.cardsWrapper} data-testid="card-container">
        {cards &&
          cards.map((card) => (
            <Card
              key={card.id}
              description={
                card.alt_description !== undefined ? card.alt_description : "don't have description"
              }
              title={`${card.user.first_name} ${card.user.last_name}`}
              authorInfo={card.user.username}
              bio={card.user.instagram_username ?? "We don't have any information yet"}
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
