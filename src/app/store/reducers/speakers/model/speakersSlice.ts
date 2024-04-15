import { createSlice } from '@reduxjs/toolkit';

import { ISpeaker } from 'src/shared/api/speakers/dtos';
import { getSpeakerById, getSpeakers } from 'src/shared/api/speakers';
import { initialSpeaker } from './constants';

interface ISpeakersState {
  speakers: ISpeaker[];
  speaker: ISpeaker;
  isLoading: boolean;
  error: string | null | unknown;
}

const initialState: ISpeakersState = {
  speakers: [],
  speaker: initialSpeaker,
  isLoading: false,
  error: null,
};

const speakersSlice = createSlice({
  name: 'speakers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSpeakers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSpeakers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speakers = action.payload;
        state.error = null;
      })
      .addCase(getSpeakers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(getSpeakerById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSpeakerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speaker = action.payload;
        state.error = null;
      })
      .addCase(getSpeakerById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectEvents = (state: { speakers: ISpeakersState }) =>
  state.speakers;

export default speakersSlice.reducer;
