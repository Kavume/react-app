import React, { Component } from 'react';
import styles from './HomePage.module.scss';
import { SearchBar } from '../../components/SearchBar';
import { Card } from '../../components/Card';
import Example from '../../assets/images/example.jpeg';

const data = [
  {
    authorInfo: 'Will Shekspir',
    color: 'var(--gray)',
    description: 'Description ipsum lorem text ipsum lorem',
    fill: 'none',
    image: Example,
    likes: 0,
    title: 'Title',
  },
];
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
          {data.map((card) => (
            <Card
              key={card.title}
              authorInfo={card.authorInfo}
              color={card.color}
              description={card.description}
              fill={card.fill}
              image={card.image}
              likes={card.likes}
              title={card.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
