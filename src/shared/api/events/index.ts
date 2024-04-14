import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/const/api';
import type { IEvent } from './dtos';

export const getEventsCards = createAsyncThunk(
  'events/getEventsCards',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IEvent[]>(`${BASE_URL}/api/v1/events/`);

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
