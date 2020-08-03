import { makeStyles } from '@material-ui/core/styles';
import { MAX_WIDTH } from '../../../theme/globalStyles';

const LIGHT_HEADER = '#dee7e5';
const MEDIUM_HEADER = '#8faea9';
const MEDIUM_CONTENT = '#c6d6d4';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    flex: 1,
    alignContent: 'space-between',
    maxWidth: MAX_WIDTH,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    padding: props => (props.openTab === 1 ? spacing(0) : spacing(2)),
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    overflow: 'auto',
    height: props => props.height - 144,
  },
  wrapperBg: {
    backgroundColor: props => {
      if (props.status === 'warning') {
        return palette.warning.light;
      }
      if (props.status === 'error') {
        return palette.error.light;
      }
      return 'white';
    },
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
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    backgroundColor: palette.textSecondary.main,
  },
  cardHeader: {
    padding: `${spacing(1)}px !important`,
    backgroundColor: MEDIUM_HEADER,
    color: 'white',
  },
  cardContent: {
    padding: spacing(1),
    paddingTop: `${spacing(1)}px !important`,
    paddingBottom: `${spacing(1)}px !important`,
    backgroundColor: MEDIUM_CONTENT,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  typography: {
    textTransform: 'uppercase',
  },
  footer: {
    padding: spacing(1),
  },
  mainButton: {
    justifyContent: 'space-between',
  },
  sendButton: {
    marginTop: spacing(2),
  },
  select: {
    color: palette.textPrimary.main,
    fontWeight: 600,
  },
  tableHead: {
    backgroundColor: LIGHT_HEADER,
  },
  tableDocument: {
    minWidth: 135,
  },
  form: {
    padding: spacing(2),
  },
}));
