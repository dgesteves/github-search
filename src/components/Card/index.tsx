import {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { StyledCard, StyledIconButton } from './styles';
import Rating from '../Rating';
import { FAVORITES_PATH } from '../../constants/router';
import { useCard } from './useCard';
import { CardProps } from './types';

export default function Card({
  repository,
  favoriteRepos,
  setFavoriteRepos,
}: CardProps) {
  const { findFavoriteRepo, handleFavoriteRepo, rating, setRating, pathname } =
    useCard(favoriteRepos, setFavoriteRepos, repository);

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={repository.openGraphImageUrl}
        alt={repository.name}
      />
      <CardHeader title={repository.name} />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {repository.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {`Last Update: ${new Date(repository.updatedAt).toDateString()}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="favorite"
          onClick={() => handleFavoriteRepo(repository)}
        >
          {findFavoriteRepo(repository) ? (
            <FavoriteIcon color={'primary'} />
          ) : (
            <FavoriteBorderIcon color="secondary" />
          )}
        </IconButton>
        {pathname === FAVORITES_PATH && (
          <Rating rating={rating} setRating={setRating} />
        )}
        <StyledIconButton
          aria-label="open in new tab"
          onClick={() => window.open(repository.url, '_blank')}
        >
          <OpenInNewIcon color="primary" />
        </StyledIconButton>
      </CardActions>
    </StyledCard>
  );
}
