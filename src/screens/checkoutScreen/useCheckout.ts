
import { useNavigation } from '@react-navigation/native';
import { translations } from '../../constants/lang/baseLocalisation';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { clearCart } from '../../store/slices/cartSlice';
import { Alert } from 'react-native';
import { NavigationProp } from './type';

export const useCheckout = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const uniqueItems = cartItems;

  const subtotal = uniqueItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const tax = (subtotal - discount) * 0.05;
  const total = subtotal - discount + tax;

  const handlePayment = () => {
    Alert.alert(`✅ ${translations.paymentSuccessful}`, translations.thanksMsg, [
    {
      text: 'OK',
      onPress: () => {
        dispatch(clearCart());
        navigation.pop();
      },
    },
  ],
  { cancelable: false });
  };

  return {
    uniqueItems,
    subtotal,
    discount,
    tax,
    total,
    handlePayment,
  };
};