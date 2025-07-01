import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
   checkoutBtn: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: 'bold',
    backgroundColor: colors.lightSuccess,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign:'center',
    marginVertical:10
  },

});
