// File: src/components/molecules/ItemRow.tsx

import React from 'react';
import { View } from 'react-native';
import { CustomText } from '../../atoms/customText/CustomText';
import { styles } from './styles';
import { Props } from './type';

export const ItemRow = ({ item }: Props) => {
  return (
    <View style={styles.itemRow}>
      <CustomText style={styles.itemName}>{item.name}</CustomText>
      <CustomText style={styles.itemQty}>{item.quantity}  x  {item.price}  = </CustomText>
      <CustomText style={styles.itemPrice}>₹{item.price * item.quantity}</CustomText>
    </View>
  );
};

