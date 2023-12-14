import axios from "axios";
import { URL } from "../config/URL";

class loginService {
  async login(values) {
    return axios.post(`${URL}/api/auth/token/login/`, {
      password: values.password,
      username: values.phone,
    });
  }
  async signup(values) {
    const [first, last] = values.name.split(" ");
    return axios.patch(`${URL}/api/auth/users/`, {
      password: values.password,
      first_name: first,
      last_name: last,
      address: values.address,
      email: values.mail,
      username: values.phone,
    });
  }
  async update(values) {
    const [first, last] = values.name.split(" ");
    return axios.patch(
      `${URL}/api/auth/users/me/`,
      {
        password: values.password,
        first_name: first,
        last_name: last,
        address: values.address,
        email: values.mail,
        username: values.phone,
      },
      {
        headers: {
          Authorization: "Token " + localStorage.getItem("auth_token"),
        },
      }
    );
  }
  async getMe() {
    return axios.get(`${URL}/api/auth/users/me/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("auth_token"),
      },
    });
  }
  async companyLogin(values) {
    return axios.post(`${URL}/api/auth/token/login/`, {
      password: values.password,
      username: values.phone,
    });
  }
  async companySignup(values) {
    let form_data = new FormData();
    form_data.append("logo", values.logo.files[0], values.logo.files[0].path);
    form_data.append("description", values.description);
    form_data.append("address", values.address);
    form_data.append("email", values.mail);
    form_data.append("phone", values.phone);
    form_data.append("activity", 1);
    form_data.append("level", 1);
    form_data.append("name", values.name);
    return axios.post(`${URL}/api/companies/`, form_data);
  }
  async companyUpdate(values) {
    const [first, last] = values.name.split(" ");
    return axios.patch(`${URL}/api/companies/`, {
      password: values.password,
      first_name: first,
      last_name: last,
      address: values.address,
      email: values.mail,
      username: values.phone,
    });
  }
  async companyGetMe() {
    return axios.get(`${URL}/api/companies/`, {});
  }
}

export default new loginService();
