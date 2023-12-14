import { useMutation } from "react-query";
import chatsService from "../services/chatsService";

export const addMessageHook = (id) => {
  return useMutation({
    mutationFn: (text) => {
      return chatsService.addMessage({ text, id });
    },
    onSuccess: (data) => {},
    onError: () => {},
  });
};
