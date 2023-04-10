// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import App from '../components/App';

beforeEach(() => {
  // Render the Counter component here
  render(<App />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText(/Counter/i);
  expect(countMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const inCount = screen.getByTestId('count');
  expect(inCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const addButton = screen.getByText('+');
  const display = screen.getByTestId('count');

  fireEvent.click(addButton);
  expect(display).toHaveTextContent('1');

  fireEvent.click(addButton);
  expect(display).toHaveTextContent('2');

  fireEvent.click(addButton);
  expect(display).toHaveTextContent('3');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const subButton = screen.getByText('-');
  const display = screen.getByTestId('count');

  fireEvent.click(subButton);
  expect(display).toHaveTextContent('-1');

  fireEvent.click(subButton);
  expect(display).toHaveTextContent('-2');

  fireEvent.click(subButton);
  expect(display).toHaveTextContent('-3');
});
