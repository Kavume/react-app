import React, { Component } from 'react';
import styles from './ContactFormGetData.module.scss';

interface ContactFormGetDataProps {
  formData: {
    name?: string;
    surname?: string;
    gender?: string;
    birthDate?: string;
    agreement?: boolean;
    contacts?: string[];
    rate?: string;
  };
}

class ContactFormGetData extends Component<ContactFormGetDataProps> {
  constructor(props: ContactFormGetDataProps) {
    super(props);
  }

  render() {
    return (
      <div className={styles.listWrapper}>
        <ol className={styles.list}>
          <li>Name: {this.props.formData.name}</li>
          <li>Surname: {this.props.formData.surname}</li>
          <li>Gender: {this.props.formData.gender}</li>
          <li>Birth Date: {this.props.formData.birthDate}</li>
          <li>Agreement: {this.props.formData.agreement}</li>
          <li>Contacts: {this.props.formData.contacts}</li>
          <li>Rate: {this.props.formData.rate}</li>
        </ol>
      </div>
    );
  }
}

export default ContactFormGetData;
