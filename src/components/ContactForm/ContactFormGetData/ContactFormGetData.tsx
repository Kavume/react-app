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
    image?: string;
  };
}

class ContactFormGetData extends Component<ContactFormGetDataProps> {
  constructor(props: ContactFormGetDataProps) {
    super(props);
  }

  render() {
    const image = this.props.formData.image?.split('\\').pop();
    return (
      <div className={styles.listWrapper}>
        <ol className={styles.list}>
          <li>Name: {this.props.formData.name}</li>
          <li>Surname: {this.props.formData.surname}</li>
          <li>Gender: {this.props.formData.gender}</li>
          <li>Birth Date: {this.props.formData.birthDate}</li>
          <li>Agreement: {this.props.formData.agreement}</li>
          <li>Contacts: {this.props.formData.contacts?.join(',')}</li>
          <li>Rate: {this.props.formData.rate}</li>
          <li>Image: {image}</li>
        </ol>
      </div>
    );
  }
}

export default ContactFormGetData;
