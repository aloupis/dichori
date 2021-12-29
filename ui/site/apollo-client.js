
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GATEWAY?`${process.env.NEXT_PUBLIC_GATEWAY}/graphql`: 'https://dichori-gateway.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;