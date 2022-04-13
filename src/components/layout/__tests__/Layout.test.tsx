import { render, screen } from '@testing-library/react';
import { RenderWithRouter, RenderWithTheme } from '../../../helpers/testUtils';
import Layout from '../Layout';

describe('<Layout />', () => {
  const props = {
    title: 'Pages',
    children: null,
  };

  it('passes the correct title to the header', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Layout {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('Pages');
  });
});
