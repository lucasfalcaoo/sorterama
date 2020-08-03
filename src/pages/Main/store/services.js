import { api } from '../../../services';

export const requestBuyTitle = params => {
  return api.post('/api/comprar', params).then(response => response.data);
};

export const fetchSalespeople = () => {
  return api.get('/api/loja/vendedores').then(response => response.data);
};

export const fetchEditionSales = params => {
  const { userId, drawId } = params;

  return api
    .get(`/api/dashboard/listaVendas/${userId}/${drawId}`, params)
    .then(response => response.data);
};

export const fetchCleintTitles = params => {
  const { drawId, userCpf } = params;

  return api
    .get(`/api/comprador/${drawId}/${userCpf}`, params)
    .then(response => response.data);
};

export const requestResendTitles = params => {
  const { drawId, userCpf } = params;

  return api
    .get(`/api/comprovante/reenvio/${drawId}/${userCpf}`)
    .then(response => response.data);
};

export const fetchRelease = () => {
  return api.get('/api/sorteio/corrente').then(response => response.data);
};

export const fetchBuyer = params => {
  const { userDocument } = params;

  return api
    .get(`/api/comprador/cpf/${userDocument}`)
    .then(response => response.data);
};
