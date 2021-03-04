import { render, screen } from '@testing-library/react';
import Top from './Top';

test('renders hello text', () => {
  render(<Top />);
  const headerText = screen.getByText(/Hello/i);
  expect(headerText).toBeInTheDocument();
});