import { makeStyles } from '@material-ui/core/styles';
import { MAX_WIDTH } from '../../../theme/globalStyles';

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#FFFFFF',
    maxWidth: MAX_WIDTH,
  },
}));
