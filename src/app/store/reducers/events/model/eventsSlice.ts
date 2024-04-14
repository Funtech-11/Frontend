import { createSlice } from '@reduxjs/toolkit';
import { IEvent } from 'src/shared/api/events/dtos';
import { initialEvent } from './constants';
import { getEventsCards } from 'src/shared/api/events';

interface IEventsState {
  events: IEvent[];
  event: IEvent;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: IEventsState = {
  events: [],
  event: initialEvent,
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEventsCards.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEventsCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
        state.error = null;
      })
      .addCase(getEventsCards.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectEvents = (state: { events: IEventsState }) => state.events;

export default eventsSlice.reducer;
