import React, { Component } from 'react';
import styles from './SuccessMessage.module.scss';
import Image from './../../../assets/icons/Group.svg';

class SuccessMessage extends Component {
  render() {
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={Image} alt="component image" />
        </div>
        <p className={styles.title}>Form was submitted successfully</p>
      </div>
    );
  }
}

export default SuccessMessage;
