import { useMutation } from "react-query";
import newsService from "../services/newsService";

export const addCommentHook = () => {
  return useMutation({
    mutationFn: ({ id, text }) => {
      return newsService.addComment({ id, text });
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
