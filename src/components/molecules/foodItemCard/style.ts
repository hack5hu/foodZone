import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";

export const styles = StyleSheet.create({
  foodItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 15,
    color: colors.buttonText,
    marginBottom: 2,
  },
  foodMeta: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addButtonText: {
    color: colors.buttonText,
    fontWeight: '600',
  },
  notAddedButton: {
  backgroundColor: colors.freshGreen
},

addedButton: {
  backgroundColor: colors.mutedGray
},
quantityContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.primary,
  paddingHorizontal: 8,
  paddingVertical: 4,
  borderRadius: 20,
},
qtyButton: {
  paddingHorizontal: 10,
},
qtyText: {
  color: colors.buttonText,
  fontSize: 16,
  fontWeight: 'bold',
},
qtyCount: {
  marginHorizontal: 8,
  color: colors.buttonText,
  fontSize: 16,
},

});