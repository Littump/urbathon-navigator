import axios from "axios";
import { URL } from "../config/URL";

class eventsService {
  async getEvents() {
    return axios.get(`${URL}/api/events/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async addEvent() {
    return axios.post(
      `${URL}/api/events/`,
      {
        text: "описание",
        address: "адрес",
        prize: 222,
      },
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("auth_token"),
        },
      }
    );
  }
}

export default new eventsService();
