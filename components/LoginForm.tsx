import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import appStyles from '../styles/appStyles';
import authStyles from '../styles/authStyles';
import ActionButton from './ActionButton';
import FormTextInput from './FormTextInput';
import { loginUser } from '../firebase/user';
import { setLoading } from '../store/redux/loading';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

interface LoginFormProps {
  gotoSignup: () => void;
  onLogin: (user: any) => void;
}

const LoginForm = ({ gotoSignup, onLogin }: LoginFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleLogin = () => {
    let defaultErrors: any = {};
    if (!email) {
      defaultErrors['email'] = 'Field is required.';
    }
    if (!password) {
      defaultErrors['password'] = 'Field is required.';
    }
    if (Object.keys(defaultErrors).length !== 0) {
      setErrors(defaultErrors);
      return;
    }
    dispatch(setLoading(true));
    loginUser(email, password)
      .then((user) => onLogin(user))
      .catch((error: string) => {
        switch (error) {
          case 'auth/user-not-found':
            defaultErrors['email'] = 'Unknown user email.';
            break;
          case 'auth/invalid-email':
            defaultErrors['email'] = 'Invalid email format.';
            break;
          case 'auth/wrong-password':
            defaultErrors['password'] = 'Password incorrect.';
            break;
          default:
            Toast.show({ type: 'failure', text1: error });
            break;
        }
        setPassword('');
        setErrors(defaultErrors);
      })
      .finally(() => dispatch(setLoading(false)));
  };

  const renderFieldInputs = () => (
    <View>
      <FormTextInput
        label="Email"
        inputStyle={authStyles.inputStyle}
        data={email}
        onChange={(e) => setEmail(e)}
        error={errors.email}
      />
      <FormTextInput
        label="Password"
        inputStyle={authStyles.inputStyle}
        secureTextEntry={true}
        data={password}
        onChange={(e) => setPassword(e)}
        error={errors.password}
      />
    </View>
  );

  const renderActions = () => (
    <View style={authStyles.button}>
      <ActionButton
        title="Login In"
        color={appStyles.colors.lightColor}
        backgroundColor={appStyles.colors.darkGoldColor}
        onPress={handleLogin}
      />
      <Text style={authStyles.text} onPress={gotoSignup}>
        New here ? Sign up instead.
      </Text>
    </View>
  );

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      {renderFieldInputs()}
      {renderActions()}
    </ScrollView>
  );
};

export default LoginForm;
