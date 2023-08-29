import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
};

const getMissionsURL = 'https://api.spacexdata.com/v3/missions';
export const getMissions = createAsyncThunk('missions/getMissions', async (_, api) => {
  try {
    const res = await axios(getMissionsURL);
    return res.data;
  } catch (err) {
    return api.rejectWithValue('Api failed to fetch');
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,

  reducers: {
    joinMission: (state, action) => {
      const id = action.payload;
      const createMission = state.missions.map((m) => {
        if (m.mission_id !== id) return m;
        return { ...m, reserved: true };
      });
      state.missions = createMission;
    },

    leaveMission: (state, action) => {
      const id = action.payload;
      const createMission = state.missions.map((m) => {
        if (m.mission_id !== id) return m;
        return { ...m, reserved: !m.reserved };
      });
      state.missions = createMission;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.err = false;
        state.missions = action.payload;
        state.missions = action.payload.map((m) => ({
          ...m,
          reserved: false,
        }));
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.err = true;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
