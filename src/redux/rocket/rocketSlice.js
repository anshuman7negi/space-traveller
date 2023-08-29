import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: true,
  isError: false,

};

const rocketURL = 'https://api.spacexdata.com/v4/rockets';
export const rocketData = createAsyncThunk('rockets/rocketData', async (_, api) => {
  try {
    const res = await axios(rocketURL);
    return res.data;
  } catch (err) {
    return api.rejectWithValue('Api failed to fetch');
  }
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(rocketData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.err = false;
        state.rockets = action.payload;
        state.rockets = action.payload.map((m) => ({
          ...m,
          reserved: false,
        }));
      })
      .addCase(rocketData.rejected, (state) => {
        state.isLoading = false;
        state.err = true;
      });
  },
});

export default rocketSlice.reducer;
