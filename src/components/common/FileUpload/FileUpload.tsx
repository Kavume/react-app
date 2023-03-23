import React, { Component, createRef } from 'react';
import styles from './FileUpload.module.scss';
import { Button } from '../Button';

interface FileUploadProps {
  label: string;
}

class FileUpload extends Component<FileUploadProps> {
  constructor(props: FileUploadProps) {
    super(props);
  }

  state = {
    imageUrl: null,
  };

  fileInputRef = createRef<HTMLInputElement>();

  onFileChange = () => {
    const file = this.fileInputRef.current?.files && this.fileInputRef.current?.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.setState({ imageUrl });
    }
  };

  render() {
    return (
      <div className={styles.componentWrapper}>
        {this.state.imageUrl ? (
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={this.state.imageUrl} alt="profile image" />
          </div>
        ) : (
          <div className={styles.imageMock}></div>
        )}
        <div className={styles.inputWrapper}>
          <label className={styles.label} htmlFor="file-input">
            {this.props.label}
          </label>
          <input
            className={styles.file}
            type="file"
            accept="image/*"
            onChange={this.onFileChange}
            id="file-input"
            ref={this.fileInputRef}
          />
          <Button
            text={'Upload'}
            isPrimary={false}
            onClick={() => this.fileInputRef.current?.click()}
          />
        </div>
      </div>
    );
  }
}

export default FileUpload;
