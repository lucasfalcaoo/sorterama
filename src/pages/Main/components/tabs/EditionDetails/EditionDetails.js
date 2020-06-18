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
      <Grid item xs={12}>
        <Grid className={classes.grid}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="primary"
            className={classes.typography}
          >
            Edição 1 - Giro da sorte
          </Typography>
          <Alert
            severity="success"
            action={
              <Button dense variant="text" size="small">
                Verificar
              </Button>
            }
          >
            Ativo
          </Alert>
        </Grid>
        <Grid className={classes.grid}>
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
            Edição 1 - Giro da sorte (07/06/2020 11:00)
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.typography}
          >
            Edição 3 - Giro da sorte (07/06/2020 11:00)
          </Typography>
        </Grid>
        <Grid className={classes.grid}>
          <Typography
            gutterBottom
            variant="subtitle2"
            color="primary"
            className={classes.typography}
          >
            Descrição / Prêmios e observações:
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            venenatis convallis lobortis. Aliquam magna nunc, bibendum et turpis
            nec, viverra lobortis odio. Morbi id est viverra, gravida nibh et,
            euismod quam. Quisque efficitur, nisl nec suscipit ornare, nibh
            libero bibendum nunc, id dignissim sapien sapien non purus. Fusce
            enim lacus, pulvinar non porta quis, porta non dolor. Nullam luctus,
            tellus eu vulputate tincidunt, orci nulla eleifend ex, et tristique
            felis risus non justo. Ut nec velit nibh. Donec commodo eu ex in
            eleifend. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Aliquam rutrum sem ut elit molestie
            tincidunt. Aliquam in elit suscipit, aliquet nisi nec, tempus dolor.
            Duis et molestie augue. Mauris facilisis varius magna quis posuere.
            Integer ornare, arcu nec pharetra sodales, felis enim luctus eros,
            ac accumsan nisi tellus in eros. Sed sed ornare risus, ut accumsan
            ligula. Cras fermentum volutpat mauris ac vestibulum. Etiam eget
            vehicula leo. Aenean mattis viverra turpis quis commodo. Fusce
            commodo felis neque. Duis sed velit vitae dolor dignissim faucibus
            ut ut risus.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button
          smallWidth
          type="submit"
          variant="contained"
          color="secondary"
          size="small"
        >
          Sair do sistema
        </Button>
      </Grid>
    </Grid>
  );
}
