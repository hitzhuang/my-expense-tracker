import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/user';
import loadingReducer from './redux/loading';
import expenseReducer from './redux/expense';

export const store = configureStore({
  reducer: {
    user: userReducer,
    expense: expenseReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
