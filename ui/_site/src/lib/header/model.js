import { gql } from '@apollo/client/core/core.cjs.js';

const SETTINGS_QUERY = gql`
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

export { SETTINGS_QUERY };
