import { FlatList, View, Text, StyleSheet } from 'react-native';
import appStyles from '../styles/appStyles';

const ExpenseListItem = ({ data }: any) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.desc}>{data.desc}</Text>
      <Text style={styles.date}>{data.date.toLocaleString()}</Text>
    </View>
    <View>
      <Text style={styles.amount}>${data.amount}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(200,200,200,1)',
    borderRadius: 5,
  },
  desc: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  date: {
    fontWeight: '400',
    fontSize: 12,
    color: appStyles.colors.grayColor,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 14,
    color: appStyles.colors.darkGoldColor,
  },
});

export default ExpenseListItem;
