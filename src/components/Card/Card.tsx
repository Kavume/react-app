import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import { LikeIcon } from './LikeIcon';

interface CardProps {
  title: string;
  description: string;
  authorInfo: string;
  likes: number;
  image: string;
  fill: string;
  color: string;
}

const Card = (props: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };
    image.src = props.image;
  }, [props.image]);

  useEffect(() => {
    if (imageLoaded && props.image !== '') {
      const image = new Image();
      image.onload = () => {
        setImageLoaded(true);
      };
      image.src = props.image;
    }
  }, [props.image, imageLoaded]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        {imageLoaded ? (
          <img className={styles.image} src={props.image} alt="card image" />
        ) : (
          <div data-testid="placeholder" className={styles.placeholder} />
        )}
      </div>
      <div className={styles.infoWrapper}>
        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.description}>{props.description}</p>
        </div>
        <p className={styles.authorInfo}>by {props.authorInfo}</p>
        <div className={styles.likesWrapper}>
          <LikeIcon className={styles.icon} fill={props.fill} color={props.color} />
          <p className={styles.likes}>{props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
