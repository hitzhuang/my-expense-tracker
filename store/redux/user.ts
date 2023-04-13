import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  name: string;
  email: string;
}

const initialState: IUser = {
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
