import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/index.css";
import { router } from "./router";
const i18n = createI18n();
const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(pinia);
app.use(i18n);

app.mount("#app");
