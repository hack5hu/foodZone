import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.buttonText,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});