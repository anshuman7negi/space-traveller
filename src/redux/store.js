import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketSlice from './rocket/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketSlice,
  },
});

export default store;
