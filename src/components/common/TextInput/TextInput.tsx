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

  displayErrorMessage() {
    const input = this.inputRef.current;
    if (!input) return '';

    const value = input.value.trim();
    if (!value) {
      return '* This field is required';
    } else if (value.length < 2) {
      return '* This field must have at least 2 letters';
    } else if (!/^[a-zA-Z ]+$/.test(value)) {
      return '* This field must contain only letters';
    } else {
      return '';
    }
  }

  state = {
    error: false,
  };

  validate = () => {
    const input = this.inputRef.current;
    if (!input) return;

    const value = input.value.trim();
    if (!value || value.length < 2 || !/^[a-zA-Z ]+$/.test(value)) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  render() {
    return (
      <div className={styles.inputWrapper}>
        <label
          className={`${styles.label} ${this.state.error ? styles.error : ''}`}
          htmlFor={this.props.label}
        >
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.label}
          className={`${styles.input} ${this.state.error ? styles.error : ''}`}
          placeholder={this.props.placeholder}
          ref={this.inputRef}
          onBlur={this.validate}
        />
        {this.state.error && (
          <span className={styles.errorMessage}>{this.displayErrorMessage()}</span>
        )}
      </div>
    );
  }
}

export default TextInput;
