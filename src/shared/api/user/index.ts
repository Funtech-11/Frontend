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
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? 'Unknown error');
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  }
);
