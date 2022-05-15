<template>
  <div class="w-screen h-screen grid place-items-center">
    <div v-for="node in nodes">
      {{ node }}
      <button @click="runFunc(node)">Do stuff</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createAlgoClient } from "@/api/algo-client";
import { db } from "@/db/database";
import { GoalkeeperNode } from "@/db/types/node";
import { ref } from "vue";

const nodes = ref<GoalkeeperNode[]>([]);

db.getNodes().then((data) => {
  nodes.value = data;
});

async function runFunc(node: GoalkeeperNode) {
  const client = createAlgoClient(node.url, node.token);
  const res = await client.versionsCheck().do();
  console.log(res);
}
</script>
