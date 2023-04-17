import { View, StyleSheet } from 'react-native';
import ActionButton from './ActionButton';
import appStyles from '../styles/appStyles';

interface ConfirmCancelButtonsProps {
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmCancelButtons = ({
  confirmLabel,
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}: ConfirmCancelButtonsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.cacnel}>
        <ActionButton
          title={cancelLabel}
          color={appStyles.colors.darkColor}
          backgroundColor={appStyles.colors.lightGrayColor}
          onPress={onCancel}
        />
      </View>
      <View style={styles.confirm}>
        <ActionButton
          title={confirmLabel}
          color={appStyles.colors.lightColor}
          backgroundColor={appStyles.colors.darkGoldColor}
          onPress={onConfirm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cacnel: { flex: 1, marginRight: 5 },
  confirm: { flex: 1, marginLeft: 5 },
});

export default ConfirmCancelButtons;
