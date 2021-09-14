const rp = require('request-promise');

const API = 'http://localhost:7000/graphql';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbm9zLmFsb3VwaXNAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYzMTYzMTUwMH0.u42IQpOJKtwI8VWKN903cpDFDJOIwUzRNeiTI1dk0us';

const { SETTINGS, UPDATE_SETTINGS } = require('./queries');

describe('Checking settings resolvers', () => {
  it('Retrieves settings', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: SETTINGS },
      json: true,
    });
    expect(response.data.settings).toHaveProperty('header_menu_config');
    expect(response.data.settings).toHaveProperty('footer_menu_config');
    expect(response.data.settings).toHaveProperty('home_title_en');
    expect(response.data.settings).toHaveProperty('home_title_gr');
    expect(response.data.settings).toHaveProperty('home_content_gr');
    expect(response.data.settings).toHaveProperty('home_content_en');
    expect(response.data.settings).toHaveProperty('home_image_public_id');
  });

  it('Does not update settings when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_SETTINGS },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Update english home title', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_SETTINGS },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.update_settings.home_title_en).toEqual(
      'New Home English Title'
    );
  });
});
