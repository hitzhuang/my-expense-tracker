import { useDispatch } from 'react-redux';
import { setUser } from '../../store/redux/user';
import { Keyboard, View, Text, TouchableWithoutFeedback } from 'react-native';
import Screen from '../Screen';
import LoginForm from '../../components/LoginForm';
import screenStyles from '../../styles/screenStyles';

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const handleLogin = (user: any) => dispatch(setUser(user));
  return (
    <Screen style={screenStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Text style={screenStyles.title}>Hello there, welcome back!</Text>
          <LoginForm
            onLogin={handleLogin}
            gotoSignup={() => navigation.replace('Sign Up')}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default Login;
