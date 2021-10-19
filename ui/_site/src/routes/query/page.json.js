import { gql } from '@apollo/client/core/core.cjs.js';
// import { client } from '$lib/utilities/apolloClient.js';
import { client } from '../../lib/Client';

export const post = async (request) => {
  const { url } = request.body;
  try {
    const query = gql`
      query PAGES_QUERY {
        pages(
          offset: 0
          limit: 10
          orderBy: { field: "page.id", direction: "desc" }
        ) {
          id
          title_en
          title_gr
          content_en
          content_gr
          url
          created_at
          updated_at
          author {
            id
            username
          }
        }
        pages_count
      }
    `;

    const result = await client.query({
      query,
    });

    return {
      status: 200,
      body: {
        page: result.data.pages.some((x) => x.url === url)
          ? result.data.pages.find((x) => x.url === url)
          : result.data.pages[0],
      },
    };
  } catch (err) {
    return {
      status: 500,
      error: 'Error retrieving data',
    };
  }
};
