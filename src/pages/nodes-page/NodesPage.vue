<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h1 class="text-2xl">Nodes</h1>
        <small>
          <a target="_blank" href="https://google.com" class="text-blue-600">
            Provide Feedback
          </a>
        </small>
      </div>
      <div class="flex">
        <Button
          @click="addNode"
          icon="pi pi-plus-circle"
          class="p-button-rounded p-button-info p-button-text p-button-lg !text-gk-oxford-blue mr-2"
        />
      </div>
    </div>
    <div class="mt-5">
      <div class="w-full" v-for="(node, idx) in nodes">
        <Divider v-if="idx > 0" class="!py-1 !my-1" />
        <div>
          <ListNodeItem
            :title="node.name"
            :url="node.url"
            network="Testnet"
            :status="'online'"
            :added="node.dateAdded"
          />
        </div>
      </div>
    </div>
  </div>
  <AddNodeDialog @submit="addNode" v-model:visible="showAddNodeDialog" />
</template>

<script lang="ts" setup>
// Components
import Button from "primevue/button";
import Divider from "primevue/divider";
import AddNodeDialog from "./components/AddNodeDialog.vue";

// Imports
import { createAlgoClient } from "@/api/algo-client";
import { useToast } from "@/composables/useToast";
import { db } from "@/db/database";
import { GoalkeeperNode } from "@/db/types/node";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { invoke } from "@tauri-apps/api";
import ListNodeItem from "./components/ListNodeItem.vue";
// Composeables
const toast = useToast();
const router = useRouter();

// Variables
const nodes = ref<GoalkeeperNode[]>([]);
const showAddNodeDialog = ref(false);

// Initialization
getNodes();

async function getNodes() {
  const dbNodes = await db.getNodes();
  nodes.value = dbNodes;
}

async function doSomething(node: GoalkeeperNode) {
  invoke("execute", {
    query: `INSERT INTO cat_colors (name) values red`,
  })
    .then(console.log)
    .catch(console.log);
}

async function addNode() {
  showAddNodeDialog.value = !showAddNodeDialog.value;
  await getNodes();
}

async function clearNodes() {
  nodes.value = await db.clearNodes();
  router.replace({ name: "init" });
}
</script>
