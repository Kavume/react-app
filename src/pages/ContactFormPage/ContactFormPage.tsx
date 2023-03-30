import React, { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import ContactFormGetData from '../../components/ContactForm/ContactFormGetData/ContactFormGetData';
import styles from './ContactFormPage.module.scss';

const ContactFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentData, setCurrentData] = useState<{ firstName?: string }[]>([]);

  const handleSubmit = (data: { firstName: string }) => {
    setIsSubmitted(true);
    setCurrentData([...currentData, data]);
  };

  return (
    <div className={styles.contentWrapper}>
      <ContactForm onSubmit={handleSubmit} onReset={() => setIsSubmitted(false)} />
      <div className={styles.listsWrapper}>
        {currentData.map((data, index) => (
          <ContactFormGetData key={`${data.firstName}${index}`} formData={data} />
        ))}
      </div>
    </div>
  );
};

export default ContactFormPage;
