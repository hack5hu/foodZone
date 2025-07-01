import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { useAppDispatch } from '../../../store/hooks';
import { addItemToCart, decrementItemFromCart } from '../../../store/slices/cartSlice';
import { FoodItemRow } from '../foodItemCard/FoodItemCard';
import { CuisineBlockProps } from './type';

export const CuisineBlock = ({ cuisine, cartItem }: CuisineBlockProps) => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.cuisineBlock}>
      <Text style={styles.cuisineTitle}>{cuisine.name}</Text>

      {cuisine.items.map((item: any) => {
        const quantity = cartItem.find((i: any) => i.id === item.id)?.quantity || 0;
        return (
          <FoodItemRow
            key={item.id}
            item={item}
            quantity={quantity}
            onIncrement={() => dispatch(addItemToCart(item))}
            onDecrement={() => dispatch(decrementItemFromCart(item.id))}
          />
        );
      })}
    </View>
  );
};
