import React from 'react';
import styles from './Loading.module.scss';

interface LoadingProps {
  isLoading: boolean;
}

const Loading = (props: LoadingProps) => {
  return (
    <div className={styles.wrapper}>
      {props.isLoading ? (
        <p className={styles.load}>Progressing...</p>
      ) : (
        <p className={styles.load}>Successfully loaded</p>
      )}
    </div>
  );
};

export default Loading;
