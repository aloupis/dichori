const rp = require('request-promise');

const API = 'http://localhost:7000/graphql';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbm9zLmFsb3VwaXNAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYzMTU0NTY1NX0.pW0BJq94omhUcGo5Lzo0l7mGyTUjIFaizKSuf6L-yJk';

const {
  EVENTS_QUERY,
  INSERT_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  NEW_ID,
} = require('./queries');

describe('Checking event resolvers', () => {
  it('Retrieves the events', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: EVENTS_QUERY },
      json: true,
    });
    expect(response.data.events.length).toEqual(30);
  });

  it('Does not insert event when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_EVENT },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Inserts event when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: INSERT_EVENT },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.insert_event.id).toEqual(`${NEW_ID}`);
    expect(response.data.insert_event.title_en).toEqual('Test English Title');
    expect(response.data.insert_event.title_gr).toEqual('Test Greek Title');
    expect(response.data.insert_event.event_start).toEqual('1634644737000');
    expect(response.data.insert_event.event_end).toEqual('1634648337000');
    expect(response.data.insert_event.author.username).toEqual('a_loop_is');
  });

  it('Does not update event when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_EVENT },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
  });

  it('Updates event when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: UPDATE_EVENT },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.update_event.id).toEqual(`${NEW_ID}`);
    expect(response.data.update_event.event_start).toEqual('1634644737000');
    expect(response.data.update_event.event_end).toEqual('1634651937000');
  });

  it('Does not delete event when unauthenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_EVENT },
      json: true,
    });
    expect(response.errors[0].extensions.code).toEqual('UNAUTHENTICATED');
    expect(response.data.delete_event.success).toEqual(false);
  });

  it('Deletes event when authenticated', async () => {
    const response = await rp({
      method: 'POST',
      uri: API,
      body: { query: DELETE_EVENT },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      json: true,
    });
    expect(response.data.delete_event.success).toEqual(true);
    expect(response.data.delete_event.message).toEqual(null);
  });
});
