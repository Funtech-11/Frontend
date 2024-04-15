import { createSlice } from '@reduxjs/toolkit';
import { initialLocation } from './constants';
import { ILocation } from 'src/shared/api/locations/dtos';
import { getLocationById, getLocations } from 'src/shared/api/locations';

interface ILocationState {
  locations: ILocation[];
  location: ILocation;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: ILocationState = {
  locations: [],
  location: initialLocation,
  isLoading: false,
  error: null,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLocations.pending, state => {
        state.isLoading = true;
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = action.payload;
        state.error = null;
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getLocationById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getLocationById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.location = action.payload;
        state.error = null;
      })
      .addCase(getLocationById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectEvents = (state: { locations: ILocationState }) =>
  state.locations;

export default locationsSlice.reducer;
