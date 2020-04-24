import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('checks for the logo', () => {
  const { getByTestId } = render(<App />);
  const logo = getByTestId('logo');
  expect(logo).toBeInTheDocument();
})

