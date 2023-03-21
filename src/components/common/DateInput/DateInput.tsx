import React, { Component, RefObject } from 'react';
import styles from './DateInput.module.scss';

interface DateInputProps {
  label: string;
}

class DateInput extends Component<DateInputProps> {
  inputRef: RefObject<HTMLInputElement>;

  constructor(props: DateInputProps) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  displayErrorMessage() {
    const input = this.inputRef.current;
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
  }

  state = {
    error: false,
  };

  validate = () => {
    const input = this.inputRef.current;
    const dateValue = input?.value;

    if (!dateValue) {
      this.setState({ error: true });
      return;
    }

    const dateNow = new Date();
    const minDate = new Date(dateNow.getFullYear() - 18, dateNow.getMonth(), dateNow.getDate());
    const enteredDate = new Date(dateValue);

    if (enteredDate > minDate || enteredDate.getFullYear() < 1930) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  render() {
    return (
      <div className={styles.inputWrapper}>
        <label
          className={`${styles.label} ${this.state.error ? styles.error : ''}`}
          htmlFor={this.props.label}
        >
          {this.props.label}
        </label>
        <input
          type="date"
          id={this.props.label}
          name="birth date"
          className={`${styles.input} ${this.state.error ? styles.error : ''}`}
          ref={this.inputRef}
          onBlur={this.validate}
        />
        {this.state.error && <p className={styles.errorMessage}>{this.displayErrorMessage()}</p>}
      </div>
    );
  }
}

export default DateInput;
