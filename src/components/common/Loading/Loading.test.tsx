import React from 'react';
import * as reduxHooks from 'react-redux';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

jest.mock('react-redux');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');

describe('Loading', () => {
  it('should render loading component', () => {
    render(<Loading />);
  });

  it('should render div, p with correct classes', () => {
    render(<Loading />);
    const wrapperDiv = screen.getByTestId('wrapper');
    const loadParagraph = screen.getByTestId('load');

    expect(wrapperDiv).toHaveClass('wrapper');
    expect(loadParagraph).toHaveClass('load');
  });

  it('should work correctly hook useAppSelector()', () => {
    mockedSelector.mockReturnValue('');
    render(<Loading />);
  });

  it('should render status correctly using useAppSelector()', () => {
    mockedSelector.mockReturnValue('loading');
    render(<Loading />);
    expect(screen.getByText('loading')).toBeInTheDocument();
  });
});
