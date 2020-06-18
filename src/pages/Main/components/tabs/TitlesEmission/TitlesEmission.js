import React from 'react';

import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import { validations } from './validations';
import { useStyles } from './styles';

export default function TitlesEmission() {
  const classes = useStyles();
  const initialValues = {
    document: '',
    phone: '',
    birthday: '',
    name: '',
    email: '',
    titles: '',
  };

  const handleTitleEmission = values => {
    console.log('Handle title emission values: ', values);
  };

  return (
    <Grid container alignItems="center" className={classes.container}>
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
                  onChange={handleChange}
                />
                {values.titles && values.titles !== 'R$ 0,00' ? (
                  <Alert severity="info">Devolver R$ 0,10 de troco</Alert>
                ) : null}

                <Grid container justify="center">
                  <Button
                    dense
                    smallWidth
                    variant="contained"
                    color="secondary"
                    size="small"
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
