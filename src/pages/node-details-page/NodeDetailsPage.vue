<template>
  <div>
    <div class="flex items-center">
      <Button
        type="button"
        class="p-button-raised p-button-text"
        @click="$router.back()"
      >
        Back
      </Button>
      <p class="p-2 text-3xl">{{ node?.name }}</p>
      <p class="text-gk-gainsboro-gray mt-2">
        {{ $route.params.nodeId }}
      </p>
    </div>
    <div class="p-4">
      <p class="text-xl">NodeStatus</p>
      <p>Uptime</p>
      <p>Synced</p>
      <p>etc</p>
    </div>
    <div class="p-4">
      <p class="text-xl">NodeCommands</p>
      <p>GET</p>
      <p>STATUS</p>
      <p>ACCESS</p>
      <p>WALLET</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Components
import Button from "primevue/button";

// Imports
import { db } from "@/db/database";
import { ref } from "vue";
import { GoalkeeperNode } from "@/db/types/node";
import { useRoute } from "vue-router";

const route = useRoute();
const node = ref<GoalkeeperNode>();
getNode(route.params.nodeId as string);

async function getNode(id: string) {
  const dbNodes = await db.getNodes();
  node.value = dbNodes.find((n) => {
    return n.id == id;
  });
}
</script>
