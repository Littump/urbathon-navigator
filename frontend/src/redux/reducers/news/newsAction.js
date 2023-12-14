import { createAction } from "@reduxjs/toolkit";

export const addNews = createAction("news/addNews");
export const setComments = createAction("news/setComments");
export const setFilter = createAction("news/setFilter");
