import * as yup from 'yup';
import moment from 'moment';

export const validations = yup.object().shape({
  document: yup.string().required('O CPF é obrigatório'),
  phone: yup.string().required('O celular é obrigatório'),
  birthday: yup
    .string()
    .test('birthday', 'Venda proibida para menores de 16 anos', value => {
      return moment().diff(moment(value), 'years') >= 16;
    })
    .required('A data de nascimento é obrigatória'),
});
