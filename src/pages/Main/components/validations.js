import * as yup from 'yup';
import moment from 'moment';
import { formatCurrency } from '../../../utils/formatters';
import { validateDocument } from '../../../utils/validations';

export const validations = (min, max) =>
  yup.object().shape({
    cpf: yup
      .string()
      .test('cpf', 'O CPF é inválido', value => {
        const docValue = value || '';
        const formatValue = docValue.replace(/\D/g, '');

        return validateDocument(formatValue);
      })
      .required('O CPF é obrigatório'),
    celular: yup.string().required('O celular é obrigatório'),
    dtNascimento: yup
      .string()
      .test('dtNascimento', 'Venda proibida para menores de 16 anos', value => {
        const birthday = moment(value, 'DD/MM/YYYY');

        return moment().diff(birthday, 'years') >= 16;
      })
      .required('A data de nascimento é obrigatória'),
    valor: yup
      .number()
      .min(min, `O valor mínimo para comprar é de ${formatCurrency(min)}`)
      .max(max, `O valor máximo para comprar é de ${formatCurrency(max)}`)
      .required('O valor é obrigatório'),
  });
