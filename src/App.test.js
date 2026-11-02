import { render, screen } from '@testing-library/react';
import App from './App';

test('renders container', () => {
  const { container } = render(<App />);
  const divElement = container.querySelector('.container');
  expect(divElement).toBeInTheDocument();
});
