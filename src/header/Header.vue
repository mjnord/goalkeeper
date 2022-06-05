<template>
  <div class="flex bg-slate-300 h-16 w-screen items-center justify-center">
    <p>
      {{ t("headerTitle") }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { messages } from "./i18n/messages";
const { t } = useI18n({ messages });
</script>
