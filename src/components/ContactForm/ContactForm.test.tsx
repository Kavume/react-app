import React from 'react';
import ContactForm from './ContactForm';
import { render } from '@testing-library/react';

describe('ContactForm', () => {
  it('should render contact form', () => {
    render(<ContactForm />);
  });
});
