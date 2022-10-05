import axios from "axios";

const API_URL = "http://localhost.8080/auth/";

const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.access_token) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
