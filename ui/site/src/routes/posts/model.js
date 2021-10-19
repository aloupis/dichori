import { gql } from '@apollo/client/core/core.cjs.js';

const POST_BY_PK_QUERY = gql`
  query POSTS_QUERY($id: Int!) {
    post_by_pk(id: $id) {
      id
      title_en
      content_en
      title_gr
      summary_en
      summary_gr
      content_gr
      created_at
      updated_at
      image_public_id
      author {
        id
        username
      }
    }
  }
`;

export { POST_BY_PK_QUERY };