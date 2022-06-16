<template>
  <div class="container__form container--signin">
    <h2 class="form__title">Sign In</h2>
    <Form @submit="handleLogin" class="form" :validation-schema="schema">
      <div>
        <Field name="Email" type="text" class="input" placeholder="Email" />
        <ErrorMessage name="Email" class="error-feedback" />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          class="input"
          placeholder="Password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div>
        <button :disabled="loading" class="BtnCust">
          <span
            v-show="loading"
            class="spinner-border spinner-border-sm mx-2"
          ></span>
          <span>Login</span>
        </button>
      </div>
      <div>
        <div v-if="message" class="alert mt-3 alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      Email: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        (Data) => {
          if (Data.message == undefined) {
            this.$router.push("/profile");
            this.$toast.success(`Has Been Login Success`);
          } else {
            this.loading = false;
            this.message = Data.message;
          }
        },
        (error) => {
          console.log("s");
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
