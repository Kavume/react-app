import React, { Component } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './RadioInput.module.scss';

interface RadioInputProps {
  name: string;
  radioInputs: { id: string; label: string }[];
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class RadioInput extends Component<RadioInputProps> {
  constructor(props: RadioInputProps) {
    super(props);
    this.selectRef = React.createRef();
  }
  selectRef: React.RefObject<HTMLInputElement>;

  render() {
    return (
      <div className={styles.componentContainer}>
        <p className={inputStyles.label}>{this.props.title}</p>
        <div className={inputStyles.inputWrapper}>
          {this.props.radioInputs.map((item) => (
            <div className={styles.radioItemWrapper} key={item.id}>
              <input
                className={styles.radio}
                type="radio"
                id={item.id}
                name={this.props.name}
                value={item.label}
                ref={this.selectRef}
                onChange={this.props.onChange}
              />
              <label className={styles.label} htmlFor={item.id}>
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RadioInput;
