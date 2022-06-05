<template>
  <div class="flex w-screen">
    <div
      class="p-3 bg-slate-300 rounded-md shadow-md cursor-pointer m-2 h-16"
    >
      <p>
        {{ t("headerTitle") }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { messages } from "./i18n/messages";
const { t } = useI18n({ messages });
</script>
