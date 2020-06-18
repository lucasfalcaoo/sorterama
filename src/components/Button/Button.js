import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

export function MaterialButton({
  type,
  dense,
  color,
  loading,
  children,
  smallWidth,
  ...props
}) {
  const classes = useStyles(dense);

  return (
    <Button
      variant="contained"
      type={type}
      color={color}
      disabled={loading}
      fullWidth={!smallWidth}
      className={classes.root}
      {...props}
    >
      {loading ? <CircularProgress color="white" size={24} /> : children}
    </Button>
  );
}

MaterialButton.defaultProps = {
  dense: false,
  loading: false,
  smallWidth: false,
  type: 'submit',
  color: 'primary',
};

MaterialButton.propTypes = {
  dense: PropTypes.bool,
  loading: PropTypes.bool,
  smallWidth: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};
