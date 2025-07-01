import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { HeaderBarProps } from './type';
import { translations } from '../../../constants/lang/baseLocalisation';
import { CustomText } from '../../atoms/customText/CustomText';
import { CustomButton } from '../../atoms/Button/Button';


export const HeaderBar = ({ onLogout }: HeaderBarProps) => {
  return (
    <View style={styles.header}>
      <CustomText style={styles.headerText}>🍔 {translations.appName}</CustomText>
    <CustomButton text='logout' onPress={onLogout} textStyle={styles.checkoutBtn} buttonStyle={{}}/>
    </View>
  );
};
