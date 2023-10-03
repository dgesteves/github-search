import { Grid, Skeleton } from '@mui/material';
import { useCreateArray } from '../../hooks/useCreateArray';

export default function SkeletonGrid() {
  const elements = useCreateArray(12);

  return (
    <Grid container spacing={6}>
      {elements.map((element) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={element}>
          <Skeleton variant="rectangular" width={345} height={140} />
          <Skeleton width={345} height={50} />
          <Skeleton width={345} height={100} />
          <Skeleton width={345} height={20} />
          <Skeleton width={345} height={40} />
        </Grid>
      ))}
    </Grid>
  );
}
