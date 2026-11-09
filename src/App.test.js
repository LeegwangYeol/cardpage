import { render, screen } from '@testing-library/react';
import App from './App';

test('renders container element', () => {
  const { container } = render(<App />);
  const containerElement = container.querySelector('.container');
  expect(containerElement).toBeInTheDocument();
});
