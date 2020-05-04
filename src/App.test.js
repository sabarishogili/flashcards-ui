import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('appbar loaded', () => {
  const { getByText } = render(<AppBar />);
  const linkElement = getByText(/Flash Cards/i);
  expect(linkElement).toBeInTheDocument();
});
