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
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? 'Unknown error');
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  }
);

export const getEventById = createAsyncThunk(
  'events/getEventById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IEvent>(
        `${BASE_URL}/api/v1/events/${id}`
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

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/events/${id}`);
      return id;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? 'Unknown error');
      } else {
        return rejectWithValue('Unknown error');
      }
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (event: IEvent, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<IEvent>(
        `${BASE_URL}/api/v1/events/`,
        event
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

export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async ({ id, event }: { id: number; event: IEvent }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch<IEvent>(
        `${BASE_URL}/api/v1/events/${id}`,
        event
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
