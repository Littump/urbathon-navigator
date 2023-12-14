import { createReducer } from "@reduxjs/toolkit";
import { setProfile } from "./profileAction";

const initialState = {
  profile: {},
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setProfile, (state, action) => {
    state.profile = { ...action.profile };
  });
});
