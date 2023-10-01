import { Grid, Skeleton } from '@mui/material';
import { useMemo } from 'react';

export default function SkeletonGrid() {
  const elements = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);
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
