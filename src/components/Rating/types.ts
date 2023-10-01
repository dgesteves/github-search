import { Dispatch, SetStateAction } from 'react';

export type RatingProps = {
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
};
