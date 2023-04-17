import { Text, View } from 'react-native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import screenStyles from '../../styles/screenStyles';
import ResetPasswordForm from '../../components/auth/ResetPasswordForm';

const ResetPassword = ({ navigation }: any) => {
  const handleResetPassword = (msg: string) => {
    Toast.show({ type: 'success', text1: msg });
    navigation.replace('Login');
  };
  return (
    <View style={screenStyles.container}>
      <Text style={screenStyles.title}>Reset your password</Text>
      <ResetPasswordForm
        onConfirm={handleResetPassword}
        onCancel={() => navigation.replace('Login')}
      />
    </View>
  );
};

export default ResetPassword;
