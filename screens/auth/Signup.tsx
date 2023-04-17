import { useDispatch } from 'react-redux';
import { Text } from 'react-native';
import { setUser } from '../../store/redux/user';
import screenStyles from '../../styles/screenStyles';
import Screen from '../Screen';
import SignupForm from '../../components/auth/SignupForm';

const Signup = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const handleSignup = (user: any) => dispatch(setUser(user));
  return (
    <Screen style={screenStyles.container}>
      <Text style={screenStyles.title}>Create your account</Text>
      <SignupForm
        onSignup={handleSignup}
        gotoLogin={() => navigation.replace('Login')}
      />
    </Screen>
  );
};

export default Signup;
