import { useMutation } from "react-query";
import newsService from "../services/newsService";
import { useNavigate } from "react-router-dom";

export const addNewsHook = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (values) => {
      return newsService.addNews(values);
    },
    onSuccess: () => {
      alert("ура");
      navigate("/");
    },
    onError: () => {},
  });
};
