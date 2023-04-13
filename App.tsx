import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { getAuth } from 'firebase/auth';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import ToastView from './components/view/ToastView';
import AuthorizedNavigator from './navigators/AuthorizedNavigator';
import AuthNavigator from './navigators/AuthNavigator';

const Routes = () => {
  const IsAuthenticated = useSelector((state: any) => state.user.email !== '');
  return IsAuthenticated ? <AuthorizedNavigator /> : <AuthNavigator />;
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Provider store={store}>
          <Routes />
          <ToastView />
        </Provider>
      </NavigationContainer>
    </View>
  );
}
