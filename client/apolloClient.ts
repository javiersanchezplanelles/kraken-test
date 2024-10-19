import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.NODE_ENV === 'test' ? '' : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;
