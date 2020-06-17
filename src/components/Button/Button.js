import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { useStyles } from './styles';

export function MaterialButton({ dense, type, color, children, ...props }) {
  const classes = useStyles(dense);

  return (
    <Button
      fullWidth={!dense}
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
  type: 'submit',
  color: 'primary',
};

MaterialButton.propTypes = {
  dense: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.string.isRequired,
};
