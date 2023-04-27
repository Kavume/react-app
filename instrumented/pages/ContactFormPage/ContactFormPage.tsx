import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import ContactFormGetData from '../../components/ContactForm/ContactFormGetData/ContactFormGetData';
import styles from './ContactFormPage.module.scss';
import { useAppSelector } from '../../store/hooks';

const ContactFormPage = () => {
  const { cards, isSubmit } = useAppSelector((state) => state.cardsContactForm);

  return (
    <div className={styles.contentWrapper}>
      <ContactForm />
      <div className={styles.listsWrapper}>
        {!isSubmit &&
          cards.map((data, index) => (
            <ContactFormGetData key={`${data.firstName}${index}`} formData={data} />
          ))}
      </div>
    </div>
  );
};

export default ContactFormPage;
