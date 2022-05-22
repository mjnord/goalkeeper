<template>
  <div
    class="p-3 cursor-pointer"
    v-tooltip="t('testConnectionTooltip')"
    @click="$emit('click')"
  >
    <i
      class="pi"
      :class="{
        'pi-sync': state === 'idle',
        'pi-sync pi-spin': state === 'loading',
        'pi-check-circle text-green-600': state === 'success',
        'pi-times text-red-600': state === 'error',
      }"
    >
    </i>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { useI18n } from "vue-i18n";
import { messages } from "../i18n/messages";
import { ConnectionState } from "../types/connection-state";
const { t } = useI18n({
  messages,
});

defineEmits(["click"]);
defineProps({
  state: {
    type: String as PropType<ConnectionState>,
    default: "idle",
  },
});
</script>
