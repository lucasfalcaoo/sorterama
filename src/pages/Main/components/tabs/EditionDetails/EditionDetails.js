import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '../../../../../components/Button';
import { EditionSuccess, EditionWarning, EditionError } from './EditionStatus';

import { handleLogout } from '../../../../SignIn/store/actions';
import { useStyles } from '../../styles';

export default function EditionDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector(state => state.main);
  const { status } = useSelector(state => state.main.sorteio);
  const classes = useStyles({ status });

  const handleUserLogout = () => {
    dispatch(handleLogout());
    history.push('/');
  };

  const renderEditionStatus = () => {
    if (status === 'Processando') {
      return <EditionWarning />;
    }
    if (status === 'Aberto') {
      return <EditionSuccess />;
    }

    return <EditionError />;
  };

  return (
    <Grid item xs={12} className={classes.wrapperBg}>
      {loading ? (
        <Grid container justify="center">
          <CircularProgress color="primary" size={36} />
        </Grid>
      ) : (
        <>
          {renderEditionStatus()}

          <Grid container justify="center">
            <Button
              smallWidth
              color="secondary"
              size="small"
              onClick={handleUserLogout}
            >
              Sair do sistema
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
