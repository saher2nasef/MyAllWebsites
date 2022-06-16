import axios from "axios";
const API_URL = "https://saher-nasef.herokuapp.com/";
class UserServises {
  ChnageUserName(UserName, UserId) {
    return axios
      .post(API_URL + "ChangeUserName", {
        UserName: UserName,
        UserId: UserId,
      })
      .then((Val) => {
        return Val.data;
      });
  }
  ChangePassword(Password, UserId) {
    return axios
      .post(API_URL + "ChangePassword", {
        Passowrd: Password,
        UserId: UserId,
      })
      .then((Val) => {
        return Val.data;
      });
  }
}
export default new UserServises();
