import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./style.css";

window.onload = function loader() {
  document.body.classList.add("loaded");
};

const app = createApp(App);

app.use(router).use(createPinia()).mount("#app");
