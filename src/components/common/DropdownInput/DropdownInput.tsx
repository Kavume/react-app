import React, { Component } from 'react';
import inputStyles from './../styles/Input.module.scss';
import styles from './DropdownInput.module.scss';

interface DropdownInputProps {
  label: string;
  placeholder: string;
  options: { value: string }[];
}

class DropdownInput extends Component<DropdownInputProps> {
  constructor(props: DropdownInputProps) {
    super(props);
    this.selectRef = React.createRef();
  }
  selectRef: React.RefObject<HTMLSelectElement>;

  validate() {
    const value = this.selectRef.current?.value;
    const isValid = value && value !== '';
    this.setState({ error: !isValid });
    return isValid;
  }
  state = {
    error: false,
  };

  onBlurValidate() {
    const isValid = this.validate();
    if (!isValid) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  }

  render() {
    return (
      <div className={inputStyles.inputWrapper}>
        <label
          className={`${inputStyles.label} ${this.state.error ? inputStyles.error : ''}`}
          htmlFor={this.props.label}
        >
          {this.props.label}
        </label>
        <select
          className={`${inputStyles.input} ${styles.select} ${
            this.state.error ? inputStyles.error : ''
          }`}
          id={this.props.label}
          name={this.props.label}
          ref={this.selectRef}
          onBlur={() => this.onBlurValidate()}
        >
          <option value="">{this.props.placeholder}</option>
          {this.props.options.map((item) => (
            <option key={item.value} value={item.value} className={styles.option}>
              {item.value}
            </option>
          ))}
        </select>
        {this.state.error && (
          <p className={inputStyles.errorMessage}>* Please select one of the following options</p>
        )}
      </div>
    );
  }
}

export default DropdownInput;
