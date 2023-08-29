import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';

const store = configureStore({
  reduce: {
    missions: missionSlice,
  },
});

export default store;
