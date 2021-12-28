
import { gql } from "@apollo/client";
import client from "../../server-apollo-client";
import Post from "../../components/posts/Post";



export default function P({post,latestPosts}) {
     return <Post post={post}/>

}


export async function getServerSideProps(context) {
    try{
    const id = context.params.id 

     const { data } = await client.query({
    query: gql`
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
        posts(offset: 0, limit: 3, orderBy: { field: "created_at", direction: "desc" }) {
            id
            title_en
            title_gr
            summary_en
            summary_gr
            image_public_id
        }
    }
`,
variables: {
    id: +id
}
  });

  return {
    props: {
      post: {...data.post_by_pk,latestPosts:data.posts},
    //   latestPosts:data.posts
    },
  };
}
catch(err){
    console.log({err})
}
}