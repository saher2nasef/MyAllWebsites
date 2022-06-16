import axios from "axios";
const API_URL = "https://saher-nasef.herokuapp.com/";
class AuthService {
  login(user) {
    return axios
      .post(API_URL + "Login", {
        Email: user.Email,
        password: user.password,
      })
      .then((response) => {
        if (response.data[0]) {
          localStorage.setItem("user", JSON.stringify(response.data[0]));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(API_URL + "Register", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();
