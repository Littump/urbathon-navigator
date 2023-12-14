import { useMutation } from "react-query";
import loginService from "../services/loginService.js";
import { useNavigate } from "react-router-dom";

export const companySignupHook = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (values) => {
      return loginService.companySignup(values);
    },
    onSuccess: () => {
      navigate("/signin");
    },
    onError: () => {
      alert("не удалось создать пользователя");
    },
  });
};
