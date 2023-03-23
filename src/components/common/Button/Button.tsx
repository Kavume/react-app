import React, { Component } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  isPrimary: boolean;
}

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button
        className={`${styles.button} ${
          this.props.isPrimary ? styles.buttonPrimary : styles.buttonSecondary
        }`}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
