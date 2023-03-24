import React, { Component } from 'react';
import styles from './ContactForm.module.scss';
import { TextInput } from '../common/TextInput';
import { DateInput } from '../common/DateInput';
import { DropdownInput } from '../common/DropdownInput';
import { CheckboxInput } from '../common/CheckboxInput';
import { RadioInput } from '../common/RadioInput';
import { FileUpload } from '../common/FileUpload';
import { Button } from '../common/Button';
import { SuccessMessage } from '../common/SuccessMessage';

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

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    surname: string;
    gender: string;
    birthDate: string;
    agreement: boolean;
    contacts: string[];
    rate: string;
  }) => void;
  onReset: () => void;
}

class ContactForm extends Component<ContactFormProps> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = {
      isSubmit: false,
      name: '',
      surname: '',
      gender: '',
      birthDate: '',
      agreement: false,
      contacts: [],
      rate: '',
    };
  }

  state = {
    isSubmit: false,
    name: '',
    surname: '',
    gender: '',
    birthDate: '',
    agreement: false,
    contacts: [],
    rate: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { name, surname, gender, birthDate, agreement, contacts, rate } = this.state;
    if (name && surname && gender && birthDate && agreement && contacts && rate) {
      this.props.onSubmit({
        name,
        surname,
        gender,
        birthDate,
        agreement,
        contacts,
        rate,
      });
      this.setState({
        isSubmit: true,
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  handleReset = () => {
    this.props.onReset();
    this.setState({
      isSubmit: false,
      name: '',
      surname: '',
      gender: '',
      birthDate: '',
      agreement: false,
      contacts: [],
      rate: '',
      profileImage: null,
    });
  };

  render() {
    if (this.state.isSubmit) {
      return (
        <div className={styles.successMessage}>
          <SuccessMessage />
          <Button text={'Go back'} isPrimary={false} onClick={this.handleReset} />
        </div>
      );
    }
    return (
      <div className={styles.main}>
        <h2 className={styles.title}>Contact Form</h2>
        <div className={styles.formWrapper}>
          <FileUpload label={'Upload your profile image'} name="profileImage" />
          <TextInput
            defaultValue={this.state.name}
            name="name"
            label={'Name'}
            placeholder={'Enter your name'}
            onChange={this.handleChange}
          />
          <TextInput
            label={'Surname'}
            name="surname"
            placeholder={'Enter your surname'}
            onChange={this.handleChange}
          />
          <DropdownInput
            name="gender"
            label={'Gender'}
            placeholder={'Please select'}
            options={dropdownInputData}
            onChange={this.handleChange}
          />
          <DateInput name="birthDate" label={'Birth date'} onChange={this.handleChange} />
          <CheckboxInput
            name="agreement"
            title={'Agreement'}
            checkboxes={checkboxInputConsentData}
            onChange={this.handleChange}
          />
          <CheckboxInput
            title={'Choose how we can contact'}
            checkboxes={checkboxInputContactData}
            name={'contacts'}
            onChange={this.handleChange}
          />
          <RadioInput
            name="rate"
            radioInputs={radioInputRateData}
            title={'How satisfied are you with our service?'}
            onChange={this.handleChange}
          />
        </div>
        <div className={styles.btnWrapper}>
          <Button isPrimary={false} text={'Submit'} onClick={this.handleSubmit} type={'submit'} />
        </div>
      </div>
    );
  }
}

export default ContactForm;
