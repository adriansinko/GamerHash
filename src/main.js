import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ApiService from "@/core/services/ApiService";
import { initVeeValidate } from "@/core/plugins/vee-validate";

// Import lottie css
import "vue3-lottie/dist/style.css";

const app = createApp(App);

ApiService.init(app);
initVeeValidate();

app.use(router).mount("#app");
