import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

test('renders the NAF Construction website', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("heading", { name: /Construction built for Ethiopia/i })
  ).toBeInTheDocument();
});
