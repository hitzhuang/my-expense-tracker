import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import {
  addExpense,
  removeExpense,
  updateExpense,
} from '../store/redux/expense';
import appStyles from '../styles/appStyles';
import screenStyles from '../styles/screenStyles';
import ExpenseForm from '../components/expense/ExpenseForm';
import ActionButton from '../components/ActionButton';
import Screen from './Screen';
import {
  createDatabaseExpense,
  deleteDatabaseExpense,
  updateDatabaseExpense,
} from '../firebase/expense';
import { setLoading } from '../store/redux/loading';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const ManageExpense = ({ route, navigation }: any) => {
  const id = route.params?.id;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'New Expense',
    });
  }, [navigation]);

  const handleConfirm = async (data: any) => {
    dispatch(setLoading(true));
    try {
      let msg = 'Expense has been added.';
      if (data.id === undefined) {
        dispatch(addExpense(await createDatabaseExpense(data)));
      } else {
        msg = 'Expense has been updated.';
        dispatch(updateExpense(await updateDatabaseExpense(data.id, data)));
      }
      Toast.show({ type: 'success', text1: msg });
      handleClose();
    } catch (error) {
      Toast.show({ type: 'failure', text1: 'Opps...Something goes wrong!' });
    }
    dispatch(setLoading(false));
  };

  const handleDelete = async () => {
    dispatch(setLoading(true));
    try {
      dispatch(removeExpense(await deleteDatabaseExpense(id)));
      Toast.show({ type: 'success', text1: 'Expense has been deleted.' });
      handleClose();
    } catch (error) {
      Toast.show({ type: 'failure', text1: 'Opps...Something goes wrong!' });
    }
    dispatch(setLoading(false));
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const renderDeleteButton = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}
    >
      <ActionButton
        icon={{ name: 'delete', size: 24, color: appStyles.colors.lightColor }}
        backgroundColor={appStyles.colors.redColor}
        onPress={handleDelete}
      />
    </View>
  );

  return (
    <Screen style={screenStyles.container}>
      <ExpenseForm
        data={route.params}
        onConfirm={handleConfirm}
        onCancel={handleClose}
      />
      {id !== undefined && renderDeleteButton()}
    </Screen>
  );
};

export default ManageExpense;
