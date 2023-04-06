import React, { forwardRef } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './DropdownInput.module.scss';

interface DropdownInputProps {
  label: string;
  placeholder: string;
  options: { value: string }[];
  error?: string;
}

const DropdownInput = forwardRef<HTMLSelectElement, DropdownInputProps>((props, ref) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <label
        className={`${inputStyles.label} ${props.error ? inputStyles.error : ''}`}
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <select
        className={`${inputStyles.input} ${styles.select} ${props.error ? inputStyles.error : ''}`}
        id={props.label}
        ref={ref}
        {...props}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((item) => (
          <option key={item.value} value={item.value} className={styles.option}>
            {item.value}
          </option>
        ))}
      </select>
      {props.error && <p className={inputStyles.errorMessage}>{props.error}</p>}
    </div>
  );
});

export default DropdownInput;
