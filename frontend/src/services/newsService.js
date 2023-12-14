import axios from "axios";
import { URL } from "../config/URL";

class newsService {
  async getNews() {
    return axios.get(`${URL}/api/posts/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async addNews(values) {
    console.log(values);
    return axios.post(
      `${URL}/api/posts/`,
      {
        text: values.text,
        images: values.file,
        theme: values.theme,
      },
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("auth_token"),
        },
      }
    );
  }
  async getComments(id) {
    return axios.get(`${URL}/api/posts/${id.toString()}/comments/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async addComment({ id, text }) {
    return axios.post(
      `${URL}/api/posts/${id.toString()}/add_comment/`,
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

export default new newsService();
