import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import useExpense from '../hooks/useExpense';
import screenStyles from '../styles/screenStyles';
import Screen from './Screen';

const RecentExpense = () => {
  const { summary, list } = useExpense(7);
  return (
    <Screen style={screenStyles.container}>
      <ExpenseSummary total={summary} />
      <ExpenseList data={list} />
    </Screen>
  );
};

export default RecentExpense;
