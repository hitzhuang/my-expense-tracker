import React from 'react';
import { Text, View } from 'react-native';
import LoginForm from '../../components/LoginForm';
import screenStyles from '../../styles/screenStyles';

const Login = ({ navigation }: any) => {
  const handleLogin = () => {};
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Hello there, welcome back!</Text>
      <LoginForm
        onLogin={handleLogin}
        gotoSignup={() => navigation.replace('Sign Up')}
      />
    </View>
  );
};

export default Login;
