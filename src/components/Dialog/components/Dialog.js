import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Warning from '@material-ui/icons/Warning';
import Error from '@material-ui/icons/Error';

import { clearMessage } from '../store/actions';
import { useStyles } from './styles';

export function CustomDialog() {
  const dispatch = useDispatch();
  const { title, message, severity } = useSelector(state => state.dialog);
  const classes = useStyles({ severity });

  const handleClose = () => {
    dispatch(clearMessage());
  };

  const renderIcon = () => {
    if (severity === 'warning') {
      return <Warning color="warning" />;
    }
    if (severity === 'error') {
      return <Error color="error" />;
    }
    return <CheckCircleOutlineIcon color="primary" />;
  };

  return (
    <Dialog
      open={!!message}
      onClose={handleClose}
      PaperProps={{ className: classes.wrapperBg }}
    >
      <DialogTitle disableTypography className={classes.dialogTitle}>
        <Grid container justify="center" alignItems="center">
          <Typography variant="h6" color="primary" className={classes.title}>
            {title}
          </Typography>
          {renderIcon()}
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.text}>
          {message}
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions className={classes.actions}>
        <Button align="center" className={classes.text} onClick={handleClose}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
