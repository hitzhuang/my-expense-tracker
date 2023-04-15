import { createNativeStackNavigator } from '@react-navigation/native-stack';
import appStyles from '../styles/appStyles';
import BottomTabsNavigator from './BottomTabsNavigator';
import ManageExpense from '../screens/ManageExpense';

const Stack = createNativeStackNavigator();

const AuthorizedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: appStyles.colors.blackColor,
        // @ts-expect-error
        borderBottomColor: appStyles.colors.darkGoldColor,
        letterSpacing: 1,
      },
      headerTintColor: appStyles.colors.goldColor,
    }}
  >
    <Stack.Screen
      name="Expense Overview"
      component={BottomTabsNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Manage Expense"
      component={ManageExpense}
      options={{
        presentation: 'modal',
      }}
    />
  </Stack.Navigator>
);

export default AuthorizedNavigator;
