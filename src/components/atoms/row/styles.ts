import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  label: {
    color: colors.textSecondary,
  },
  value: {
    color: colors.buttonText,
  },
  bold: {
    fontWeight: 'bold',
  },
});