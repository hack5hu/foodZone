import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { Props } from './type';


export const CustomTextInput: React.FC<Props> = ({ error = false, style, ...props }) => {
  return <TextInput style={[styles.input, error && styles.errorBorder, style]} {...props} />;
};

