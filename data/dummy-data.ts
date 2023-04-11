import { faker } from '@faker-js/faker';
import { createExpense } from '../firebase/expense';
import { Timestamp } from 'firebase/firestore';

const EXPENSE: any[] = [];

export const generateExpenseId = () => 'e' + EXPENSE.length;

for (let i = 0; i < 50; i++) {
  let data = {
    desc: faker.commerce.product(),
    date: Timestamp.fromDate(faker.date.past()),
    amount: faker.finance.amount(1, 1000, 0),
  };
  // EXPENSE.push({
  //   id: generateExpenseId(),
  //   ...data,
  // });

  EXPENSE.push(createExpense({ ...data }));
}

EXPENSE.sort((a, b) => b.date - a.date);

export default EXPENSE;
