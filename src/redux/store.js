import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
