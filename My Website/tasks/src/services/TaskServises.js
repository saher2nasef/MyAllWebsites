import axios from "axios";
const API_URL = "https://saher-nasef.herokuapp.com/Tasks/";
class TaskServises {
  GetAllTasks(UserId) {
    return axios
      .get(API_URL + UserId)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  Create(Task, UserId) {
    return axios
      .post(API_URL, {
        Task: Task,
        UserId: UserId,
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }
  SendToDone(IsDone, TaskId, UserId) {
    return axios
      .put(API_URL, {
        Done: !IsDone,
        UserId: UserId,
        TaskId: TaskId,
        DateEdit: new Date(),
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }
  Delete(UserId, TaskId) {
    return axios
      .delete(API_URL + UserId + "/" + TaskId)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }
  DeleteAll(UserId) {
    return axios
      .delete(API_URL + UserId)
      .then(function () {
        return [];
      })
      .catch(function (error) {
        return error;
      });
  }
}
export default new TaskServises();
