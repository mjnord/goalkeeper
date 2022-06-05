<template>
  <Dialog :auto-z-index="false" :header="t('addNodeTitle')">
    <div class="w-[60vw] max-w-sm">
      <FormKit id="form" type="form" @submit="addNode" v-model="formData">
        <FormKit
          :label="t('name')"
          type="text"
          name="name"
          validation="required"
          validation-visibility="dirty"
        />
        <FormKit
          :label="t('serverUrl')"
          type="url"
          name="url"
          validation="required|url"
          validation-visibility="dirty"
        >
        </FormKit>
        <FormKit
          :label="t('apiToken')"
          type="text"
          name="apiToken"
          validation="required|exactLength:64"
          validation-visibility="dirty"
        />
        <template #actions>
          <div class="flex justify-between items-center py-2">
            <FormKit
              :classes="{
                outer: 'm-0',
              }"
              type="submit"
            />
            <ConnectionValidator
              @click="testConnection"
              :state="connectionState"
            />
          </div>
        </template>
      </FormKit>
    </div>
  </Dialog>
</template>

<script lang="ts" setup>
import ConnectionValidator from "./ConnectionValidator.vue";
import Dialog from "primevue/dialog";

import { reactive, ref } from "vue";
import { GoalkeeperNode } from "@/db/types/node";
import { db } from "@/db/database";
import { useToast } from "@/composables/useToast";
import { useI18n } from "vue-i18n";
import { messages } from "../i18n/messages";
import { isValid } from "@/forms/utils";
import { ConnectionState } from "../types/connection-state";
import { createAlgoClient } from "@/api/algo-client";

const emit = defineEmits(["submit"]);

const toast = useToast();
const { t } = useI18n({ messages });
const connectionState = ref<ConnectionState>("idle");

const formData = reactive({
  url: "",
  apiToken: "",
  name: "",
});

async function pingClient() {
  const client = createAlgoClient(formData.url, formData.apiToken);
  const res = await client.status().do();
  if (res["message"]) {
    throw new Error(res["message"]);
  }
}

async function testConnection() {
  if (!isValid("form")) {
    return toast(t("invalidForm"), "warn");
  }

  connectionState.value = "loading";
  try {
    await pingClient();
    connectionState.value = "success";
    toast(t("connectionSuccess"), "success");
  } catch (e) {
    connectionState.value = "error";
    const reason = e instanceof Error ? e.message : e;
    toast(t("testConnectionError", { reason }), "error");
  }
}

async function addNode() {
  const node: GoalkeeperNode = {
    dateAdded: new Date().toISOString(),
    id: formData.name,
    name: formData.name,
    token: formData.apiToken,
    url: formData.url,
  };
  try {
    await pingClient();
    await db.setNode(node);
    emit("submit");
  } catch (e) {
    const reason = e instanceof Error ? e.message : e;
    toast(t("addNodeErr", { reason }), "error");
  }
}
</script>
