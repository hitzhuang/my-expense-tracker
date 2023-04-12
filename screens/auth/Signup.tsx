import { Text, View } from 'react-native';
import screenStyles from '../../styles/screenStyles';
import SignupForm from '../../components/SignupForm';

const Signup = ({ navigation }: any) => {
  const handleSignup = () => {};
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Create your account</Text>
      <SignupForm
        onSignup={handleSignup}
        gotoLogin={() => navigation.replace('Login')}
      />
    </View>
  );
};

export default Signup;
