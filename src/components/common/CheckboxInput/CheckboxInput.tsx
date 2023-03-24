import React, { Component } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './CheckboxInput.module.scss';

interface CheckboxInputProps {
  checkboxes: { value: string }[];
  title: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class CheckboxInput extends Component<CheckboxInputProps> {
  constructor(props: CheckboxInputProps) {
    super(props);
  }

  render() {
    return (
      <div className={inputStyles.inputWrapper}>
        <p className={inputStyles.label}>{this.props.title}</p>
        {this.props.checkboxes.map((item) => (
          <div className={styles.checkboxWrapper} key={item.value}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={item.value}
              name={this.props.name}
              onChange={this.props.onChange}
            />
            <label htmlFor={item.value}>{item.value}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default CheckboxInput;
