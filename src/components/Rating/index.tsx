import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { StyledRating, StyledStar } from './styles';
import { RatingProps } from './types';
import { useCreateArray } from '../../hooks/useCreateArray';

export default function Rating({ rating, setRating }: RatingProps) {
  const ratings = useCreateArray(5);

  return (
    <StyledRating>
      {ratings.map((item) => (
        <StyledStar
          aria-label="star"
          key={item}
          onClick={() =>
            setRating((prev) => (prev === 1 && item === 1 ? 0 : item))
          }
        >
          {rating >= item ? (
            <StarIcon color="primary" />
          ) : (
            <StarBorderIcon color="secondary" />
          )}
        </StyledStar>
      ))}
    </StyledRating>
  );
}
