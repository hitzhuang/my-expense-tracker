import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import appStyles from '../styles/appStyles';

interface IOSDatepickerInputProps {
  date: Date;
  onChange: (e: Date | undefined) => void;
}

const IOSDatepickerInput = ({ date, onChange }: IOSDatepickerInputProps) => {
  const handleChange = (
    e: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => onChange(selectedDate);

  return (
    <DateTimePicker
      style={{
        marginTop: 2,
        backgroundColor: appStyles.colors.lightColor,
        overflow: 'hidden',
        padding: 6,
        borderRadius: 5,
      }}
      value={date}
      mode="datetime"
      onChange={handleChange}
      textColor={appStyles.colors.darkGoldColor}
      accentColor={appStyles.colors.darkGoldColor}
    />
  );
};

export default IOSDatepickerInput;
