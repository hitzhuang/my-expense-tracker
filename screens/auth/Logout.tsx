import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserOff } from '../../store/redux/user';
import { initExpense } from '../../store/redux/expense';
import { setLoading } from '../../store/redux/loading';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { signoutUser } from '../../firebase/user';
import appStyles from '../../styles/appStyles';
import screenStyles from '../../styles/screenStyles';
import ActionButton from '../../components/ActionButton';

const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const userName = user?.name;

  const handleSingoutUser = () => {
    dispatch(setLoading(true));
    signoutUser()
      .then((res: any) => {
        dispatch(setUserOff());
        dispatch(initExpense([]));
        Toast.show({ type: 'success', text1: res });
      })
      .catch((error) => Toast.show({ type: 'failure', text1: error }))
      .finally(() => dispatch(setLoading(false)));
  };

  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Logout</Text>
      <View style={styles.container}>
        <Text style={styles.text}>
          {userName ? `${userName}, are you leaving?` : 'Are you leaving?'}
        </Text>
        <ActionButton
          title="Logout"
          color={appStyles.colors.lightColor}
          backgroundColor={appStyles.colors.darkGoldColor}
          onPress={handleSingoutUser}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 5 },
  text: {
    color: appStyles.colors.lightColor,
    fontSize: 18,
    paddingVertical: 30,
  },
});

export default Logout;
