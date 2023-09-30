import { createTheme, responsiveFontSizes } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: grey[500],
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: grey[900],
        },
      },
    },
  },
});

export const responsiveTheme = responsiveFontSizes(theme);
