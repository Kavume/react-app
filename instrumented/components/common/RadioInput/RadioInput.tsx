import React, { forwardRef } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './RadioInput.module.scss';

interface RadioInputProps {
  radioInputs: { id: string; label: string }[];
  title: string;
  error?: string;
}

const RadioInput = forwardRef<HTMLInputElement, RadioInputProps>(
  ({ radioInputs, ...props }, ref) => {
    return (
      <div className={styles.componentContainer}>
        <p className={`${inputStyles.label} ${props.error ? inputStyles.error : ''}`}>
          {props.title}
        </p>
        <div className={inputStyles.inputWrapper}>
          {radioInputs.map((item) => (
            <div className={styles.radioItemWrapper} key={item.id}>
              <input
                className={styles.radio}
                type="radio"
                id={item.id}
                value={item.label}
                ref={ref}
                {...props}
              />
              <label className={styles.label} htmlFor={item.id}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
        {props.error && <p className={inputStyles.errorMessage}>{props.error}</p>}
      </div>
    );
  }
);

export default RadioInput;
