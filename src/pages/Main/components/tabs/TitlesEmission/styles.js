import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  container: {
    padding: spacing(2),
    backgroundColor: '#FFFFFF',
  },
  paper: {
    padding: spacing(2),
    backgroundColor: palette.textSecondary.main,
  },
  grid: {
    marginBottom: spacing(2),
    borderBottom: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
}));
