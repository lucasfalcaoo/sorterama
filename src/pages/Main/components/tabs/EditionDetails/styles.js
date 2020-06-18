import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    padding: spacing(2),
    backgroundColor: '#FFFFFF',
  },
  grid: {
    marginBottom: spacing(5),
  },
  typography: {
    textTransform: 'uppercase',
  },
}));
