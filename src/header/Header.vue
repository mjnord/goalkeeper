<template>
  <div
    class="flex bg-gk-oxford-blue h-16 w-screen items-center justify-between"
  >
    <img width="100" src="@/assets/img/algorand_logo_mark_white.svg" />
    <img width="158" src="@/assets/img/goalkeeper_logo_text.svg" />
    <div class="flex">
      <Button
        icon="pi pi-cog"
        class="p-button-rounded p-button-info p-button-text p-button-lg !text-white mr-2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Components
import Button from "primevue/button";

// Imports
import { useI18n } from "vue-i18n";
import { messages } from "./i18n/messages";
const { t } = useI18n({ messages });
</script>
