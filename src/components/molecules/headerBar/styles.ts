import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.accentOrange,
    textAlign: 'center',
    marginBottom: 10,
    
  },
  checkoutBtn: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
    backgroundColor: colors.lightSuccess,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
