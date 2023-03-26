import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const props = {
  title: 'Example title',
  description: 'Example description',
  authorInfo: 'Example author',
  likes: 42,
  image: 'https://example.com/new-image.jpg',
  fill: 'red',
  color: 'blue',
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

  it('renders a placeholder if image is not loaded yet', () => {
    render(<Card {...props} image="invalid-image-url" />);
    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
  });
});
