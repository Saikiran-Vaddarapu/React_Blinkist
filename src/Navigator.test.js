import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigator from './Navigator';

it('renders learn react link', () => {
  render(<Navigator />);
  const linkElement = screen.getByText(/Explore/i);
  expect(linkElement).toBeInTheDocument();
});
