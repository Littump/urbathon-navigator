import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducers/login/loginReducer.js";
import newsReducer from "./reducers/news/newsReducer.js";
import eventsReducer from "./reducers/events/eventsReducer.js";
import complainReducer from "./reducers/complain/complainReducer.js";
import writePostReducer from "./reducers/writePost/writePostReducer.js";
import addLogoReducer from "./reducers/addLogo/addLogoReducer.js";
import chatReducer from "./reducers/chat/chatReducer.js";
import profileReducer from "./reducers/profile/profileReducer.js";
import companiesReducer from "./reducers/companies/companiesReducer.js";

const rootReducer = combineReducers({
  login: loginReducer,
  news: newsReducer,
  profile: profileReducer,
  complain: complainReducer,
  events: eventsReducer,
  writePost: writePostReducer,
  signin: addLogoReducer,
  chat: chatReducer,
  companies: companiesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
