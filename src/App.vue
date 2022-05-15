<template>
  <Toast position="top-right" />
  <div class="flex w-screen">
    <Toolbar></Toolbar>
    <div class="p-2 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import Toolbar from "./toolbar/Toolbar.vue";
</script>
