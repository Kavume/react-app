import React from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  checkboxes: { value: string }[];
  title: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxInput = (props: CheckboxInputProps) => {
  return (
    <div className={inputStyles.inputWrapper}>
      <p className={inputStyles.label}>{props.title}</p>
      {props.checkboxes.map((item) => (
        <div className={styles.checkboxWrapper} key={item.value}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id={item.value}
            name={props.name}
            onChange={props.onChange}
          />
          <label htmlFor={item.value}>{item.value}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxInput;
