import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useHome } from './useHome';
import { RestaurantCard } from '../../components/organisms/restaurantCard/RestaurantCard';
import { HeaderBar } from '../../components/molecules/headerBar/HeaderBar';
import { styles } from './styles';
import { CustomButton } from '../../components/atoms/Button/Button';
import { translations } from '../../constants/lang/baseLocalisation';

const HomeScreen = () => {
  const { cartItems, mockRestaurants, handleAddToCart, handleCheckout,handleLogout } = useHome();

  const renderRestaurant = ({ item }: any) => (
    <RestaurantCard item={item} handleAddToCart={handleAddToCart} cartItem={cartItems} />
  );

  return (
    <View style={styles.container}>
      <HeaderBar onLogout={handleLogout} />
      <FlatList
        data={mockRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurant}
        contentContainerStyle={styles.listContent}
      />
      {cartItems.length > 0 && (
        <CustomButton onPress={handleCheckout} text={`${translations.checkout} (${cartItems.length})`} textStyle={styles.checkoutBtn}  buttonStyle={{}}/>

      )}
    </View>
  );
};

export default HomeScreen;


