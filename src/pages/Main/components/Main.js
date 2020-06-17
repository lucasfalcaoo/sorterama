import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Button from '../../../components/Button';

import EditionDetails from './tabs/EditionDetails';

import { useStyles } from './styles';

export default function Main() {
  const classes = useStyles();
  const [openTab, setOpenTab] = useState(0);
  const tabs = [
    { label: 'Detalhes da edição', component: EditionDetails },
    { label: 'Emissão de títulos', component: EditionDetails },
    { label: 'Títulos emitidos nesta edição', component: EditionDetails },
  ];

  const handleChangeTab = e => {
    const { value } = e.currentTarget;
    setOpenTab(parseInt(value, 10));
  };

  return (
    <Grid container className={classes.container}>
      {tabs.map(({ label, component: Component }, index) => (
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
            onClick={handleChangeTab}
            value={index}
          >
            {label}
          </Button>
          <Collapse in={openTab === index}>
            <Component />
          </Collapse>
        </Grid>
      ))}
    </Grid>
  );
}
