import { Button, StyleSheet, View } from 'react-native';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

interface AndroidDatepickerInputProps {
  date: Date;
  onChange: (e: Date | undefined) => void;
}

const AndroidDatepickerInput = ({
  date,
  onChange,
}: AndroidDatepickerInputProps) => {
  const handleChange = (
    e: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => onChange(selectedDate);

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: handleChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => showMode('date');
  const showTimepicker = () => showMode('time');

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <Button
          onPress={showDatepicker}
          title={date.toLocaleDateString([], {
            year: '2-digit',
            month: 'numeric',
            day: 'numeric',
          })}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          onPress={showTimepicker}
          title={date.toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric',
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    marginHorizontal: 1,
  },
});

export default AndroidDatepickerInput;
