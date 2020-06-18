import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';

import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import { validations } from '../../validations';
import { useStyles } from '../../styles';

export default function TitlesEmission({ isOpen }) {
  const classes = useStyles();
  const [change, setChange] = useState(0);
  const initialValues = {
    document: '',
    phone: '',
    birthday: '',
    name: '',
    email: '',
    titles: '',
  };

  useEffect(() => {
    if (isOpen) {
      console.log('Title emission!');
    }
  }, [isOpen]);

  const handleTitlesChange = (e, handleChange) => {
    const value = e.target.value.split('R$ ')[1].replace(/,/g, '.');
    const amount = Number(value);
    const calculateChange = 100;

    console.log('Handle titles change: ', amount);

    setChange(calculateChange);
    handleChange(e);
  };

  const handleTitleEmission = values => {
    console.log('Handle title emission values: ', values);
  };

  return (
    <Grid container alignItems="center" className={classes.wrapper}>
      <Grid item xs={12}>
        <Grid container justify="space-between" className={classes.grid}>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            Valor do título
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            R$ 0,25 centavos
          </Typography>
        </Grid>
        <Grid container justify="space-between" className={classes.grid}>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            Venda mínima
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            R$ 1,00 real
          </Typography>
        </Grid>
        <Paper variant="outlined" className={classes.paper}>
          <Formik
            initialValues={initialValues}
            validationSchema={validations}
            onSubmit={handleTitleEmission}
          >
            {({ values, errors, touched, handleChange }) => (
              <Form>
                <Input
                  dense
                  required
                  id="document"
                  type="document"
                  endLabel="CPF"
                  placeholder="000.000.000-00"
                  value={values.document}
                  error={touched.document && errors.document}
                  helperText={touched.document && errors.document}
                  onChange={handleChange}
                />
                <Input
                  dense
                  required
                  id="phone"
                  type="phone"
                  endLabel="Celular"
                  placeholder="(00) 00000-0000"
                  value={values.phone}
                  error={touched.phone && errors.phone}
                  helperText={touched.phone && errors.phone}
                  onChange={handleChange}
                />
                <Input
                  dense
                  required
                  id="birthday"
                  type="date"
                  endLabel="Data de nascimento"
                  placeholder="00/00/0000"
                  value={values.birthday}
                  error={touched.birthday && errors.birthday}
                  helperText={touched.birthday && errors.birthday}
                  onChange={handleChange}
                />
                <Input
                  dense
                  id="name"
                  endLabel="Nome"
                  value={values.name}
                  error={touched.name && errors.name}
                  helperText={touched.name && errors.name}
                  onChange={handleChange}
                />
                <Input
                  dense
                  id="email"
                  type="email"
                  endLabel="E-mail"
                  value={values.email}
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                  onChange={handleChange}
                />
                <Input
                  dense
                  id="titles"
                  type="money"
                  endLabel="00 Títulos"
                  placeholder="R$ 0,00"
                  value={values.titles}
                  error={touched.titles && errors.titles}
                  helperText={touched.titles && errors.titles}
                  onChange={e => handleTitlesChange(e, handleChange)}
                />
                {change > 0 ? (
                  <Alert severity="warning">
                    Devolver R$ {VMasker.toMoney(change)} de troco
                  </Alert>
                ) : null}

                <Grid container justify="center">
                  <Button
                    dense
                    smallWidth
                    size="small"
                    color="secondary"
                    variant="contained"
                    className={classes.sendButton}
                  >
                    Enviar pedido
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

TitlesEmission.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
