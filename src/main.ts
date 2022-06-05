import "@formkit/themes/genesis";
import { plugin } from "@formkit/vue";
import { appWindow, PhysicalSize, currentMonitor } from "@tauri-apps/api/window";
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
import { config } from "./forms";
import { router } from "./router";

async function main() {
  // Set minimum window size
  const monitor = await currentMonitor();
  if (monitor){
    const minSize = new PhysicalSize(Math.round(monitor.size.width * 0.4), Math.round(monitor.size.height * 0.4));
    await appWindow.setMinSize(minSize);
  }

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
  app.use(plugin, config);
  app.use(ToastService);

  // Use directives
  app.directive("tooltip", Tooltip);

  // Start the app
  app.mount("#app");
}
main();
