import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import omit from 'ramda/src/omit';

import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { requestSignIn, requestNewPassword } from '../store/thunk';
import { validations } from './validations';
import { useStyles } from './styles';

const logo = require('../../../assets/logo.png');

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector(state => state.auth);
  const initialValues = { username: '', password: '', submitType: null };

  const handleSignIn = (values, formikBag) => {
    const { submitType } = values;
    const { resetForm } = formikBag;
    let params = omit(['submitType'], values);

    if (submitType === 'resetPin') {
      params = omit(['password'], params);
      return dispatch(requestNewPassword(params));
    }

    return dispatch(requestSignIn(params)).then(() => {
      resetForm();
      history.push('/principal');
    });
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
          <Typography paragraph variant="subtitle1" color="textSecondary">
            Acesse o sistema com seus dados
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validations}
          onSubmit={handleSignIn}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => (
            <Form>
              <Input
                id="username"
                type="phone"
                label="Telefone"
                placeholder="(00) 00000-0000"
                value={values.username}
                error={touched.username && errors.username}
                helperText={touched.username && errors.username}
                onChange={handleChange}
              />
              <Input
                id="password"
                type="password"
                label="PIN de acesso"
                placeholder="Digite seu PIN de acesso"
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                loading={loading}
                onClick={() => setFieldValue('submitType', 'signIn')}
              >
                Entrar
              </Button>
              <Grid container justify="center" alignItems="center">
                <Typography variant="subtitle2" color="textSecondary">
                  Esqueceu o seu PIN?
                </Typography>
                <Button
                  dense
                  smallWidth
                  variant="text"
                  color="primary"
                  loading={loading}
                  onClick={() => setFieldValue('submitType', 'resetPin')}
                >
                  Solicitar novo PIN
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}
