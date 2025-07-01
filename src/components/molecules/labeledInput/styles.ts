import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    color: colors.textSecondary,
    marginBottom: 6,
    fontSize: 14,
  },
  error: {
    color: colors.errorRed,
    fontSize: 12,
    marginTop: 4,
  },
});