import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn text app', () => {
  render(<App />);
  const linkElement = screen.getByText(/ejemplo/i);
  expect(linkElement).toBeInTheDocument();
});
