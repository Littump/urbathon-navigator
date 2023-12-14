import { useQuery } from "react-query";
import newsService from "../services/newsService";

export const getNewsHook = () => {
  return useQuery(["getNews"], () => newsService.getNews());
};
