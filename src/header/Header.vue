<template>
  <div class="flex bg-gk-oxford-blue h-16 w-screen items-center justify-center">
    <img src="@/assets/img/goalkeeper-logo-text.svg" />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { messages } from "./i18n/messages";
const { t } = useI18n({ messages });
</script>
