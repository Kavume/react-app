import React, { Component, RefObject } from 'react';
import styles from './TextInput.module.scss';

interface TextInputProps {
  label: string;
  placeholder: string;
}

class TextInput extends Component<TextInputProps> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: TextInputProps) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  render() {
    return (
      <div className={styles.inputWrapper}>
        <label className={styles.label} htmlFor={this.props.label}>
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.label}
          className={styles.input}
          placeholder={this.props.placeholder}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default TextInput;
