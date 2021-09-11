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

module.exports = {
  FIRST_PAGE_POSTS,
};
