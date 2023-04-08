import { faker } from '@faker-js/faker';

const EXPENSE: any[] = [];

export const generateExpenseId = () => 'e' + EXPENSE.length;

for (let i = 0; i < 50; i++) {
  EXPENSE.push({
    id: generateExpenseId(),
    desc: faker.commerce.product(),
    date: faker.date.past(),
    amount: faker.finance.amount(1, 1000, 0),
  });
}

EXPENSE.sort((a, b) => b.date - a.date);

export default EXPENSE;
