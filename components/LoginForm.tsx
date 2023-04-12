import { useState } from 'react';
import { Text, View } from 'react-native';
import appStyles from '../styles/appStyles';
import authStyles from '../styles/authStyles';
import ActionButton from './ActionButton';
import FormTextInput from './FormTextInput';

interface LoginFormProps {
  gotoSignup: () => void;
  onLogin: (data: any) => void;
}

const LoginForm = ({ gotoSignup, onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const handleLogin = () => {
    // validate inputs
    //
    onLogin({ email, password });
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
    <View>
      {renderFieldInputs()}
      {renderActions()}
    </View>
  );
};

export default LoginForm;
