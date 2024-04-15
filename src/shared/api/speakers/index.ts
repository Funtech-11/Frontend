import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from 'src/utils/const/api';
import type { ISpeaker } from './dtos';

export const getSpeakers = createAsyncThunk(
  'speakers/getSpeakers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ISpeaker[]>(
        `${BASE_URL}/api/v1/speakers/`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const getSpeakerById = createAsyncThunk(
  'speakers/getSpeakerById',
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ISpeaker>(
        `${BASE_URL}/api/v1/speakers/${id}`
      );

      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteSpeaker = createAsyncThunk(
  'speakers/deleteSpeaker',
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/speakers/${id}`);
      return id;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const createSpeaker = createAsyncThunk(
  'speakers/createSpeaker',
  async (speaker: ISpeaker, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<ISpeaker>(
        `${BASE_URL}/api/v1/speakers/`,
        speaker
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateSpeaker = createAsyncThunk(
  'speakers/updateSpeaker',
  async (
    { id, speaker }: { id: number; speaker: ISpeaker },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch<ISpeaker>(
        `${BASE_URL}/api/v1/speakers/${id}`,
        speaker
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
