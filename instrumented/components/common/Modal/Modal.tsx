import React from 'react';
import styles from './Modal.module.scss';
import { CloseIcon } from '../CloseIcon';

interface ModalProps {
  onClick: () => void;
  title: string;
  description: string;
  authorInfo: string;
  likes: number;
  image: string;
  downloadLink: string;
  bio: string;
}

const Modal = (props: ModalProps) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.modalWrapper}>
        <CloseIcon fill={'none'} className={styles.icon} color={'var(--blue)'} {...props} />
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={props.image} alt="modal card image" />
        </div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.socialMediaTitle}>Instagram: @{props.bio}</p>
        <p>
          <span className={styles.infoSpan}>description: </span>
          {props.description}
        </p>
        <p>
          <span className={styles.infoSpan}>by </span>
          {props.authorInfo}
        </p>
        <p>
          <span className={styles.infoSpan}>Likes: </span>
          {props.likes}
        </p>
        <p className={styles.downloadLink}>
          <span className={styles.span}>Download link: </span>
          {props.downloadLink}
        </p>
      </div>
      <div className={styles.blackBackground} onClick={props.onClick}></div>
    </div>
  );
};

export default Modal;
