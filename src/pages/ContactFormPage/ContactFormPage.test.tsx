import React from 'react';
import { render } from '@testing-library/react';
import ContactFormPage from './ContactFormPage';

describe('ContactFormPage', () => {
  it('should render contact form page', () => {
    render(<ContactFormPage />);
  });
});
