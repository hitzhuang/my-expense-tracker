import { View, StyleSheet } from 'react-native';
import appStyles from '../styles/appStyles';
import authStyles from '../styles/authStyles';
import FormTextInput from './FormTextInput';
import ActionButton from './ActionButton';

interface FormTextActionInputProps {
  inputLabel: string;
  buttonLabel: string;
  secureTextEntry?: boolean;
  value: string;
  onChange: (e: any) => void;
  onPress: () => void;
  error?: string;
}

const FormTextActionInput = ({
  inputLabel,
  buttonLabel,
  secureTextEntry = false,
  value,
  onChange,
  onPress,
  error = '',
}: FormTextActionInputProps) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <FormTextInput
          label={inputLabel}
          inputStyle={authStyles.inputStyle}
          secureTextEntry={secureTextEntry}
          data={value}
          onChange={onChange}
          error={error}
        />
      </View>
      <View style={[styles.button, error ? { marginBottom: 20 } : null]}>
        <ActionButton
          title={buttonLabel}
          color={appStyles.colors.lightColor}
          backgroundColor={appStyles.colors.redColor}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FormTextActionInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    marginRight: 5,
  },
});
