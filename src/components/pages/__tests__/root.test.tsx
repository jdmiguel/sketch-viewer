import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../../helpers/theme';
import Root from '../root';

describe('<Root />', () => {
  it('displays the correct title', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <Root />
        </MemoryRouter>,
      ),
    );

    expect(screen.getByText('Page 1')).toBeInTheDocument();
  });

  it('displays the correct thumbnails', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <Root />
        </MemoryRouter>,
      ),
    );

    const thumbnails = screen.getAllByRole('button');
    expect(thumbnails.length).toBe(2);

    const [firstThumbnail, secondThumbnail] = thumbnails;

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
