import { createAsyncThunk, creatSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    missions: [],
    isLoading: true,
    isError: false,
}

export const getMissions = () => {
    try {
        return console.log('mission successfull')
    } catch (error) {
        console.log(error)
    }
} 

const missionSlice = createSlice({
    name:'missions',
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
          })
    }
})

export default missionSlice.reducer;