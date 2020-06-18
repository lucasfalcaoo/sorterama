import { makeStyles } from '@material-ui/core/styles';
import { MAX_WIDTH } from '../../../theme/globalStyles';

const LIGHT_HEADER = '#dee7e5';
const LIGHT_CONTENT = '#f4f7f6';
const MEDIUM_HEADER = '#c6d6d4';
const MEDIUM_CONTENT = '#dee7e5';
const DARK_HEADER = '#8faea9';
const DARK_CONTENT = '#c6d6d4';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    maxWidth: MAX_WIDTH,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    padding: spacing(2),
    backgroundColor: '#FFFFFF',
  },
  divider: {
    marginBottom: spacing(5),
  },

  grid: {
    marginBottom: spacing(2),
    borderBottom: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  gridComplement: {
    marginTop: spacing(2),
    marginBottom: 0,
  },
  paper: {
    padding: spacing(2),
    backgroundColor: palette.textSecondary.main,
  },
  cardHeader: {
    padding: spacing(1),
    backgroundColor: index => {
      if (index === 0) {
        return LIGHT_HEADER;
      }
      if (index === 1) {
        return MEDIUM_HEADER;
      }
      return DARK_HEADER;
    },
  },
  cardContent: {
    padding: spacing(1),
    paddingBottom: `${spacing(1)}px !important`,
    backgroundColor: index => {
      if (index === 0) {
        return LIGHT_CONTENT;
      }
      if (index === 1) {
        return MEDIUM_CONTENT;
      }
      return DARK_CONTENT;
    },
  },
  title: {
    textTransform: 'uppercase',
    // fontSize: 10,
    fontWeight: 600,
  },
  typography: {
    textTransform: 'uppercase',
  },
  footer: {
    padding: spacing(1),
  },
}));
