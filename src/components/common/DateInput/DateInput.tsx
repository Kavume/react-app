import React, { useRef, useState } from 'react';
import inputStyles from './../styles/Input.module.scss';

interface DateInputProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const DateInput = (props: DateInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState(false);

  const displayErrorMessage = () => {
    const input = inputRef.current;
    const dateValue = input?.value;
    if (!dateValue) {
      return '* Enter your birth date';
    }

    const enteredDate = new Date(dateValue);
    if (enteredDate.getFullYear() < 1930) {
      return '* Please enter the correct data';
    } else {
      return '* You must be 18 years or older';
    }
  };

  const validate = () => {
    const input = inputRef.current;
    const dateValue = input?.value;

    if (!dateValue) {
      setError(true);
      return;
    }

    const dateNow = new Date();
    const minDate = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDate());
    const enteredDate = new Date(dateValue);

    enteredDate > minDate || enteredDate.getFullYear() < 1930 ? setError(true) : setError(false);
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
        type="date"
        id={props.label}
        name={props.name}
        className={`${inputStyles.input} ${error ? inputStyles.error : ''}`}
        ref={inputRef}
        onBlur={validate}
        onChange={props.onChange}
      />
      {error && <p className={inputStyles.errorMessage}>{displayErrorMessage()}</p>}
    </div>
  );
};

export default DateInput;
