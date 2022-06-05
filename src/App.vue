<template>
  <Toast position="top-right" />
  <div class="flex w-screen">
    <Sidebar></Sidebar>
    <div class="p-4 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import Sidebar from "./toolbar/Sidebar.vue";
</script>
