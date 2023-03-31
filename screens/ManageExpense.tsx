import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import appStyles from '../styles/appStyles';
import screenStyles from '../styles/screenStyles';
import ActionButton from '../components/ActionButton';
import { removeExpense } from '../store/redux/expense';

const ManageExpense = ({ route, navigation }: any) => {
  const id = route.params?.id;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: id ? 'Edit Expense' : 'New Expense',
      headerStyle: {
        backgroundColor: appStyles.colors.blackColor,
        borderBottomColor: appStyles.colors.darkGoldColor,
      },
    });
  }, [route, navigation]);

  const handleConfirm = () => {
    handleClose();
  };
  const handleDelete = () => {
    dispatch(removeExpense(id));
    handleClose();
  };
  const handleClose = () => {
    navigation.goBack();
  };

  const renderActionButtons = () => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <ActionButton
          title="Cancel"
          color={appStyles.colors.darkColor}
          backgroundColor={appStyles.colors.lightGrayColor}
          onPress={handleClose}
        />
      </View>
      <View style={{ flex: 1, marginHorizontal: 5 }}>
        <ActionButton
          title={id ? 'Update' : 'Add'}
          color={appStyles.colors.lightColor}
          backgroundColor={appStyles.colors.darkGoldColor}
          onPress={handleConfirm}
        />
      </View>
    </View>
  );

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
      {renderActionButtons()}
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
