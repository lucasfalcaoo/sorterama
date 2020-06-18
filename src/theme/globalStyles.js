import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const MAX_WIDTH = 576;
const DARK_GREEN = '#2d6a55';
const MEDIUM_GREEN = '#2f7d32';
const LIGHT_GREEN = '#8faea9';
const BACKGROUND_GREEN = '#f4f7f4';
const MEDIUM_GREY = '#8e8d93';

export const Root = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
  },
})(Box);

export const theme = createMuiTheme({
  root: {
    color: DARK_GREEN,
    backgroundColor: '#FFFFFF',
  },
  palette: {
    primary: {
      main: DARK_GREEN,
    },
    secondary: {
      main: MEDIUM_GREEN,
    },
    textSecondary: {
      main: BACKGROUND_GREEN,
    },
  },
  overrides: {
    MuiTypography: {
      colorTextPrimary: {
        color: MEDIUM_GREY,
      },
      colorTextSecondary: {
        color: LIGHT_GREEN,
      },
      subtitle2: {
        fontSize: '0.9rem',
      },
      h4: {
        fontSize: '1.8rem',
        fontWeight: 600,
      },
    },
    MuiButton: {
      label: {
        fontWeight: 600,
        padding: 6,
      },
    },
    InputLabel: {
      root: {
        color: DARK_GREEN,
        fontWeight: 600,
      },
    },
  },
});
