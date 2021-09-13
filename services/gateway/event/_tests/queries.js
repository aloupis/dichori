const NEW_ID = 31;

const EVENTS_QUERY = `
query EVENTS_QUERY {
    events {
      id
      title_en
      title_gr
      content_en
      content_gr
      event_start
      event_end
      author {
        id
        username
      }
      created_at
      updated_at
    }
  }  
`;

const INSERT_EVENT = `
mutation CREATE_EVENT_MUTATION {
  insert_event(input: {
    title_en: "Test English Title"
    title_gr: "Test Greek Title"
    content_en: "<p>Big English Content</p>"
    content_gr: "<p>Big Greek Content</p>"
    event_start: "2021-10-19T11:58:57Z"
    event_end:"2021-10-19T12:58:57Z"
  }) {
    id
    title_en
    title_gr
    content_gr
    content_en
    event_start
    event_end
    author {
      id
      username
    }
    created_at
    updated_at
  }
}
`;

const UPDATE_EVENT = `
  mutation UPDATE_EVENT_MUTATION {
    update_event(id: ${NEW_ID}, set: {
      event_end:"2021-10-19T13:58:57Z"
    }) {
      id
      title_en
      title_gr
      content_gr
      content_en
      event_start
      event_end
      author {
        id
        username
      }
      created_at
      updated_at
    }
  }
`;

const DELETE_EVENT = `
mutation DELETE_EVENT_MUTATION{
  delete_event(id: ${NEW_ID}) {
    success
    message
  }
}
`;

module.exports = {
  EVENTS_QUERY,
  INSERT_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  NEW_ID,
};
