import React, { Component } from 'react';
import styles from './ContactForm.module.scss';
import { TextInput } from '../common/TextInput';
import { DateInput } from '../common/DateInput';
import { DropdownInput } from '../common/DropdownInput';
import { CheckboxInput } from '../common/CheckboxInput';
import { RadioInput } from '../common/RadioInput';

const dropdownInputData = [
  { value: 'Male' },
  { value: 'Female' },
  { value: 'Other' },
  { value: 'Prefer not to say' },
];

const checkboxInputConsentData = [{ value: 'I consent to my personal data' }];
const checkboxInputContactData = [
  { value: 'SMS' },
  { value: 'Call' },
  { value: 'Email' },
  { value: 'Video chat' },
];

const radioInputRateData = [
  { id: 'rate1', label: 'Very satisfied' },
  { id: 'rate2', label: 'Satisfied' },
  { id: 'rate3', label: 'Neutral' },
  { id: 'rate4', label: 'Unsatisfied' },
  { id: 'rate5', label: 'Very unsatisfied' },
];

class ContactForm extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Contact Form</h2>
        <div className={styles.formWrapper}>
          <TextInput label={'Name'} placeholder={'Enter your name'} />
          <TextInput label={'Surname'} placeholder={'Enter your surname'} />
          <DropdownInput
            label={'Gender'}
            placeholder={'Please select'}
            options={dropdownInputData}
          />
          <DateInput label={'Birth date'} />
          <CheckboxInput
            title={'Agreement'}
            checkboxes={checkboxInputConsentData}
            name={'agreement'}
          />
          <CheckboxInput
            title={'Choose how we can contact'}
            checkboxes={checkboxInputContactData}
            name={'contacts'}
          />
          <RadioInput
            name={'Rate'}
            radioInputs={radioInputRateData}
            title={'How satisfied are you with our service?'}
          />
        </div>
      </div>
    );
  }
}

export default ContactForm;
