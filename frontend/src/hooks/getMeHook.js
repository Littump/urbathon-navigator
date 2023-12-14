import { useQuery } from "react-query";
import loginService from "../services/loginService";

export const getMeHook = () => {
  return useQuery(["getMe"], () => loginService.getMe());
};
