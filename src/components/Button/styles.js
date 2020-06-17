import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginBottom: dense => (dense ? 0 : spacing(5)),
  },
}));
