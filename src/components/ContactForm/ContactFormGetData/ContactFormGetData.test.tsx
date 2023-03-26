import React from 'react';
import { render } from '@testing-library/react';
import ContactFormGetData from './ContactFormGetData';

const props = {
  formData: {
    name: 'John',
    surname: 'Smoth',
    gender: 'Male',
    birthDate: '01/01/1990',
    agreement: true,
    contacts: ['call', 'SMS'],
    rate: 'Neutral',
    image: 'image.jpg',
  },
};

describe('ContactFormGetData.test', () => {
  it('should render component', () => {
    render(<ContactFormGetData {...props} />);
  });

  it('should render only the provided fields', () => {
    const { queryByText } = render(<ContactFormGetData {...props} />);
    expect(queryByText('Name: John')).toBeInTheDocument();
    expect(queryByText('surname:')).not.toBeInTheDocument();
    expect(queryByText('gender:')).not.toBeInTheDocument();
    expect(queryByText('birth Date:')).not.toBeInTheDocument();
    expect(queryByText('agreement:')).not.toBeInTheDocument();
    expect(queryByText('contacts:')).not.toBeInTheDocument();
    expect(queryByText('rate:')).not.toBeInTheDocument();
    expect(queryByText('image:')).not.toBeInTheDocument();
  });
});
