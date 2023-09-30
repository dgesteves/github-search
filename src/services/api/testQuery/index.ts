import { gql } from '@apollo/client';

export const LIST_REPOSITORIES = gql`
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
          nameWithOwner
          createdAt
          forkCount
          hasDiscussionsEnabled
          hasIssuesEnabled
          hasProjectsEnabled
          hasWikiEnabled
          isPrivate
          owner {
            id
            avatarUrl
            url
          }
          updatedAt
        }
      }
    }
  }
`;
