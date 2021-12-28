
import { gql } from "@apollo/client";
import client from "../../server-apollo-client";
import Page from "../../components/pages/Page";



export default function P({page,latestPosts}) {
    return <Page page={page} latestPosts={latestPosts}/>
}


export async function getServerSideProps(context) {
    const url = context.params.url ;
    const res = await client.query({
    query: gql`
    query PAGES_QUERY {
        pages(offset: 0, limit: 10, orderBy: { field: "page.id", direction: "desc" }) {
            id
            title_en
            title_gr
            content_en
            content_gr
            url
            image_public_id
            created_at
            updated_at
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
`
  });
  console.log({res})
  const data =res.data;

  return {
    props: {
      page: {...data.pages.find((x) => x.url === url),latestPosts:data.posts},
      
    },
  };
}