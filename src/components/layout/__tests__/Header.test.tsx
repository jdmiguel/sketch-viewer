import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../../helpers/theme';
import Header from '.';

describe('<Header />', () => {
  const props = {
    title: 'Pages',
  };

  it('displays the logo', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <Header {...props} />
        </MemoryRouter>,
      ),
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <Header {...props} />
        </MemoryRouter>,
      ),
    );

    expect(screen.getByText('Pages')).toBeInTheDocument();
  });

  describe('when the header has navigation', () => {
    it('does not display the logo', () => {
      render(
        renderWithTheme(
          <MemoryRouter>
            <Header {...props} withNavigation />
          </MemoryRouter>,
        ),
      );

      expect(screen.queryByAltText('logo')).not.toBeInTheDocument();
    });

    it('displays the close button', () => {
      render(
        renderWithTheme(
          <MemoryRouter>
            <Header {...props} withNavigation />
          </MemoryRouter>,
        ),
      );

      const closeButton = screen.getAllByAltText('icon button')[0];
      expect(closeButton.getAttribute('src')).toBe('close.svg');
    });

    it('displays the artboard navigation', () => {
      render(
        renderWithTheme(
          <MemoryRouter>
            <Header {...props} withNavigation />
          </MemoryRouter>,
        ),
      );

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays the title wrapper with the correct styles', () => {
      render(
        renderWithTheme(
          <MemoryRouter>
            <Header {...props} withNavigation />
          </MemoryRouter>,
        ),
      );

      const titleWrapper = screen.getByText('Pages').parentNode;
      expect(titleWrapper).toHaveStyleRule('justify-content', 'center');
      expect(titleWrapper).toHaveStyleRule('position', 'absolute');
    });
  });
});
