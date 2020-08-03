import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    marginBottom: props => (props.dense ? spacing(3) : spacing(5)),
  },
  input: {
    color: palette.primary.main,
    fontWeight: 600,
  },
  helperText: {
    color: props => (props.error ? palette.error.main : palette.success.main),
  },
}));
