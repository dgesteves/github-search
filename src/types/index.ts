import { Repository } from '../services/api/types';

export type FavoriteRepository = Repository & { rating?: number };
