import { useDispatch } from 'react-redux';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { setIsLogin, setUserDetails, validateLogin } from '../../store/slices/globalSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './type';
import { Alert } from 'react-native';
import { useState } from 'react';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email('Please enter a valid email address')
    .required('Username is required'),

  password: Yup.string().required('Password is required'),
});


export const useLoginForm = () => {
  const dispatch = useDispatch();
  const [loginError, setLoginError]= useState<string>('')
  const navigation = useNavigation<NavigationProp>();
  const signupFun = () => {
    navigation.navigate('Signup')
  }

  const formik = useFormik({
    initialValues: { username: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      try {
        dispatch(validateLogin({
          email: values.username.toLocaleLowerCase(),
          pass: values.password,
        }));
      } catch (err) {
        const errorMessage = (err as { message: string }).message;
        setLoginError(errorMessage)
      }
    },
  });

  return { formik, signupFun, loginError };
};


