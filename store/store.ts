import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './redux/expense';

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
