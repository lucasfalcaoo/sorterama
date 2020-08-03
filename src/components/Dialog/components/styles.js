import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }) => ({
  wrapperBg: {
    backgroundColor: props => {
      if (props.severity === 'warning') {
        return palette.warning.light;
      }
      if (props.severity === 'error') {
        return palette.error.light;
      }
      return palette.success.light;
    },
  },
  dialogTitle: {
    paddingTop: spacing(2),
    paddingBottom: spacing(1),
  },
  title: {
    color: props => {
      if (props.severity === 'warning') {
        return palette.warning.main;
      }
      if (props.severity === 'error') {
        return palette.error.main;
      }
      return palette.success.main;
    },
    marginRight: spacing(1),
  },
  text: {
    color: props => {
      if (props.severity === 'warning') {
        return palette.warning.main;
      }
      if (props.severity === 'error') {
        return palette.error.main;
      }
      return palette.success.main;
    },
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'center',
    padding: 0,
  },
}));
