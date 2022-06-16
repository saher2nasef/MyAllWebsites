import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Css/Style.css";
import { FontAwesomeIcon } from "./plugins/font-awesome";
import Toaster from "@meforma/vue-toaster";
createApp(App)
  .use(router)
  .use(store)
  .use(Toaster, {
    // One of the options
    position: "bottom",
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
