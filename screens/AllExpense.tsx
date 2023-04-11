import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import useExpense from '../hooks/useExpense';
import screenStyles from '../styles/screenStyles';
import Screen from './Screen';

const AllExpense = () => {
  const { summary, list } = useExpense(365);
  return (
    <Screen style={screenStyles.container}>
      <ExpenseSummary total={summary} />
      <ExpenseList data={list} />
    </Screen>
  );
};

export default AllExpense;
