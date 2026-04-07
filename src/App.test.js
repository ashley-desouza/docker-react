import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi there message', () => {
  render(<App />);
  const messageElement = screen.getByText(/hi there/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders a welcome message', () => {
  render(<App />);
  const messageElement = screen.getByText(/welcome to docker and react!/i);
  expect(messageElement).toBeInTheDocument();
});
