import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/const/api';
import type { IUser } from './dtos';
import { TLoginData, TLoginResponse } from './type';

// export const getUserMe = createAsyncThunk(
//   'user/getUserMe',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get<IUser>(`${BASE_URL}/api/v1/user/me`);

//       return data;
//     } catch (error: unknown) {
//       if (axios.isAxiosError(error)) {
//         return rejectWithValue(error.response?.data ?? 'Unknown error');
//       } else {
//         return rejectWithValue('Unknown error');
//       }
//     }
//   }
// );

export const login = createAsyncThunk<TLoginResponse, TLoginData>(
  'user/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<TLoginResponse>(
        `${BASE_URL}/auth/token/login/`,
        { email, password }
      );

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

export const getUserMe = createAsyncThunk(
  'user/getUserMe',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return rejectWithValue('Token is missing');
      }

      const response = await axios.get<IUser>(`${BASE_URL}/api/v1/user/me`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? 'Unknown error');
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  }
);
