import { createReducer } from "@reduxjs/toolkit";
import { setCompanies } from "./companiesAction.js";

const initialState = {
  companies: [],
  messages: [],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(setCompanies, (state, action) => {
    state.companies = [...action.companies];
  });
});
