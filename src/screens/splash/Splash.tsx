import { Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../../theme/colors'; // Ensure you have this
import { styles } from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FoodZone</Text>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default SplashScreen;

