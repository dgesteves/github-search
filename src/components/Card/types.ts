import { FavoriteRepository } from '../../types';
import { Dispatch, SetStateAction } from 'react';

export type CardProps = {
  repository: FavoriteRepository;
  favoriteRepos: FavoriteRepository[];
  setFavoriteRepos: Dispatch<SetStateAction<FavoriteRepository[]>>;
};
