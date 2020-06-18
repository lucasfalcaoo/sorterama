import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../../styles';

export default function SalesItem({ index, saleDay }) {
  const classes = useStyles(index);

  return (
    <Grid item xs={4}>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          title={moment(saleDay.day).format('dddd')}
          className={classes.cardHeader}
          titleTypographyProps={{
            align: 'center',
            variant: 'subtitle1',
            classes: { root: classes.title },
          }}
        />
        <CardContent className={classes.cardContent}>
          <Typography align="right" variant="subtitle1" color="textPrimary">
            {saleDay.amount}
          </Typography>
          <Typography align="right" variant="subtitle2" color="textPrimary">
            {saleDay.titles} títulos
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

SalesItem.propTypes = {
  index: PropTypes.number.isRequired,
  saleDay: PropTypes.shape().isRequired,
};
