import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import Search from '@material-ui/icons/Search';
import Replay from '@material-ui/icons/Replay';

import { setSalespeople } from '../../../store/actions';
import {
  getSalespeople,
  requestEditionSales,
  requestClientTitles,
  resendTitles,
} from '../../../store/thunk';
import {
  formatCurrency,
  formatDocument,
} from '../../../../../utils/formatters';
import { useStyles } from '../../styles';

export default function ActualEditionTitles({ isOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { usuario, salespeople, dashboard, loading } = useSelector(
    state => state.main
  );
  const { cpf, totalTitulos, searchLoading } = useSelector(
    state => state.main.search
  );
  const { perfil } = useSelector(state => state.main.usuario);
  const drawId = useSelector(state => state.main.sorteio.id);
  const [salesman, setSalesMan] = useState('');
  const [search, setSearch] = useState('');
  const isAdmin = perfil.includes('ROLE_ADMIN');

  const getEditionSales = userId => {
    const params = { userId, drawId };

    setSalesMan(userId);
    dispatch(requestEditionSales(params));
  };

  useEffect(() => {
    if (isOpen) {
      if (isAdmin) {
        dispatch(getSalespeople());
      } else {
        dispatch(setSalespeople([{ ...usuario }]));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (salespeople.length > 0 && !salesman) {
      getEditionSales(usuario.id);
    }
  }, [isAdmin, salespeople]);

  const handleTeamMember = e => {
    setSalesMan(e.target.value);
    getEditionSales(e.target.value);
  };

  const handleSearch = () => {
    const params = { drawId, userCpf: search };

    dispatch(requestClientTitles(params)).then(() => {
      setSearch('');
    });
  };

  const handleResend = e => {
    const params = { drawId, userCpf: e.currentTarget.value };

    dispatch(resendTitles(params));
  };

  return (
    <Grid item xs={12}>
      {loading ? (
        <Grid item xs={12}>
          <CircularProgress color="primary" size={36} />
        </Grid>
      ) : (
        <Grid item xs={12}>
          <Grid container alignItems="flex-end" className={classes.grid}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>Membro da Equipe</InputLabel>
                <Select
                  autoWidth
                  id="salesman"
                  disabled={salespeople.length === 1}
                  inputProps={{ className: classes.select }}
                  value={salesman}
                  onChange={handleTeamMember}
                >
                  {salespeople.map(({ id, nome }) => (
                    <MenuItem value={id}>{nome}</MenuItem>
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
          <Grid
            container
            spacing={1}
            className={salespeople.length === 1 ? classes.divider : {}}
          >
            <Grid item xs={6}>
              <Card className={classes.root} variant="outlined">
                <CardHeader
                  title="Hoje"
                  className={classes.cardHeader}
                  titleTypographyProps={{
                    align: 'center',
                    variant: 'subtitle1',
                    classes: { root: classes.title },
                  }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.title}
                  >
                    {formatCurrency(dashboard.diariaVendedor.valorVendedor)}
                  </Typography>
                  <Typography variant="subtitle2" color="textPrimary">
                    {dashboard.diariaVendedor.titulos} títulos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root} variant="outlined">
                <CardHeader
                  title="Edição atual"
                  className={classes.cardHeader}
                  titleTypographyProps={{
                    align: 'center',
                    variant: 'subtitle1',
                    classes: { root: classes.title },
                  }}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    className={classes.title}
                  >
                    {formatCurrency(dashboard.edicaoVendedor.valorVendedor)}
                  </Typography>
                  <Typography variant="subtitle2" color="textPrimary">
                    {dashboard.edicaoVendedor.titulos} títulos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {isAdmin && salespeople.length > 1 ? (
            <>
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
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  {formatCurrency(dashboard.edicao.valorVendedor)}
                </Typography>
              </Grid>
              <Grid container justify="flex-end">
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  {dashboard.edicao.titulos} títulos
                </Typography>
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
                  Total diário
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  {formatCurrency(dashboard.edicaoDiaria.valorVendedor)}
                </Typography>
              </Grid>
              <Grid container justify="flex-end" className={classes.divider}>
                <Typography
                  variant="subtitle2"
                  color="textPrimary"
                  display="inline"
                >
                  {dashboard.edicaoDiaria.titulos} títulos
                </Typography>
              </Grid>
            </>
          ) : null}

          <Grid item xs={12} className={classes.grid}>
            <Typography
              variant="body1"
              color="primary"
              align="right"
              className={classes.title}
            >
              Buscar títulos emitidos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="search"
              margin="dense"
              variant="outlined"
              label="CPF do cliente"
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
              <Table className={classes.table} arialabel="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell>Cliente</TableCell>
                    <TableCell align="center">Títulos</TableCell>
                    <TableCell align="center">Reenvio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {searchLoading ? (
                    <TableRow>
                      <TableCell component="td" scope="row" colSpan={3}>
                        <CircularProgress color="primary" size={36} />
                      </TableCell>
                    </TableRow>
                  ) : (
                    <TableRow>
                      {cpf ? (
                        <>
                          <TableCell
                            component="td"
                            scope="row"
                            className={classes.tableDocument}
                          >
                            {formatDocument(cpf)}
                          </TableCell>
                          <TableCell align="center">{totalTitulos}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="primary"
                              variant="contained"
                              tabIndex="-1"
                              onClick={handleResend}
                              value={cpf}
                            >
                              <Replay />
                            </IconButton>
                          </TableCell>
                        </>
                      ) : (
                        <TableCell component="td" scope="row" colSpan={3}>
                          Pesquise por um CPF para ver o resultado...
                        </TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

ActualEditionTitles.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
