import { GET_ARTBOARDS } from 'src/helpers/query';
import documentPath from 'src/assets/document.png';
import documentBonusPath from 'src/assets/document-bonus.png';

export const documents = [
  { id: process.env.REACT_APP_FIRST_DOCUMENT_ID, imgPath: documentPath, name: 'Code test' },
  {
    id: process.env.REACT_APP_SECOND_DOCUMENT_ID,
    imgPath: documentBonusPath,
    name: 'Code test (bonus)',
  },
];

export const documentsMocked = [
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
