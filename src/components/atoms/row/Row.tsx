import React from 'react';
import { View, Text } from 'react-native';
import { Props } from './type';
import { styles } from './styles';

export const Row = ({ label, value, bold = false }: Props) => (
  <View style={styles.row}>
    <Text style={[styles.label, bold && styles.bold]}>{label}</Text>
    <Text style={[styles.value, bold && styles.bold]}>{value}</Text>
  </View>
);

