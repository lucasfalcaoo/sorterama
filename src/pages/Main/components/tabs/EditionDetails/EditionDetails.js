import React from 'react';

import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';

import Button from '../../../../../components/Button';

import { useStyles } from './styles';

export default function EditionDetails() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.container}>
      <Grid item xs={12} className={classes.logo}>
        <Typography gutterBottom variant="subtitle2" color="primary">
          Edição 1 - Giro da sorte
        </Typography>
        <Alert severity="success">Ativo</Alert>
        <Typography variant="subtitle2" color="primary">
          Quem comprar, concorre em:
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Edição 1 - Giro da sorte
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          em 07/06/2020 11:00
        </Typography>
        <Typography variant="subtitle2" color="secondary">
          Edição 3 - Giro da sorte em 07/06/2020 11:00
        </Typography>
      </Grid>
      <Button fullWidth type="submit" variant="contained" color="secondary">
        Sair do sistema
      </Button>
    </Grid>
  );
}
