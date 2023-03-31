import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import EXPENSE from '../../data/dummy-data';

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
      state.data = [...state.data, action.payload];
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
