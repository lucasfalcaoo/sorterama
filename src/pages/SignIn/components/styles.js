import { makeStyles } from '@material-ui/core/styles';
import { MAX_WIDTH } from '../../../theme/globalStyles';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    minHeight: '100vh',
    maxWidth: MAX_WIDTH,
    padding: spacing(1),
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  paper: {
    textAlign: 'center',
    padding: spacing(4),
  },
  logo: {
    marginBottom: spacing(5),
  },
}));
