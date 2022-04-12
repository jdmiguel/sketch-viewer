import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../helpers/theme';
import Layout from '.';

describe('<Layout />', () => {
  const props = {
    title: 'Pages',
    children: null,
  };

  it('passes the correct title to the header', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <Layout {...props} />
        </MemoryRouter>,
      ),
    );

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('Pages');
  });
});
