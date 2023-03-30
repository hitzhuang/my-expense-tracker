import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appStyles from '../styles/appStyles';

interface ExpenseSummaryProps {
  total: number;
}

const ExpenseSummary = ({ total }: ExpenseSummaryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>TOTAL</Text>
        <Text style={styles.text}>
          {total.toLocaleString('zh-TW', {
            style: 'currency',
            currency: 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: appStyles.colors.blackColor,
    marginBottom: 15,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: appStyles.colors.goldColor,
  },
  text: {
    padding: 20,
    color: appStyles.colors.goldColor,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default ExpenseSummary;
