import { render, screen } from '@testing-library/react';
import { RenderWithRouter, RenderWithTheme } from '../../../helpers/testUtils';
import Header from '../Header';

describe('<Header />', () => {
  const props = {
    title: 'Pages',
  };

  it('displays the logo', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Header {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Header {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    expect(screen.getByText('Pages')).toBeInTheDocument();
  });

  it('displays the theme button with the dark icon', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Header {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    const themeButton = screen.getByAltText('icon button');
    expect(themeButton.getAttribute('src')).toBe('dark-icon.svg');
  });

  describe('when the header has navigation', () => {
    it('displays the correct styles', () => {
      render(
        <RenderWithRouter>
          <RenderWithTheme>
            <Header {...props} withNavigation />
          </RenderWithTheme>
        </RenderWithRouter>,
      );

      const header = screen.getByRole('banner');
      expect(header).toHaveStyleRule('justify-content', 'space-between');
    });

    it('does not display the logo', () => {
      render(
        <RenderWithRouter>
          <RenderWithTheme>
            <Header {...props} withNavigation />
          </RenderWithTheme>
        </RenderWithRouter>,
      );

      expect(screen.queryByAltText('logo')).not.toBeInTheDocument();
    });

    it('displays the close button', () => {
      render(
        <RenderWithRouter>
          <RenderWithTheme>
            <Header {...props} withNavigation />
          </RenderWithTheme>
        </RenderWithRouter>,
      );

      const [closeButton] = screen.getAllByAltText('icon button');
      expect(closeButton.getAttribute('src')).toBe('close-dark.svg');
    });

    it('displays the artboard navigation', () => {
      render(
        <RenderWithRouter>
          <RenderWithTheme>
            <Header {...props} withNavigation />
          </RenderWithTheme>
        </RenderWithRouter>,
      );

      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('displays the title wrapper with the correct styles', () => {
      render(
        <RenderWithRouter>
          <RenderWithTheme>
            <Header {...props} withNavigation />
          </RenderWithTheme>
        </RenderWithRouter>,
      );

      const titleWrapper = screen.getByText('Pages').parentNode;
      expect(titleWrapper).toHaveStyleRule('justify-content', 'center');
      expect(titleWrapper).toHaveStyleRule('position', 'absolute');
    });
  });
});
