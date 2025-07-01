// File: src/screens/signup/useSignup.ts
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../loginScreen/type';
import { setIsLogin, setLoginUserDetails, setUserDetails } from '../../store/slices/globalSlice';
import { useAppDispatch } from '../../store/hooks';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const useSignupForm = () => {
    const navigation = useNavigation<NavigationProp>();
    const [loginError, setLoginError] = useState<string>('')
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .email('Please enter a valid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        rePassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Please confirm your password'),
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            rePassword: '',
        },
        validationSchema,
        onSubmit: values => {
            console.log('fone')
            try {

                dispatch(setLoginUserDetails({
                    id: Date.now(),
                    email: values.username.toLocaleLowerCase(),
                    pass: values.password,
                }));
                dispatch(setUserDetails({
                    email: values.username.toLocaleLowerCase(),
                    pass: values.password,
                }));
                dispatch(setIsLogin(true));

            } catch (err) {
                const errorMessage = (err as { message: string }).message;
                setLoginError(errorMessage)
            }
        },
    });
    const navigationFn=()=>{
        navigation.navigate('Login');
    }
    return {
        formik, loginError, navigationFn
    };
};
