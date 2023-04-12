import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import appStyles from '../../styles/appStyles';
import ActionButton from '../ActionButton';
import FormTextInput from '../FormTextInput';

interface ExpenseFormProps {
  data?: any;
  onCancel: () => void;
  onConfirm: (e: any) => void;
}

const ExpenseForm = ({ data, onCancel, onConfirm }: ExpenseFormProps) => {
  const [amount, setAmount] = useState(data?.amount);
  const [desc, setDesc] = useState(data?.desc);
  const [date, setDate] = useState(
    data?.date ? new Date(data?.date) : new Date()
  );
  const [errors, setErrors] = useState<any>({});

  const handleConfirm = () => {
    // reset errors
    let validateErrors: any = {};
    setErrors({});

    // validate errors
    if (!desc) validateErrors['desc'] = 'Field is required!';
    if (!amount) validateErrors['amount'] = 'Field is required!';
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    // update expense list
    if (data?.id !== undefined) {
      onConfirm({ id: data?.id, desc, date, amount });
    } else {
      onConfirm({ desc, date, amount });
    }
  };

  const renderTextInputs = () => (
    <View style={styles.textInputs}>
      <FormTextInput
        label="Description: "
        inputStyle={styles.inputStyle}
        data={desc}
        onChange={(e) => setDesc(e)}
        error={errors.desc}
      />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <FormTextInput
            label="Date: "
            inputMode="date"
            inputStyle={styles.inputStyle}
            data={date}
            onChange={(e) => setDate(e)}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FormTextInput
            label="Amount: "
            inputMode="numeric"
            inputStyle={styles.inputStyle}
            data={amount}
            onChange={(e) => setAmount(e)}
            error={errors.amount}
          />
        </View>
      </View>
    </View>
  );
  const renderConfirmOrCancelButtons = () => (
    <View style={styles.buttons}>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <ActionButton
          title="Cancel"
          color={appStyles.colors.darkColor}
          backgroundColor={appStyles.colors.lightGrayColor}
          onPress={onCancel}
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <ActionButton
          title={data ? 'Update' : 'Add'}
          color={appStyles.colors.lightColor}
          backgroundColor={appStyles.colors.darkGoldColor}
          onPress={handleConfirm}
        />
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      {renderTextInputs()}
      {renderConfirmOrCancelButtons()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputs: {
    paddingVertical: 20,
    borderBottomColor: appStyles.colors.grayColor,
    borderBottomWidth: 1,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  inputStyle: {
    color: appStyles.colors.darkGoldColor,
    backgroundColor: appStyles.colors.lightColor,
  },
});

export default ExpenseForm;
