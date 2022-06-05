<template>
  <Toast position="top-right" />
  <div class="flex w-screen">
    <Header></Header>
  </div>
  <div class="flex w-screen h-full">
    <Sidebar></Sidebar>
    <div class="p-4 w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import Sidebar from "./sidebar/Sidebar.vue";
import Header from "./header/Header.vue";
</script>
