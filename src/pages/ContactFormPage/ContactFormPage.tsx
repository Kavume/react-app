import React from 'react';
import { ContactForm } from '../../components/ContactForm';
import ContactFormGetData from '../../components/ContactForm/ContactFormGetData/ContactFormGetData';
import styles from './ContactFormPage.module.scss';
import { useAppSelector } from '../../store/hooks';

const ContactFormPage = () => {
  const curData = useAppSelector((state) => state.cardsContactForm.cards);
  const isSubmitted = useAppSelector((state) => state.cardsContactForm.isSubmit);
  return (
    <div className={styles.contentWrapper}>
      <ContactForm />
      <div className={styles.listsWrapper}>
        {!isSubmitted &&
          curData.map((data, index) => (
            <ContactFormGetData key={`${data.firstName}${index}`} formData={data} />
          ))}
      </div>
    </div>
  );
};

export default ContactFormPage;
