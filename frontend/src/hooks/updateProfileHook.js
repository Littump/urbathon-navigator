import { useMutation } from "react-query";
import loginService from "../services/loginService";

export const updateProfileHook = () => {
  return useMutation({
    mutationFn: (values) => {
      return loginService.update(values);
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: () => {
      alert("что-то пошло не так!");
    },
  });
};
