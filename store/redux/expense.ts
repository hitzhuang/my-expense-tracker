import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IExpense {
  data: any[];
}

const initialState: IExpense = {
  data: [],
};

const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    initExpense: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    addExpense: (state, action: PayloadAction<any>) => {
      let data = { ...action.payload };
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
    removeExpense: (state, action: PayloadAction<any>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { initExpense, addExpense, updateExpense, removeExpense } =
  expenseSlice.actions;
export default expenseSlice.reducer;
