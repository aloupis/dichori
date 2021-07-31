import { gql } from '@apollo/client';

const PAGES_QUERY = gql`
  query PAGES_QUERY($offset: Int!, $limit: Int!, $orderBy: OrderBy) {
    pages(offset: $offset, limit: $limit, orderBy: $orderBy) {
      id
      title_en
      title_gr
      content_gr
      content_en
      url
      author {
        id
        username
      }
      created_at
      updated_at
    }
    pages_count
  }
`;

const CREATE_PAGE_MUTATION = gql`
  mutation CREATE_PAGE_MUTATION($input: PageInput!) {
    insert_page(input: $input) {
      id
      title_en
      title_gr
      content_gr
      content_en
      url
      author {
        id
        username
      }
      created_at
      updated_at
    }
  }
`;

const UPDATE_PAGE_MUTATION = gql`
  mutation UPDATE_PAGE_MUTATION($id: Int!, $set: PageSet!) {
    update_page(id: $id, set: $set) {
      id
      title_en
      title_gr
      content_gr
      content_en
      url
      image_public_id
      author {
        id
        username
      }
      created_at
      updated_at
    }
  }
`;

const PAGE_BY_PK_QUERY = gql`
  query PAGES_QUERY($id: Int!) {
    page_by_pk(id: $id) {
      id
      title_en
      title_gr
      content_gr
      content_en
      url
      image_public_id
      author {
        id
        username
      }
      created_at
      updated_at
    }
  }
`;

const DELETE_PAGE_MUTATION = gql`
  mutation DELETE_PAGE_MUTATION($id: Int!) {
    delete_page(id: $id) {
      success
      message
    }
  }
`;

export {
  PAGES_QUERY,
  CREATE_PAGE_MUTATION,
  UPDATE_PAGE_MUTATION,
  PAGE_BY_PK_QUERY,
  DELETE_PAGE_MUTATION,
};
