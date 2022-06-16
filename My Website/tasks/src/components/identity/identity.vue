<template>
  <div class="ToCenter">
    <div :class="'Body ' + Class">
      <Register @GoToLogin="Toogleclass" />
      <Login />
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="BtnCust" @click="Toogleclass">Sign In</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="BtnCust" @click="Toogleclass">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login";
import Register from "./Register";
export default {
  name: "identity",
  components: {
    Login,
    Register,
  },
  data() {
    return {
      Class: "right-panel-active",
    };
  },
  methods: {
    Toogleclass() {
      if (this.Class == "right-panel-active") {
        this.Class = "";
      } else {
        this.Class = "right-panel-active";
      }
    },
  },
};
</script>
