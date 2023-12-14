import { useQuery } from "react-query";
import newsService from "../services/newsService";

export const getCommentsHook = (id) => {
  return useQuery(["getComments"], () => newsService.getComments(id));
};
