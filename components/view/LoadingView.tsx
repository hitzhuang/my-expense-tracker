import { ActivityIndicator, StyleSheet, View } from 'react-native';
import appStyles from '../../styles/appStyles';
import screenStyles from '../../styles/screenStyles';

const LoadingView = () => {
  return (
    <View style={[screenStyles.container, styles.container]}>
      <ActivityIndicator color={appStyles.colors.darkGoldColor} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingView;
