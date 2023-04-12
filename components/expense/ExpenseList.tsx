import React from 'react';
import { FlatList } from 'react-native';
import ExpenseListItem from './ExpenseListItem';

interface ExpenseListProps {
  data: any;
}

const ExpenseList = ({ data }: ExpenseListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ExpenseListItem data={item} />}
    />
  );
};

export default ExpenseList;
