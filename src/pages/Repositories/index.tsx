import { Repository } from '../../services/api/types';
import { Grid } from '@mui/material';
import { StyledAlert, StyledFinder } from './styles';
import Search from '../../components/Search';
import Card from '../../components/Card';
import { useRepositories } from './useRepositories';
import SkeletonGrid from '../../components/SkeletonGrid';
import {
  SEARCH_COLOR,
  SEARCH_LABEL,
  WARNING_ALERT_TEXT,
} from '../../constants/repositories';
import { GENERIC_ERROR } from '../../constants/error';

export default function Repositories() {
  const {
    query,
    setQuery,
    favoriteRepos,
    setFavoriteRepos,
    data,
    loading,
    error,
  } = useRepositories();

  return (
    <StyledFinder>
      <Search
        label={SEARCH_LABEL}
        color={SEARCH_COLOR}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error && (
        <StyledAlert variant="filled" severity="error">
          Error alert: {error.message || GENERIC_ERROR}
        </StyledAlert>
      )}
      {data?.search?.nodes?.length === 0 && (
        <StyledAlert variant="filled" severity="warning">
          {WARNING_ALERT_TEXT}
        </StyledAlert>
      )}
      {loading ? (
        <SkeletonGrid number={20} />
      ) : (
        <Grid container spacing={6}>
          {data?.search?.nodes?.map((node) => {
            const repository = node as Repository;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={repository.id}>
                <Card
                  repository={repository}
                  favoriteRepos={favoriteRepos}
                  setFavoriteRepos={setFavoriteRepos}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </StyledFinder>
  );
}
