import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { store } from './store/store';
import appStyles from './styles/appStyles';
import AllExpense from './screens/AllExpense';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import IconButton from './components/IconButton';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ExpensOverview = ({ navigation }: any) => (
  <BottomTabs.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: appStyles.colors.blackColor,
        borderBottomColor: appStyles.colors.darkGoldColor,
      },
      headerTintColor: appStyles.colors.goldColor,
      tabBarStyle: {
        backgroundColor: appStyles.colors.blackColor,
        borderTopColor: appStyles.colors.darkGoldColor,
      },
      tabBarActiveTintColor: appStyles.colors.goldColor,
      headerRight: () => (
        <IconButton
          icon="add-circle-outline"
          color={appStyles.colors.lightColor}
          onPress={() => navigation.navigate('Manage Expense')}
        />
      ),
    }}
  >
    <BottomTabs.Screen
      name="Recent Expense"
      component={RecentExpense}
      options={{
        tabBarLabel: 'Recent',
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="attach-money" size={size} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="All Expense"
      component={AllExpense}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="wallet" size={size} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Provider store={store}>
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
            <Stack.Screen
              name="Expense Overview"
              component={ExpensOverview}
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
        </Provider>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
