import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './Card';

const props = {
  title: 'Example title',
  description: 'Example description',
  authorInfo: 'Example author',
  likes: 42,
  image: 'https://example.com/new-image.jpg',
  fill: 'red',
  color: 'blue',
  downloadLink: 'http//:kkdkdkdkdkd',
  bio: 'Example bio',
};

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card {...props} />);

    const titleElement = screen.getByText('Example title');
    const descriptionElement = screen.getByText('Example description');
    const authorInfoElement = screen.getByText('by Example author');
    const likesElement = screen.getByText('42');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(authorInfoElement).toBeInTheDocument();
    expect(likesElement).toBeInTheDocument();
  });

  it('should render a button for modal', () => {
    render(<Card {...props} image="invalid-image-url" />);
    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
  });

  it('should render a modal when the button is clicked', () => {
    const { getByRole } = render(<Card {...props} />);
    const button = getByRole('button', { name: 'Show more' });
    fireEvent.click(button);
  });
});
