import React from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import Button from '../../../../../../components/Button';

import { checkRelease } from '../../../../store/thunk';
import { useStyles } from '../../../styles';

export default function EditionWarning() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSalesVerification = () => {
    dispatch(checkRelease());
  };

  return (
    <Grid item xs={12}>
      <Grid className={classes.divider}>
        <Alert variant="outlined" severity="warning">
          Estamos apurando a última edição, aguarde alguns instantes para
          iniciar as vendas da próxima edição
        </Alert>
      </Grid>
      <Grid className={classes.divider}>
        <Typography paragraph align="center" variant="body1" color="primary">
          Clique no botão abaixo para recarregar o aplicativo e verificar se o
          sistema de vendas já foi liberado. Se o problema persistir, entre em
          contato com nossa central de suporte
        </Typography>
        <Grid container justify="center">
          <Button
            smallWidth
            size="small"
            color="secondary"
            onClick={handleSalesVerification}
          >
            Verificar se já liberou
          </Button>
        </Grid>

        <Typography
          align="center"
          color="primary"
          variant="subtitle2"
          className={classes.typography}
        >
          Ou se preferir
        </Typography>
      </Grid>
    </Grid>
  );
}
