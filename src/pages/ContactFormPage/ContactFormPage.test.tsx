import React from 'react';
import { render } from '@testing-library/react';
import ContactFormPage from './ContactFormPage';
import * as reduxHooks from 'react-redux';

jest.mock('react-redux');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');

const cards = [
  {
    firstName: 'Will',
    lastName: 'Smith',
    gender: 'Male',
    birthDate: '1990-01-01',
    agreement: true,
    contacts: ['call'],
    rate: 'Satisfied',
    image: 'flower.jpeg',
  },
];

describe('ContactFormPage', () => {
  it('should render contact form page', () => {
    mockedSelector.mockReturnValue({ cards: [], isSubmit: true });
    render(<ContactFormPage />);
  });

  it('f', () => {
    mockedSelector.mockReturnValue({ cards, isSubmit: false });
    render(<ContactFormPage />);
  });
});
