import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'test' ? '' : 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default client;
