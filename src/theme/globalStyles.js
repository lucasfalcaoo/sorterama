import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import Box from '@material-ui/core/Box';

const DARK_BLUE = '#1E5168';
const LIGHT_BLUE = '#2ca9d6';
const LIGHTER_BLUE = '#f1f4f9';
const WHITE = '#FFFFFF';
const LIGHT_YELLOW = '#fffaf7';

export const Root = withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
})(Box);

export const theme = createMuiTheme({
  root: {
    color: DARK_BLUE,
    backgroundColor: WHITE,
  },
  palette: {
    primary: {
      main: DARK_BLUE,
      light: LIGHTER_BLUE,
    },
    secondary: {
      main: LIGHT_BLUE,
      light: LIGHT_YELLOW,
    },
    error: {
      main: red[600],
      dark: red[800],
    },
    success: {
      main: green[600],
      dark: green[800],
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        color: DARK_BLUE,
      },
      colorSecondary: {
        color: DARK_BLUE,
        '&$checked': {
          color: DARK_BLUE,
        },
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: grey[600],
      },
      h4: {
        fontSize: '2.6rem',
        fontWeight: 500,
      },
      h5: {
        fontWeight: 500,
      },
    },
    MuiTableHead: {
      root: {
        MuiTableCell: {
          root: {
            backgroundColor: DARK_BLUE,
            color: WHITE,
          },
        },
      },
    },
    MuiTableRow: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0,0,0,.075)',
        },
      },
    },
    MuiTableCell: {
      body: {
        color: '#1E5168 !important',
      },
    },
    MuiTableSortLabel: {
      root: {
        color: '#FFFFFF !important',
      },
      active: {
        color: '#FFFFFF !important',
      },
      icon: {
        color: '#FFFFFF !important',
      },
    },
    MuiPaginationItem: {
      outlinedPrimary: {
        '&$selected': {
          backgroundColor: '#1E5168 !important',
          color: '#FFFFFF !important',
        },
      },
    },
    MuiSelect: {
      outlined: {
        color: DARK_BLUE,
        '&:focus': {
          backgroundColor: WHITE,
        },
        '&.Mui-disabled': {
          color: grey[500],
        },
      },
    },
    MuiFormControl: {
      root: {
        margin: '1rem 0',
      },
    },
    MuiMenuItem: {
      root: {
        color: DARK_BLUE,
      },
    },
    MuiOutlinedInput: {
      root: {
        backgroundColor: WHITE,
        color: DARK_BLUE,
      },
    },
  },
});
