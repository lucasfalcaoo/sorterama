import moment from 'moment';
import VMasker from 'vanilla-masker';

export const formatCurrency = amount => {
  const numberFormat = number =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(number || 0);

  return numberFormat(amount);
};

export const formatCurrencyToDB = amount => {
  const value = amount
    .split('R$ ')[1]
    .replace(/,/g, '.')
    .split('.');
  const int = value.slice(0, -1).join('');
  const decimals = value.slice(-1);
  const fullValue = `${int}.${decimals}`;

  return Number(fullValue);
};

export const formatDateToDB = date => {
  return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
};

export const formatPhone = value => {
  let phonePattern = '(99) 9999-9999';
  const phone = value.replace(/[^0-9.]+/g, '');

  if (phone.length > 10) {
    phonePattern = '(99) 99999-9999';
  }
  return VMasker.toPattern(value || '', phonePattern);
};

export const formatDocument = value => {
  const documentPattern = '999.999.999-99';

  return VMasker.toPattern(value, documentPattern);
};

export const formatBirthday = date => {
  return moment(date).format('DD/MM/YYYY');
};
