import { createReducer } from "@reduxjs/toolkit";
import {
  addMessage,
  clearChat,
  setChatInfo,
  setChatList,
} from "./chatAction.js";
import avatar from "../../../assets/avatar.png";

const initialState = {
  chatList: [
    {
      name: "Общее ЖК Ботаник",
      id: 1,
    },
    {
      name: "Подъезд ЖК Ботаник",
      id: 2,
    },
  ],
  messages: [
    {
      name: "андрей",
      text: "привет",
      id: 1,
      isMe: false,
      avatar,
    },
    {
      name: "де юля",
      text: "привет",
      id: 2,
      isMe: true,
      avatar,
    },
  ],
};

export default createReducer(initialState, (builder) => {
  builder.addCase(addMessage, (state, action) => {
    state.messages = [...state.messages, action.message];
  });
  builder.addCase(setChatInfo, (state, action) => {
    state.name = action.name;
    state.avatar = action.avatar;
  });
  builder.addCase(clearChat, (state, action) => {
    state.messages = [];
  });
  builder.addCase(setChatList, (state, action) => {
    state.chatList = action.chatList;
  });
});
