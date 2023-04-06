import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { TextInput } from '../common/TextInput';
import { DateInput } from '../common/DateInput';
import { DropdownInput } from '../common/DropdownInput';
import { CheckboxInput } from '../common/CheckboxInput';
import { RadioInput } from '../common/RadioInput';
import { FileUpload } from '../common/FileUpload';
import { Button } from '../common/Button';
import {
  dropdownInputData,
  checkboxInputConsentData,
  checkboxInputContactData,
  radioInputRateData,
} from '../../data';
import { useForm } from 'react-hook-form';
import { SuccessMessage } from '../common/SuccessMessage';

interface ContactFormProps {
  onSubmit: (data: {
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: string;
    agreement: boolean;
    contacts: string[];
    rate: string;
    image: File[];
  }) => void;
  onReset: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  agreement: boolean;
  contacts: [];
  rate: string;
  image: File[];
}

const ContactForm = (props: ContactFormProps) => {
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onsubmit = (data: FormData) => {
    const fileName = data.image[0].name;
    const modifiedData = { ...data, fileName };
    props.onSubmit(modifiedData as never);
    setIsSubmit(true);
  };

  const handleReset = () => {
    setIsSubmit(false);
    reset();
    props.onReset();
  };

  return isSubmit ? (
    <div className={styles.successMessage}>
      <SuccessMessage />
      <Button text={'Go back'} isPrimary={false} onClick={handleReset} />
    </div>
  ) : (
    <div className={styles.main}>
      <h2 className={styles.title}>Contact Form</h2>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onsubmit)}>
        <FileUpload
          label={'Upload your profile image'}
          {...register('image', {
            required: {
              value: true,
              message: '* This field is required',
            },
          })}
          error={errors?.image?.message}
        />
        <TextInput
          label={'Firstname'}
          placeholder={'Enter your firstname'}
          {...register('firstName', {
            required: {
              value: true,
              message: '* This field is required',
            },
            minLength: {
              value: 2,
              message: '* This field must have at least 2 letters',
            },
            validate: {
              onlyLetters: (value) =>
                /^[a-zA-Z ]+$/.test(value) || '* This field must contain only letters',
              capitalFirstLetter: (value) =>
                /^[A-Z]/.test(value) || '* This field must start with a capital letter',
            },
          })}
          error={errors?.firstName?.message}
        />
        <TextInput
          label={'Lastname'}
          placeholder={'Enter your lastname'}
          {...register('lastName', {
            required: {
              value: true,
              message: '* This field is required',
            },
            minLength: {
              value: 2,
              message: '* This field must have at least 2 letters',
            },
            validate: {
              onlyLetters: (value) =>
                /^[a-zA-Z ]+$/.test(value) || '* This field must contain only letters',
              capitalFirstLetter: (value) =>
                /^[A-Z]/.test(value) || '* This field must start with a capital letter',
            },
          })}
          error={errors?.lastName?.message}
        />
        <DropdownInput
          label={'Gender'}
          placeholder={'Please select'}
          options={dropdownInputData}
          {...register('gender', {
            required: {
              value: true,
              message: '* Please select one of the following options',
            },
          })}
          error={errors?.gender?.message}
        />
        <DateInput
          label={'Birth date'}
          {...register('birthDate', {
            required: { value: true, message: '* This field is required' },
            validate: {
              correctData: (value) =>
                Date.parse(value) < Date.now() || '* Please enter the correct data',
              correctData2: (value) =>
                new Date(value).getFullYear() > 1930 || '* Please enter the correct data',
            },
          })}
          error={errors?.birthDate?.message}
        />
        <CheckboxInput
          checkboxes={checkboxInputConsentData}
          title={'Agreement'}
          {...register('agreement', {
            required: { value: true, message: '* This field is required' },
          })}
          error={errors.agreement?.message}
        />
        <CheckboxInput
          checkboxes={checkboxInputContactData}
          title={'Choose how we can contact'}
          {...register('contacts', {
            required: { value: true, message: '* Please select one of the following options' },
          })}
          error={errors.contacts?.message}
        />
        <RadioInput
          radioInputs={radioInputRateData}
          title={'How satisfied are you with our service?'}
          {...register('rate', {
            required: {
              value: true,
              message: '* Please select one of the following options',
            },
          })}
          error={errors.rate?.message}
        />
        <div className={styles.btnWrapper}>
          <Button text={'Submit'} isPrimary={false} type={'submit'} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
