import { View } from 'react-native';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import useExpense from '../hooks/useExpense';
import screenStyles from '../styles/screenStyles';

const AllExpense = () => {
  const { summary, list } = useExpense(365);
  return (
    <View style={screenStyles.container}>
      <ExpenseSummary total={summary} />
      <ExpenseList data={list} />
    </View>
  );
};

export default AllExpense;
