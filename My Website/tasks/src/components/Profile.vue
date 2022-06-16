<template>
  <div class="Container_WebSite">
    <div class="Grid">
      <div class="Left padding-20"></div>
      <div class="Right padding-20">
        <div>
          <input
            type="text"
            class="input mb-3"
            @keyup="ShowButtonUserName"
            v-model="UserName.Inner"
          />
          <button
            @click="Change_UserName"
            v-if="UserName.Show"
            class="BtnCust mb-3"
          >
            Change UserName
          </button>
          <input
            type="text"
            class="input mb-3"
            @keyup="ShowButtonPassword"
            v-model="Password.Inner"
          />
          <button
            @click="Change_Password"
            v-if="Password.Show"
            class="BtnCust mb-3"
          >
            Change Password
          </button>
          <input
            type="text"
            class="input mb-3"
            @keyup="ShowButtonEmail"
            v-model="Email.Inner"
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserServises from "../services/UserServises";
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      UserName: { Inner: "", Show: false },
      Password: { Inner: "", Show: false },
      Email: { Inner: "", Show: false },
      // UserServises.js
    };
  },
  methods: {
    Change_UserName() {
      UserServises.ChnageUserName(
        this.UserName.Inner,
        this.$store.state.auth.user.UserId
      ).then((Val) => {
        this.UserName.Inner = Val.username;
        let UserData = JSON.parse(localStorage.getItem("user"));
        UserData.username = Val.username;
        localStorage.setItem("user", JSON.stringify(UserData));
        this.UserName.Show = false;
      });
    },
    Change_Password() {
      UserServises.ChangePassword(
        this.Password.Inner,
        this.$store.state.auth.user.UserId
      ).then((Val) => {
        this.Password.Inner = Val.Password;
        let UserData = JSON.parse(localStorage.getItem("user"));
        UserData.password = Val.Password;
        this.Password.Show = false;
        localStorage.setItem("user", JSON.stringify(UserData));
      });
    },
    ShowButtonUserName() {
      if (this.currentUser.username != this.UserName.Inner) {
        this.UserName.Show = true;
      } else {
        this.UserName.Show = false;
      }
    },
    ShowButtonPassword() {
      if (this.currentUser.password != this.Password.Inner) {
        this.Password.Show = true;
      } else {
        this.Password.Show = false;
      }
    },
  },
  created() {
    if (!this.currentUser) {
      this.$router.push("/identity");
    } else {
      this.UserName.Inner = this.currentUser.username;
      this.Password.Inner = this.currentUser.password;
      this.Email.Inner = this.currentUser.email;
    }
  },
};
</script>
<style scoped>
.Grid {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row-reverse;
  width: 100%;
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
