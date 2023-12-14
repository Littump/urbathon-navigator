import { useQuery } from "react-query";
import chatsService from "../services/chatsService";

export const getMessagesHook = () => {
  return useQuery(["getChats"], (id) =>
    chatsService.getMessages(getMessagesHook)
  );
};
