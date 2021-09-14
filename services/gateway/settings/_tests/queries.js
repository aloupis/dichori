const SETTINGS = `
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

const UPDATE_SETTINGS = `
  mutation UPDATE_SETTINGS_MUTATION {
    update_settings(set: { home_title_en: "New Home English Title" }) {
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

module.exports = {
  SETTINGS,
  UPDATE_SETTINGS,
};
