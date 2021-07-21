import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GATEWAY
    ? `${process.env.REACT_APP_GATEWAY}/graphql`
    : // : `https://dichori-nginx.herokuapp.com/gateway/graphql`,
      `https://dichori-gateway.herokuapp.com/graphql`,
});

export const getApolloClient = () =>
  new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
