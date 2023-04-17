import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/redux/user';
import screenStyles from '../../styles/screenStyles';
import Screen from '../Screen';
import LoginForm from '../../components/auth/LoginForm';

const Login = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const handleLogin = (user: any) => dispatch(setUser(user));
  return (
    <Screen style={screenStyles.container}>
      <Text style={screenStyles.title}>Hello there, welcome back!</Text>
      <LoginForm
        onLogin={handleLogin}
        gotoSignup={() => navigation.replace('Sign Up')}
        gotoPasswordReset={() => navigation.replace('Reset Password')}
      />
    </Screen>
  );
};

export default Login;
