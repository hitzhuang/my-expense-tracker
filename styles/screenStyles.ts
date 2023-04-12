import { StyleSheet } from 'react-native';
import appStyles from './appStyles';

const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.colors.darkColor,
    padding: 20,
  },
  title: {
    color: appStyles.colors.lightColor,
    fontWeight: 'bold',
    fontSize: 24,
    paddingVertical: 20,
    marginLeft: 5,
    letterSpacing: 1,
  },
});

export default screenStyles;
