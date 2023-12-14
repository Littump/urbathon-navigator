import { useQuery } from "react-query";
import companiesService from "../services/companiesService";

export const getCompaniesHook = () => {
  return useQuery(["getCompanies"], () => companiesService.getCompanies());
};
