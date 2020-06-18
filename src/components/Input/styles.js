import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing }) => ({
  root: {
    marginBottom: dense => (dense ? spacing(3) : spacing(5)),
  },
}));
