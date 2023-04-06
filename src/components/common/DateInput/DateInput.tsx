import React, { forwardRef } from 'react';
import inputStyles from './../styles/Input.module.scss';

interface DateInputProps {
  label: string;
  error?: string;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>((props, ref) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <label
        className={`${inputStyles.label} ${props.error ? inputStyles.error : ''}`}
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        type="date"
        id={props.label}
        className={`${inputStyles.input} ${props.error ? inputStyles.error : ''}`}
        ref={ref}
        {...props}
      />
      {props.error && <p className={inputStyles.errorMessage}>{props.error}</p>}
    </div>
  );
});

export default DateInput;
