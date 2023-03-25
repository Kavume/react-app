import React, { Component, RefObject } from 'react';
import inputStyles from './../styles/Input.module.scss';

interface TextInputProps {
  label: string;
  placeholder: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
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
    } else if (!/^[A-Z]/.test(value)) {
      return '* This field must start with a capital letter';
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
    if (!value || value.length < 2 || !/^[a-zA-Z ]+$/.test(value) || !/^[A-Z]/.test(value)) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  render() {
    return (
      <div className={inputStyles.inputWrapper}>
        <label
          className={`${inputStyles.label} ${this.state.error ? inputStyles.error : ''}`}
          htmlFor={this.props.label}
        >
          {this.props.label}
        </label>
        <input
          type="text"
          id={this.props.label}
          className={`${inputStyles.input} ${this.state.error ? inputStyles.error : ''}`}
          ref={this.inputRef}
          onBlur={this.validate}
          {...this.props}
        />
        {this.state.error && (
          <p data-testid="error-message" className={inputStyles.errorMessage}>
            {this.displayErrorMessage()}
          </p>
        )}
      </div>
    );
  }
}

export default TextInput;
