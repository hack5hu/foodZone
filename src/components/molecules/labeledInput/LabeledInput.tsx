
import React from 'react';
import { View } from 'react-native';
import { CustomTextInput } from '../../atoms/customTextInput/CustomTextInput';
import { CustomText } from '../../atoms/customText/CustomText';
import { Props } from './type';
import { styles } from './styles';

export const LabeledInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  secureTextEntry,
  error,
  errorMessage,
}: Props) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.label}>{label}</CustomText>
      <CustomTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        error={error}
      />
      {error && errorMessage && (
        <CustomText style={styles.error}>{errorMessage}</CustomText>
      )}
    </View>
  );
};


