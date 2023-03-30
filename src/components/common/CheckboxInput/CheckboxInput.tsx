import React, { forwardRef } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  checkboxes: { value: string }[];
  title: string;
  error?: string;
}

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>((props, ref) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <p className={`${inputStyles.label} ${props.error ? inputStyles.error : ''}`}>
        {props.title}
      </p>
      {props.checkboxes.map((item) => (
        <div className={styles.checkboxWrapper} key={item.value}>
          <input className={styles.checkbox} type="checkbox" id={item.value} ref={ref} {...props} />
          <label htmlFor={item.value}>{item.value}</label>
        </div>
      ))}
      {props.error && <p className={inputStyles.errorMessage}>{props.error}</p>}
    </div>
  );
});

export default CheckboxInput;
