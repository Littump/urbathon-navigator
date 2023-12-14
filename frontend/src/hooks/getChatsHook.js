import { useQuery } from "react-query";
import chatsService from "../services/chatsService";

export const getChatsHook = () => {
  return useQuery(["getChats"], () => chatsService.getChats());
};
