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

export const deleteLocation = createAsyncThunk(
  'locations/deleteLocation',
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/locations/${id}`);
      return id;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const createLocation = createAsyncThunk(
  'locations/createLocation',
  async (location: ILocation, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<ILocation>(
        `${BASE_URL}/api/v1/locations/`,
        location
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateLocation = createAsyncThunk(
  'locations/updateLocation',
  async (
    { id, location }: { id: number; location: ILocation },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch<ILocation>(
        `${BASE_URL}/api/v1/locations/${id}`,
        location
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);
