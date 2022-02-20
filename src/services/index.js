import { request, gql } from "graphql-request";

const qraphqlAPI = process.env.REACT_APP_API_KEY;

export async function getData() {
  const query = gql`
    query MyQuery {
      categoriesConnection {
        edges {
          node {
            id
            image {
              url
            }
            name
            items {
              id
              material
              name
              price
              image {
                url
              }
            }
          }
        }
      }
    }
  `;
  const results = await request(qraphqlAPI, query);

  return results.categoriesConnection;
}
