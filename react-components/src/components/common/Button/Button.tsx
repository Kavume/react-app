import React, { Component } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <button className={styles.button} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;
