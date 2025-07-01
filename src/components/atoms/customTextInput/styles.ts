import {StyleSheet} from 'react-native'
import { colors } from '../../../theme/colors';
export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: colors.input,
    color: colors.textPrimary,
  },
  errorBorder: {
    borderColor: colors.errorRed,
  },
});