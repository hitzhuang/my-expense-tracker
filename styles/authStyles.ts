import { StyleSheet } from 'react-native';
import appStyles from './appStyles';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    color: appStyles.colors.darkGoldColor,
    backgroundColor: appStyles.colors.lightColor,
  },
  button: {
    marginHorizontal: 5,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: appStyles.colors.lightColor,
    textAlign: 'center',
    marginVertical: 20,
    letterSpacing: 1,
    textDecorationLine: 'underline',
  },
});

export default authStyles;
