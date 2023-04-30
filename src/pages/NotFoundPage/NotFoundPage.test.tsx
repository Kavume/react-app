import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter } from 'react-router-dom';

describe('NotFoundPage', () => {
  it('renders the not found page', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
    expect(
      screen.getByText(
        'This is a 404 error, which means you have clicked on a wrong link or entered an invalid URL'
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Something's wrong here!")).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Go back' });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(window.location.pathname).toBe('/');
  });
});
