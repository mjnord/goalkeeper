<template>
  <div
    class="flex rounded-md p-2 cursor-pointer hover:shadow-sm hover:bg-white transition-colors"
  >
    <div class="flex flex-col w-40">
      <h1 class="text-lg">{{ title }}</h1>
      <small>{{ url }}</small>
      <ServerNetwork
        :class="{
          'fill-gk-lime-green': status === 'online',
          'fill-gk-lime-green opacity-30': status === 'syncing',
          'fill-gk-gainsboro-gray': status === 'offline',
        }"
      />
    </div>
    <Divider layout="vertical" />
    <div class="flex flex-col text-sm">
      <h1 class="text-lg">{{ network }}</h1>
      <p>Uptime: {{ format(new Date(), "yyyy-MM-dd") }}</p>
      <p>Added: {{ format(new Date(added), "yyyy-MM-dd") }}</p>
    </div>
    <Button
      icon="pi pi-ellipsis-v"
      class="p-button-rounded p-button-info p-button-text p-button-lg !text-gk-oxford-blue ml-auto my-auto"
    />
  </div>
</template>

<script lang="ts" setup>
import Divider from "primevue/divider";
import Button from "primevue/button";
import ServerNetwork from "@/assets/icons/ServerNetwork.vue";
import { format } from "date-fns";

defineProps<{
  title: string;
  url: string;
  status: "online" | "offline" | "syncing";
  added: string;
  network: string;
}>();
</script>
