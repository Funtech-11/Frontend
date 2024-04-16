import { createSlice } from '@reduxjs/toolkit';

import { initialUser } from './constants';
import { login } from 'src/shared/api/user';
import { IUser } from 'src/shared/api/user/dtos';

interface IUserState {
  user: IUser;
  token: string | null;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IUserState = {
  user: initialUser,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.access_token;
        localStorage.setItem('token', action.payload.access_token);
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectUser = (state: { user: IUserState }) => state.user;

export default userSlice.reducer;
