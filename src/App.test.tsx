import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders layout', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });

  it('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('renders about us', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('about-us')).toBeInTheDocument();
  });

  it('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/not-found-page']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
