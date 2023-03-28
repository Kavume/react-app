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
import {
  dropdownInputData,
  checkboxInputConsentData,
  checkboxInputContactData,
  radioInputRateData,
} from '../../data';

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    surname: string;
    gender: string;
    birthDate: string;
    agreement: boolean;
    contacts: string[];
    rate: string;
    image: string;
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
      image: null,
    };
  }

  state = {
    isSubmit: false,
    name: '',
    surname: '',
    gender: '',
    birthDate: '',
    agreement: false,
    contacts: [] as string[],
    rate: '',
    image: null,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target;
    const value =
      target.type === 'checkbox' && target.name === 'agreement'
        ? (target as HTMLInputElement).checked
        : target.value;

    const name = target.name;

    if (name === 'contacts') {
      const contacts = [...this.state.contacts];
      if ((target as HTMLInputElement).checked) {
        contacts.push(target.id);
      } else {
        const index = contacts.indexOf(target.id);
        if (index > -1) {
          contacts.splice(index, 1);
        }
      }
      this.setState({
        contacts: contacts,
      });
    } else {
      this.setState({
        [name]: value.toString(),
      });
    }
  };

  handleSubmit: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { name, surname, gender, birthDate, agreement, contacts, rate, image } = this.state;
    const missingFields: string[] = [];

    if (!name) missingFields.push('name');
    if (!surname) missingFields.push('surname');
    if (!gender) missingFields.push('gender');
    if (!birthDate) missingFields.push('birth date');
    if (!agreement) missingFields.push('agreement');
    if (!contacts || contacts.length === 0) missingFields.push('contacts');
    if (!rate) missingFields.push('rate');
    if (!image) missingFields.push('image');

    if (missingFields.length === 0) {
      this.props.onSubmit({
        name,
        surname,
        gender,
        birthDate,
        agreement,
        contacts,
        rate,
        image: image || '',
      });
      this.setState({
        isSubmit: true,
      });
    } else {
      const message = `Please fill in the following required fields:\n${missingFields.join(',\n')}`;
      alert(message);
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
      contacts: [] as string[],
      rate: '',
      profileImage: null,
      image: null,
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
          <FileUpload
            label={'Upload your profile image'}
            name="image"
            onChange={this.handleChange}
          />
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
