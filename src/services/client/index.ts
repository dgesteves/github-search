import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as process from "process";


const httpLink = createHttpLink({
  uri: import.meta.env.VITE_APOLLO_CLIENT_URI,
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.DEV?import.meta.env.VITE_GITHUB_TOKEN:process.env.VITE_GITHUB_TOKEN}`,
    },
  };
});

console.log(import.meta.env.VITE_GITHUB_TOKEN);
console.log(process.env.VITE_GITHUB_TOKEN);

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
