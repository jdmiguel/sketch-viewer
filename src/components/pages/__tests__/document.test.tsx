import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
                        url: 'artboard_detail_1.png',
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
                  {
                    name: 'Second artboard mocked',
                    isArtboard: true,
                    files: [
                      {
                        url: 'artboard_detail_2.png',
                        height: 800,
                        width: 800,
                        scale: 1,
                        thumbnails: [
                          {
                            url: 'thumbnail_2.png',
                            height: 400,
                            width: 400,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: 'Third artboard mocked',
                    isArtboard: true,
                    files: [
                      {
                        url: 'artboard_detail_3.png',
                        height: 800,
                        width: 800,
                        scale: 1,
                        thumbnails: [
                          {
                            url: 'thumbnail_3.png',
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
  it('displays the correct title and thumbnails after loading', async () => {
    render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    // Show the document page after loading
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const thumbnails = await screen.findAllByRole('button');

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('Document name mocked');

    const [firstThumbnail, secondThumbnail, thirdThumbnail] = thumbnails;

    const firstThumbnailImage = firstThumbnail.querySelector('img');
    expect(firstThumbnailImage.getAttribute('src')).toBe('thumbnail_1.png');
    const firstThumbnailText = firstThumbnail.querySelector('p');
    expect(firstThumbnailText.textContent).toBe('First artboard mocked');

    const secondThumbnailImage = secondThumbnail.querySelector('img');
    expect(secondThumbnailImage.getAttribute('src')).toBe('thumbnail_2.png');
    const secondThumbnailText = secondThumbnail.querySelector('p');
    expect(secondThumbnailText.textContent).toBe('Second artboard mocked');

    const thirdThumbnailImage = thirdThumbnail.querySelector('img');
    expect(thirdThumbnailImage.getAttribute('src')).toBe('thumbnail_3.png');
    const thirdThumbnailText = thirdThumbnail.querySelector('p');
    expect(thirdThumbnailText.textContent).toBe('Third artboard mocked');
  });

  it('displays the artboard detail when clicking the first thumbnail', async () => {
    render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    // Show the document page after loading
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const [firstThumbnail] = await screen.findAllByRole('button');
    // Show the artboard detail
    await userEvent.click(firstThumbnail);

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('First artboard mocked');

    const artboardDetailImg = screen.getByAltText('First artboard mocked');
    expect(artboardDetailImg.getAttribute('src')).toBe('artboard_detail_1.png');
  });

  it('closes the artboard detail when clicking the close button', async () => {
    render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    // Show the document page after loading
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const [firstThumbnail] = await screen.findAllByRole('button');
    // Show the artboard detail
    await userEvent.click(firstThumbnail);

    const closeButton = screen.getAllByAltText('icon button')[0];
    // Hide the artboard detail
    await userEvent.click(closeButton);

    const header = screen.getByRole('banner');
    expect(header.querySelector('h2').textContent).toBe('Document name mocked');
  });

  it('shows the previous artboard detail when clicking the prev button', async () => {
    render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    // Show the document page after loading
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const [firstThumbnail] = await screen.findAllByRole('button');
    // Show the artboard detail
    await userEvent.click(firstThumbnail);

    const prevButton = screen.getAllByAltText('icon button')[1];
    // Show the prev artboard detail
    await userEvent.click(prevButton);

    const artboardDetailImg = screen.getByAltText('Third artboard mocked');
    expect(artboardDetailImg.getAttribute('src')).toBe('artboard_detail_3.png');
  });

  it('shows the next artboard detail when clicking the next button', async () => {
    render(
      <RenderWithRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RenderWithTheme>
            <Document />
          </RenderWithTheme>
        </MockedProvider>
      </RenderWithRouter>,
    );

    expect(screen.getByRole('progressbar')).toBeVisible();
    // Show the document page after loading
    await waitForElementToBeRemoved(screen.getByRole('progressbar'));

    const [firstThumbnail] = await screen.findAllByRole('button');
    // Show the artboard detail
    await userEvent.click(firstThumbnail);

    const nextButton = screen.getAllByAltText('icon button')[2];
    // Show the next artboard detail
    await userEvent.click(nextButton);

    const artboardDetailImg = screen.getByAltText('Second artboard mocked');
    expect(artboardDetailImg.getAttribute('src')).toBe('artboard_detail_2.png');
  });
});
