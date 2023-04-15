import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../store/redux/loading';
import { initExpense } from '../store/redux/expense';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAllExpense } from '../firebase/expense';
import appStyles from '../styles/appStyles';
import BottomTabsNavigator from './BottomTabsNavigator';
import ManageExpense from '../screens/ManageExpense';

const Stack = createNativeStackNavigator();

const AuthorizedNavigator = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.user.email);
  useEffect(() => {
    dispatch(setLoading(true));
    getAllExpense(userId)
      .then((list: any) => dispatch(initExpense(list)))
      .catch((error) => Toast.show({ type: 'failure', text1: error.message }))
      .finally(() => dispatch(setLoading(false)));
  }, []);

  return (
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
};

export default AuthorizedNavigator;
