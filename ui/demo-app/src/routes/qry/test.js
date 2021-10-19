import { gql } from '@apollo/client/core/core.cjs.js';
import { client } from '$lib/Client.js';

export const post = async (request) => {
  try {
    const query = gql`
      query SETTINGS_QUERY {
        settings {
          header_menu_config
          footer_menu_config
          home_title_gr
          home_title_en
          home_content_gr
          home_content_en
          home_image_public_id
        }
      }
    `;
    const result = await client.query({
      query,
    });

    return {
      status: 200,
      body: {
        nodes: result.data.settings,
      },
    };
  } catch (err) {
    return {
      status: 500,
      error: 'Error retrieving data',
    };
  }
};
