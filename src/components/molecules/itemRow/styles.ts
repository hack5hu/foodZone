import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 6,
    marginVertical: 4,
  },
  itemName: {
    color: colors.buttonText,
    fontSize: 16,
    flex: 1,
  },
  itemQty: {
    color: colors.textSecondary,
    marginHorizontal: 8,
  },
  itemPrice: {
    color: colors.buttonText,
    fontWeight: '600',
  },
});
