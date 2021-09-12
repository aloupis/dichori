const rp = require('request-promise');

const API = 'http://localhost:7000/graphql';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbm9zLmFsb3VwaXNAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYzMTM1MjkzN30.JEwO0lIEITdj-nyv3KbWWe6lf3CtE4HS_Y4ECRcP2HM';

const {
  FIRST_PAGE_PAGES,
  ORDER_BY_PAGES,
  INSERT_PAGE,
  UPDATE_PAGE,
  DELETE_PAGE,
  NEW_ID,
} = require('./queries');

describe('Checking pages resolvers', () => {
  it('Retrieves the first page of pages', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: FIRST_PAGE_PAGES },
      json: true,
    });
    expect(response.data.pages.length).toEqual(10);
    expect(response.data.pages_count).toEqual(25);
  });

  it('Orders pages by title_en', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: ORDER_BY_PAGES },
      json: true,
    });

    expect(response.data.pages.length).toEqual(10);
    expect(response.data.pages_count).toEqual(25);
    expect(response.data.pages[0].title_en).toEqual('Black Angel');
  });

  it('Does not insert page when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_PAGE },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Inserts page when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_PAGE },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.insert_page.id).toEqual(`${NEW_ID}`);
    expect(response.data.insert_page.title_en).toEqual('Test English Title');
    expect(response.data.insert_page.title_gr).toEqual('Test Greek Title');
    expect(response.data.insert_page.url).toEqual('/page');
    expect(response.data.insert_page.author.username).toEqual('a_loop_is');
  });

  it('Does not update page when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_PAGE },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Updates page when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_PAGE },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.update_page.id).toEqual(`${NEW_ID}`);
    expect(response.data.update_page.title_en).toEqual(
      'Updated Test English Title'
    );
  });

  it('Does not delete page when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_PAGE },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
    expect(response.data.delete_page.success).toEqual(false);
  });

  it('Deletes page when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_PAGE },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.delete_page.success).toEqual(true);
    expect(response.data.delete_page.message).toEqual(null);
  });
});
