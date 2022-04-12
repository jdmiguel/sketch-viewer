import { gql } from '@apollo/client';

export const getQuery = (id: string) => gql`
  query {
    share(id: "${id}") {
      identifier
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
