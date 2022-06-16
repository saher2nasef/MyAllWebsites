<template>
  <div class="container__form container--signup">
    <h2 class="form__title">Sign Up</h2>
    <Form @submit="handleRegister" class="form" :validation-schema="schema">
      <div v-if="!successful">
        <div>
          <Field
            name="username"
            type="text"
            class="input"
            placeholder="Username"
          />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div>
          <Field name="email" type="email" class="input" placeholder="Email" />
          <ErrorMessage name="email" class="error-feedback" />
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
            Sign Up
          </button>
        </div>
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          if (data.message == undefined) {
            this.successful = true;
            this.$emit("GoToLogin", "");
            this.$toast.success(`Has Been Create Your Account Success`);
          } else {
            this.message = data.message;
            this.loading = false;
          }
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
