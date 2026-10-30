import { render } from '@testing-library/react';
import App from './App';

test('renders container element', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toHaveClass('container');
});
