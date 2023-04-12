import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './store/store';
import ToastView from './components/view/ToastView';
import AuthorizedNavigator from './navigators/AuthorizedNavigator';
import AuthNavigator from './navigators/AuthNavigator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Provider store={store}>
          <AuthNavigator />
          {/* <AuthorizedNavigator /> */}
          <ToastView />
        </Provider>
      </NavigationContainer>
    </View>
  );
}
