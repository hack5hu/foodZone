import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSignupForm } from './useSignup';
import { CustomText } from '../../components/atoms/customText/CustomText';
import { CustomButton } from '../../components/atoms/Button/Button';
import { styles } from './styles';
import { LabeledInput } from '../../components/molecules/labeledInput/LabeledInput';
import { translations } from '../../constants/lang/baseLocalisation';

const SignupScreen = () => {
  const {
    formik: { handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      touched, }, navigationFn, loginError
  } = useSignupForm();

  return (
    <View style={styles.container}>
      <CustomText style={styles.logo}>🍔 {translations.appName}</CustomText>
      <CustomText style={styles.title}>{translations.signupTitle}</CustomText>

      <LabeledInput
        label={translations.email}
        placeholder={translations.emailPlaceholder}
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

      <LabeledInput
        label={translations.rePassword}
        placeholder={translations.rePasswordPlaceholder}
        value={values.rePassword}
        onChangeText={handleChange('rePassword')}
        onBlur={handleBlur('rePassword')}
        secureTextEntry
        error={!!(touched.rePassword && errors.rePassword)}
        errorMessage={errors.rePassword}
      />
      {loginError && <CustomText style={styles.loginRrror}>{loginError} !!</CustomText>}
      <CustomButton text={translations.signUp} onPress={handleSubmit} />

      <View style={styles.footer}>
        <CustomText style={styles.footerText}>{translations.alreadyHaveAccount}</CustomText>
        <TouchableOpacity onPress={navigationFn}>
          <CustomText style={styles.signupText}>{translations.signIn}</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;
