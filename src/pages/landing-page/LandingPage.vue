<template>
  <div class="w-screen h-screen grid place-items-center">
    <h1>Welcome to landing page!</h1>
    <button @click="printStatus">SendRequest</button>
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { algoClient } from '@/api/algo-client';
const value = ref("")
async function printStatus() {
  const status = await algoClient.status().do();
  value.value = JSON.stringify(status)
}
</script>