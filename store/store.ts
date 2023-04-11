import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer, { initExpense } from './redux/expense';
import loadingReducer, { setLoading } from './redux/loading';
import { getAllExpense } from '../firebase/expense';

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.dispatch(setLoading(true));
getAllExpense()
  .then((data: any) => store.dispatch(initExpense(data)))
  .catch((error: any) =>
    Toast.show({ type: 'failure', text1: 'Opps...Something goes wrong!' })
  )
  .finally(() => store.dispatch(setLoading(false)));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
