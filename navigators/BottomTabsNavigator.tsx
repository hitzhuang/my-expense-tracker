import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import appStyles from '../styles/appStyles';
import IconButton from '../components/IconButton';
import AllExpense from '../screens/AllExpense';
import RecentExpense from '../screens/RecentExpense';
import Logout from '../screens/auth/Logout';

const BottomTabs = createBottomTabNavigator();
const BottomTabsNavigator = ({ navigation }: any) => (
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
    <BottomTabs.Screen
      name="Logout"
      component={Logout}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="logout" size={size} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

export default BottomTabsNavigator;
