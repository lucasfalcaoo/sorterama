import React from 'react';
import { useHistory } from 'react-router-dom';

import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { validations } from './validations';
import { useStyles } from './styles';

const logo = require('../../../assets/logo.png');

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const initialValues = { phone: '', pin: '' };

  const handleSignIn = values => {
    console.log('Handle submit values: ', values);
    history.push('/principal');
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid className={classes.paper}>
        <img src={logo} height="56" alt="Sorterama" className={classes.logo} />
        <Grid item className={classes.logo}>
          <Typography variant="h4" color="primary">
            Sistema de vendas
          </Typography>
          <Typography paragraph variant="subtitle1" color="secondary">
            Acesse o sistema com seus dados
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={handleSignIn}
        >
          {({ values, errors, touched, handleChange }) => (
            <Form>
              <Input
                id="phone"
                type="phone"
                label="Telefone ou Email"
                placeholder="(XX) XXXXX-XXXX"
                value={values.phone}
                error={touched.phone && errors.phone}
                helperText={touched.phone && errors.phone}
                onChange={handleChange}
              />
              <Input
                id="pin"
                type="password"
                label="PIN de acesso"
                placeholder="Digite seu PIN de acesso"
                value={values.pin}
                error={touched.pin && errors.pin}
                helperText={touched.pin && errors.pin}
                onChange={handleChange}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Entrar
              </Button>
            </Form>
          )}
        </Formik>
        <Grid container justify="center" alignItems="center">
          <Typography variant="subtitle2" color="secondary">
            Esqueceu o seu PIN?
          </Typography>
          <Button dense smallWidth variant="text" color="primary">
            Solicitar novo PIN
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
