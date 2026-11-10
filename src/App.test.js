import { render, screen } from '@testing-library/react';
import App from './App';

test('renders container', () => {
  render(<App />);
  const containerElement = document.querySelector('.container');
  expect(containerElement).toBeInTheDocument();
});
