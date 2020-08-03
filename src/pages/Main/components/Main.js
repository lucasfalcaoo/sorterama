import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Button from '../../../components/Button';

import EditionDetails from './tabs/EditionDetails';
import TitlesEmission from './tabs/TitlesEmission';
import ActualEditionTitles from './tabs/ActualEditionTitles';

import { setAxiosToken } from '../../../services';
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';
import { useStyles } from './styles';

const tabs = [
  { label: 'Detalhes da edição', component: EditionDetails },
  { label: 'Emissão de títulos', component: TitlesEmission },
  { label: 'Títulos emitidos nesta edição', component: ActualEditionTitles },
];

export default function Main() {
  const { height } = useWindowDimensions();
  const history = useHistory();
  const { token } = useSelector(state => state.auth);
  const { status } = useSelector(state => state.main.sorteio);
  const [openTab, setOpenTab] = useState(status === 'Aberto' ? 1 : 0);
  const [hasToken, setHasToken] = useState(false);
  const classes = useStyles({ height, openTab });

  useEffect(() => {
    if (token) {
      setAxiosToken(token);
      setHasToken(true);
    } else {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    if (status !== 'Aberto') {
      setOpenTab(0);
    }
  }, [status]);

  const handleChangeTab = e => {
    const { value } = e.currentTarget;
    setOpenTab(parseInt(value, 10));
  };

  return (
    <Grid container className={classes.container}>
      {hasToken &&
        tabs.map(({ label, component: Component }, index) => (
          <Grid item xs={12} key={label}>
            <Button
              dense
              endIcon={
                openTab === index ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowRightIcon />
                )
              }
              className={classes.mainButton}
              disabled={status !== 'Aberto' && index > 0}
              onClick={handleChangeTab}
              value={index}
            >
              {label}
            </Button>
            <Collapse in={openTab === index}>
              <Grid container alignItems="center" className={classes.wrapper}>
                <Component isOpen={openTab === index} />
              </Grid>
            </Collapse>
          </Grid>
        ))}
    </Grid>
  );
}
