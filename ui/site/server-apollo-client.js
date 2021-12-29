
import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log('process.env.NEXT_PUBLIC_GATEWAY_SERVER',process.env.NEXT_PUBLIC_GATEWAY_SERVER)
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GATEWAY_SERVER}/graphql`,
  cache: new InMemoryCache(),
});

export default client;