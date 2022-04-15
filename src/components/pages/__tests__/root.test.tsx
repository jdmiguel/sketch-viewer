import { render, screen } from '@testing-library/react';
import { RenderWithRouter, RenderWithTheme } from '../../../helpers/testUtils';
import Root from '../root';

describe('<Root />', () => {
  it('displays the correct title', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Root />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('Pages');
  });

  it('displays the correct subtitle', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Root />
        </RenderWithTheme>
      </RenderWithRouter>,
    );
    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('displays the correct thumbnails', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <Root />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    const [firstThumbnail, secondThumbnail] = screen.getAllByTestId('thumbnail');

    const firstThumbnailImage = firstThumbnail.querySelector('img');
    expect(firstThumbnailImage.getAttribute('src')).toBe('document.png');
    const firstThumbnailText = firstThumbnail.querySelector('p');
    expect(firstThumbnailText.textContent).toBe('Code test');

    const secondThumbnailImage = secondThumbnail.querySelector('img');
    expect(secondThumbnailImage.getAttribute('src')).toBe('document-bonus.png');
    const secondThumbnailText = secondThumbnail.querySelector('p');
    expect(secondThumbnailText.textContent).toBe('Code test (bonus)');
  });
});
