import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import over from 'ramda/src/over';
import lensProp from 'ramda/src/lensProp';

import { Formik, Form } from 'formik';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';

import { buyTitle, checkBuyer } from '../../../store/thunk';
import { clearMessage } from '../../../../../components/Dialog/store/actions';
import {
  formatCurrency,
  formatCurrencyToDB,
  formatDateToDB,
} from '../../../../../utils/formatters';
import { validateDocument } from '../../../../../utils/validations';
import { validations } from '../../validations';
import { useStyles } from '../../styles';

export default function TitlesEmission({ isOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.main);
  const { vlTitulo, vlMinimoCompra, vlMaximoCompra } = useSelector(
    state => state.main.sorteio
  );
  const [change, setChange] = useState(0);
  const [titlesAmount, setTitlesAmount] = useState(0);
  const [freshInitialValues, refreshInitialValues] = useState(null);
  const initialValues = {
    cpf: '',
    celular: '',
    dtNascimento: '',
    nome: '',
    email: '',
    valor: 0,
  };

  useEffect(() => {
    dispatch(clearMessage());
  }, [isOpen]);

  const handleAmountChange = (e, handleChange) => {
    const amount = formatCurrencyToDB(e.target.value);
    const calculateTitlesAmount = parseInt(amount / vlTitulo, 10);
    const calculateChange = amount - calculateTitlesAmount * vlTitulo;
    const formatChange = Number(calculateChange.toFixed(2));

    if (amount > vlTitulo) {
      setChange(formatChange);
    } else {
      setChange(0);
    }

    e.target.value = amount;

    setTitlesAmount(calculateTitlesAmount);
    handleChange(e);
  };

  const handleDocumentChange = (
    e,
    handleChange,
    setFieldError,
    setFieldTouched
  ) => {
    const { value } = e.target;
    const docValue = value.replace(/\D/g, '');
    const params = { userDocument: value };

    if (value.length === 14 && validateDocument(docValue)) {
      dispatch(checkBuyer(params)).then(values => {
        refreshInitialValues(values);
      });
    } else {
      refreshInitialValues(initialValues);
      setFieldTouched('cpf', true, true);
    }

    return handleChange(e);
  };

  const handleDateChange = (e, handleChange, setFieldTouched) => {
    const { value } = e.target;

    if (value.length === 10) {
      setFieldTouched('dtNascimento', true, true);
    }

    return handleChange(e);
  };

  const handleTitleEmission = (values, formikBag) => {
    const { resetForm } = formikBag;
    const params = over(lensProp('dtNascimento'), formatDateToDB, values);

    return dispatch(buyTitle(params)).then(() => {
      resetForm({ values: initialValues });
    });
  };

  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Grid container direction="row" justify="space-between">
            <Grid item xs={4}>
              <Grid container direction="column">
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  Título
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.title}
                >
                  {formatCurrency(vlTitulo)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="column">
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  Mínimo
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.title}
                >
                  {formatCurrency(vlMinimoCompra)}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container direction="column">
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  Máximo
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.title}
                >
                  {formatCurrency(vlMaximoCompra)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Grid item xs={12} className={classes.form}>
          <Formik
            enableReinitialize
            initialValues={freshInitialValues || initialValues}
            validationSchema={validations(vlMinimoCompra, vlMaximoCompra)}
            onSubmit={handleTitleEmission}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              setFieldError,
              setFieldTouched,
            }) => (
              <Form>
                <Input
                  dense
                  required
                  id="cpf"
                  type="document"
                  endLabel="CPF"
                  placeholder="000.000.000-00"
                  value={values.cpf}
                  error={touched.cpf && errors.cpf}
                  helperText={touched.cpf && errors.cpf}
                  onChange={e =>
                    handleDocumentChange(
                      e,
                      handleChange,
                      setFieldError,
                      setFieldTouched
                    )
                  }
                />
                <Input
                  dense
                  required
                  id="celular"
                  type="phone"
                  endLabel="Celular"
                  placeholder="(00) 00000-0000"
                  value={values.celular}
                  error={touched.celular && errors.celular}
                  helperText={touched.celular && errors.celular}
                  onChange={handleChange}
                />
                <Input
                  dense
                  required
                  id="dtNascimento"
                  type="date"
                  endLabel="Data de nascimento"
                  placeholder="00/00/0000"
                  value={values.dtNascimento}
                  error={touched.dtNascimento && errors.dtNascimento}
                  helperText={touched.dtNascimento && errors.dtNascimento}
                  onChange={e =>
                    handleDateChange(e, handleChange, setFieldTouched)
                  }
                />
                <Input
                  dense
                  id="nome"
                  endLabel="Nome"
                  value={values.nome}
                  error={touched.nome && errors.nome}
                  helperText={touched.nome && errors.nome}
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
                  id="valor"
                  type="money"
                  endLabel={`${titlesAmount} Títulos`}
                  placeholder="R$ 0,00"
                  value={formatCurrency(values.valor)}
                  error={touched.valor && errors.valor}
                  helperText={
                    change > 0
                      ? `Devolver ${formatCurrency(change)} de troco`
                      : touched.valor && errors.valor
                  }
                  onChange={e => handleAmountChange(e, handleChange)}
                />

                <Grid container justify="center">
                  <Button
                    dense
                    smallWidth
                    size="small"
                    color="secondary"
                    variant="contained"
                    loading={loading}
                    className={classes.sendButton}
                  >
                    Enviar pedido
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
}

TitlesEmission.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
