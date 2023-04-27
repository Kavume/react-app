import React, { forwardRef, useState } from 'react';
import styles from './FileUpload.module.scss';
import inputStyles from './../styles/Input.module.scss';

interface FileUploadProps {
  label: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>((props, ref) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
    props.onChange(event);
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
        <div className={`${inputStyles.input} ${props.error ? inputStyles.error : ''}`}>
          <label className={styles.label} htmlFor="file-input">
            {props.label}
          </label>
        </div>
        <input
          {...props}
          className={styles.file}
          type="file"
          accept="image/*"
          id="file-input"
          ref={ref}
          onChange={handleFileChange}
        />
      </div>
      {props.error && <p className={inputStyles.errorMessage}>{props.error}</p>}
    </div>
  );
});

export default FileUpload;
