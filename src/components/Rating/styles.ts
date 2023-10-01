import { IconButton, styled } from '@mui/material';

export const StyledRating = styled('section')(({ theme }) => ({
  marginLeft: 'auto',
}));

export const StyledStar = styled(IconButton)(({ theme }) => ({
  padding: 0,
}));
