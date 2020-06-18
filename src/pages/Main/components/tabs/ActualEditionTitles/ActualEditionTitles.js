import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import Button from '../../../../../components/Button';
import SalesItem from './SalesItem';

import { useStyles } from '../../styles';

const rows = [
  { identification: '123.221.047-30', titles: 10 },
  { identification: '(21) 99105-2137', titles: 22 },
  { identification: '114.259.968-99', titles: 25 },
];
const salesResume = [
  { day: '2020-06-16', amount: 987, titles: 330 },
  { day: '2020-06-17', amount: 1350, titles: 350 },
  { day: '2020-06-18', amount: 1487, titles: 367 },
];
const teamMembers = [{ name: 'Lucas' }, { name: 'João' }, { name: 'Pedro' }];

export default function ActualEditionTitles({ isOpen }) {
  const classes = useStyles();
  const [teamMember, setTeamMember] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (isOpen) {
      console.log('Action edition titles!');
    }
  }, [isOpen]);

  const handleTeamMember = e => {
    console.log('Handle team member to filter: ', e.target.value);
    setTeamMember(e.target.value);
  };

  const handleSearch = () => {
    console.log('Handle search: ', search);
  };

  return (
    <Grid container alignItems="center" className={classes.wrapper}>
      <Grid item xs={12}>
        <Grid container alignItems="flex-end" className={classes.grid}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Membro da Equipe</InputLabel>
              <Select
                autoWidth
                id="teamMember"
                value={teamMember}
                onChange={handleTeamMember}
              >
                {teamMembers.map(({ name }) => (
                  <MenuItem value={name}>{name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              color="primary"
              align="right"
              className={classes.title}
            >
              Vendas
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {salesResume.map((saleDay, index) => {
            return <SalesItem index={index} saleDay={saleDay} />;
          })}
        </Grid>

        <Grid
          container
          justify="space-between"
          className={[classes.grid, classes.gridComplement]}
        >
          <Typography
            variant="subtitle2"
            color="textPrimary"
            display="inline"
            className={classes.typography}
          >
            Total desta edição
          </Typography>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            R$ 5.966,25
          </Typography>
        </Grid>
        <Grid container justify="flex-end" className={classes.divider}>
          <Typography variant="subtitle2" color="textPrimary" display="inline">
            4.359 títulos
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.grid}>
          <Typography
            variant="body1"
            color="primary"
            align="right"
            className={classes.title}
          >
            Buscar um título emitido
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="search"
            margin="dense"
            variant="outlined"
            label="CPF, Telefone ou Nome do cliente"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    color="primary"
                    tabIndex="-1"
                    onClick={handleSearch}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TableContainer variant="outlined" component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Cliente</TableCell>
                  <TableCell align="center">N˚ de títulos</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.identification}>
                    <TableCell component="th" scope="row">
                      {row.identification}
                    </TableCell>
                    <TableCell align="center">{row.titles}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} className={classes.divider}>
          <Typography variant="subtitle2" color="primary" align="right">
            45 resultados encontrados
          </Typography>
        </Grid>

        <Grid container justify="center">
          <Typography
            paragraph
            variant="subtitle2"
            color="textPrimary"
            align="center"
          >
            Você pode enviar um relatório completo de vendas para o seu e-mail
          </Typography>
          <Button dense smallWidth color="secondary" size="small">
            Enviar relatório
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

ActualEditionTitles.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
