import { createReducer } from "@reduxjs/toolkit";
import { addFile, deleteFile } from "./writePostAction.js";

const initialState = {
  files: [],
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(addFile, (state, action) => {
      if (state.files.length !== 0) return;
      state.files = [action.file];
    })
    .addCase(deleteFile, (state) => {
      state.files = [];
    });
});
