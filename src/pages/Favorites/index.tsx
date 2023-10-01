import { StyledAlert, StyledFavorites } from './styles';
import Search from '../../components/Search';
import { Grid } from '@mui/material';
import { ALERT_MESSAGE, SEARCH_LABEL } from '../../constants/favorites';
import { SEARCH_COLOR } from '../../constants/repositories';
import Card from '../../components/Card';
import { useFavorites } from './useFavorites';

export default function Favorites() {
  const {
    setFilter,
    filter,
    filteredFavoriteRepos,
    setFavoriteRepos,
    favoriteRepos,
  } = useFavorites();

  return (
    <StyledFavorites>
      <Search
        label={SEARCH_LABEL}
        color={SEARCH_COLOR}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {(favoriteRepos.length === 0 || filteredFavoriteRepos.length === 0) && (
        <StyledAlert variant="filled" severity="warning">
          {ALERT_MESSAGE}
        </StyledAlert>
      )}
      <Grid container spacing={6}>
        {filteredFavoriteRepos.map((favRepo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={favRepo.id}>
            <Card
              repository={favRepo}
              favoriteRepos={favoriteRepos}
              setFavoriteRepos={setFavoriteRepos}
            />
          </Grid>
        ))}
      </Grid>
    </StyledFavorites>
  );
}
