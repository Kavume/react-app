import React, { Component } from 'react';
import styles from './ContactForm.module.scss';
import { TextInput } from '../common/TextInput';
import { DateInput } from '../common/DateInput';

class ContactForm extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Contact Form</h2>
        <div className={styles.formWrapper}>
          <TextInput label={'Name'} placeholder={'Enter your name'} />
          <TextInput label={'Surname'} placeholder={'Enter your surname'} />
          <DateInput label={'Birth date'} />
        </div>
      </div>
    );
  }
}

export default ContactForm;
