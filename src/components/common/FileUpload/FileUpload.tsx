import React, { useRef, useState } from 'react';
import styles from './FileUpload.module.scss';
import { Button } from '../Button';

interface FileUploadProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = (props: FileUploadProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
      props.onChange(event);
    }
  };

  return (
    <div className={styles.componentWrapper}>
      {imageUrl ? (
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageUrl} alt="profile image" />
        </div>
      ) : (
        <div className={styles.imageMock}></div>
      )}
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor="file-input">
          {props.label}
        </label>
        <input
          className={styles.file}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="file-input"
          ref={inputRef}
          name={props.name}
        />
        <Button text={'Upload'} isPrimary={false} onClick={() => inputRef.current?.click()} />
      </div>
    </div>
  );
};

export default FileUpload;
