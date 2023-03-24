import React, { Component } from 'react';
import { ContactForm } from '../../components/ContactForm';
import ContactFormGetData from '../../components/ContactForm/ContactFormGetData/ContactFormGetData';
import styles from './ContactFormPage.module.scss';

class ContactFormPage extends Component {
  state: { currentData: Array<{ name?: string }>; isSubmitted: boolean } = {
    currentData: [],
    isSubmitted: false,
  };
  render() {
    return (
      <div className={styles.contentWrapper}>
        <ContactForm
          onSubmit={(data) =>
            this.setState({
              currentData: [...this.state.currentData, data],
              isSubmitted: true,
            })
          }
          onReset={() => this.setState({ isSubmitted: false })}
        />
        <div className={styles.listsWrapper}>
          {!this.state.isSubmitted &&
            this.state.currentData.map((data, index) => (
              <ContactFormGetData key={`${data.name}${index}`} formData={data} />
            ))}
        </div>
      </div>
    );
  }
}

export default ContactFormPage;
