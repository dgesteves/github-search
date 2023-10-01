import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SearchType } from '../../services/api/types';
import { useLazyQuery } from '@apollo/client';
import { LIST_REPOSITORIES } from '../../services/api/listRepositories';
import { DEFAULT_QUERY, LOCAL_STORAGE_KEY } from '../../constants/repositories';
import { FavoriteRepository } from '../../types';

export function useRepositories() {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const debouncedValue = useDebounce(query, 1000);
  const [favoriteRepos, setFavoriteRepos] = useLocalStorage<
    FavoriteRepository[]
  >(LOCAL_STORAGE_KEY, []);
  const [searchRepositories, { data, loading, error }] = useLazyQuery(
    LIST_REPOSITORIES,
    {
      variables: {
        query: debouncedValue,
        type: SearchType.Repository,
        first: 100,
      },
    }
  );

  useEffect(() => {
    searchRepositories();
  }, [debouncedValue, searchRepositories]);

  return {
    query,
    setQuery,
    favoriteRepos,
    setFavoriteRepos,
    data,
    loading,
    error,
  };
}
