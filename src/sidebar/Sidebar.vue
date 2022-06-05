<template>
  <div class="flex flex-col h-screen bg-gk-periwinkle-crayola p-3">
    <div
      class="p-1 flex items-center space-x-3 cursor-pointer hover:bg-gk-medium-blue hover:bg-opacity-10 transition-colors rounded-md"
      v-for="{ i18n, name, icon } in activeRoutes"
      @click="$router.push({ name })"
    >
      <component
        :is="icon"
        :class="{
          'fill-white': $route.name === name,
        }"
      />
      <p
        class="text-xl"
        :class="{
          'text-white': $route.name === name,
        }"
      >
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
