import { Card, IconButton, styled } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

export const StyledCard = styled(Card)(() => ({
  maxWidth: 345,
  backgroundColor: grey[900],
  border: 2,
  borderColor: deepPurple[500],

  '&:hover': {
    borderColor: deepPurple[300],
  },
}));

export const StyledIconButton = styled(IconButton)(() => ({
  marginLeft: 'auto',
}));
