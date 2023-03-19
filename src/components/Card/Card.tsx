import React, { Component } from 'react';
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

interface CardState {
  imageLoaded: boolean;
}

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  componentDidMount() {
    const image = new Image();
    image.onload = () => {
      this.setState({ imageLoaded: true });
    };
    image.src = this.props.image;
  }

  componentDidUpdate(prevProps: CardProps) {
    if (prevProps.image !== this.props.image) {
      const image = new Image();
      image.onload = () => {
        this.setState({ imageLoaded: true });
      };
      image.src = this.props.image;
    }
  }

  render() {
    const { title, description, authorInfo, likes, fill, color, image } = this.props;
    const { imageLoaded } = this.state;
    return (
      <div className={styles.cardContainer}>
        <div className={styles.imageWrapper}>
          {imageLoaded ? (
            <img className={styles.image} src={image} alt="card image" />
          ) : (
            <div data-id={'jhhjs'} className={styles.placeholder} />
          )}
        </div>
        <div className={styles.infoWrapper}>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <p className={styles.authorInfo}>by {authorInfo}</p>
          <div className={styles.likesWrapper}>
            <LikeIcon className={styles.icon} fill={fill} color={color} />
            <p className={styles.likes}>{likes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
