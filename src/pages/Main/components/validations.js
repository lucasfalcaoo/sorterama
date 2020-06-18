import * as yup from 'yup';

export const validations = yup.object().shape({
  document: yup.string().required('O CPF é obrigatório'),
  phone: yup.string().required('O celular é obrigatório'),
  birthday: yup.string().required('A data de nascimento é obrigatória'),
});
