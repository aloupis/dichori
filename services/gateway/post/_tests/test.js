const rp = require('request-promise');

const API = 'http://localhost:7000/graphql';

const { FIRST_PAGE_POSTS } = require('./queries');

describe('Checking posts resolver', () => {
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
});
