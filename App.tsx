import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import appStyles from './styles/appStyles';
import AllExpense from './screens/AllExpense';
import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const ExpensOverview = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: appStyles.colors.blackColor,
      },
      headerTintColor: appStyles.colors.goldColor,
      tabBarStyle: {
        backgroundColor: appStyles.colors.blackColor,
      },
      tabBarActiveTintColor: appStyles.colors.goldColor,
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
        <Stack.Navigator>
          <Stack.Screen
            name="Expense Overview"
            component={ExpensOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Manage Expense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
