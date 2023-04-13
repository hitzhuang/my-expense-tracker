import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import ActionButton from './ActionButton';
import appStyles from '../styles/appStyles';
import FormTextInput from './FormTextInput';
import authStyles from '../styles/authStyles';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/redux/loading';
import { signupUser } from '../firebase/user';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

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
  const [errors, setErrors] = useState<any>({});

  const handleSignup = () => {
    let defaultErrors: any = {};
    if (!name) {
      defaultErrors['name'] = 'Field is required.';
    }
    if (!email) {
      defaultErrors['email'] = 'Field is required.';
    }
    if (!password) {
      defaultErrors['password'] = 'Field is required.';
    }
    if (!recheckPassword) {
      defaultErrors['recheckPassword'] = 'Field is required.';
    }
    if (password !== recheckPassword) {
      defaultErrors['password'] = 'Password is not matched.';
      defaultErrors['recheckPassword'] = 'Confirm Password is not matched.';
    }
    if (Object.keys(defaultErrors).length !== 0) {
      setErrors(defaultErrors);
      return;
    }
    dispatch(setLoading(true));
    signupUser(name, email, password)
      .then((user) => onSignup(user))
      .catch((error: string) => {
        switch (error) {
          case 'auth/invalid-email':
            defaultErrors['email'] = 'Invalid email format.';
            break;
          case 'auth/email-already-in-use':
            defaultErrors['email'] = 'Email has been taken.';
            break;
          default:
            Toast.show({ type: 'failure', text1: error });
            break;
        }
        setErrors(defaultErrors);
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
