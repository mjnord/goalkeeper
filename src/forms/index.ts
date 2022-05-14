import { defaultConfig } from "@formkit/vue";
import { customRules } from "./custom-validation-rules";
import { messages } from "./i18n";

export const config = defaultConfig({
  rules: customRules,
  messages,
});
