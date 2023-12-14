import { createReducer } from "@reduxjs/toolkit";
import { addFile, deleteFile } from "./complainAction.js";

const initialState = {
  files: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addFile, (state, action) => {
      state.files = [...state.files, action.file];
    })
    .addCase(deleteFile, (state, action) => {
      state.files = state.files.filter((file) => file.path !== action.fileName);
    });
});
