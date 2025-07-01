import React from 'react';
import { View, Text } from 'react-native';
import { CuisineBlock } from '../../molecules/cuisineBlock/CuisineBlock';
import { RestaurantCardProps } from './type';
import { styles } from './style';


export const RestaurantCard = ({ item, handleAddToCart, cartItem }: RestaurantCardProps) => {
  return (
    <View style={styles.restaurantCard}>
      <View style={styles.restaurantHeader}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantRating}>⭐ {item.rating}</Text>
      </View>
      {item.cuisines.map((cuisine: any) => (
        <CuisineBlock
          key={cuisine.id}
          cuisine={cuisine}
          handleAddToCart={handleAddToCart}
          cartItem={cartItem}
        />
      ))}
    </View>
  );
};

