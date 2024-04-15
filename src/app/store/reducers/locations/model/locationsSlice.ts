import { createSlice } from '@reduxjs/toolkit';
import { initialLocation } from './constants';
import { ILocation } from 'src/shared/api/locations/dtos';
import {
  createLocation,
  deleteLocation,
  getLocationById,
  getLocations,
  updateLocation,
} from 'src/shared/api/locations';

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
      })

      .addCase(deleteLocation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations = state.locations.filter(
          location => location.locationId !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(createLocation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.locations.push(action.payload);
        state.error = null;
      })
      .addCase(createLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(updateLocation.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateLocation.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedLocation = action.payload;
        const index = state.locations.findIndex(
          location => location.locationId === updatedLocation.locationId
        );
        if (index !== -1) {
          state.locations[index] = updatedLocation;
        }
        state.error = null;
      })
      .addCase(updateLocation.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectLocations = (state: { locations: ILocationState }) =>
  state.locations;

export default locationsSlice.reducer;
