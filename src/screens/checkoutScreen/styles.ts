import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background === '#fff' ? '#121212' : colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: colors.buttonText,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  msg: {
    margin: 20,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 10,
  },
  voucher: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  voucherText: {
    marginLeft: 10,
    color: colors.textSecondary,
  },
  breakdown: {
    marginTop: 20,
    paddingTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 8,
  },
  delivery: {
    marginTop: 10,
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  payBtn: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  payText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoBox: {
    marginTop: 10,
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    color: '#aaa',
    fontSize: 13,
  },
});
