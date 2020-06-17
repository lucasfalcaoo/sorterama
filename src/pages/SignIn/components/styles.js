import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  container: {
    minHeight: '100vh',
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
