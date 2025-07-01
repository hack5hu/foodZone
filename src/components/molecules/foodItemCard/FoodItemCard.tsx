import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FoodItemRowProps } from './type';
import { styles } from './style';
import { CustomText } from '../../atoms/customText/CustomText';



export const FoodItemRow = ({ item, quantity = 0, onIncrement, onDecrement }: FoodItemRowProps) => {
  return (
    <View style={styles.foodItemContainer}>
      <View style={styles.foodDetails}>
        <CustomText style={styles.foodName}>{item.name}</CustomText>
        <CustomText style={styles.foodMeta}>₹{item.price}</CustomText>
      </View>

      
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => onDecrement(item)} style={styles.qtyButton}>
            <CustomText style={styles.qtyText}>−</CustomText>
          </TouchableOpacity>
          <CustomText style={styles.qtyCount}>{quantity}</CustomText>
          <TouchableOpacity onPress={() => onIncrement(item)} style={styles.qtyButton}>
            <CustomText style={styles.qtyText}>+</CustomText>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};


