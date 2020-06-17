import * as yup from 'yup';

export const validations = yup.object().shape({
  phone: yup.string().required('O telefone é obrigatório'),
  pin: yup.string().required('O PIN é obrigatório'),
});
