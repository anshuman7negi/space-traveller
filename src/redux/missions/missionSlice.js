import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
};

export const getMissions = (e) => {
  try {
    return e;
  } catch (error) {
    return error;
  }
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.err = true;
      });
  },
});

export default missionSlice.reducer;
