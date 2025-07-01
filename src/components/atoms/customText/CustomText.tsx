import React from 'react';
import { Text } from 'react-native';
import { Props } from './type';

export const CustomText: React.FC<Props> = ({ children, style, ...rest }) => {
  return <Text style={style} {...rest}>{children}</Text>;
};