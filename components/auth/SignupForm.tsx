import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/redux/loading';
import { signupUser } from '../../firebase/user';
import appStyles from '../../styles/appStyles';
import authStyles from '../../styles/authStyles';
import ActionButton from '../ActionButton';
import FormTextInput from '../FormTextInput';
import useRequiredFields from '../../hooks/useRequiredFields';

interface SignupFormProps {
  gotoLogin: () => void;
  onSignup: (data: any) => void;
}

const SignupForm = ({ gotoLogin, onSignup }: SignupFormProps) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recheckPassword, setRecheckPassword] = useState('');
  const { errors, setErrors, checkFields, hasAnyError } = useRequiredFields();

  const handleSignup = () => {
    let fields = { name, email, password, recheckPassword };
    let passwordError = 'Password is not matched.';
    let recheckError = 'Confirm Password is not matched.';
    let otherErrors =
      password !== recheckPassword
        ? { password: passwordError, recheckPassword: recheckError }
        : {};
    if (hasAnyError(checkFields(fields, otherErrors))) return;

    dispatch(setLoading(true));
    signupUser(name, email, password)
      .then((user) => onSignup(user))
      .catch((error: string) => {
        switch (error) {
          case 'auth/invalid-email':
            setErrors({ email: 'Invalid email format.' });
            break;
          case 'auth/email-already-in-use':
            setErrors({ email: 'Email has been taken.' });
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
        label="Username"
        inputStyle={authStyles.inputStyle}
        data={name}
        onChange={(e) => setName(e)}
        error={errors.name}
      />
      <FormTextInput
        label="Email"
        inputStyle={authStyles.inputStyle}
        inputMode="email"
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
      <FormTextInput
        label="Confirm Password"
        inputStyle={authStyles.inputStyle}
        secureTextEntry={true}
        data={recheckPassword}
        onChange={(e) => setRecheckPassword(e)}
        error={errors.recheckPassword}
      />
    </View>
  );

  const renderActions = () => (
    <View style={authStyles.button}>
      <ActionButton
        title="Sign Up"
        color={appStyles.colors.lightColor}
        backgroundColor={appStyles.colors.darkGoldColor}
        onPress={handleSignup}
      />
      <Text style={authStyles.text} onPress={gotoLogin}>
        I'm already a member.
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

export default SignupForm;
