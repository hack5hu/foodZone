import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { useCheckout } from './useCheckout';
import { colors } from '../../theme/colors';
import { CustomText } from '../../components/atoms/customText/CustomText';
import { Row } from '../../components/atoms/row/Row';
import { ItemRow } from '../../components/molecules/itemRow/ItemRow';
import { styles } from './styles';
import { translations } from '../../constants/lang/baseLocalisation';

export default function CheckoutScreen() {
  const {
    uniqueItems,
    subtotal,
    discount,
    tax,
    total,
    handlePayment,
  } = useCheckout();
  console.log(uniqueItems)
  return (
    <View style={styles.container}>
      <CustomText style={styles.header}>🧾 {translations.orderSummery}</CustomText>
      <CustomText style={styles.msg}>🍴 {translations.msgFood}!</CustomText>

      <FlatList
        data={uniqueItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ItemRow item={item} />}
        contentContainerStyle={styles.list}
      />

      <View style={styles.breakdown}>
        <View style={styles.voucher}>
          <CustomText style={styles.voucherText}>
            {translations.voucher} <CustomText style={{ color: colors.primary }}>FOOD20</CustomText> ({translations.discountOff})
          </CustomText>
        </View>
        <Row label={translations.subtotal} value={`₹${subtotal.toFixed(2)}`} />
        <Row label={translations.discount} value={`-₹${discount.toFixed(2)}`} />
        <Row label={translations.tax} value={`+₹${tax.toFixed(2)}`} />
        <View style={styles.separator} />
        <Row label={translations.totalPay} value={`₹${total.toFixed(2)}`} bold />
      </View>

      <CustomText style={styles.delivery}>🚚 {translations.deliveryMsg}</CustomText>
      <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
        <CustomText style={styles.payText}>💳 {translations.pay} ₹{total.toFixed(2)}</CustomText>
      </TouchableOpacity>
      <View style={styles.infoBox}>
        <CustomText style={styles.infoText}>🔒 {translations.securePayment}</CustomText>
      </View>
    </View>
  );
}

