import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles';
import { convertToMask } from './masks';

export default function Input({
  type,
  dense,
  required,
  endLabel,
  onChange,
  error,
  ...props
}) {
  const classes = useStyles({ dense, error });
  const [showPassword, setPasswordVisibility] = useState(false);

  const handleMaskChange = e => {
    const { value } = e.target;

    e.target.value = convertToMask(type, value);

    return onChange(e);
  };

  const renderEndAdornment = () => {
    if (type === 'password') {
      return (
        <InputAdornment position="end">
          <IconButton
            onClick={() => setPasswordVisibility(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      );
    }

    if (endLabel) {
      const formatEndLabel = required ? `*${endLabel}` : endLabel;
      return (
        <InputAdornment position="end">
          <Typography variant="subtitle2" color="textPrimary">
            {formatEndLabel}
          </Typography>
        </InputAdornment>
      );
    }

    return null;
  };

  return (
    <TextField
      {...props}
      fullWidth
      autoComplete="new-password"
      type={type === 'password' && !showPassword ? 'password' : 'text' || type}
      className={classes.root}
      error={error}
      onChange={e => handleMaskChange(e)}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        className: classes.input,
        endAdornment: renderEndAdornment(),
      }}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  endLabel: '',
  dense: false,
  required: false,
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  dense: PropTypes.bool,
  endLabel: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.shape().isRequired,
};
