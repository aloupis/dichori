import { gql } from "@apollo/client";
import client from "../../server-apollo-client";
import PostsContainer from "../../components/posts/PostsContainer";


export default function Posts({ posts }) {
  return <PostsContainer posts={posts}/>

}

export async function getServerSideProps() {
    const offset =0;
    const limit =10;
    const orderBy = null;
  const { data } = await client.query({
    query: gql`
    query POSTS_QUERY($offset: Int!, $limit: Int!, $orderBy: OrderBy) {
        posts(offset: $offset, limit: $limit, orderBy: $orderBy) {
            id
            title_en
            title_gr
            summary_en
            summary_gr
            image_public_id
            created_at
            updated_at
            author {
                id
                username
            }
        }
        posts_count
    }
`,
variables: { offset: +offset, limit: +limit, orderBy }
  });

  return {
    props: {
      posts: data.posts
    },
  };
}