<template>
  <div class="w-screen h-screen grid place-items-center">
    <h1>{{ t("title") }}</h1>
    <button @click="locale = 'en'">EN</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { messages } from './account-page.i18n';
const { t, locale } = useI18n({ messages });



</script>