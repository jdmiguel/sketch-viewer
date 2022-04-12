import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTheme } from '../../../helpers/theme';
import DocumentView from './view';

describe('<DocumentView />', () => {
  const props = {
    documentName: 'Code test',
    artboards: [
      {
        files: [
          {
            height: 800,
            scale: 0,
            thumbnails: [
              {
                height: 400,
                width: 400,
                url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png',
              },
            ],
            url: 'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png',
            width: 800,
          },
        ],
        isArtboard: true,
        name: 'Xerox alto',
      },
      {
        files: [
          {
            height: 800,
            scale: 1,
            thumbnails: [
              {
                height: 400,
                width: 400,
                url: 'https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.png',
              },
            ],
            url: 'https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.png',
            width: 800,
          },
        ],
        isArtboard: true,
        name: 'Etch a Sketch',
      },
    ],
  };

  it('displays the correct document name', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <DocumentView {...props} />
        </MemoryRouter>,
      ),
    );

    expect(screen.getByText('Code test')).toBeInTheDocument();
  });

  it('displays the correct thumbnails', () => {
    render(
      renderWithTheme(
        <MemoryRouter>
          <DocumentView {...props} />
        </MemoryRouter>,
      ),
    );

    const thumbnails = screen.getAllByRole('button');
    expect(thumbnails.length).toBe(2);

    const [firstThumbnail, secondThumbnail] = thumbnails;

    const firstThumbnailImage = firstThumbnail.querySelector('img');
    expect(firstThumbnailImage.getAttribute('src')).toBe(
      'https://resources-live.sketch.cloud/files/abbb4734-7963-414c-8f09-108988579905.png',
    );
    const firstThumbnailText = firstThumbnail.querySelector('p');
    expect(firstThumbnailText.textContent).toBe('Xerox alto');

    const secondThumbnailImage = secondThumbnail.querySelector('img');
    expect(secondThumbnailImage.getAttribute('src')).toBe(
      'https://resources-live.sketch.cloud/files/3bf6e61f-d06d-4bc0-820b-2c5f60d2750c.png',
    );
    const secondThumbnailText = secondThumbnail.querySelector('p');
    expect(secondThumbnailText.textContent).toBe('Etch a Sketch');
  });
});
