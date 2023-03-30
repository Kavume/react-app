import React, { forwardRef } from 'react';
import inputStyles from './../styles/Input.module.scss';

interface TextInputProps {
  label: string;
  placeholder: string;
  error?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <label
        className={`${inputStyles.label} ${props.error ? inputStyles.error : ''}`}
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.label}
        className={`${inputStyles.input} ${props.error ? inputStyles.error : ''}`}
        ref={ref}
        {...props}
      />
      {props.error && (
        <p data-testid="error-message" className={inputStyles.errorMessage}>
          {props.error}
        </p>
      )}
    </div>
  );
});

export default TextInput;
