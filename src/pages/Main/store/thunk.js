import { compose, over, set, lensProp } from 'ramda';

import {
  requestBuyTitle,
  fetchSalespeople,
  fetchEditionSales,
  fetchCleintTitles,
  requestResendTitles,
  fetchRelease,
  fetchBuyer,
} from './services';
import {
  setDraw,
  setSalespeople,
  setDashboard,
  setClientSearch,
  handleSearchLoading,
  handleLoading,
} from './actions';
import { setMessage } from '../../../components/Dialog/store/actions';
import {
  formatPhone,
  formatBirthday,
  formatDocument,
} from '../../../utils/formatters';

export const buyTitle = params => dispatch => {
  dispatch(handleLoading(true));

  return requestBuyTitle(params)
    .then(data => {
      const { sorteio, msg } = data;

      dispatch(setDraw(sorteio));
      dispatch(setMessage({ title: 'Emissão realizada', message: msg }));
    })
    .catch(error => {
      const { sorteio, msg } = error.response.data;

      dispatch(setDraw(sorteio));
      dispatch(setMessage({ title: 'Ops', message: msg, severity: 'error' }));
    })
    .finally(() => dispatch(handleLoading(false)));
};

export const getSalespeople = () => dispatch => {
  dispatch(handleLoading(true));

  return fetchSalespeople()
    .then(data => dispatch(setSalespeople(data)))
    .finally(() => dispatch(handleLoading(false)));
};

export const requestEditionSales = params => dispatch => {
  dispatch(handleLoading(true));

  return fetchEditionSales(params)
    .then(data => dispatch(setDashboard(data)))
    .finally(() => dispatch(handleLoading(false)));
};

export const requestClientTitles = params => dispatch => {
  dispatch(handleSearchLoading(true));

  return fetchCleintTitles(params)
    .then(data => dispatch(setClientSearch(data)))
    .finally(() => dispatch(handleSearchLoading(false)));
};

export const resendTitles = params => dispatch => {
  dispatch(handleSearchLoading(true));

  return requestResendTitles(params)
    .then(data => {
      dispatch(setMessage({ title: 'Títulos reenviados', message: data }));
    })
    .finally(() => dispatch(handleSearchLoading(false)));
};

export const checkRelease = () => dispatch => {
  dispatch(handleLoading(true));

  return fetchRelease()
    .then(data => dispatch(setDraw(data)))
    .finally(() => dispatch(handleLoading(false)));
};

export const checkBuyer = params => dispatch => {
  dispatch(handleLoading(true));

  return fetchBuyer(params)
    .then(data => {
      const { dtNascimentoFormat } = data;
      const birthday = formatBirthday(dtNascimentoFormat);
      const formatData = compose(
        set(lensProp('dtNascimento'), birthday),
        over(lensProp('celular'), formatPhone),
        over(lensProp('cpf'), formatDocument)
      );

      return formatData(data);
    })
    .finally(() => dispatch(handleLoading(false)));
};
