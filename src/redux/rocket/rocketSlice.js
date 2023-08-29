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
        const rocketsData = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.name,
          type: rocket.type,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
        state.rockets = rocketsData;
      })
      .addCase(rocketData.rejected, (state) => {
        state.isLoading = false;
        state.err = true;
      });
  },
});

export default rocketSlice.reducer;
