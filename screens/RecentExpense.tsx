import React from 'react';
import { View } from 'react-native';
import ExpenseList from '../components/ExpenseList';
import ExpenseSummary from '../components/ExpenseSummary';
import useExpense from '../hooks/useExpense';
import screenStyles from '../styles/screenStyles';

const RecentExpense = () => {
  const { summary, list } = useExpense(7);
  return (
    <View style={screenStyles.container}>
      <ExpenseSummary total={summary} />
      <ExpenseList data={list} />
    </View>
  );
};

export default RecentExpense;
