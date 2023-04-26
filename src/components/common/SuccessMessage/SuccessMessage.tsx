import React, { Component } from 'react';
import styles from './SuccessMessage.module.scss';
import Image from './../../../assets/icons/Group.svg';

class SuccessMessage extends Component {
  render() {
    return (
      <div className={styles.componentWrapper} data-testid="success-message">
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={Image}
            alt="component image"
            data-testid="success-message-image"
          />
        </div>
        <p className={styles.title}>Form was submitted successfully</p>
      </div>
    );
  }
}

export default SuccessMessage;
