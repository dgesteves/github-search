import { render } from '@testing-library/react';
import Card from './index';
import { client } from '../../services/client';
import { ApolloProvider } from '@apollo/client';
import { vi } from 'vitest';
import { Repository } from '../../services/api/types';
import { FavoriteRepository } from '../../types';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  const mockRepository = {
    id: 'test',
    url: 'test',
    name: 'test',
    description: 'test',
    updatedAt: '2021-10-10',
    openGraphImageUrl: 'test',
  };
  const mockFavoriteRepo = { ...mockRepository, rating: 5 };
  const mockFavoriteRepos = [mockFavoriteRepo];
  const mockSetFavoriteRepos = vi.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <ApolloProvider client={client}>
        <MemoryRouter>
          <Card
            repository={mockRepository as Repository}
            favoriteRepos={mockFavoriteRepos as FavoriteRepository[]}
            setFavoriteRepos={mockSetFavoriteRepos}
          />
        </MemoryRouter>
      </ApolloProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
