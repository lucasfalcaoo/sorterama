import React from 'react';
import { useSelector } from 'react-redux';

import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../../styles';

export default function EditionSuccess() {
  const classes = useStyles();
  const { nome, descricao, status, dtSorteio } = useSelector(
    state => state.main.sorteio
  );

  return (
    <Grid item xs={12}>
      <Grid className={classes.divider}>
        <Typography
          gutterBottom
          variant="subtitle2"
          color="primary"
          className={classes.typography}
        >
          {nome}
        </Typography>
        <Alert severity="success">{status}</Alert>
      </Grid>
      <Grid className={classes.divider}>
        <Typography
          gutterBottom
          variant="subtitle2"
          color="primary"
          className={classes.typography}
        >
          Quem comprar, concorre em:
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle2"
          color="textSecondary"
          className={classes.typography}
        >
          {nome} ({moment(dtSorteio).format('DD/MM/YYYY HH:mm')})
        </Typography>
      </Grid>
      <Grid className={classes.divider}>
        <Typography
          gutterBottom
          variant="subtitle2"
          color="primary"
          className={classes.typography}
        >
          Descrição / Prêmios e observações:
        </Typography>
        <Typography
          paragraph
          variant="subtitle2"
          color="textSecondary"
          align="justify"
        >
          {descricao}
        </Typography>
      </Grid>
    </Grid>
  );
}
