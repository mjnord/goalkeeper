import "@formkit/themes/genesis";
import { defaultConfig, plugin } from "@formkit/vue";
import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/index.css";
import { router } from "./router";
import { exactLength } from "./utils/forms";

// Create plugins
const i18n = createI18n({
  legacy: false,
  locale: "en",
});
const pinia = createPinia();

// Create app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(PrimeVue);
app.use(pinia);
app.use(i18n);
app.use(plugin, defaultConfig({
  rules: { exactLength },
  messages: {
    en: {
      validation: {
        exactLength({ args }) {
          return `A value of exactly length ${args} required.`
        }
      }
    }
  }
}));
app.use(ToastService);

// Use directives
app.directive("tooltip", Tooltip);

// Start the app
app.mount("#app");
