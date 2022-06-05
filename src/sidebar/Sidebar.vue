<template>
  <div class="flex flex-col border-r h-screen">
    <div
      class="p-1 flex"
      v-for="{ i18n, name, icon } in activeRoutes"
      @click="$router.push({ name })"
    >
      <component
        :is="icon"
        :class="{
          'fill-white': $route.name === name,
        }"
      ></component>
      <p
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
