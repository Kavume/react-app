import React, { useRef, useState } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './DropdownInput.module.scss';

interface DropdownInputProps {
  label: string;
  placeholder: string;
  options: { value: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

const DropdownInput = (props: DropdownInputProps) => {
  const [error, setError] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const validate = () => {
    const value = selectRef.current?.value;
    const isValid = value && value !== '';
    setError(!isValid);
    return isValid;
  };

  const onBlurValidate = () => {
    const isValid = validate();
    !isValid ? setError(true) : setError(false);
  };

  return (
    <div className={inputStyles.inputWrapper}>
      <label
        className={`${inputStyles.label} ${error ? inputStyles.error : ''}`}
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <select
        className={`${inputStyles.input} ${styles.select} ${error ? inputStyles.error : ''}`}
        id={props.label}
        name={props.name}
        ref={selectRef}
        onBlur={() => onBlurValidate()}
        onChange={props.onChange}
      >
        <option value="">{props.placeholder}</option>
        {props.options.map((item) => (
          <option key={item.value} value={item.value} className={styles.option}>
            {item.value}
          </option>
        ))}
      </select>
      {error && (
        <p className={inputStyles.errorMessage}>* Please select one of the following options</p>
      )}
    </div>
  );
};

export default DropdownInput;
