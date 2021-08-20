import { gql } from '@apollo/client';

const EVENTS_QUERY = gql`
  query events {
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

const CREATE_EVENT_MUTATION = gql`
  mutation CREATE_EVENT_MUTATION($input: EventInput!) {
    insert_event(input: $input) {
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

const UPDATE_EVENT_MUTATION = gql`
  mutation UPDATE_EVENT_MUTATION($id: Int!, $set: EventSet!) {
    update_event(id: $id, set: $set) {
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

const DELETE_EVENT_MUTATION = gql`
  mutation DELETE_EVENT_MUTATION($id: Int!) {
    delete_event(id: $id) {
      success
      message
    }
  }
`;

export {
  EVENTS_QUERY,
  CREATE_EVENT_MUTATION,
  UPDATE_EVENT_MUTATION,
  DELETE_EVENT_MUTATION,
};
