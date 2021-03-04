import { render, screen } from '@testing-library/react';
import Left from './Left';

test('renders left component text', () => {
  render(<Left />);
  const leftText = screen.getByText(/This is a basic ReactJS app using the create-react-app boilerplate with some custom components thrown in./i);
  expect(leftText).toBeInTheDocument();
});