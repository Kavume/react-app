import React, { useRef } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './RadioInput.module.scss';

interface RadioInputProps {
  name: string;
  radioInputs: { id: string; label: string }[];
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = (props: RadioInputProps) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.componentContainer}>
      <p className={inputStyles.label}>{props.title}</p>
      <div className={inputStyles.inputWrapper}>
        {props.radioInputs.map((item) => (
          <div className={styles.radioItemWrapper} key={item.id}>
            <input
              className={styles.radio}
              type="radio"
              id={item.id}
              name={props.name}
              value={item.label}
              ref={inputRef}
              onChange={props.onChange}
            />
            <label className={styles.label} htmlFor={item.id}>
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioInput;
