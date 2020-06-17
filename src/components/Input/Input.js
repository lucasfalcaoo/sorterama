import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles';
import { convertToMask } from './masks';

export default function Input({ type, onChange, ...props }) {
  const classes = useStyles();
  const [showPassword, setPasswordVisibility] = useState(false);

  const handleMaskChange = e => {
    const { value } = e.target;

    e.target.value = convertToMask(type, value);

    return onChange(e);
  };

  return (
    <TextField
      {...props}
      fullWidth
      autoComplete="new-password"
      type={type === 'password' && !showPassword ? 'password' : 'text' || type}
      className={classes.root}
      onChange={e => handleMaskChange(e)}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: type === 'password' && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setPasswordVisibility(!showPassword)}
              tabIndex="-1"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
