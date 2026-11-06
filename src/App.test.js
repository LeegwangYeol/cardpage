import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  const { container } = render(<App />);
  const divElement = container.querySelector('.container');
  expect(divElement).toBeInTheDocument();
});
