import { gql } from '@apollo/client';

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

const UPDATE_SETTINGS_MUTATION = gql`
  mutation UPDATE_SETTINGS_MUTATION($set: SettingsSet!) {
    update_settings(set: $set) {
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

export { SETTINGS_QUERY, UPDATE_SETTINGS_MUTATION };
