import { createSlice } from "@reduxjs/toolkit";
import { projectsInitialState } from "../initialStates";
import { getProjects } from "./projectsReducers";

const projectsSlice = createSlice({
    name: "projects",
    initialState: projectsInitialState,
    reducers: {},
    extraReducers: builder => {
      builder
      //getProjects
      .addCase(getProjects.pending, ( state ) => {
          state.isLoading = true;
          state.error = null;
      })
      .addCase(getProjects.fulfilled, ( state, { payload }) => {
          state.isLoading = false;
          state.projects = payload;
          state.error = null;
      })
      .addCase(getProjects.rejected, ( state , { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
      })
    }
})

export const projectsActions = projectsSlice.actions;
export default projectsSlice;