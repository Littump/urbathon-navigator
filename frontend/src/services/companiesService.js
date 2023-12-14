import axios from "axios";
import { URL } from "../config/URL";

class companiesService {
  async getCompanies() {
    return axios.get(`${URL}/api/companies/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
}

export default new companiesService();
