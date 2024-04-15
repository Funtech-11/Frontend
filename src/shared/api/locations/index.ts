import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/const/api';
import type { ILocation } from './dtos';

export const getLocations = createAsyncThunk(
  'locations/getLocations',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ILocation[]>(
        `${BASE_URL}/api/v1/locations/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getLocationById = createAsyncThunk(
  'locations/getLocationById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ILocation>(
        `${BASE_URL}/api/v1/locations/${id}`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
