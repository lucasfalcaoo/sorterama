import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

export function MaterialButton({
  dense,
  smallWidth,
  type,
  color,
  children,
  ...props
}) {
  const classes = useStyles(dense);

  return (
    <Button
      fullWidth={!smallWidth}
      variant="contained"
      type={type}
      color={color}
      className={classes.root}
      {...props}
    >
      {children}
    </Button>
  );
}

MaterialButton.defaultProps = {
  dense: false,
  smallWidth: false,
  type: 'submit',
  color: 'primary',
};

MaterialButton.propTypes = {
  dense: PropTypes.bool,
  smallWidth: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};
