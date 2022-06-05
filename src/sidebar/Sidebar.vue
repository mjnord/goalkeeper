<template>
  <div class="flex flex-col border-r h-screen">
    <div
      class="p-3 bg-slate-300 rounded-md shadow-md cursor-pointer m-2"
      v-for="{ i18n, name } in activeRoutes"
      @click="$router.push({ name })"
    >
      <p>
        {{ t(i18n) }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { activeRoutes } from "./constants/routes";
import { messages } from "./i18n/messages";
const { t } = useI18n({ messages });
</script>
