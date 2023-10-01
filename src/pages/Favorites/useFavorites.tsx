import { useMemo, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEY } from '../../constants/repositories';
import { FavoriteRepository } from '../../types';

export function useFavorites() {
  const [filter, setFilter] = useState('');
  const [favoriteRepos, setFavoriteRepos] = useLocalStorage<
    FavoriteRepository[]
  >(LOCAL_STORAGE_KEY, []);

  const filteredFavoriteRepos = useMemo(
    () =>
      favoriteRepos.filter((repo) =>
        repo.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [favoriteRepos, filter]
  );

  return {
    setFilter,
    filter,
    filteredFavoriteRepos,
    setFavoriteRepos,
    favoriteRepos,
  };
}
