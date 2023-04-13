import { useDispatch } from 'react-redux';
import { setUser } from '../../store/redux/user';
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../Screen';
import SignupForm from '../../components/SignupForm';
import screenStyles from '../../styles/screenStyles';

const Signup = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const handleSignup = (user: any) => dispatch(setUser(user));
  return (
    <Screen style={screenStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Text style={screenStyles.title}>Create your account</Text>
          <SignupForm
            onSignup={handleSignup}
            gotoLogin={() => navigation.replace('Login')}
          />
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default Signup;
