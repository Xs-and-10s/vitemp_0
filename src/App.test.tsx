/* eslint-disable import/no-extraneous-dependencies */
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import App, { AppWithoutRouter } from './App';

describe('<App />', () => {
  it('renders', () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Vite + React'
    );
  });

  it('renders Not Found if invalid path', () => {
    const badRoute = '/some/bad/route';

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <AppWithoutRouter />
      </MemoryRouter>
    );

    // verify navigation to "Not Found" route
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not Found'
    );
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
