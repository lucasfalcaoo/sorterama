import VMasker from 'vanilla-masker';

import { formatPhone, formatDocument } from '../../utils/formatters';

export const convertToMask = (type, value) => {
  switch (type) {
    case 'money': {
      return `R$ ${VMasker.toMoney(value)}`;
    }
    case 'date': {
      return VMasker.toPattern(value, '99/99/9999');
    }
    case 'phone': {
      return formatPhone(value);
    }
    case 'document': {
      return formatDocument(value);
    }
    default: {
      return value;
    }
  }
};
