
import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log('process.env.NEXT_PUBLIC_GATEWAY',process.env.NEXT_PUBLIC_GATEWAY)

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_GATEWAY}/graphql`,
  cache: new InMemoryCache(),
});

export default client;