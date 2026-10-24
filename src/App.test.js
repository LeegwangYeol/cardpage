import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const containerElement = document.querySelector('.container');
  expect(containerElement).toBeInTheDocument();
});
