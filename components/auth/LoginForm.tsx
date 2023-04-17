import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/redux/loading';
import { loginUser } from '../../firebase/user';
import appStyles from '../../styles/appStyles';
import authStyles from '../../styles/authStyles';
import ActionButton from '../ActionButton';
import FormTextInput from '../FormTextInput';
import useRequiredFields from '../../hooks/useRequiredFields';

interface LoginFormProps {
  gotoSignup: () => void;
  gotoPasswordReset: () => void;
  onLogin: (user: any) => void;
}

const LoginForm = ({
  gotoSignup,
  gotoPasswordReset,
  onLogin,
}: LoginFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errors, setErrors, checkFields, hasAnyError } = useRequiredFields();

  const handleLogin = () => {
    if (hasAnyError(checkFields({ email, password }, {}))) return;

    dispatch(setLoading(true));
    loginUser(email.toLocaleLowerCase(), password)
      .then((user) => onLogin(user))
      .catch((error: string) => {
        switch (error) {
          case 'auth/user-not-found':
            setErrors({ email: 'Unknown user email.' });
            break;
          case 'auth/invalid-email':
            setErrors({ email: 'Invalid email format.' });
            break;
          case 'auth/wrong-password':
            setErrors({ password: 'Password incorrect.' });
            setPassword('');
            break;
          default:
            Toast.show({ type: 'failure', text1: error });
            break;
        }
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
      <Text
        style={[authStyles.text, { marginTop: 0 }]}
        onPress={gotoPasswordReset}
      >
        Forgot your Password?
      </Text>
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
