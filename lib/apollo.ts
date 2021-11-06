import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;
function createApolloClient() {
  return new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const client = apolloClient ?? createApolloClient();
  if (initialState) {
    client.cache.restore(initialState);
  }
  if (typeof window === 'undefined') return client;
  if (!apolloClient) apolloClient = client;

  return client;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
