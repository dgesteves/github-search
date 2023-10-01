import { graphql } from '../types';

export const LIST_REPOSITORIES = graphql(`
  query ListRepositories($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          url
          openGraphImageUrl
          description
          name
          updatedAt
        }
      }
    }
  }
`);
