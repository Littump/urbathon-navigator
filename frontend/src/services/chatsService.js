import axios from "axios";
import { URL } from "../config/URL";

class chatService {
  async getChats() {
    return axios.get(`${URL}/api/chats/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async getMessages(id) {
    return axios.get(`${URL}/api/chats/${id}/get_messages`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async addMessage({ id, text }) {
    return axios.get(
      `${URL}/api/chats/${id}/send_message/`,
      {
        text,
      },
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("auth_token"),
        },
      }
    );
  }
}

export default new chatService();
