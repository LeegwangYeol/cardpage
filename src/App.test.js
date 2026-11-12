import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main container', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('container');
});
