const NEW_ID = 51;

const FIRST_PAGE_POSTS = `
query POSTS_QUERY {
    posts(
      offset: 0
      limit: 10
      orderBy: { field: "post.id", direction: "desc" }
    ) {
      id
      title_en
      title_gr
      summary_en
      summary_gr
      created_at
      updated_at
      author {
        id
        username
      }
    }
    posts_count
  }  
`;

const ORDER_BY_POSTS = `
query POSTS_QUERY {
    posts(
      offset: 0
      limit: 10
      orderBy: { field: "post.summary_en", direction: "asc" }
    ) {
      id
      title_en
      title_gr
      summary_en
      summary_gr
      created_at
      updated_at
      author {
        id
        username
      }
    }
    posts_count
  }  
`;

const INSERT_POST = `
mutation CREATE_POST_MUTATION {
  insert_post(input: {
    title_en: "Test English Title"
    title_gr: "Test Greek Title"
    content_en: "<p>Big English Content</p>"
    content_gr: "<p>Big Greek Content</p>"
    summary_en: "Short English Summary"
    summary_gr: "Short Greek Summary"
  }) {
    id
    title_en
    title_gr
    summary_en
    summary_gr
    created_at
    updated_at
    author {
      id
      username
    }
  }
}
`;

const UPDATE_POST = `
  mutation UPDATE_POST_MUTATION {
    update_post(id: ${NEW_ID}, set: {
      title_en: "Updated Test English Title"
    }) {
      id
      title_en
      title_gr
      summary_en
      summary_gr
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

const DELETE_POST = `
mutation DELETE_POST_MUTATION {
  delete_post(id: ${NEW_ID}) {
    success
    message
  }
}
`;

module.exports = {
  FIRST_PAGE_POSTS,
  ORDER_BY_POSTS,
  INSERT_POST,
  UPDATE_POST,
  DELETE_POST,
  NEW_ID,
};
