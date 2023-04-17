import {
  StyleSheet,
  View,
  Text,
  TextInput,
  InputModeOptions,
  Platform,
} from 'react-native';
import IOSDatepickerInput from './IOSDatepickerInput';
import AndroidDatepickerInput from './AndroidDatepickerInput';

interface FormTextInputProps {
  inputStyle: {
    color: string;
    backgroundColor: string;
  };
  inputMode?: InputModeOptions | 'date' | undefined;
  secureTextEntry?: boolean;
  label: string;
  data?: any;
  onChange: (e: any) => void;
  error?: string | undefined;
}

const FormTextInput = ({
  inputStyle,
  inputMode,
  secureTextEntry = false,
  data,
  label,
  onChange,
  error,
}: FormTextInputProps) => {
  const renderDatePicker = () => {
    const date = data ? new Date(data) : new Date();
    const handleChange = (e: Date | undefined) =>
      e && onChange(e.toUTCString());

    return Platform.OS === 'android' ? (
      <AndroidDatepickerInput date={date} onChange={handleChange} />
    ) : Platform.OS === 'ios' ? (
      <IOSDatepickerInput date={date} onChange={handleChange} />
    ) : (
      <TextInput
        cursorColor={inputStyle.color}
        style={[styles.input, inputStyle]}
        value={date.toLocaleString([], {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        })}
        onChangeText={onChange}
      />
    );
  };

  const renderTextInput = (inputMode: InputModeOptions | undefined) => (
    <>
      <TextInput
        style={[styles.input, inputStyle, error ? styles.errorStyle : null]}
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
        cursorColor={error ? styles.errorStyle.color : inputStyle.color}
        value={data}
        onChangeText={onChange}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: inputStyle.backgroundColor }]}>
        {label}
      </Text>
      {inputMode === 'date' ? renderDatePicker() : renderTextInput(inputMode)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 5,
    letterSpacing: 2,
  },
  input: {
    fontWeight: 'bold',
    fontSize: 16,
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
  },
  errorStyle: {
    color: 'darkred',
    borderColor: 'darkred',
    borderWidth: 3,
  },
  errorText: {
    color: 'red',
    margin: 2,
    fontSize: 12,
    letterSpacing: 1,
  },
});

export default FormTextInput;
