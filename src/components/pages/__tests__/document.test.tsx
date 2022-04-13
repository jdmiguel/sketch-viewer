import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { GET_ARTBOARDS } from '../../../helpers/query';
import { MockedProvider, RenderWithRouter, RenderWithTheme } from '../../../helpers/testUtils';
import Document from '../document';

const mocks = [
  {
    request: {
      query: GET_ARTBOARDS,
      variables: {
        id: process.env.REACT_APP_FIRST_DOCUMENT_ID,
      },
    },
    result: {
      data: {
        share: {
          identifier: process.env.REACT_APP_FIRST_DOCUMENT_ID,
          version: {
            document: {
              name: 'Document name mocked',
              artboards: {
                entries: [
                  {
                    name: 'First artboard mocked',
                    isArtboard: true,
                    files: [
                      {
                        url: 'artboard_1.png',
                        height: 800,
                        width: 800,
                        scale: 1,
                        thumbnails: [
                          {
                            url: 'thumbnail_1.png',
                            height: 400,
                            width: 400,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
];

describe('<Document />', () => {
  it('displays the correct content after loading', async () => {
    const { debug } = render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    await screen.findByRole('button');
    debug();

    /*const thumbnail = await screen.findByRole('button');

    const thumbnailImage = thumbnail.querySelector('img');
    expect(thumbnailImage.getAttribute('src')).toBe('thumbnail_1.png');
    const firstThumbnailText = thumbnail.querySelector('p');
    expect(firstThumbnailText.textContent).toBe('First artboard mocked');*/
  });
});
