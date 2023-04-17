import { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/redux/loading';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { sendVerificationCode } from '../../firebase/user';
import authStyles from '../../styles/authStyles';
import FormTextInput from '../FormTextInput';
import ConfirmCancelButtons from '../ConfirmCancelButtons';
import useRequiredFields from '../../hooks/useRequiredFields';

interface ResetPasswordFormProps {
  onCancel: () => void;
  onConfirm: (msg: string) => void;
}

const ResetPasswordForm = ({ onCancel, onConfirm }: ResetPasswordFormProps) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const { errors, setErrors, checkFields, hasAnyError } = useRequiredFields();

  const handleConfirm = () => {
    if (hasAnyError(checkFields({ email }, {}))) return;
    dispatch(setLoading(true));
    sendVerificationCode(email)
      .then((msg: any) => onConfirm(msg))
      .catch((error) => {
        Toast.show({ type: 'failure', text1: error });
        setErrors({ ...errors, email: 'Invalid email account.' });
      })
      .finally(() => dispatch(setLoading(false)));
  };

  const renderFieldInputs = () => (
    <View>
      <FormTextInput
        label="Email"
        inputStyle={authStyles.inputStyle}
        inputMode="email"
        data={email}
        onChange={(e) => setEmail(e)}
        error={errors.email}
      />
    </View>
  );

  const renderActions = () => (
    <View style={authStyles.button}>
      <ConfirmCancelButtons
        confirmLabel="Email Link"
        onCancel={onCancel}
        onConfirm={handleConfirm}
      />
    </View>
  );

  return (
    <View>
      {renderFieldInputs()}
      {renderActions()}
    </View>
  );
};

export default ResetPasswordForm;
