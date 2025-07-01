import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  restaurantCard: {
    margin: 12,
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
  },
  restaurantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.buttonText,
  },
  restaurantRating: {
    fontSize: 14,
    color: colors.primary,
  },
});
