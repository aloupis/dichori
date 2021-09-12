const NEW_ID = 26;

const FIRST_PAGE_PAGES = `
query PAGES_QUERY {
    pages(
      offset: 0
      limit: 10
      orderBy: { field: "page.id", direction: "desc" }
    ) {
      id
      title_en
      title_gr
      content_en
      content_gr
      url
      created_at
      updated_at
      author {
        id
        username
      }
    }
    pages_count
  }  
`;

const ORDER_BY_PAGES = `
query PAGES_QUERY {
    pages(
      offset: 0
      limit: 10
      orderBy: { field: "page.title_en", direction: "asc" }
    ) {
      id
      title_en
      title_gr
      content_en
      content_gr
      url
      created_at
      updated_at
      author {
        id
        username
      }
    }
    pages_count
  }  
`;

const INSERT_PAGE = `
mutation CREATE_PAGE_MUTATION {
  insert_page(input: {
    title_en: "Test English Title"
    title_gr: "Test Greek Title"
    content_en: "<p>Big English Content</p>"
    content_gr: "<p>Big Greek Content</p>"
    url: "/page"
  }) {
    id
    title_en
    title_gr
    content_en
    content_gr
    url
    created_at
    updated_at
    author {
      id
      username
    }
  }
}
`;

const UPDATE_PAGE = `
  mutation UPDATE_PAGE_MUTATION {
    update_page(id: ${NEW_ID}, set: {
      title_en: "Updated Test English Title"
    }) {
      id
      title_en
      title_gr
      content_en
      content_gr
      url
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

const DELETE_PAGE = `
mutation DELETE_PAGE_MUTATION {
  delete_page(id: ${NEW_ID}) {
    success
    message
  }
}
`;

module.exports = {
  FIRST_PAGE_PAGES,
  ORDER_BY_PAGES,
  INSERT_PAGE,
  UPDATE_PAGE,
  DELETE_PAGE,
  NEW_ID,
};
