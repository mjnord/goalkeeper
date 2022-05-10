<template>
  <div class="w-screen h-screen grid place-items-center bg-gray-200">
    <div class="flex flex-col items-center">
      <section class="mb-5">
        <h1>{{ t('title') }}</h1>
        <h2>{{ t('subtitle') }}</h2>
      </section>
      <section class="rounded-md shadow-md bg-white px-6 pt-6 flex flex-col w-4/6 max-w-lg">
        <FormKit id="form" type="form" @submit="addNode" v-model="formData">
          <FormKit type="text" :label="t('name')" name="name" validation="required" validation-visibility="live" />
          <FormKit type="text" :label="t('serverUrl')" name="url" validation="required|url"
            validation-visibility="live">
          </FormKit>
          <FormKit type="text" :label="t('apiToken')" name="token" validation="required" validation-visibility="live" />
          <template #actions>
            <div class="flex justify-between items-center py-2">
              <FormKit type="submit" :classes="{
                'outer': 'm-0'
              }" />
              <ConnectionValidator @click="testConnection" :state="connectionState" />
            </div>
          </template>
        </FormKit>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ConnectionValidator from './components/ConnectionValidator.vue'

import { reactive, ref } from 'vue';
import { Node } from '@/db/types/node';
import { db } from '@/db/database';
import { useRouter } from 'vue-router';
import { useToast } from '@/composables/useToast';
import { useI18n } from 'vue-i18n';
import { messages } from './i18n/messages';
import { isValid } from '@/utils/forms';
import { ConnectionState } from './types/connection-state';
import { createAlgoClient } from '@/api/algo-client';

const router = useRouter();
const toast = useToast();
const { t } = useI18n({ messages });
const connectionState = ref<ConnectionState>("idle")

const formData = reactive({
  url: "",
  apiToken: "",
  name: ""
});

async function testConnection() {
  if (!isValid("form")) {
    return toast(t("invalidForm"), "warn");
  }

  connectionState.value = "loading";
  try {
    const client = createAlgoClient(formData.url, formData.apiToken);
    await client.healthCheck().do();
    connectionState.value = "success";
    toast(t("connectionSuccess"), "success")
  } catch (e) {
    connectionState.value = "error";
    const reason = e instanceof Error ? e.message : e;
    toast(t("testConnectionError", { reason }), "error")
  }
}

async function addNode() {
  const node: Node = {
    dateAdded: new Date().toISOString(),
    id: formData.name,
    name: formData.name,
    token: formData.apiToken,
    url: formData.url
  };
  try {
    const client = createAlgoClient(formData.url, formData.apiToken);
    await client.healthCheck().do();
    await db.setNode(node);
    router.replace({
      name: "landing-page"
    });
  } catch (e) {
    const reason = e instanceof Error ? e.message : e;
    toast(t("addNode", { reason }), "error");
  }
}
</script>