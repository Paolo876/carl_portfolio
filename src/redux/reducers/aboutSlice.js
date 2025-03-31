import { createSlice } from "@reduxjs/toolkit";
import { aboutInitialState } from "../initialStates";
import { getAbout } from "./aboutReducers";

const aboutSlice = createSlice({
    name: "about",
    initialState: aboutInitialState,
    reducers: {},
    extraReducers: builder => {
      builder
      //getAbout
      .addCase(getAbout.pending, ( state ) => {
          state.isLoading = true;
          state.error = null;
      })
      .addCase(getAbout.fulfilled, ( state, { payload }) => {
          state.isLoading = false;
          state.about = payload;
          state.error = null;
      })
      .addCase(getAbout.rejected, ( state , { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
      })
    }
})

export const aboutActions = aboutSlice.actions;
export default aboutSlice;