import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  isAuthorized: boolean;
  name: string;
  email: string;
}

const initialState: IUser = {
  isAuthorized: false,
  name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    setUserOff: (state) => {
      state.isAuthorized = false;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isAuthorized = true;
    },
  },
});

export const { setUser, setUserOff } = userSlice.actions;
export default userSlice.reducer;
