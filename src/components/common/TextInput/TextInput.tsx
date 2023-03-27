import React, { useRef, useState } from 'react';
import inputStyles from './../styles/Input.module.scss';

interface TextInputProps {
  label: string;
  placeholder: string;
  defaultValue?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const TextInput = (props: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const displayErrorMessage = () => {
    const input = inputRef.current;
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
  };

  const validate = () => {
    const input = inputRef.current;
    if (!input) return;

    const value = input.value.trim();
    !value || value.length < 2 || !/^[a-zA-Z ]+$/.test(value) || !/^[A-Z]/.test(value)
      ? setError(true)
      : setError(false);
  };

  return (
    <div className={inputStyles.inputWrapper}>
      <label
        className={`${inputStyles.label} ${error ? inputStyles.error : ''}`}
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.label}
        className={`${inputStyles.input} ${error ? inputStyles.error : ''}`}
        ref={inputRef}
        onBlur={validate}
        {...props}
      />
      {error && (
        <p data-testid="error-message" className={inputStyles.errorMessage}>
          {displayErrorMessage()}
        </p>
      )}
    </div>
  );
};

export default TextInput;
