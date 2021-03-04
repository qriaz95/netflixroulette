import { render, screen } from '@testing-library/react';
import Right from './Right';

test('renders right component text', () => {
  render(<Right />);
  const rightText = screen.getByText(/Enjoy the pretty animations!/i);
  expect(rightText).toBeInTheDocument();
});