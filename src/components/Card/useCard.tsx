import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { FavoriteRepository } from '../../types';
import { useLocation } from 'react-router-dom';
import { Repository } from '../../services/api/types';

export function useCard(
  favoriteRepos: FavoriteRepository[],
  setFavoriteRepos: Dispatch<SetStateAction<FavoriteRepository[]>>,
  repository: FavoriteRepository
) {
  const findFavoriteRepo = useCallback(
    (repo: FavoriteRepository) =>
      favoriteRepos.find((favRepo) => favRepo.id === repo.id),
    [favoriteRepos]
  );

  const [rating, setRating] = useState(
    findFavoriteRepo(repository)?.rating || 0
  );
  const { pathname } = useLocation();

  const handleFavoriteRepo = useCallback(
    (repo: Repository | FavoriteRepository) => {
      findFavoriteRepo(repo)
        ? setFavoriteRepos((prevState) =>
            prevState.filter((favRepo) => favRepo.id !== repo.id)
          )
        : setFavoriteRepos((prevState) => [...prevState, { ...repo, rating }]);
    },
    [findFavoriteRepo, rating, setFavoriteRepos]
  );

  useEffect(() => {
    setFavoriteRepos((prevState) =>
      prevState.map((favRepo) =>
        favRepo.id === repository.id ? { ...favRepo, rating } : favRepo
      )
    );
  }, [rating, repository.id, setFavoriteRepos]);

  return { findFavoriteRepo, handleFavoriteRepo, rating, setRating, pathname };
}
