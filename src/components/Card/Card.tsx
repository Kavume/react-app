import React, { useState, useEffect } from 'react';
import styles from './Card.module.scss';
import { LikeIcon } from './LikeIcon';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

interface CardProps {
  title: string;
  description: string;
  authorInfo: string;
  likes: number;
  image: string;
  fill: string;
  color: string;
  downloadLink: string;
  bio: string;
}

const Card = (props: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.cardContainer}>
      {isModalOpen ? (
        <Modal
          onClick={() => handleCloseModal()}
          authorInfo={props.authorInfo}
          bio={props.bio}
          description={props.description}
          image={props.image}
          likes={props.likes}
          title={props.title}
          downloadLink={props.downloadLink}
        />
      ) : (
        ''
      )}
      <div className={styles.imageWrapper}>
        {imageLoaded ? (
          <img className={styles.image} src={props.image} alt="card image" />
        ) : (
          <div data-testid="placeholder" className={styles.placeholder} />
        )}
      </div>
      <div className={styles.infoWrapper}>
        <div>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
        </div>
        <p className={styles.authorInfo}>by {props.authorInfo}</p>
        <div className={styles.likesWrapper}>
          <LikeIcon className={styles.icon} fill={props.fill} color={props.color} />
          <p className={styles.likes}>{props.likes}</p>
        </div>
        <Button text={'Show more'} isPrimary={false} onClick={() => handleOpenModal()} />
      </div>
    </div>
  );
};

export default Card;
