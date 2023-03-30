import React from 'react';
import styles from './ContactFormGetData.module.scss';

interface ContactFormGetDataProps {
  formData: {
    firstName?: string;
    lastName?: string;
    gender?: string;
    birthDate?: string;
    agreement?: boolean;
    contacts?: string[];
    rate?: string;
    image?: string;
    fileName?: string;
  };
}

const ContactFormGetData = (props: ContactFormGetDataProps) => {
  return (
    <div className={styles.listWrapper}>
      <ol className={styles.list}>
        <li>Name: {props.formData.firstName}</li>
        <li>Surname: {props.formData.lastName}</li>
        <li>Gender: {props.formData.gender}</li>
        <li>Birth Date: {props.formData.birthDate}</li>
        <li>Agreement: {props.formData.agreement ? 'Yes' : 'No'}</li>
        <li>Contacts: {props.formData.contacts?.join(',')}</li>
        <li>Rate: {props.formData.rate}</li>
        <li>Image: {props.formData.fileName}</li>
      </ol>
    </div>
  );
};

export default ContactFormGetData;
