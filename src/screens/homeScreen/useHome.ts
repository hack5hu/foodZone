import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItemToCart, clearCart } from '../../store/slices/cartSlice';
import { mockRestaurants } from '../../constants/mockRestaurants';
import { useCallback } from 'react';
import { logout, setIsLogin } from '../../store/slices/globalSlice';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './type';
import { batch } from 'react-redux';

export const useHome = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useAppSelector(state => state.cart.cartItems);

  const handleAddToCart = useCallback((item: any) => {
    dispatch(addItemToCart(item));
  }, [dispatch]);

 const handleLogout = useCallback(() => {
  batch(() => {
    dispatch(clearCart());
    dispatch(logout());
  });
}, [dispatch, navigation]);
  const handleCheckout = useCallback(() => {
    navigation.navigate('Checkout')
  }, [navigation]);

  return {
    cartItems,
    mockRestaurants,
    handleAddToCart,
    handleCheckout,
    handleLogout
  };
};