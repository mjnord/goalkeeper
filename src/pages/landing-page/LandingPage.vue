<template>
  <div class="w-screen h-screen grid place-items-center">
    <h1>Welcome to landing page!</h1>
    <button @click="printStatus">SendRequest</button>
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { http } from '@tauri-apps/api';
import { ref } from 'vue';
import { algoClient } from '../../api/algo-client';
const value = ref("")
async function printStatus() {
  http.fetch("https://google.com").then(res => console.log(res))
  const status = await algoClient.status().do();
  value.value = JSON.stringify(status)
}
</script>