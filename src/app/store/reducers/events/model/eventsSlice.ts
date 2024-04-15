import { createSlice } from '@reduxjs/toolkit';
import { IEvent } from 'src/shared/api/events/dtos';
import { initialEvent } from './constants';
import {
  createEvent,
  deleteEvent,
  getEventById,
  getEventsCards,
  updateEvent,
} from 'src/shared/api/events';

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
      })

      .addCase(getEventById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.event = action.payload;
        state.error = null;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteEvent.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = state.events.filter(
          event => event.eventId !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(createEvent.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events.push(action.payload);
        state.error = null;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(updateEvent.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedEvent = action.payload;
        const index = state.events.findIndex(
          event => event.eventId === updatedEvent.eventId
        );
        if (index !== -1) {
          state.events[index] = updatedEvent;
        }
        state.error = null;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectEvents = (state: { events: IEventsState }) => state.events;

export default eventsSlice.reducer;
