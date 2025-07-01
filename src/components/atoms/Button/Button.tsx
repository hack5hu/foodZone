import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Props } from './type';
import { styles } from './styles';

export const CustomButton: React.FC<Props> = ({ text, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={buttonStyle ? buttonStyle : styles.button} onPress={onPress}>
      <Text style={textStyle ? textStyle : styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};


