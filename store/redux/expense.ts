import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import EXPENSE, { generateExpenseId } from '../../data/dummy-data';

interface IExpense {
  data: any[];
}

const initialState: IExpense = {
  data: EXPENSE,
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<any>) => {
      let data = { ...action.payload, id: generateExpenseId() };
      state.data = [...state.data, data].sort((a, b) => b.date - a.date);
    },
    updateExpense: (state, action: PayloadAction<any>) => {
      let data = [...state.data];
      let index = data.findIndex((d: any) => d.id === action.payload.id);
      if (index !== -1) {
        data[index] = action.payload;
        state.data = [...data];
      }
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, removeExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
