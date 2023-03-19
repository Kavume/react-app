import React, { Component } from 'react';
import styles from './Card.module.scss';
import Example from './../../assets/images/example.jpeg';
import { LikeIcon } from './LikeIcon';

class Card extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={Example} alt="card" />
        </div>
        <div className={styles.infoWrapper}>
          <div>
            <p className={styles.title}>Title</p>
            <p className={styles.description}>Description ipsum lorem text ipsum lorem</p>
          </div>
          <p className={styles.authorInfo}>by Name</p>
          <div className={styles.likesWrapper}>
            <LikeIcon className={styles.icon} fill={'none'} color={'var(--gray)'} />
            <p className={styles.likes}>1200</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
