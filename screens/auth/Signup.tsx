import { Text } from 'react-native';
import screenStyles from '../../styles/screenStyles';
import Screen from '../Screen';
import SignupForm from '../../components/auth/SignupForm';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const Signup = ({ navigation }: any) => {
  const handleSignup = (user: any) => {
    Toast.show({
      type: 'success',
      text1: `${user.email}, has been sign up.`,
    });
    navigation.replace('Login');
  };
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
