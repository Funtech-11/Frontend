import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from './reducers/events';
import { locationsReducer } from './reducers/locations';
import { speakersReducer } from './reducers/speakers';
import { userReducer } from './reducers/user';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    locations: locationsReducer,
    speakers: speakersReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
