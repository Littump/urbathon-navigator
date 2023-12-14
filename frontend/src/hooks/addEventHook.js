import { useMutation } from "react-query";
import newsService from "../services/newsService";
import { useNavigate } from "react-router-dom";
import eventsService from "../services/eventsService";

export const addEventHook = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (values) => {
      return eventsService.addEvent(values);
    },
    onSuccess: () => {
      alert("ура");
      navigate("/");
    },
    onError: () => {},
  });
};
