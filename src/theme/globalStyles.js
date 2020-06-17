import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const MAX_WIDTH = 576;
const DARK_GREEN = '#2d6a55';
const LIGHT_GREEN = '#8faea9';

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
      main: LIGHT_GREEN,
    },
  },
  overrides: {
    MuiTypography: {
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
