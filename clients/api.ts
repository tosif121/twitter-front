import { GraphQLClient } from 'graphql-request';
const isClient = typeof window !== 'undefined';

export const graphqlClient = new GraphQLClient('https://d2lz915os3y7pb.cloudfront.net/', {
  headers: () => ({
    Authorization: isClient ? `Bearer ${window.localStorage.getItem('__twitter_token')}` : '',
  }),
});
