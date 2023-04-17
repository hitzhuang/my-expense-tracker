import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appStyles from '../styles/appStyles';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import ResetPassword from '../screens/auth/ResetPassword';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: appStyles.colors.blackColor,
        // @ts-expect-error
        borderBottomColor: appStyles.colors.darkGoldColor,
      },
      headerTintColor: appStyles.colors.goldColor,
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sign Up" component={Signup} />
    <Stack.Screen name="Reset Password" component={ResetPassword} />
  </Stack.Navigator>
);

export default AuthNavigator;
