import { render, screen } from '@testing-library/react';
import { RenderWithRouter, RenderWithTheme } from '../../../helpers/testUtils';
import { lightTheme } from '../../../helpers/theme';
import DocumentView from '../DocumentView';

describe('<DocumentView />', () => {
  const props = {
    documentName: 'Document name mocked',
    artboards: [
      {
        files: [
          {
            height: 800,
            scale: 1,
            thumbnails: [
              {
                height: 400,
                width: 400,
                url: 'thumbnail_1.png',
              },
            ],
            url: 'artboard_1.png',
            width: 800,
          },
        ],
        isArtboard: true,
        name: 'First artboard mocked',
      },
    ],
  };

  it('displays the correct document name', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <DocumentView {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    expect(screen.getByText('Document name mocked')).toBeInTheDocument();
  });

  it('displays the correct thumbnail', () => {
    render(
      <RenderWithRouter>
        <RenderWithTheme>
          <DocumentView {...props} />
        </RenderWithTheme>
      </RenderWithRouter>,
    );

    const thumbnail = screen.getAllByRole('button')[1];

    const thumbnailImage = thumbnail.querySelector('img');
    expect(thumbnailImage.getAttribute('src')).toBe('thumbnail_1.png');
    const firstThumbnailText = thumbnail.querySelector('p');
    expect(firstThumbnailText.textContent).toBe('First artboard mocked');
  });
});
