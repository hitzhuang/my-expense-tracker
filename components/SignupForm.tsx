import { useState } from 'react';
import { Text, View } from 'react-native';
import ActionButton from './ActionButton';
import appStyles from '../styles/appStyles';
import FormTextInput from './FormTextInput';
import authStyles from '../styles/authStyles';

interface SignupFormProps {
  gotoLogin: () => void;
  onSignup: (data: any) => void;
}

const SignupForm = ({ gotoLogin, onSignup }: SignupFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recheckPassword, setRecheckPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleSignup = () => {
    // validate inputs
    onSignup({ email, password });
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
        data={password}
        onChange={(e) => setPassword(e)}
        error={errors.password}
      />
      <FormTextInput
        label="Confirm Password"
        inputStyle={authStyles.inputStyle}
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
    <View>
      {renderFieldInputs()}
      {renderActions()}
    </View>
  );
};

export default SignupForm;
