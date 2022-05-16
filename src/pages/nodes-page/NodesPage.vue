<template>
  <div>
    <div class="flex justify-between">
      <h1>Nodes</h1>
      <Button
        @click="clearNodes()"
        type="button"
        class="p-button-raised p-button-text"
      >
        Clear Nodes
      </Button>
    </div>
    <div
      class="bg-slate-50 shadow-md rounded-md p-4 w-full flex justify-between"
      v-for="node in nodes"
    >
      <div class="flex flex-col">
        <h1>
          {{ node.name }}
        </h1>
        <h2>
          {{ node.url }}
        </h2>
      </div>
      <Button
        @click="doSomething(node)"
        type="button"
        class="p-button-raised p-button-text"
      >
        Do Something
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Components
import Button from "primevue/button";

// Imports
import { createAlgoClient } from "@/api/algo-client";
import { useToast } from "@/composables/useToast";
import { db } from "@/db/database";
import { GoalkeeperNode } from "@/db/types/node";
import { ref } from "vue";
// Composeables
const toast = useToast();

// Variables
const nodes = ref<GoalkeeperNode[]>([]);

// Initialization
db.getNodes().then((res) => (nodes.value = res));

async function doSomething(node: GoalkeeperNode) {
  const client = createAlgoClient(node.url, node.token);
  const status = await client.status().do();
  toast(JSON.stringify(status), "success");
}

async function clearNodes() {
  const nodes = db.clearNodes();
  console.log("Cleared nodes " + nodes);
}
</script>
