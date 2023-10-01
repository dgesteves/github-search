import { styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const StyledFinder = styled('main')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'calc(100vh - 64px)',
  width: '100vw',
  position: 'relative',
  overflow: 'hidden',
}));

export const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'center',
  padding: theme.spacing(4),
}));

export const StyledSubHeader = styled(Typography)(({ theme }) => ({
  color: grey[400],
  textAlign: 'center',
  padding: theme.spacing(4),
  maxWidth: '700px',
}));

export const StyledExampleRepo = styled('div')(({ theme }) => ({
  height: '90vh',
  width: '40vw',
  backgroundImage: `url(src/ui/img/example-repo.png)`,
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: theme.spacing(4),
  border: `1px solid ${grey[900]}`,
  borderRadius: theme.spacing(3),
}));

export const StyledCircle = styled('div')(() => ({
  height: 'calc(100vh - 64px)',
  width: '100vw',
  backgroundImage: `url(src/ui/img/6455e25e2a898c9b7fe25637_hero_circle-smaill-bg.svg)`,
  transform: 'scale(1.2)',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'absolute',
  zIndex: -1,
}));
