import React, { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import ContactFormGetData from '../../components/ContactForm/ContactFormGetData/ContactFormGetData';
import styles from './ContactFormPage.module.scss';

const ContactFormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentData, setCurrentData] = useState<{ name?: string }[]>([]);

  const handleSubmit = (data: { name: string }) => {
    setIsSubmitted(true);
    setCurrentData([...currentData, data]);
  };

  return (
    <div className={styles.contentWrapper}>
      <ContactForm onSubmit={handleSubmit} onReset={() => setIsSubmitted(false)} />
      <div className={styles.listsWrapper}>
        {!isSubmitted &&
          currentData.map((data, index) => (
            <ContactFormGetData key={`${data.name}${index}`} formData={data} />
          ))}
      </div>
    </div>
  );
};

export default ContactFormPage;
