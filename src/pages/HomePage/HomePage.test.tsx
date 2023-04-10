import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import * as reduxHooks from 'react-redux';
import Card from '../../components/Card/Card';

jest.mock('react-redux');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');

const cards = [
  {
    id: '123',
    alt_description: 'description example 1',
    user: {
      username: 'Willka',
      first_name: 'Will',
      last_name: 'Smith',
      instagram_username: 'Will2345',
    },
    urls: {
      small: 'https://example_small',
    },
    likes: 1000,
    links: {
      download: 'https://example_download',
    },
  },
  {
    id: '234',
    alt_description: undefined,
    user: {
      username: 'Karlson',
      first_name: 'Karl',
      last_name: 'Son',
      instagram_username: undefined,
    },
    urls: {
      small: 'https://example_small2',
    },
    likes: 3300,
    links: {
      download: 'https://example_download2',
    },
  },
];

describe('HomePage', () => {
  beforeEach(() => {
    mockedSelector.mockClear();
  });

  it('should dispatch the getFetchCards action', () => {
    const dispatch = jest.fn();
    jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(dispatch);
    mockedSelector.mockReturnValue(cards);
    render(<HomePage />);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(screen.getByText("don't have description")).toBeInTheDocument();
  });

  it('should render the card with correct props', () => {
    const props = {
      key: '123',
      id: '123',
      description: 'A beautiful photo',
      title: 'John Smith',
      authorInfo: 'jsmith',
      bio: 'Follow me on Instagram',
      likes: 100,
      image: 'https://example.com/image.jpg',
      fill: 'none',
      color: 'var(--gray)',
      downloadLink: 'https://example.com/download',
    };
    render(<Card {...props} />);

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
