import { createAction } from "@reduxjs/toolkit";

export const addMessage = createAction("chat/addMessage");
export const setChatInfo = createAction("chat/setChatInfo");
export const setChatList = createAction("chat/setChatList");
export const clearChat = createAction("chat/clearChat");
