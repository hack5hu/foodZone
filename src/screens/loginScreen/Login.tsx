import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useLoginForm } from './useLogin';
import { CustomText } from '../../components/atoms/customText/CustomText';
import { CustomButton } from '../../components/atoms/Button/Button';
import { styles } from './styles';
import { LabeledInput } from '../../components/molecules/labeledInput/LabeledInput';
import { translations } from '../../constants/lang/baseLocalisation';

const LoginScreen = () => {
  const {
    formik: { handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched, }, 
      signupFun,
      loginError
  } = useLoginForm();

  return (
    <View style={styles.container}>
      <CustomText style={styles.logo}>🍔 {translations.appName}</CustomText>
      <CustomText style={styles.title}>{translations.loginTitle}</CustomText>

      <LabeledInput
        label={translations.username}
        placeholder={translations.usernamePlaceholder}
        value={values.username}
        onChangeText={handleChange('username')}
        onBlur={handleBlur('username')}
        error={!!(touched.username && errors.username)}
        errorMessage={errors.username}
      />

      <LabeledInput
        label={translations.password}
        placeholder={translations.passwordPlaceholder}
        value={values.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        secureTextEntry
        error={!!(touched.password && errors.password)}
        errorMessage={errors.password}
      />
      {loginError && <CustomText style={styles.loginRrror}>{loginError} !!</CustomText>}

      <CustomButton text={translations.signIn} onPress={handleSubmit} />
      <View style={styles.footer}>
        <CustomText style={styles.footerText}>{translations.dontHaveAccount}</CustomText>
        <TouchableOpacity onPress={signupFun}>
          <CustomText style={styles.signupText}>{translations.signUp}</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
