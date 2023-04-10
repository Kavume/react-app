import React from 'react';
import styles from './Loading.module.scss';
import { useAppSelector } from '../../../store/hooks';

const Loading = () => {
  const status = useAppSelector((state) => state.cardsHomePage.status);
  return (
    <div className={styles.wrapper} data-testid="wrapper">
      <p className={styles.load} data-testid="load">{`${status}`}</p>
    </div>
  );
};

export default Loading;
