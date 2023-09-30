import { styled, Typography } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { grey } from '@mui/material/colors';

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: grey[800],
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  height: '64px',
}));

export const StyledLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
}));

export const StyledLogoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: '1.5rem',
  textTransform: 'uppercase',
}));

export const StyledTabs = styled('nav')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  flexGrow: 1,
}));

export const StyledTab = styled('div')<{ selected: boolean }>(
  ({ theme, selected }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    padding: `0 ${theme.spacing(2)}`,
    borderBottom: selected ? `3px solid ${theme.palette.primary.main}` : 'none',

    '&:hover': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,

      '& p': {
        color: theme.palette.text.primary,
      },
    },
  })
);

export const StyledTabText = styled(Typography)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    color: selected ? theme.palette.text.primary : grey[400],
    fontWeight: 500,
    textTransform: 'uppercase',
  })
);