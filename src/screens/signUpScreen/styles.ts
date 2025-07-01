import { colors } from "../../theme/colors";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.accentOrange,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: colors.buttonText,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputBlock: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: colors.ashGrey,
    marginBottom: 5,
  },
  error: {
    color: colors.errorRed,
    fontSize: 12,
    marginTop: 4,
  },
  footer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: colors.lightGrey,
    fontSize: 14,
  },
  signupText: {
    color: colors.accentOrange,
    fontSize: 14,
    marginLeft: 6,
    fontWeight: '600',
  },
   loginRrror: {
    color: colors.errorRed,
    fontSize: 15,
    margin: 6,
  },
});
