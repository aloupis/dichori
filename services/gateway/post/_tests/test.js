const rp = require('request-promise');

const API = 'http://localhost:7000/graphql';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbm9zLmFsb3VwaXNAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYzMTM1MjkzN30.JEwO0lIEITdj-nyv3KbWWe6lf3CtE4HS_Y4ECRcP2HM';
// To be changed accordingly

const {
  FIRST_PAGE_POSTS,
  ORDER_BY_POSTS,
  INSERT_POST,
  UPDATE_POST,
  DELETE_POST,
  NEW_ID,
} = require('./queries');

describe('Checking posts resolvers', () => {
  it('Retrieves the first page of posts', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: FIRST_PAGE_POSTS },
      json: true,
    });
    expect(response.data.posts.length).toEqual(10);
    expect(response.data.posts_count).toEqual(50);
  });

  it('Orders posts by summary_en', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: ORDER_BY_POSTS },
      json: true,
    });
    expect(response.data.posts.length).toEqual(10);
    expect(response.data.posts_count).toEqual(50);
    expect(response.data.posts[0].summary_en).toEqual(
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis.'
    );
  });

  it('Does not insert post when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_POST },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Inserts post when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_POST },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.insert_post.id).toEqual(`${NEW_ID}`);
    expect(response.data.insert_post.title_en).toEqual('Test English Title');
    expect(response.data.insert_post.title_gr).toEqual('Test Greek Title');
    expect(response.data.insert_post.summary_en).toEqual(
      'Short English Summary'
    );
    expect(response.data.insert_post.summary_gr).toEqual('Short Greek Summary');
    expect(response.data.insert_post.author.username).toEqual('a_loop_is');
  });

  it('Does not update post when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_POST },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Updates post when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_POST },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.update_post.id).toEqual(`${NEW_ID}`);
    expect(response.data.update_post.title_en).toEqual(
      'Updated Test English Title'
    );
  });

  it('Does not delete post when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_POST },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
    expect(response.data.delete_post.success).toEqual(false);
  });

  it('Deletes post when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_POST },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.delete_post.success).toEqual(true);
    expect(response.data.delete_post.message).toEqual(null);
  });
});
