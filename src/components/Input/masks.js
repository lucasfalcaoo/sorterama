import VMasker from 'vanilla-masker';

export const convertToMask = (type, value) => {
  switch (type) {
    case 'money': {
      return VMasker.toMoney(value);
    }
    case 'date': {
      return VMasker.toPattern(value, '99/99/9999');
    }
    case 'phone': {
      let phonePattern = '(99) 9999-9999';
      const phone = value.replace(/[^0-9.]+/g, '');

      if (phone.length > 10) {
        phonePattern = '(99) 99999-9999';
      }
      return VMasker.toPattern(value || '', phonePattern);
    }
    default: {
      return value;
    }
  }
};
