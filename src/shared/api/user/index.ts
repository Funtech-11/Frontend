import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/const/api';
import type { IUser } from './dtos';

export const getUserMe = createAsyncThunk(
  'user/getUserMe',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IUser>(`${BASE_URL}/api/v1/user/me`);

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
