import { Alert, styled } from '@mui/material';

export const StyledFinder = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100vh - 64px)',
  width: '100vw',
  position: 'relative',
  padding: theme.spacing(6),
}));

export const StyledAlert = styled(Alert)(() => ({
  width: '50%',
  marginBottom: '40px',
}));
