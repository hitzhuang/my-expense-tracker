import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import {
  addExpense,
  removeExpense,
  updateExpense,
} from '../store/redux/expense';
import appStyles from '../styles/appStyles';
import screenStyles from '../styles/screenStyles';
import ExpenseForm from '../components/ExpenseForm';
import ActionButton from '../components/ActionButton';

const ManageExpense = ({ route, navigation }: any) => {
  const id = route.params?.id;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'New Expense',
    });
  }, [navigation]);

  const handleConfirm = (data: any) => {
    if (data.id === undefined) {
      dispatch(addExpense(data));
    } else {
      dispatch(updateExpense(data));
    }
    handleClose();
  };
  const handleDelete = () => {
    dispatch(removeExpense(id));
    handleClose();
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
    <View style={screenStyles.container}>
      <ExpenseForm
        data={route.params}
        onConfirm={handleConfirm}
        onCancel={handleClose}
      />
      {id !== undefined && renderDeleteButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: appStyles.colors.darkColor,
  },
});

export default ManageExpense;
