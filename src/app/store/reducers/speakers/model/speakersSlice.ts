import { createSlice } from '@reduxjs/toolkit';

import { ISpeaker } from 'src/shared/api/speakers/dtos';
import {
  createSpeaker,
  deleteSpeaker,
  getSpeakerById,
  getSpeakers,
  updateSpeaker,
} from 'src/shared/api/speakers';
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
      })

      .addCase(deleteSpeaker.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteSpeaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speakers = state.speakers.filter(
          speaker => speaker.speakerId !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteSpeaker.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(createSpeaker.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createSpeaker.fulfilled, (state, action) => {
        state.isLoading = false;
        state.speakers.push(action.payload);
        state.error = null;
      })
      .addCase(createSpeaker.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(updateSpeaker.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateSpeaker.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedSpeaker = action.payload;
        const index = state.speakers.findIndex(
          speaker => speaker.speakerId === updatedSpeaker.speakerId
        );
        if (index !== -1) {
          state.speakers[index] = updatedSpeaker;
        }
        state.error = null;
      })
      .addCase(updateSpeaker.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const selectSpeakers = (state: { speakers: ISpeakersState }) =>
  state.speakers;

export default speakersSlice.reducer;
