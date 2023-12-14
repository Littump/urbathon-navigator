import { useQuery } from "react-query";
import eventsService from "../services/eventsService";

export const getEventsHook = () => {
  return useQuery(["getEvents"], () => eventsService.getEvents());
};
