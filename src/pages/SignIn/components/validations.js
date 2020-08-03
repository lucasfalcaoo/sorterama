import * as yup from 'yup';

const isSignIn = text => ({
  is: value => value === 'signIn',
  then: yup.string().required(text),
});

export const validations = yup.object().shape({
  submitType: yup.string().nullable(),
  username: yup.string().required('O telefone é obrigatório'),
  password: yup.string().when('submitType', isSignIn('O PIN é obrigatório')),
});
