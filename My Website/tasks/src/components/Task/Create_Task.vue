<template>
  <div class="Container_WebSite" v-if="Islogin">
    <div class="Grid">
      <div class="Left padding-20"></div>
      <div class="Right padding-20">
        <h2>Create Your Task</h2>
        <div class="ChildContainer">
          <div class="CreateTask">
            <input
              type="text"
              class="input"
              v-model="Task"
              v-on:keyup.enter="Create_Task"
              placeholder="Enter Your Task"
            />
            <button @click="Create_Task" class="BtnCust">
              <font-awesome-icon icon="plus" class="me-2" />Create Task
            </button>
          </div>
          <div v-if="Tasks.length >= 2 && Message == ''">
            <button
              class="btn mt-2 mx-auto d-block btn-danger fs-4"
              @click="DeleteAll"
            >
              Delete All
            </button>
          </div>
          <div
            class="alert w-100 mx-auto mt-3 alert-danger alert-dismissible fade show"
            role="alert"
            v-if="Message != ''"
          >
            {{ Message }}
          </div>
          <h2 class="mt-2">All Your Tasks</h2>
          <div class="Tasks" v-if="Message == ''">
            <div
              v-for="(Task, i) in Tasks"
              :key="'T' + i"
              :class="Task.done ? 'Task done' : 'Task '"
            >
              <p>
                {{
                  Task.Title.length > 55
                    ? Task.Title.slice(0, 55) + "...."
                    : Task.Title
                }}
              </p>
              <button class="btn btn-danger" @click="Delete(Task.id)">
                <font-awesome-icon icon="trash" />
              </button>
              <div
                v-if="
                  !(
                    new Date().getTime() >=
                    new Date(Task.DateLastEdit).getTime() + 600000
                  )
                "
              >
                <input
                  type="checkbox"
                  @click="SendToDone(Task.id, Task.done)"
                  v-if="!Task.done"
                />
                <input
                  type="checkbox"
                  @click="SendToDone(Task.id, Task.done)"
                  checked
                  v-if="Task.done"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskServises from "../../services/TaskServises";
export default {
  name: "Create_Task",
  data() {
    return {
      Task: "",
      Tasks: "",
      Time: "",
      Message: "",
      Islogin: false,
    };
  },
  created() {
    this.Islogin = this.$store.state.auth.status.loggedIn;
    if (this.Islogin) {
      TaskServises.GetAllTasks(this.$store.state.auth.user.UserId).then(
        (Val) => {
          if (Val.data != undefined) {
            if (Val.data[0] == undefined) {
              if (Val.data.Tasks.length == 0) {
                this.Message = "No tasks";
              } else {
                this.Tasks = Val.data.Tasks;
              }
            } else {
              this.Message = Val.data[0].Message;
            }
          }
        }
      );
    } else {
      this.$router.push("identity");
    }
  },
  methods: {
    Create_Task() {
      if (this.Task != "") {
        TaskServises.Create(this.Task, this.$store.state.auth.user.UserId).then(
          (Val) => {
            this.Tasks = Val;
            this.$toast.success(`Has been Added The Task : ${this.Task}`);
            this.Task = "";
            this.Message = "";
          }
        );
      } else {
        this.$toast.error(`The Fields Must Not Be Empty`);
      }
    },
    SendToDone(TaskId, IsDone) {
      TaskServises.SendToDone(
        IsDone,
        TaskId,
        this.$store.state.auth.user.UserId
      ).then((Val) => {
        this.$toast.success(`Has been Edited The Task`);
        this.Tasks = Val;
      });
    },
    Delete(TaskId) {
      TaskServises.Delete(this.$store.state.auth.user.UserId, TaskId).then(
        (Val) => {
          this.Tasks = Val;
          this.$toast.success(`Has been Eemoved The Task`);
        }
      );
    },
    DeleteAll() {
      TaskServises.DeleteAll(this.$store.state.auth.user.UserId).then((Val) => {
        this.$toast.success(`Has been Removed All Tasks`);
        this.Tasks = Val;
      });
    },
  },
};
</script>
<style scoped>
.ChildContainer {
  width: 100%;
  margin: auto;
}
.CreateTask {
  width: 100%;
  background-color: var(--bs-gray-900);
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.CreateTask input {
  width: 100%;
  font-family: "Cairo", sans-serif !important;
}
.CreateTask button {
  width: 200px !important;
}
.Tasks {
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.Tasks .Task:first-child {
  margin-top: 10px;
}
.Tasks .Task:last-child {
  margin-bottom: 0;
}
.Tasks .Task {
  width: 100%;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: "Cairo", sans-serif !important;
  color: #fff;
  font-size: 25px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bs-gray-900);
}
.Tasks .Task p {
  margin: 0;
  width: calc(100% - 50px);
  cursor: pointer;
  text-decoration: line-through;
  opacity: 0.7;
  transition: 0.2s;
}
.Tasks .Task > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.Tasks .Task button {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
}
.Tasks .Task input[type="checkbox"] {
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
}
.Tasks .Task button:hover {
  transform: scale(1.1);
}

.Tasks .Task.done p {
  text-decoration: none !important;
  opacity: 1;
}
@media (max-width: 800px) {
  .ChildContainer {
    width: 90%;
  }
}
.Grid {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
}
.Grid .Left {
  width: 35%;
  padding-right: 10px;
}
.Grid .Right {
  width: 64%;
  padding-left: 10px;
}
@media (max-width: 900px) {
  .Grid {
    flex-direction: column;
  }
  .Grid .Left,
  .Grid .Right {
    width: 100% !important;
    padding: 0;
  }
}
</style>
